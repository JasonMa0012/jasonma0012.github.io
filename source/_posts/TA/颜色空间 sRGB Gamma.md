---
title: 颜色空间 sRGB Gamma
urlname: gbkk7e
author: Jason Ma
date: '2021-05-03 00:08:51'
updated: '2023-07-16 22:55:40'
tags:
  - Shader
categories:
  - TA
---

# 结论

一张贴图，如果是作为颜色贴图使用，要勾选 sRGB。此时在 Shader 中直接采样贴图输出就是原本的颜色。
如果不是颜色贴图，需要在 Shader 中进行特殊计算，不要勾选 sRGB。此时在 Shader 中采样获得的是贴图原本的颜色。

将非颜色数据输出进行 Debug 时一定要注意 Gamma 的影响

# 过程

勾 sRGB：
贴图直接取色（0.5）→ sRGB To Linear → Shader 采样（0.217）→ 后处理 Linear To sRGB → 屏幕（0.5）
不勾 sRGB：
贴图直接取色（0.5）→ Shader 采样（0.5）→ 后处理 Linear To sRGB → 屏幕（0.729）

本质区别就是不勾 sRGB 可以直接在 Shader 采样得到贴图实际的颜色，适合用来做一些数学计算。
同理，Material Editor 中的 Color 也会有 Gamma 的问题。
