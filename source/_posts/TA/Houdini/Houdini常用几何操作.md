---
title: Houdini常用几何操作
urlname: ompygag6ztknbc30
date: '2023-06-03 17:05:07'
updated: '2025-04-15 23:53:32'
author: Jason Ma
tags:
  - DCC
categories:
  - TA
  - Houdini
---
## 循环边
在拓扑比较特殊, 无法使用Edge Loop时可以使用Poly Bevel替代:

![](/images/yuqueAssets/174a4089f812f52e6af8649a2073519b.png)![](/images/yuqueAssets/ca8f5aa5e9fb80bb022cc80f0f614eb5.png)



## 修改导入的骨骼名称
有根骨骼名字的面前带"+"导致动画无法导入ue, 所以要在houdini中进行骨骼重命名.



导入FBX Character后有3个输出

![](/images/yuqueAssets/16b11a78cf01270a32d89646cd5adb4b.png)

查看左侧Rest Geometry可见蒙皮数据是以骨骼名称和权重保存的

![](/images/yuqueAssets/c827363c52ccb2c4ab64c74713c1a131.png)

查看中和右侧的骨骼可见骨骼的位置以point position保存, 旋转以旋转矩阵保存, 还会保存骨骼名称和骨骼结构

![](/images/yuqueAssets/2ac842fa27d352fa1d9ab53fd7cfc242.png)

![](/images/yuqueAssets/d7495a0d0ee42c1116cd702b71f21b85.png)

结论是只要删除string属性中的"+"即可, 这就是houdini神奇的地方, 只要能查表改表什么几何操作都可以做

![](/images/yuqueAssets/5182eb42001c20dc243b3814a0a40604.png)

替换蒙皮中的骨骼名

![](/images/yuqueAssets/2e6b7533ce56dd1da290ff1462a28d22.png)![](/images/yuqueAssets/09dbe37b87d52c238839d8729de8565a.png)

使用正则表达式替换骨骼中的名字

![](/images/yuqueAssets/82e23117732e933d87c1c915a941f1fb.png)

![](/images/yuqueAssets/ee4914524d2c7ba384c548fdbb53d5fa.png)

