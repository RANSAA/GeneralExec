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
        if let fileurl = OpenURL.shared.firstPathDec{
            ExecTask.shared.execTask(Plist.propertree, [Plist.properTreeBin,fileurl])
        }else{
            log("ProperTree打开失败：url路径不存在!!!!")
            ExecTask.shared.conditionExit()
        }
    }
    
    func test(){
        log("ProperTree test.....")
        DispatchQueue.global().async {
            let path = "/Users/kimi/Desktop/123.plist"
            ExecTask.shared.execTask(Plist.propertree, [Plist.properTreeBin,path])
        }
    }
}
