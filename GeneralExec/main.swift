//
//  main.swift
//  GeneralExec
//
//  Created by kimi on 2023/2/25.
//

import Foundation
import Cocoa



func main(){
    print("Log日志路径: \(Plist.targetPlist.logPath)")
    let msg = "\(Plist.bundleName):----------------start:\(Date.nowString)-------------------"
    log(msg)
    log("App Name:\(Plist.executableName)")
    
//    info()
//    Plist.shared.info()
    
    openURL()
    _ = NSApplicationMain(CommandLine.argc, CommandLine.unsafeArgv)
}
main()

private func info(){
    let info = ProcessInfo()
    log("info:\(info.arguments)")
    log("arguments:\(CommandLine.arguments)")
    log("argc:\(CommandLine.argc)")
}


private func openURL(){
    if CommandLine.arguments.count > 1 {
        let tmpLast = CommandLine.arguments.last!
        let last = CommandLine.arguments.last!.lowercased();
        var urls:[URL] = []
        for item in OpenURL.shared.meth1{
            if last.hasPrefix(item){
                urls.append(URL(string: tmpLast)!)
                break
            }
        }
        for item in OpenURL.shared.meth2{
            if last.hasPrefix(item){
                urls.append(URL(fileURLWithPath: tmpLast))
                break
            }
        }
        if urls.count > 0{
            log("init main urls:")
            OpenURL.shared.isOpen = false
            OpenURL.shared.urls = urls
        }
    }
    
}
