//
//  ExecTask.swift
//  FFPlay
//
//  Created by kimi on 2023/2/24.
//

import Foundation
/**
 利用Process(OC NSTask)执行程序
 PS:该项目更具有通用性
 */

class ExecTask{
    static let shared:ExecTask = {
        let instance = ExecTask()
        return instance
    }()
    /** Task count */
    public var count:Int = 0
}

extension ExecTask{
    
    /**
     plist:不同任务对应的Plist配置
     customArgs:额外定制的参数
     isBefore: 是否将自定义的args参数放在task.plist中args参数之前
     */
    func execTask(_ plist:Plist, _ customArgs:[String]?, _ isBefore:Bool = true){
        count += 1
        let task:Process = Process()
        var arguments:[String] = []
        
        var argc = customArgs == nil ? [] : customArgs!
        if plist.isUseArgs{
            if isBefore{
                argc += plist.args;
            }else{
                argc = plist.args + argc
            }
        }
        
        //Task执行方式
        if plist.running_mode_c{
            task.executableURL = URL(fileURLWithPath: "/bin/bash")
            arguments.append("-c")
            if plist.isUseExecPath && !plist.execPath.isEmpty{
                var execPath:String = plist.execPath
                if !execPath.hasPrefix("'") && !execPath.hasPrefix("\""){
                    execPath = "'\(execPath)'"
                }
                argc.insert(execPath, at: 0)
            }
            arguments.append(argc.joined(separator: " "))
        }else{
            task.executableURL = URL(fileURLWithPath: plist.execPath)
            arguments = argc
        }
        
        task.arguments = arguments
        log("Task arguments:\(arguments)")
        
        //开启输出重定向
        if Plist.targetPlist.isPipe{
            pipe(task)
        }
        
        //开始Task
        if plist.running_mode_c{
            task.launch()
        }else{
            do {
                try task.run()
            } catch  {
                log("Task Error:\(error)")
            }
        }
        
        //等待任务执行完毕
        task.waitUntilExit()
        count -= 1

        //条件退出APP，顺序执行的终端任务时，需要在所有任务执行完毕后，手动执行退出操作。
        if plist.isAsync {
            conditionExit()
        }
    }
    
    
    /**
     条件退出：如果没有还在执行的exec任务，就退出APP。
     PS:这儿做一个延迟退出，因为viewDidLoad方法最先走，可能会出现open方法还没走，viewDidLoad方法已经执行完毕
     */
    func conditionExit(){
        DispatchQueue.global().asyncAfter(deadline: .now()+3){
            if self.count < 1{
                var msg = "exec任务执行完毕，退出程序！\n"
                msg  += "\(Plist.bundleName):----------------exit:\(Date())-------------------\n\n\n"
                log(msg)
                exit(0)
            }
        }
    }
  
  
}


extension ExecTask{
    
    private func pipe(_ task:Process){
//MARK: - 直接等待获取执行输出
//        let outputPipe = Pipe()
//        let errorPipe = Pipe()
//        task.standardOutput = outputPipe
//        task.standardError = errorPipe
//
//        let outputData = outputPipe.fileHandleForReading.readDataToEndOfFile()
//        let errorData = errorPipe.fileHandleForReading.readDataToEndOfFile()
//
//        let output = String(decoding: outputData, as: UTF8.self)
//        let error = String(decoding: errorData, as: UTF8.self)
//        print("output:\(output)")
//        print("error:\(error)")
        
        
 
//MARK: - 直接重定向到Pipe  方式一 (实时更新)
        let pipe = Pipe()
        /**
         注意：这设置Pipe与OC中有区别:
         OC中直接设置standardOutput=pipe
         swift中应该设置为：standardOutput=pipe.fileHandleForWriting
         */
        task.standardError = pipe.fileHandleForWriting
        task.standardOutput = pipe.fileHandleForWriting
        
        pipe.fileHandleForReading.waitForDataInBackgroundAndNotify()
        NotificationCenter.default.addObserver(forName:.NSFileHandleDataAvailable, object:pipe.fileHandleForReading , queue: nil) { note in
            let data = pipe.fileHandleForReading.availableData
            if !data.isEmpty{
                log(data)
            }
            //6. 继续等待新数据和通知
            pipe.fileHandleForReading.waitForDataInBackgroundAndNotify()
        }
        
        
//MARK: - 直接重定向到FileHandle成功  方式二 （实时更新）
//        let path = "/Users/kimi/Desktop/pipe.txt"
//        FileManager.default.createFile(atPath: path, contents: nil)
//        let fileHandle = FileHandle(forWritingAtPath: path)!
//        task.standardError = fileHandle
//        task.standardOutput = fileHandle
//        fileHandle.waitForDataInBackgroundAndNotify()
//        NotificationCenter.default.addObserver(forName:.NSFileHandleDataAvailable, object:fileHandle , queue: nil) { note in
//            let data = fileHandle.availableData
//            if !data.isEmpty{
//                print("availableData:\(data)")
//            }
//            //6. 继续等待新数据和通知
//            fileHandle.waitForDataInBackgroundAndNotify()
//        }
    }
    
}

