//
//  Plist.swift
//  FFPlay
//
//  Created by kimi on 2023/2/24.
//

import Cocoa
import CoreFoundation

class Plist: NSObject {
    private var plist:NSDictionary
    
    var isBash:Bool{
        plist["isBash"] as! Bool
    }
    var isUseArgs:Bool{
        plist["isUseArgs"] as! Bool
    }
    var isUseExecPath:Bool{
        plist["isUseExecPath"] as! Bool
    }
    var isUseList:Bool{
        plist["isUseList"] as! Bool
    }
    var isLogs:Bool{
        plist["isLogs"] as! Bool
    }
    var isPipe:Bool{
        plist["isPipe"] as! Bool
    }
    /** 对应任务是否可以支持多线程异步执行 */
    var isAsync:Bool{
        plist["isAsync"] as! Bool
    }
    
    var execPath:String{
        plist["execPath"] as! String
    }
    var logPath:String{
        if let path = plist["logPath"] as? String, !path.isEmpty && path.hasPrefix("/") {
            return path
        }
        return "/tmp/GeneralExec-\(Plist.bundleName).log"
    }
    var args:[String]{
        plist["args"] as! [String]
    }
    var list:[String]{
        plist["list"] as! [String]
    }
    
    init(name:String){
        let path = Bundle.main.path(forResource: name, ofType: "plist", inDirectory: "libs/plist")
        let plist = NSDictionary(contentsOfFile: path!)
        self.plist = plist!
    }
    
    func info(){
        print("execPath:\(execPath)")
        print("args:\(args)")
        print("list:\(list)")
    }
    
    //MARK: - 检测Task运行时是否为C模式
    var running_mode_c:Bool{
        var mode = true
        if !isBash && isUseExecPath && !execPath.isEmpty{
            mode = false
        }
        return mode
    }
}


extension Plist{
    /** 默认 */
    static let `default`:Plist = {
        let instance = Plist(name: "Default")
        return instance
    }()
    
    /** FFPlay */
    static let ffplay:Plist = {
        var instance = Plist(name: "FFPlay")
        return instance
    }()
    
    /** BootTask */
    static let bootTask:Plist = {
        let instance = Plist(name: "BootTask")
//        instance.isAsync = false
        return instance
    }()
    
    /** ProperTree */
    static let propertree:Plist = {
        let instance = Plist(name: "ProperTree")
        return instance
    }()
    
    /** ProxyeeDown */
    static let proxyeeDown:Plist = {
        let instance = Plist(name: "ProxyeeDown")
        return instance
    }()
}

extension Plist{
    /**
     更具不同的Target获取对应的默认Plist实例。
     */
    static var targetPlist:Plist{
#if FFPlay
        ffplay
#elseif BootTask
        bootTask
#elseif ProperTree
        propertree
#elseif ProxyeeDown
        proxyeeDown
#else
        `default`
#endif
    }
}

extension Plist{
    
    /** App程序名称 */
    static var  executableName:String{
        if let executable = Bundle.main.infoDictionary?["CFBundleExecutable"] as? String{
            return executable
        }
        return "GeneralExec"
    }
    
    /** CFBundleName */
    static var  bundleName:String{
        if let executable = Bundle.main.infoDictionary?["CFBundleName"] as? String{
            return executable
        }
        return "GeneralExec"
    }
    
}



//MARK: - 获取APP内置程序的地址，注意路径中含有空格的处理方式
extension Plist{
    
    /**ProperTree Bin Path */
    static var properTreeBin:String{
        if let path = Bundle.main.path(forResource: "ProperTree", ofType: "command", inDirectory: "libs/bin/ProperTree/Core"){
            return "'\(path)'"
        }
        return "libs/bin/ProperTree/ProperTree.command/文件不存在"
    }
    
    /**ProxyeeDown Bin Path */
    static var proxyeeDownBin:String{
        if let path = Bundle.main.path(forResource: "proxyee-down-main", ofType: "jar", inDirectory: "libs/bin/ProxyeeDown/Core"){
            return "'\(path)'"
        }
        return "libs/bin/ProxyeeDown/proxyee-down-main.jar/文件不存在"
    }
}
