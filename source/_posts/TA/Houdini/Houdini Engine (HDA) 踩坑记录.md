---
title: Houdini Engine (HDA) 踩坑记录
urlname: gd0abdb7eapbztdn
date: '2023-09-11 16:59:02'
updated: '2025-04-15 23:52:53'
author: Jason Ma
tags:
  - DCC
categories:
  - TA
  - Houdini
---
## Maya HDA 无法修改法线
Houdini 18.0, Maya 2018

问题: Maya内通过Houdini Engine加载的HDA无法修改模型法线

原因: Maya模型法线必须锁定法线后才能修改

![](/images/yuqueAssets/e3eecbd3ffbf91a94bd0ee7cfdfddb65.png)

解决方案: HDA结尾加一个`maya_locked_normal`属性, 设置如图:

![](/images/yuqueAssets/97b1bbb84f52b12565026aa6aecd8bf4.png)



