---
title: UE解决Installed Build包体过大
urlname: ai6iq9ebtbpfqnzd
date: "2023-03-30 09:17:57"
updated: "2023-10-15 14:41:12"
author: Jason Ma
tags:
  - Workflow
---

# 前提

需要从源码打包 UE 给其他用户使用, 结果打出的包过大.

# 过程

尝试使用[官方](https://docs.unrealengine.com/5.1/en-US/using-an-installed-build-of-unreal-engine/)的 UAT 脚本打包:

```jsx
Engine\Build\BatchFiles\RunUAT.bat BuildGraph -target="Make Installed Build Win64" -script=Engine/Build/InstalledEngineBuild.xml -set:WithMac=false -set:WithMacArm64=false -set:WithAndroid=false -set:WithIOS=false -set:WithTVOS=false -set:WithLinux=false -set:WithLinuxArm64=false -set:WithHTML5=false -set:WithSwitch=false -WithDDC=false -set:WithWin32=false -set:WithLumin=false -set:WithPS4=false -set:WithXboxOne=false -set:WithHoloLens=false -set:GameConfigurations=Shipping
```

# 结果

包体 90GB, 远超官方的 30+GB:
![image.png](/images/yuqueAssets/Fm7SXEBMWrK-x637oztz4akSAutL.png)
并且多了很多二进制:
![2CYT})$V6AQANSGI4%WA8U7.png](/images/yuqueAssets/lqGlqOf8DL2zatQwGC3WDi852T9J.png)

## 解决方案

需要再写个`bat`脚本删除所有`.pdb`文件:

```jsx
@echo off
setlocal enabledelayedexpansion

set target_directory=LocalBuilds

for /r "%target_directory%" %%f in (*.pdb) do (
    echo Deleting "%%f"
    del "%%f"
)

echo All .pdb files in "%target_directory%" have been deleted.

endlocal
```

删除后包体大小降到了 30G 以内, 比官方的还小.
注意, 引擎将不带调试信息, 也不能打包 C++游戏, 但十分适合分发给美术使用.
