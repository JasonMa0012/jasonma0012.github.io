---
title: UE解决Installed Build包体过大
urlname: ai6iq9ebtbpfqnzd
date: '2023-03-30 17:17:57'
updated: '2025-04-15 23:51:56'
author: Jason Ma
cover: 'https://cdn.nlark.com/yuque/0/2023/png/504873/1680167939367-719d4322-e450-4ca1-b0bc-d1c0d226db05.png'
description: '---tags: - Workflow---前提需要从源码打包UE给其他用户使用, 结果打出的包过大.过程尝试使用官方的UAT脚本打包:Engine\Build\BatchFiles\RunUAT.bat BuildGraph -target="Make Installed Build Win...'
tags:
  - Workflow
---
# 前提
需要从源码打包UE给其他用户使用, 结果打出的包过大.

# 过程
尝试使用[官方](https://docs.unrealengine.com/5.1/en-US/using-an-installed-build-of-unreal-engine/)的UAT脚本打包:



```jsx
Engine\Build\BatchFiles\RunUAT.bat BuildGraph -target="Make Installed Build Win64" -script=Engine/Build/InstalledEngineBuild.xml -set:WithMac=false -set:WithMacArm64=false -set:WithAndroid=false -set:WithIOS=false -set:WithTVOS=false -set:WithLinux=false -set:WithLinuxArm64=false -set:WithHTML5=false -set:WithSwitch=false -WithDDC=false -set:WithWin32=false -set:WithLumin=false -set:WithPS4=false -set:WithXboxOne=false -set:WithHoloLens=false -set:GameConfigurations=Shipping
```

# 结果
包体90GB, 远超官方的30+GB:

![](/images/yuqueAssets/7ca1866e7764bc6601bced6f3c317d39.png)

并且多了很多二进制:

![](/images/yuqueAssets/5cb1bbce2962e57ddc0a937b86c98b20.png)

# 解决方案
## 新建脚本删除所有pdb文件
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



## 修改InstalledEngineFilters.xml过滤所有pdb文件
修改Engine/Build/InstalledEngineFilters.xml文件:

```xml
...
<Property Name="CopyEditorExceptions">

  <!-- 新增下面这行即可过滤掉所有.pdb -->
  ....pdb

  ...
```



删除后包体大小降到了30G以内, 比官方的还小.



## 注意事项
注意, 删除pdb后引擎将不带调试信息, 也不能打包C++游戏, 但十分适合分发给美术使用.

