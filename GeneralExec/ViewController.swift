//
//  ViewController.swift
//  GeneralExec
//
//  Created by kimi on 2023/2/25.
//

import Cocoa
/**
 GCD:https://www.jianshu.com/p/0ecfb0d0bc2b

 dock不显示当前程序:
                info.plist添加:
                             <key>LSUIElement</key>
                             <true/>
 
 Swift、OC语言中多target在代码中如何区分: https://tool.4xseo.com/article/106387.html

 */
class ViewController: NSViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        OpenURL.shared.isOpen = false

        //延迟加载，防止AppDelegate.applicationDidFinishLaunching方法还未执行完毕就执行task任务
        delayLoad()
        
    }

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }
    
    override func loadView() {
        super.loadView()
        let view = NSView()
        view.frame = CGRect(x: 0, y: 0, width: 0, height: 0)
        self.view = view
    }

    
    /** 延迟加载 */
    private func delayLoad(){
        DispatchQueue.global().asyncAfter(deadline: .now()+0.1){ [unowned self] in
            if AppDelegate.didFinishLaunching {
                self.runTask()
            }else{
                delayLoad()
            }
        }
    }

    func runTask(){
        log("runTask.........")
        
#if FFPlay
        if OpenURL.shared.isOpen == false{
            FFPlay.shared.play()
            //FFPlay.shared.test()
        }else{
            ExecTask.shared.conditionExit()
        }
#elseif BootTask
        BootTask.shared.start()
#elseif ProperTree
        if OpenURL.shared.isOpen == false{
            ProperTree.shared.start()
        }else{
            ExecTask.shared.conditionExit()
        }
        
//        ProperTree.shared.test()
#elseif ProxyeeDown
        ProxyeeDown.shared.start()
#else
        log("『GeneralExec』Target ViewController.....")
#endif
        //Test
        
 
    }

}

