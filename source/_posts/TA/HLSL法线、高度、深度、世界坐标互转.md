---
title: HLSL法线、高度、深度、世界坐标互转
urlname: aoqhq0
author: Jason Ma
date: '2021-11-03 10:23:21'
updated: '2023-07-16 22:55:35'
tags:
  - Shader
categories:
  - TA
---

作为 TA，在做各种特殊材质时经常会用到 Depth 和 Normal Buffer，以及 Depth 转 WorldPos / Normal 等等操作，趁编译引擎时在这里做个笔记，包含 UE 和 Unity 中一些常用的代码片段方便日后查阅。

相关知识这篇文章中有非常详细的介绍，如有重复不再赘述，如有疑问或疏漏欢迎提出。
[Unity Shader-深度相关知识总结与效果实现（LinearDepth，Reverse Z，世界坐标重建，软粒子，高度雾，运动模糊，扫描线效果）\_puppet_master 的博客-CSDN 博客](https://blog.csdn.net/puppet_master/article/details/77489948?tdsourcetag=s_pctim_aiomsg)

## Depth to World Position

方法有很多，这里只记录最方便且通用的逆矩阵方式，如果需要更高性能可以参考射线插值的方法。

### Unity

// TODO

### UE

Custom Node Code：

```cpp
// Input ScreenPos (or ClipPos) : min -1 max 1, LinearDepth : View Space Z
float4 HomogeneousWorldPosition = mul(float4(ScreenPos * LinearDepth, LinearDepth, 1), View.ScreenToWorld);
AbsoluteWorldPos = HomogeneousWorldPosition.xyz / HomogeneousWorldPosition.w;
```

## World Position to Depth

所谓的 Depth 代码中常见的分为 LinearDepth 和 DeviceDepth（Unity 中的 EyeDepth）。
LinearDepth 顾名思义直接等于 ViewSpace 的线性深度，Min/Max 分别为 Near/Far Clip Plane，需要注意浮点精度问题，某些情况下可能需要 abs()。
DeviceDepth（EyeDepth）是指经过投影变换后的 Depth，也就是 ClipPos.z，一些常见的知识点在上面的参考文章中都有非常详细的总结。

### Unity

// TODO

### UE

```cpp
float3 RelativeWorldPos = AbsoluteWorldPos + View.PreViewTranslation;
float3 ViewPos = mul(float4(RelativeWorldPos, w), View.TranslatedWorldToView).xyz;
float4 ClipPos = mul(float4(ViewPos, w), View.ViewToClip);
ClipPos = ClipPos / ClipPos.w;
LinearDepth = ViewPos.z;
DeviceDepth = ClipPos.z;
```

## World Position to Normal

详细可以参考以下文章：
[Improved normal reconstruction from depth](https://wickedengine.net/2019/09/22/improved-normal-reconstruction-from-depth/)
这里只介绍使用 ddxy 重建法线，故只能在 Fragment Shader 使用，且没有插值。

### World Space

```cpp
WorldNormal = normalize(cross(ddx(WorldPos), ddy(WorldPos)));
```

### Transform to Tangent Space

Shader 中一旦涉及 Tangent Space 或 Normal Map，那肯定离不开 float3x3 TangentToWorld 矩阵，TangentToWorld 的[0]、[1]、[2]分别对应 World Space 的 Tangent、Binormal、Normal，也就是 TBN 矩阵（UE 中称为 BTN，但实际值是一样的）。
TBN 是正交矩阵，故有以下用法：

- Tangent to World：mul(TangentDir, TBN)（左乘） == mul(transpose(TBN), TangentDir) （右乘）
- World to Tangent：mul(WorldDir, transpose(TBN))（左乘） == mul(TBN, WorldDir) （右乘）

```cpp
TangentNormal = mul(TBN, WorldNormal);
```

等同于：
![](/images/yuqueAssets/Fl5lVFoaRQpO2A_gALBLkOMIe8Ip.webp)

## Depth to Normal（？）

##

Height to Normal
如无必要，勿增实体——不要重复造轮子。

### Unity

[Normal From Height Node | Shader Graph | 6.9.2](https://docs.unity3d.com/Packages/com.unity.shadergraph@6.9/manual/Normal-From-Height-Node.html)

### UE

![](/images/yuqueAssets/Fi6FZiEyyVaGwnWGaGQwoVXL985V.webp)
