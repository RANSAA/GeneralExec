//
//  FFPlay.swift
//  FFPlay
//
//  Created by kimi on 2023/2/24.
//

import Cocoa

class FFPlay: NSObject {
    static let shared:FFPlay = {
        let instance = FFPlay()
        return instance
    }()
    
    func play(){
        DispatchQueue.global().async {
            if let fileurl = OpenURL.shared.firstStringDec{
                ExecTask.shared.execTask(Plist.ffplay, [fileurl])
            }else{
                log("FFPlay播放失败：url路径不存在!!!!")
                ExecTask.shared.conditionExit()
            }
        }
    }
    
    func test(){
        log("FFPlay test.....")
        DispatchQueue.global().async {
            var path = "/Users/kimi/Desktop/123.ts"
            path = "file:///Users/kimi/Desktop/Adult Time _ Nervous Student Pipes His Professor's Wife Natasha Nice For Annual Anniversar... _ Beeg.ts"
            ExecTask.shared.execTask(Plist.ffplay, [path])
        }
    }
}

