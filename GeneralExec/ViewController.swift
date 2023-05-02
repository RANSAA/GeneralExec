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
        log("viewDidLoad")

        // Do any additional setup after loading the view.
        DispatchQueue.global().asyncAfter(deadline: .now()+0.5){
            self.runTask()
        }
        
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


    func runTask(){
        log("runTask")
        
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
#elseif ProxyeeDown
        ProxyeeDown.shared.start()
#else
        log("『GeneralExec』Target ViewController.....")
#endif
        //Test
        
 
    }

}

