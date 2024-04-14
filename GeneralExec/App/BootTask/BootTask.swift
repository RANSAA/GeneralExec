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
        // 获取当前时间
        let currentTime = DispatchTime.now()
        // 将持续时间添加到当前时间
        let futureTime = currentTime + DispatchTimeInterval.seconds(Plist.bootTask.taskDelay)
        
        log("准备执行Task任务 -> date:\(Date.nowString)")
        DispatchQueue.global().asyncAfter(deadline: futureTime ) { [unowned self] in
            log("开始执行Task任务 -> date:\(Date.nowString)")
            
            self.runTask()
        }
        
    }
    
    private func runTask(){
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
