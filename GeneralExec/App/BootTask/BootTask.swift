//
//  BootTask.swift
//  GeneralExec
//
//  Created by kimi on 2023/2/25.
//

import Cocoa
/**
 
 */
class BootTask: NSObject {
    static let shared:BootTask = {
        let instance = BootTask()
        return instance
    }()
    
    func start(){
        //并发执行list任务
        if Plist.targetPlist.isAsync {
            for arg in Plist.bootTask.list{
                DispatchQueue.global().async {
                    ExecTask.shared.execTask(Plist.bootTask, [arg])
                }
            }
        }else {
            // 按顺序执行list中的任务
            for arg in Plist.bootTask.list{
                ExecTask.shared.execTask(Plist.bootTask, [arg])
            }
            ExecTask.shared.conditionExit()
        }
    }
    
}
