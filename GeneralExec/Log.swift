//
//  Log.swift
//  GeneralExec
//
//  Created by kimi on 2023/2/25.
//

import Foundation

private var logPath:String{
    Plist.targetPlist.logPath
}
private var isLog:Bool{
    Plist.targetPlist.isLogs
}


private func checkLogFile(){
    if !FileManager.default.fileExists(atPath: logPath){
        FileManager.default.createFile(atPath: logPath, contents: nil)
    }
}

public func log(_ msg:String?){
    if let data = msg?.data(using: .utf8) as? Data{
        print(msg!)
        if isLog{
            log(write: data)
        }
    }
}

public func log(_ data:Data?){
    if let data = data{
        print(data)
        if isLog{
            log(write: data)
        }
    }
}

private let fileHandle = FileHandle(forWritingAtPath: logPath)
//private let lock = NSLock()
private let semaphare = DispatchSemaphore(value: 1)
private func log(write data:Data){
//    if lock.try(){
//        lock.lock()
//    }
//    defer{
//        lock.unlock()
//    }
    //日志写入加锁，因为有一定几率出现乱码问题
    semaphare.wait()
    defer{
        semaphare.signal()
    }
    
    
    checkLogFile()
    let handle = fileHandle
//    _ = try? handle?.seekToEnd()
    handle?.seekToEndOfFile()
    handle?.write(data)
//    _ = try? handle?.seekToEnd()
    handle?.seekToEndOfFile()
    handle?.write("\n".data(using: .utf8)!)
}



/**
 模拟:@synchronized(self){}
 使用方法:
     synchronized(self){}
 */
public func synchronized<T>(_ lock: AnyObject, _ body: () throws -> T) rethrows -> T {
    objc_sync_enter(lock)
    defer { objc_sync_exit(lock) }
    return try body()
}
