---
title: Houdini Engine (HDA) 踩坑记录
urlname: gd0abdb7eapbztdn
date: "2023-09-11 08:59:02"
updated: "2023-09-11 09:00:36"
author: Jason Ma
tags:
  - DCC
---

## Maya HDA 无法修改法线

Houdini 18.0, Maya 2018
问题: Maya 内通过 Houdini Engine 加载的 HDA 无法修改模型法线
原因: Maya 模型法线必须锁定法线后才能修改
![image.png](/images/yuqueAssets/Fq97ul1lne-awq8u_4Csqh5-StDR.png)
解决方案: HDA 结尾加一个`maya_locked_normal`属性, 设置如图:
![企业微信截图_16944216285792.png](/images/yuqueAssets/Fj0_OHhaNuX8L0J7s82mZM-VyGdg.png)
