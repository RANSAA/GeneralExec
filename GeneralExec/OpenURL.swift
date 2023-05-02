//
//  OpenURL.swift
//  GeneralExec
//
//  Created by kimi on 2023/2/25.
//

import Cocoa
/**
 用于接收App打开的url相关资源管理
 */
class OpenURL: NSObject {
    static let shared:OpenURL = {
        let obj = OpenURL()
        return obj
    }()
    
    var isOpen = true
    
    private var _urls:[URL] = []
    private var _urlsdec:[URL] = []
    var urlsdec:[URL]{
        return _urlsdec
    }
    var urls:[URL]{
        set{
            print("urls original:\(newValue)")
            _urls = newValue
            //解码url
            _urlsdec = newValue.map({ item in
                let tmpStr = "\(item)"
                for meth in self.meth1{
                    if tmpStr.lowercased().hasPrefix(meth){
                        let reStr:String = tmpStr.removingPercentEncoding!
                        if let resURL = URL(string: reStr){
                            return resURL
                        }else{
                            log("URL.string方式创建失败，使用fileURLWithPath方式创建URL")
                            if tmpStr.lowercased() == "file://" {
                                let s:String = String(reStr["file://".endIndex...])
                                return URL(fileURLWithPath: s)
                            }
                        }
                        return item
                    }
                }
                return item
            })
            print("urls decoder :\(_urlsdec)")
        }
        get{_urls}
    }
 
    
}
extension OpenURL{
    
    /** 获取第一个url */
    var firstURL:URL?{
        _urls.first
    }
    
    /** 获取第一个url 已解码 */
    var firstURLDec:URL?{
        _urlsdec.first
    }
    
    /** 获取第一个url.path */
    var firstPath:String?{
        guard let path = _urls.first?.path else { return nil }
        if Plist.targetPlist.running_mode_c{
            //为含有空格的路径添加引号
            return "'\(path)\'"
        }else{
            return path
        }
    }
    
    /** 获取第一个url.path 已解码*/
    var firstPathDec:String?{
        guard let path = firstPath else {
            return nil
        }
        return path.removingPercentEncoding
    }
    
    /** 获取第一个url的string */
    var firstString:String?{
        if let str = _urls.first{
            if Plist.targetPlist.running_mode_c{
                //为含有空格的路径添加引号
                return "\'\(str)'"
            }else{
                return "\(str)"
            }
        }
        return nil
    }
    
    /** 获取第一个url的string 已解码 */
    var firstStringDec:String?{
        guard let str = firstString else{
            return nil
        }
        let reStr = str.removingPercentEncoding
        return reStr
    }
    
}

extension OpenURL{
    
    var meth1:[String]{
        ["file://","https://","http://","udp://","rtmp://","rtsp://","hls://"]
    }
    
    var meth2:[String]{
        ["/"]
    }
}
