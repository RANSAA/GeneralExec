//
//  ProxyeeDown.swift
//  GeneralExec
//
//  Created by kimi on 2023/2/26.
//

import Cocoa

class ProxyeeDown: NSObject {
    static let shared:ProxyeeDown = {
        let instance = ProxyeeDown()
        return instance
    }()
    
    func start(){
        ExecTask.shared.execTask(Plist.proxyeeDown, [Plist.proxyeeDownBin],false)
    }
}
