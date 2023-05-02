# GeneralExec
## 简介：
该项目主要是通过swift调用终端，脚本，程序。\
该程序是一个通用模板，需要其它要求直接创建新的Target即可。

## 支持:
1. BootTask:执行普通的shell命令 -> 对应只想的BootTask项目
2. FFPlay： 调用FFPlay播放器
3. ProperTree: Python plist 编辑器
4. ProxyeeDown: java下载器


## 修改：
上面的Target默认关闭了视图，具体设置到ViewController.swift文件查看。


## shell
注意再通过Task执行shell命令式要注意环境变量，\
比如同一条命令直接通过bash执行和将它放在\
.sh脚本中执行的效果是不一样的，再.sh中执行时写入环境变量的数据只能在该shell脚本中生效。\
.sh脚本执行完毕之后立即退出当前环境，这点是要注意的。

## 切换
如果想添加其它的命令可直接修改对应task.plist文件中的字段即可。

## root用户密码输入示例
1 .
```
sudo -S sntp -sS 182.92.12.11 << EOF
123
EOF
```
2. 
```
echo "123" | sudo -S sntp -sS 182.92.12.11
```
其中“123”是root用户密码
