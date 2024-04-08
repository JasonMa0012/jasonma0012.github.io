---
tags:
  - GPGPU
  - VFX
title: UE Niagara科普
urlname: meh35f
date: "2022-08-31 14:14:42"
updated: "2024-04-08 16:39:34"
author: Jason Ma
---

一篇面向美术和 TA 的 Niagara 科普.

# Niagara 是什么

> Niagara 是虚幻引擎的下一代视觉特效处理系统。技术美术师无需程序员的任何帮助，就能使用 Niagara 创建出丰富多彩的效果。此系统适应性强，灵活多变。

### 为何要重新塑造虚幻引擎的视觉效果系统？

> 虚幻引擎的用户群体在不断扩大，虚幻引擎广泛应于游戏开发领域以外的众多行业。例如：
>
> - 建筑视觉表现
> - 工业设计（如汽车设计）
> - 虚拟影视制作
>
> 用户更加多样化——有设计专业的学生、独立开发者、大型专业工作室团队，以及非游戏领域的个人和公司。随着不断发展，Epic 开发人员无法全面了解虚幻引擎介入的所有行业。因此我们希望创建适用于各行业所有用户的视觉效果（VFX）系统。

### 新 VFX 系统的目标

> 我们要创建新系统，取 Cascade 之精华，去其糟粕。因此，新 VFX 系统的目标是：
>
> - 美术师可全权掌控效果。
> - 各轴均可编程、可自定义。
> - 提供更好的调试、显示和性能工具。
> - 支持来自虚幻引擎 4 其他部分或外部源的数据。
> - 不妨碍用户操作。

UE4.26 开始测试，UE5 正式取代 Cascade 成为默认的粒子系统。
简单来说，Niagara 就是一个处理粒子行为的系统，通过控制每个粒子不同的发射、轨迹、颜色、死亡、环境交互等一系列参数，最终再以统一的口径喂给渲染器得出你想要的各种特效。
同时 Niagara 的本质是可视化编程的 Compute Shader, 这意味着它亦可处理部分通用并行计算, 去实现如实时物理模拟, 鸟群算法等骚操作.
Niagara 虽然强大, 但对使用者提出了更高要求. 想要漂亮的效果离不开优秀的艺术审美, 想要实现各种各样的功能离不开对 Niagara 乃至渲染管线的技术积累, 想要处理各种突发恶疾或扩展功能离不开阅读修改源码.
总之, 学了不亏.

# Niagara 能干什么

下载官方示例工程
[在 UE 功能示例创建的内容示例 - 虚幻引擎商城](https://www.unrealengine.com/marketplace/zh-CN/product/content-examples)

## 基本粒子

![image.png](/images/yuqueAssets/FguaW6vEK9hhGrK5MTACNqum03_M.png)
简单位移+旋转+缩放

## GPU 粒子

![image.png](/images/yuqueAssets/Fs3mThGjPI1nptRk9tKFzaDrhj-7.png)
相比 CPU 粒子可以轻松做到数十万的量级，实现更加华丽的效果
缺点是不支持事件，类似雨滴落到地上再发射水花无法实现
也不支持自动 Bounding Box，必须手动设置 BBox，如果 BBox 小于特效本身就可能导致过早 Culling 的问题

## 渲染器类型

![image.png](/images/yuqueAssets/FjzQHIKIPWqzCQIkqhICaBZVHB1C.png)![image.png](/images/yuqueAssets/Flu29Y1Di1TBdHHVI4xArt3yEr0Y.png)
Niagara 原生支持将每个粒子用以下类型渲染：

1. Sprite，最常见的 Billboard 面片
2. Static Mesh
3. Light，无阴影点光源，CPU Only
4. Ribbon，条带，CPU Only
5. Geometry Cache，也就是 ABC，Static Mesh 的序列，CPU Only
6. Component，发射任意 Blueprint Component，比如 Niagara、Skeletal Mesh 等等，CPU Only

无论什么类型最终到 GPU 上渲染的仍然是 Mesh+Material

## 场景碰撞

![image.png](/images/yuqueAssets/FqDqujOo7k6C-akunU07vxHbLFpS.png)
Niagara 原生提供以下类型的**粒子**与**场景**碰撞：

1. CPU Ray Cast，也就是和模型的碰撞体求交，可能会遇到碰撞体丢失、不准、性能低等问题
2. GPU Depth，通过现有的相机方向深度图计算碰撞，非常快速，但是无法处理视线范围之外的粒子
3. GPU SDF，通过现有的场景 Global Distance Field 求交，可以提供完整场景碰撞，准确度一般，性能一般
4. GPU Ray Tracing，通过光线追踪的加速结构直接与场景求交，最为准确、易用，但性能最为昂贵

注意，以上不包含粒子间碰撞

## Mesh, Gbuffer 交互

![image.png](/images/yuqueAssets/Ftf4fPq0x8PVcWu3AUTc3z1POWm0.png)
![image.png](/images/yuqueAssets/Fq0OEbCgT3ugaxcnMmGjDfdlu9ks.png)
Niagara 原生支持采样 Mesh, 可以获得任意顶点或三角形的位置和法线等信息, 这意味着粒子和 Mesh 的精确实时交互成为可能.
同时 Niagara 支持在 GPU 模式采样 Gbuffer, 可以获得 Base Color, Roughness, Metallic, Depth 等信息, 使得与场景的精确交互成为可能, 比如发射 Decal 到墙上, 地上, 并且随场景更改颜色.

## 临近搜索

![图一, 2 * 2 * 2的Neighbor Grid 3D](/images/yuqueAssets/FqCViKAZHL49Z4lJcawSUvOcCxjw.png "图一, 2 * 2 * 2的Neighbor Grid 3D")![image.png](/images/yuqueAssets/FhXE__Jh34zz3MBpCMEKPsAz6_Ui.png)
**Simulation Stage**和**Data Interface**是可以说是 Niagara 最重磅的新功能, 并且只支持 GPU 模式.

### Neighbor Grid 3D

Neighbor Grid 3D (图一) 是众多 Data Interface 中的一种, 如其名是一种 3D 数据结构, 其中每个 Cell 存储有若干粒子的 Index, 通过 Index 可以访问粒子的各项属性.
其专为临近搜索设计, 支持原子操作, 通过遍历粒子周围的 Cell 可以找到一定范围内最近的粒子.

### Simulation Stage

一个 Stage 可以理解为一个多线程的 for 循环, 循环内容由用户定义, 循环次数可动态修改.
Stage 的线程可以运行在每个粒子上也可以运行在 Grid 中每个 Cell 上.
用户可以添加任意数量的 Stage, 一个 Stage 的计算全部完成后才会执行下一个, 执行顺序由用户定义.

这两个功能组合到一起便实现了上图中的效果, 首先大粒子在 Simulation Stage 中向 Neighbor Grid 写入, 然后每个小粒子分别查找最近的大粒子, 并读取其颜色.
接下来看看更多例子.

## 通用并行计算

![左: 2D火焰模拟, 渲染到Billboard  右: 3D火焰模拟](/images/yuqueAssets/Fj4acsISpvr379YrEMINV6YHiq2r.png "左: 2D火焰模拟, 渲染到Billboard  右: 3D火焰模拟")![Flip流体模拟](/images/yuqueAssets/FqfuQRfT49ljarroCntOOflBk-LH.png "Flip流体模拟")![烟雾](/images/yuqueAssets/Fguzp55joJkkxjO7LOExhrr7uStY.png "烟雾")![带碰撞的2D烟雾](/images/yuqueAssets/FoPJu3uBSihICol3cuM4sKWlWkTe.png "带碰撞的2D烟雾")![Boids鸟群算法](/images/yuqueAssets/Fld7Q-d9Ghwk53cljmyFj70lTcP9.png "Boids鸟群算法")

### Grid 2/3D Collection

也是 Data Interface 的一种, 更接近于 Texture2D / TextureArray / VolumeTexture, 用户可以在其中每个像素(Cell)中读写一些基本类型的自定义数据, 但不支持原子操作, 多个线程读写同一个像素可能导致数据丢失.

### Rasterization Grid 3D

Data Interface 的一种, 专门用于光栅化粒子, 支持 Add / Max / Min 等原子操作, 这是将模拟好的粒子表面化的关键功能, 可以用来实现 2/3D 的深度图和 SDF 生成.

### 流体模拟

以上功能结合在一起为通用并行计算提供了很好的环境, 比如[流体模拟](https://www.zhihu.com/question/26129680):
基于每粒子执行的 Simulation Stage 可以完成拉格朗日视角的模拟
基于每像素(Cell)执行的 Simulation Stage 可以完成欧拉视角的模拟
并且灵活多变, 同时支持 2/3D 的模拟和渲染.

UE5 相比 UE4 新增了很多 Data Interface, 包括一个 Rasterization Grid3D, 还没仔细研究其作用, 希望可以改善粒子软光栅效率.

### Boids 鸟群算法, 复杂系统, 涌现

![](/images/yuqueAssets/FkclqdkSkJMPON49e4uPC_nduHJ8.jpeg)
涌现 (emergence), 指一种现象，许多小实体交互作用后产生了大实体，而这个大实体展现了组成它的小实体所不具有的特性, 也就是所谓的**整体大于部分之和**, 量变产生质变. 比如蚁群, 鸟群, 鱼群, 人群, 甚至意识.
Niagara 的 GPU 粒子能够支撑的数量级恰好适合模拟这种复杂系统, 比如[Boids 鸟群算法](https://zhuanlan.zhihu.com/p/46361646).
每个粒子模拟一只鸟, 鸟群按照以下简单规则运动:
![分离：移动以避免过于拥挤](/images/yuqueAssets/Fl7rv3QrOOAXR06BFoy4gIUKKT9R.png "分离：移动以避免过于拥挤")
![对齐：向群体的平均航向移动](/images/yuqueAssets/FuZQWokE5W3b7a7-PztBMn8RMt2H.png "对齐：向群体的平均航向移动")
![一致性：向群体的平均位置移动](/images/yuqueAssets/FvglWxTmLgApuRemLjg3IStJY8Sw.png "一致性：向群体的平均位置移动")
每个粒子可以通过 Neighbor Grid 3D 查找附近的粒子, 同时还要采样 SDF 躲避障碍物.
运动轨迹解算完成后将粒子渲染为鸟的 Alembic 或者 Skeletal Mesh.
当数量足够多之后, 简单个体的组合便会涌现出复杂系统的美.

### Outline

很长一段时间 UE 内的描边只有后处理和背面法两种选择, 而背面法只能处理轮廓边, Niagara 的出现提供了新的可能.
[High-Quality Real-Time Outline Rendering 描边学习记录 一](https://zhuanlan.zhihu.com/p/318769754)
![image.png](/images/yuqueAssets/FoHkBjUuhKB5YUIOyLJiW5voqis3.png)
Niagara 目前支持根据 Index 访问 Vertex / Triangle 属性, 根据这些可以做到与背面法相同的效果.
UE5 还新增了获取临近三角形的节点, 但还没有仔细研究.
基于退化四边形的方法可以处理更多边缘类型, 但需要获取 Triangle 三个 VertexID, 目前 Niagara 还不支持.
希望未来 Niagara 加入更多几何节点, 实现更多骚操作.

# Niagara 怎么用

## 快速入门

[Niagara 快速入门](https://docs.unrealengine.com/5.0/zh-CN/quick-start-for-niagara-effects-in-unreal-engine/)
[Niagara 概述](https://docs.unrealengine.com/5.0/zh-CN/overview-of-niagara-effects-for-unreal-engine/)
[Niagara 编辑器 UI 参考](https://docs.unrealengine.com/5.0/zh-CN/editor-ui-reference-for-niagara-effects-in-unreal-engine/)

## 生命周期

![image.png](/images/yuqueAssets/FnUAMM6ZNM17on7jNFtQIkA4a8MK.png)
Niagara System 的执行顺序如图所示

1. System 命名空间的 Parameters 初始化
2. System Spawn 运行一次
3. System Update 每帧运行一次
   1. Emitter Spawn 运行一次
   2. Emitter Update 每帧运行一次, 一般在这里生成 Particle
   3. Particle Spawn 每个 Particle 生成时运行一次
   4. Particle Update 每个 Particle 每帧运行一次
   5. Simulation Stage 逐 Particle / Data Interface 运行 N 次
   6. 渲染

不同 Emitter 之间随机先后运行, 如果有数据依赖关系, Niagara 会自动处理依赖并按顺序执行.

## 基本操作

[发射器设置](https://docs.unrealengine.com/5.0/zh-CN/emitter-settings-reference-for-niagara-effects-in-unreal-engine/)
[事件和事件处理器概述](https://docs.unrealengine.com/5.0/zh-CN/events-and-event-handlers-in-niagara-effects-for-unreal-engine/)
[创建自定义模块](https://docs.unrealengine.com/5.0/zh-CN/creating-custom-modules-in-niagara-effects-for-unreal-engine/)
[Niagara 调试器](https://docs.unrealengine.com/5.0/zh-CN/niagara-debugger-for-unreal-engine/)

## 物理模拟

[Niagara 流体快速入门指南](https://docs.unrealengine.com/5.0/zh-CN/niagara-fluids-quick-start-guide-for-unreal-engine/)
[流体模拟介绍](https://docs.unrealengine.com/5.0/zh-CN/fluid-simulation-in-unreal-engine---overview/)
[Niagara 流体参考指南](https://docs.unrealengine.com/5.0/zh-CN/niagara-fluids-reference-in-unreal-engine/)
[NiagaraFluids 代码分析：3DLiquidDamBreak | 胡莱峦镐](http://82.156.182.226/2022/05/13/NiagaraFluids%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%901/)
