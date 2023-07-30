---
title: Houdini常用几何操作
urlname: ompygag6ztknbc30
author: Jason Ma
date: '2023-06-03 17:05:07'
updated: '2023-07-16 19:01:31'
tags:
  - DCC
categories:
  - TA
  - Houdini
---

## 循环边

在拓扑比较特殊, 无法使用 Edge Loop 时可以使用 Poly Bevel 替代:
![image.png](/images/yuqueAssets/FnaRHUwMTvOZ_5aIGMRLiTQuDw6r.png)![image.png](/images/yuqueAssets/FmfdbsbpFw0QCOxo5U_PyaD1i166.png)

## 修改导入的骨骼名称

有根骨骼名字的面前带"+"导致动画无法导入 ue, 所以要在 houdini 中进行骨骼重命名.

导入 FBX Character 后有 3 个输出
![image.png](/images/yuqueAssets/FqjMZruh2jkL61Je2Uh_0oNh52nz.png)
查看左侧 Rest Geometry 可见蒙皮数据是以骨骼名称和权重保存的
![image.png](/images/yuqueAssets/Fse1WeGQb9-oQxVffIW6EH-wZDeV.png)
查看中和右侧的骨骼可见骨骼的位置以 point position 保存, 旋转以旋转矩阵保存, 还会保存骨骼名称和骨骼结构
![image.png](/images/yuqueAssets/Fh9tzkpuHZiiGG5tWCzbQwJtH447.png)
![image.png](/images/yuqueAssets/Fh6bopVsseVxwsCuGK3GS0eF4Yux.png)
结论是只要删除 string 属性中的"+"即可, 这就是 houdini 神奇的地方, 只要能查表改表什么几何操作都可以做
![image.png](/images/yuqueAssets/FglRgzG5gIfk5flyXacMjk79rUnW.png)
替换蒙皮中的骨骼名
![image.png](/images/yuqueAssets/FoUv3KnIlVoFdu52CJKtYSIcfX3y.png)![image.png](/images/yuqueAssets/FgkfQjEQzg1MiE3ambM6f081sVTm.png)
使用正则表达式替换骨骼中的名字
![image.png](/images/yuqueAssets/FsvGRID1loh6H_L12Oy3ydv-6HNY.png)
![image.png](/images/yuqueAssets/FgHDk1zFvSIo3v9CKITjmymvrVUs.png)
