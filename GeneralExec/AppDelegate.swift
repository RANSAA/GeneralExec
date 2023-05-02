//
//  AppDelegate.swift
//  GeneralExec
//
//  Created by kimi on 2023/2/25.
//

import Cocoa

//@main
class AppDelegate: NSObject, NSApplicationDelegate {

    


    func applicationDidFinishLaunching(_ aNotification: Notification) {
        // Insert code here to initialize your application
        log("applicationDidFinishLaunching")
        
        
    }

    func applicationWillTerminate(_ aNotification: Notification) {
        // Insert code here to tear down your application
    }
    

    func applicationSupportsSecureRestorableState(_ app: NSApplication) -> Bool {
        return true
    }

    func application(_ application: NSApplication, open urls: [URL]) {
        log("application urls....")
        log("urls:\(urls)")
        OpenURL.shared.isOpen = true
        OpenURL.shared.urls = urls
        execTask()
    }

    
    func execTask(){
#if FFPlay
        FFPlay.shared.play()
#elseif ProperTree
        ProperTree.shared.start()
#else
        log("Other Target 执行")
#endif
    }
    
}

