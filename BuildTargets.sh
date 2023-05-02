#!/usr/bin/env bash 

#切换进入当前目录
path=$0
first=${path:0:1}
if [[ $first == "/" ]]; then
	path=${path%/*}
	cd "${path}"
fi
clear



## 计算任务执行总时间
startCalculationTime(){
	echo 开始执行任务...... 
	echo "当前路径:$(pwd)"
	start_time=$(date +%s)
}
endCalculationTime(){
	end_time=$(date +%s)
	cost_time=$[$end_time - start_time]
	# cost_time=$((cost_time -1))
	echo
	echo
	echo "任务执行完毕，总共耗时：$(($cost_time)) s"
}
startCalculationTime



echo "开始构建:ProperTree"
xcodebuild -project GeneralExec.xcodeproj -target ProperTree 


echo "开始构建:FFPlay"
xcodebuild -project GeneralExec.xcodeproj -target FFPlay 


echo "开始构建:BootTask"
xcodebuild -project GeneralExec.xcodeproj -target BootTask 

echo "开始构建:ProxyeeDown"
xcodebuild -project GeneralExec.xcodeproj -target ProxyeeDown 




buildPath="$(pwd)/build/Release"
output="$HOME/Desktop/GeneralExec-$(date)/"
# output="$HOME/Desktop/GeneralExec--App"

mkdir -p "$output"
cp -rf "${buildPath}/BootTask.app" "$output"
cp -rf "${buildPath}/FFPlay.app" "$output"
cp -rf "${buildPath}/ProperTree.app" "$output"
cp -rf "${buildPath}/ProxyeeDown.app" "$output"



#移出BootTask中多余的资源文件
rm -rf "${output}/BootTask.app/Contents/Resources/libs/bin"
rm -rf "${output}/BootTask.app/Contents/Resources/libs/plist/FFPlay.plist"
rm -rf "${output}/BootTask.app/Contents/Resources/libs/plist/ProperTree.plist"
rm -rf "${output}/BootTask.app/Contents/Resources/libs/plist/ProxyeeDown.plist"
rm -rf "${output}/BootTask.app/Contents/Resources/libs/plist/Default.plist"


#移出FFPlay中多余的资源文件
rm -rf "${output}/FFPlay.app/Contents/Resources/libs/bin"
rm -rf "${output}/FFPlay.app/Contents/Resources/libs/plist/BootTask.plist"
rm -rf "${output}/FFPlay.app/Contents/Resources/libs/plist/ProperTree.plist"
rm -rf "${output}/FFPlay.app/Contents/Resources/libs/plist/ProxyeeDown.plist"
rm -rf "${output}/FFPlay.app/Contents/Resources/libs/plist/Default.plist"


#移出ProperTree中多余的资源文件
rm -rf "${output}/ProperTree.app/Contents/Resources/libs/bin/ProxyeeDown"
rm -rf "${output}/ProperTree.app/Contents/Resources/libs/plist/FFPlay.plist"
rm -rf "${output}/ProperTree.app/Contents/Resources/libs/plist/BootTask.plist"
rm -rf "${output}/ProperTree.app/Contents/Resources/libs/plist/ProxyeeDown.plist"
rm -rf "${output}/ProperTree.app/Contents/Resources/libs/plist/Default.plist"


#移出ProxyeeDown中多余的资源文件
rm -rf "${output}/ProxyeeDown.app/Contents/Resources/libs/bin/ProperTree"
rm -rf "${output}/ProxyeeDown.app/Contents/Resources/libs/plist/FFPlay.plist"
rm -rf "${output}/ProxyeeDown.app/Contents/Resources/libs/plist/BootTask.plist"
rm -rf "${output}/ProxyeeDown.app/Contents/Resources/libs/plist/ProperTree.plist"
rm -rf "${output}/ProxyeeDown.app/Contents/Resources/libs/plist/Default.plist"


#删除构建缓存
rm -rf "$(pwd)/build"

echo "GeneralExec Targets 构建完毕....."
open "${output}"


endCalculationTime
