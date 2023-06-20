//
//  ProperTree.swift
//  GeneralExec
//
//  Created by kimi on 2023/2/25.
//

import Cocoa

class ProperTree: NSObject {
    static let shared:ProperTree = {
        let instance = ProperTree()
        return instance
    }()
    

    
    func start(){
        DispatchQueue.global().async {
            //每执行一个任务就退出程序，实现多开效果。
            self.execEnd()

            
            if OpenURL.shared.isOpen == true {
                if let fileurl = OpenURL.shared.firstPathDec{
                    ExecTask.shared.execTask(Plist.propertree, [Plist.properTreeBin,fileurl])
                }else{
                    log("ProperTree打开失败：url路径不存在!!!!")
                    ExecTask.shared.conditionExit()
                }
            }else{
                ExecTask.shared.execTask(Plist.propertree, [Plist.properTreeBin])
            }
            
        }


    }
    
    func test(){
        log("ProperTree test.....")
        DispatchQueue.global().async {
            let path = "/Users/kimi/Desktop/raw.kgithub.com_sqlsec_AsRock-Z690-Steel-Legend-i5-13600K_main_EFI_OC_config.plist"
            ExecTask.shared.execTask(Plist.propertree, [Plist.properTreeBin,path])
        }
    }
    
    func execEnd(){
        DispatchQueue.global().asyncAfter(deadline: .now()+2){
            log("exit退出程序！")
            exit(0)
        }
    }
}
