---
title: UE Niagara科普
urlname: meh35f
date: '2022-08-31 22:14:42'
updated: '2025-04-15 23:52:36'
author: Jason Ma
cover: 'https://cdn.nlark.com/yuque/0/2022/png/504873/1662045238244-048941b7-6c72-4b3b-95e8-08479554f4a2.png'
description: '---tags: - GPGPU - VFX---一篇面向美术和TA的Niagara科普.Niagara是什么Niagara是虚幻引擎的下一代视觉特效处理系统。技术美术师无需程序员的任何帮助，就能使用Niagara创建出丰富多彩的效果。此系统适应性强，灵活多变。为何要重新塑造虚幻引擎的视觉效果...'
tags:
  - GPGPU
  - VFX
---
一篇面向美术和TA的Niagara科普.

# Niagara是什么
> Niagara是虚幻引擎的下一代视觉特效处理系统。技术美术师无需程序员的任何帮助，就能使用Niagara创建出丰富多彩的效果。此系统适应性强，灵活多变。
>
> ### <font style="color:rgb(232, 230, 227);">为何要重新塑造虚幻引擎的视觉效果系统？</font>
> <font style="color:rgb(232, 230, 227);">虚幻引擎的用户群体在不断扩大，虚幻引擎广泛应于游戏开发领域以外的众多行业。例如：</font>
>
> + <font style="color:rgb(232, 230, 227);">建筑视觉表现</font>
> + <font style="color:rgb(232, 230, 227);">工业设计（如汽车设计）</font>
> + <font style="color:rgb(232, 230, 227);">虚拟影视制作</font>
>
> <font style="color:rgb(232, 230, 227);">用户更加多样化——有设计专业的学生、独立开发者、大型专业工作室团队，以及非游戏领域的个人和公司。随着不断发展，Epic开发人员无法全面了解虚幻引擎介入的所有行业。因此我们希望创建适用于各行业所有用户的视觉效果（VFX）系统。</font>
>
> ### <font style="color:rgb(232, 230, 227);">新VFX系统的目标</font>
> <font style="color:rgb(232, 230, 227);">我们要创建新系统，取Cascade之精华，去其糟粕。因此，新VFX系统的目标是：</font>
>
> + <font style="color:rgb(232, 230, 227);">美术师可全权掌控效果。</font>
> + <font style="color:rgb(232, 230, 227);">各轴均可编程、可自定义。</font>
> + <font style="color:rgb(232, 230, 227);">提供更好的调试、显示和性能工具。</font>
> + <font style="color:rgb(232, 230, 227);">支持来自虚幻引擎4其他部分或外部源的数据。</font>
> + <font style="color:rgb(232, 230, 227);">不妨碍用户操作。</font>
>



UE4.26开始测试，UE5正式取代Cascade成为默认的粒子系统。

简单来说，Niagara就是一个处理粒子行为的系统，通过控制每个粒子不同的发射、轨迹、颜色、死亡、环境交互等一系列参数，最终再以统一的口径喂给渲染器得出你想要的各种特效。

同时Niagara的本质是可视化编程的Compute Shader, 这意味着它亦可处理部分通用并行计算, 去实现如实时物理模拟, 鸟群算法等骚操作. 

Niagara虽然强大, 但对使用者提出了更高要求. 想要漂亮的效果离不开优秀的艺术审美, 想要实现各种各样的功能离不开对Niagara乃至渲染管线的技术积累, 想要处理各种突发恶疾或扩展功能离不开阅读修改源码.

总之, 学了不亏.

# Niagara能干什么
下载官方示例工程

[在UE功能示例创建的内容示例 - 虚幻引擎商城](https://www.unrealengine.com/marketplace/zh-CN/product/content-examples)

## 基本粒子
![](/images/yuqueAssets/9ea2e24109da70837eb813c13060e670.png)

简单位移+旋转+缩放



## GPU粒子
![](/images/yuqueAssets/e4011dbdee31c0d810e59d4af1be8e0f.png)

相比CPU粒子可以轻松做到数十万的量级，实现更加华丽的效果

缺点是不支持事件，类似雨滴落到地上再发射水花无法实现

也不支持自动Bounding Box，必须手动设置BBox，如果BBox小于特效本身就可能导致过早Culling的问题

## 渲染器类型
![](/images/yuqueAssets/1ac4336beca2301f87c7d2fc79f3f952.png)![](/images/yuqueAssets/293704491257e40b3bfeed179291c9dc.png)

Niagara原生支持将每个粒子用以下类型渲染：

1. Sprite，最常见的Billboard面片
2. Static Mesh
3. Light，无阴影点光源，CPU Only
4. Ribbon，条带，CPU Only
5. Geometry Cache，也就是ABC，Static Mesh的序列，CPU Only
6. Component，发射任意Blueprint Component，比如Niagara、Skeletal Mesh等等，CPU Only

无论什么类型最终到GPU上渲染的仍然是Mesh+Material



## 场景碰撞
![](/images/yuqueAssets/b56e3eb60d0e9a80a2e5184ba874b2fb.png)

Niagara原生提供以下类型的**粒子**与**场景**碰撞：

1. CPU Ray Cast，也就是和模型的碰撞体求交，可能会遇到碰撞体丢失、不准、性能低等问题
2. GPU Depth，通过现有的相机方向深度图计算碰撞，非常快速，但是无法处理视线范围之外的粒子
3. GPU SDF，通过现有的场景Global Distance Field求交，可以提供完整场景碰撞，准确度一般，性能一般
4. GPU Ray Tracing，通过光线追踪的加速结构直接与场景求交，最为准确、易用，但性能最为昂贵

注意，以上不包含粒子间碰撞

## Mesh, Gbuffer交互
![](/images/yuqueAssets/8da34cb7ea30505c8a8dfd3810924226.png)

![](/images/yuqueAssets/7fe7a98845f256b3fd7cf15c6a435fb9.png)

Niagara原生支持采样Mesh, 可以获得任意顶点或三角形的位置和法线等信息, 这意味着粒子和Mesh的精确实时交互成为可能.

同时Niagara支持在GPU模式采样Gbuffer, 可以获得Base Color, Roughness, Metallic, Depth等信息, 使得与场景的精确交互成为可能, 比如发射Decal到墙上, 地上, 并且随场景更改颜色.

## 临近搜索
![图一, 2 * 2 * 2的Neighbor Grid 3D](/images/yuqueAssets/76e1c1da414fdae8d63a535f79f5fa6c.png)![](/images/yuqueAssets/27ae9c5192758724b2b6e522088826df.png)

**Simulation Stage**和**Data Interface**是可以说是Niagara最重磅的新功能, 并且只支持GPU模式.

### Neighbor Grid 3D
Neighbor Grid 3D (图一) 是众多Data Interface中的一种, 如其名是一种3D数据结构, 其中每个Cell存储有若干粒子的Index, 通过Index可以访问粒子的各项属性. 

其专为临近搜索设计, 支持原子操作, 通过遍历粒子周围的Cell可以找到一定范围内最近的粒子.

### Simulation Stage
一个Stage可以理解为一个多线程的for循环, 循环内容由用户定义, 循环次数可动态修改.

Stage的线程可以运行在每个粒子上也可以运行在Grid中每个Cell上.

用户可以添加任意数量的Stage, 一个Stage的计算全部完成后才会执行下一个, 执行顺序由用户定义.



这两个功能组合到一起便实现了上图中的效果, 首先大粒子在Simulation Stage中向Neighbor Grid写入, 然后每个小粒子分别查找最近的大粒子, 并读取其颜色.

接下来看看更多例子.

## 通用并行计算
![左: 2D火焰模拟, 渲染到Billboard  右: 3D火焰模拟](/images/yuqueAssets/295c4f840e0bf737279e8215f0a8312c.png)![Flip流体模拟](/images/yuqueAssets/1d859ccaa7aa40e9459efe78e87d7556.png)![烟雾](/images/yuqueAssets/437c980aa6d47351d9745d78b3c16c73.png)![带碰撞的2D烟雾](/images/yuqueAssets/d37e2ab860da4f7eb12eb28024cff200.png)![Boids鸟群算法](/images/yuqueAssets/797b9b705a1e77ef67f3db32a944b151.png)

### Grid 2/3D Collection
也是Data Interface的一种, 更接近于Texture2D / TextureArray / VolumeTexture, 用户可以在其中每个像素(Cell)中读写一些基本类型的自定义数据, 但不支持原子操作, 多个线程读写同一个像素可能导致数据丢失.

### Rasterization Grid 3D
Data Interface的一种, 专门用于光栅化粒子, 支持Add / Max / Min等原子操作, 这是将模拟好的粒子表面化的关键功能, 可以用来实现2/3D的深度图和SDF生成.

### 流体模拟
以上功能结合在一起为通用并行计算提供了很好的环境, 比如[流体模拟](https://www.zhihu.com/question/26129680):

基于每粒子执行的Simulation Stage可以完成拉格朗日视角的模拟

基于每像素(Cell)执行的Simulation Stage可以完成欧拉视角的模拟

并且灵活多变, 同时支持2/3D的模拟和渲染.



UE5相比UE4新增了很多Data Interface, 包括一个Rasterization Grid3D, 还没仔细研究其作用, 希望可以改善粒子软光栅效率.

### Boids鸟群算法, 复杂系统, 涌现
![](/images/yuqueAssets/a59f7ae3ece01d607f93fe4a8336590d.jpeg)

涌现 (<font style="color:rgb(193, 188, 180);background-color:rgb(26, 28, 29);">emergence), 指</font>一种现象，许多小实体交互作用后产生了大实体，而这个大实体展现了组成它的小实体所不具有的特性, 也就是所谓的**整体大于部分之和**, 量变产生质变. 比如蚁群, 鸟群, 鱼群, 人群, 甚至意识.

Niagara的GPU粒子能够支撑的数量级恰好适合模拟这种复杂系统, 比如[Boids鸟群算法](https://zhuanlan.zhihu.com/p/46361646).

每个粒子模拟一只鸟, 鸟群按照以下简单规则运动:

![分离：移动以避免过于拥挤](/images/yuqueAssets/ab9bf5db809a446e6d48673ac686657b.png)

![对齐：向群体的平均航向移动](/images/yuqueAssets/8a716c6bddd1a1f7c52d967433b41d12.png)

![一致性：向群体的平均位置移动](/images/yuqueAssets/76ffb476c14dd807b56ca9defab83864.png)

每个粒子可以通过Neighbor Grid 3D查找附近的粒子, 同时还要采样SDF躲避障碍物.

运动轨迹解算完成后将粒子渲染为鸟的Alembic或者Skeletal Mesh.

当数量足够多之后, 简单个体的组合便会涌现出复杂系统的美.

### Outline
很长一段时间UE内的描边只有后处理和背面法两种选择, 而背面法只能处理轮廓边, Niagara的出现提供了新的可能.

[High-Quality Real-Time Outline Rendering 描边学习记录 一](https://zhuanlan.zhihu.com/p/318769754)

![](/images/yuqueAssets/8d56cada60d39c4a7f6a10f4432f9766.png)

Niagara目前支持根据Index访问Vertex / Triangle属性, 根据这些可以做到与背面法相同的效果.

UE5还新增了获取临近三角形的节点, 但还没有仔细研究.

基于退化四边形的方法可以处理更多边缘类型, 但需要获取Triangle三个VertexID, 目前Niagara还不支持.

希望未来Niagara加入更多几何节点, 实现更多骚操作.

# Niagara怎么用
## 快速入门
[Niagara快速入门](https://docs.unrealengine.com/5.0/zh-CN/quick-start-for-niagara-effects-in-unreal-engine/)

[Niagara概述](https://docs.unrealengine.com/5.0/zh-CN/overview-of-niagara-effects-for-unreal-engine/)

[Niagara编辑器UI参考](https://docs.unrealengine.com/5.0/zh-CN/editor-ui-reference-for-niagara-effects-in-unreal-engine/)

## 生命周期
![](/images/yuqueAssets/14e2ae3c85f5f15533e30b2fbc12b4a6.png)

Niagara System的执行顺序如图所示

1. System命名空间的Parameters初始化
2. System Spawn运行一次
3. System Update每帧运行一次
    1. Emitter Spawn运行一次
    2. Emitter Update每帧运行一次, 一般在这里生成Particle
    3. Particle Spawn每个Particle生成时运行一次
    4. Particle Update每个Particle每帧运行一次
    5. Simulation Stage逐Particle / Data Interface运行N次
    6. 渲染

不同Emitter之间随机先后运行, 如果有数据依赖关系, Niagara会自动处理依赖并按顺序执行.

## 基本操作
[发射器设置](https://docs.unrealengine.com/5.0/zh-CN/emitter-settings-reference-for-niagara-effects-in-unreal-engine/)

[事件和事件处理器概述](https://docs.unrealengine.com/5.0/zh-CN/events-and-event-handlers-in-niagara-effects-for-unreal-engine/)

[创建自定义模块](https://docs.unrealengine.com/5.0/zh-CN/creating-custom-modules-in-niagara-effects-for-unreal-engine/)

[Niagara调试器](https://docs.unrealengine.com/5.0/zh-CN/niagara-debugger-for-unreal-engine/)

## 物理模拟
[Niagara流体快速入门指南](https://docs.unrealengine.com/5.0/zh-CN/niagara-fluids-quick-start-guide-for-unreal-engine/)

[流体模拟介绍](https://docs.unrealengine.com/5.0/zh-CN/fluid-simulation-in-unreal-engine---overview/)

[Niagara流体参考指南](https://docs.unrealengine.com/5.0/zh-CN/niagara-fluids-reference-in-unreal-engine/)

[NiagaraFluids代码分析：3DLiquidDamBreak | 胡莱峦镐](http://82.156.182.226/2022/05/13/NiagaraFluids%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%901/)







