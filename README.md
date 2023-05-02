# GeneralExec
### 简介：
该项目主要是通过swift调用终端，脚本，程序。\
该程序是一个通用模板，需要其它要求直接创建新的Target即可。

### 支持:
1. BootTask:执行普通的shell命令
2. FFPlay： 调用FFPlay播放器
3. ProperTree: Python plist 编辑器
4. ProxyeeDown: java下载器

### shell
注意再通过Task执行shell命令式要注意环境变量，\
比如同一条命令直接通过bash执行和将它放在\
.sh脚本中执行的效果是不一样的，再.sh中执行时写入环境变量的数据只能在该shell脚本中生效。\
.sh脚本执行完毕之后立即退出当前环境，这点是要注意的。

### 注意：
上面的Target默认关闭了视图，具体设置到ViewController.swift文件查看。
