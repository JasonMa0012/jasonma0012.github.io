---
title: 闫令琪 GAMES101笔记-现代计算机图形学入门
urlname: mypdxo
author: Jason Ma
date: '2020-04-04 16:05:31'
updated: '2023-06-14 23:27:03'
categories:
  - Reading
---

[点击查看【bilibili】](https://player.bilibili.com/player.html?bvid=BV1X7411F744)

# 概览  [Overview of Computer Graphics](https://www.bilibili.com/video/BV1X7411F744?p=1)

图形学的应用：

- 视频游戏 Video Games
  - PBR
  - NPR
- 电影 Movies
- 动画 Animations
- 设计 Design
- 可视化 Visualization
- 虚拟现实 Virtual Reality
- 数字绘图 Digital Illustration
- 模拟 Simulation
- GUI
- 字体 Typography

**We learn Graphics，not Graphics APIs！**

# 线性代数  [Review of Linear Algebra](https://www.bilibili.com/video/BV1X7411F744?p=2)

图形学中的向量一般是**列向量**，矩阵可以**左乘**

## Dot Product 点积

![image.png](/images/yuqueAssets/FsfSUQEG9sWLdODc-VwHPEOU7APB.png)

![](/images/yuqueAssets/FnG7lS1jSU7AVoh_g3SNolNeXzvC.svg)  =  ![](/images/yuqueAssets/FpMZPR0KFfJUA18537kmXbydaFhf.svg)的单位向量   = a hat

![image.png](/images/yuqueAssets/Fpvo19MZehcBM2ob8d8nfBIF4BYr.png)
![image.png](/images/yuqueAssets/FlaL5CK5kksVwgZ5Og9MMgAPgw28.png)

向量点乘满足**交换律、结合律、分配律**

![image.png](/images/yuqueAssets/FuOycQ3hjA5kvjKMApvABzxbMX4L.png)

点乘可以用来计算向量**夹角**和向量间的**投影**
垂直 ![](/images/yuqueAssets/FvwR97HU9FTRdzRAIY_zui_Ym0xD.svg) Perpendicular

![image.png](/images/yuqueAssets/FjAp_LQfJocN7AT07n0n3T1P_sA1.png)![image.png](/images/yuqueAssets/FgEuqD8XBwXfaaGI4_KGjj6KTy5p.png)

点乘可以\*\*分解向量、判断

## Cross Product 叉积

![image.png](/images/yuqueAssets/FmKaobg2NcYmaxf8xhnEFyKfs5EO.png)

叉积**垂直**于两条初始向量，叉积方向取决于**右手螺旋法则**，叉积大小 = ![](/images/yuqueAssets/FmQwYQ41bdD-zv9D4uDH7eb--fnP.svg)

![image.png](/images/yuqueAssets/FrDZuZ84RVCJH1eQDnsqyIuLsMoP.png)

叉乘可以构建坐标系，![](/images/yuqueAssets/FksbW_pyqTUyGaY-6xWAJJR23j_o.svg)则说明是右手坐标系

![image.png](/images/yuqueAssets/FuPmxlyfjxWwYu9yoIXNwihwVpIN.png)![image.png](/images/yuqueAssets/FvJfmvhR49yWAOpfA95s0KIKPxEV.png)![image.png](/images/yuqueAssets/FveCovReL605Vc4BCVUgPPEYgUk4.png)

叉积在图形学中可以判断**左右**和**内外**
左图给定**右手坐标系**，![](/images/yuqueAssets/Fn_sjdOPkSFniFxa2DaQtkdsUc5j.svg)得到**向上**的向量，说明 a 在 b 的**右边**
右图同理，若**ab 在 ap 右侧**且**bc 在 bp 右侧**且**ca 在 cp 右侧**则 p 在 abc**内部**
无论是按顺时针或逆时针输入 3 个顶点，只要 p 一直在左侧或者右侧就说明在内部，
**光栅化**将会用到类似原理

![image.png](/images/yuqueAssets/FuM7fNaNrPC-jZ_WM5d-xQrfJqCW.png)

对于 3D 空间中的任意右手、单位、垂直 UVW 坐标系：
p 可以表示为 p 在 UVW3 个轴上的投影（直接点乘，依据在上面）的和

## Matrix 矩阵

![image.png](/images/yuqueAssets/FnRVYhvId3FdGCn7DRMtgsalgPrm.png)
![image.png](/images/yuqueAssets/FoissiwscF0eh9kho8w0ohP49yqt.png)
![image.png](/images/yuqueAssets/FrRkI1Nr7FIZbVl0vytiC2Asuh4U.png)

矩阵乘法不满足交换律

![image.png](/images/yuqueAssets/FmpYnEC-8VUUHCryEJ90-he1N5wD.png)![image.png](/images/yuqueAssets/FvXz97PiP_eQRNI6mhcgULpueMo-.png)

矩阵转置是将原矩阵行列互换

![image.png](/images/yuqueAssets/Fnuh27-L0XM90VW0Rlk5C0e5bAgz.png)

矩阵与其逆相乘等于单位矩阵

![image.png](/images/yuqueAssets/FpfyhpRn4D5FQiQdvV7G3AvhTeLI.png)

向量点乘叉乘的**矩阵形式**
叉乘的矩阵形式：先将 a 向量转换成矩阵![](/images/yuqueAssets/FlAGwDPn2nf0YiEEEYWh5gKjGiHV.svg)（**dual matrix**）再与向量相乘

# 变换  [Transformation](https://www.bilibili.com/video/BV1X7411F744?p=3)

## Scale 缩放

![image.png](/images/yuqueAssets/FkFoHT9Er0bIJb6vcVTZk8qudTsT.png)

![](/images/yuqueAssets/FjeWBJVyf65kb0Qz8iHK0WfCMWdH.svg)（x **\prime**）

## Shear 切变

![image.png](/images/yuqueAssets/Fn069m9FQS_VV4CaLbzmDyKxRFLi.png)

## Rotation 旋转

![image.png](/images/yuqueAssets/FqlrrDPuJha_EDgm01pzNku-Vd68.png)![image.png](/images/yuqueAssets/Fg5A0Jag_31cazG7kFwNUdSDvHsN.png)

## Linear Transform 线性变换

![image.png](/images/yuqueAssets/Fs89WWiahFdtUl8pXPyMpMbMaG1w.png)

**线性变换**：由**相同维度**的矩阵进行的变换（？？

## Homogeneous Coordinate 齐次坐标

![image.png](/images/yuqueAssets/Fnmh75pFcVkNbI_3FhdxPffhUf-6.png)

齐次坐标：增加一个维度以复合多种类型的变换

![image.png](/images/yuqueAssets/FnJEWOV5mdv-OvT888Ap2oA7sMWX.png)

规定：
齐次坐标中的点末位为 1，向量为 0。
若齐次坐标中的**向量末位不为 0**，则其代表一个点，**点的坐标为此向量 / 向量末位**
齐次坐标中**两点相加等于他们的中点**

## Affine Transformation 仿射变换

![image.png](/images/yuqueAssets/Fsv4IaGV_EmTWze6DhRVRFbSdVCI.png)

齐次坐标中的矩阵变换**先进行线性变换再进行仿射变换**

## 2D 矩阵变换

![image.png](/images/yuqueAssets/Fk_OCwgmSs782S5qzJAkq-bGGSG7.png)

## Inverse 逆变换

![image.png](/images/yuqueAssets/FukHeAAmkLM83iN1gDjzGUedZzcJ.png)![image.png](/images/yuqueAssets/FrlD30M5KhHFjGqIK4r9VOy4C_cN.png)

旋转矩阵的**逆就是其转置 （正交矩阵）**

## 复合变换

![image.png](/images/yuqueAssets/FiGed6LB5Rc_1bJFsZhoMa0KOm4Q.png)![image.png](/images/yuqueAssets/Fhz0qqhwVHXWr7nk_UgQJJc3Chu-.png)

变换的顺序不可交换
多个矩阵应用于向量时，**从最右侧**逐个应用于向量

## 绕某一点旋转、缩放

![image.png](/images/yuqueAssets/FiCDbQF0-y32lY78PZf05yXbXEWF.png)

先移到原点，再进行旋转、缩放，再移回去

## 3D 旋转

![image.png](/images/yuqueAssets/Fj6z_dEanxcB8KR9xpAPpZDi8W_y.png)

绕 y 旋转矩阵与 xz 相反，是由于**循环对称**原理，![](/images/yuqueAssets/FnP1FUD4Wa9fWYNMDgiNsFQ6DW0v.svg)

![image.png](/images/yuqueAssets/FjQyT9LRv22ifVA-1kjXmhgqOSro.png)

任意 3D 旋转都可以表示为绕 xyz 轴的欧拉角旋转，欧拉角不适合插值，
会有万向节锁，一般软件内部用四元数和矩阵替代欧拉角。

![image.png](/images/yuqueAssets/FtdTslzoCm9y_j0lWoDbMBlOIRIb.png)

Rodrigues 旋转公式：**绕任意轴旋转**，Unity 有封装

![image.png](/images/yuqueAssets/FlUzmx432GiV-mspsEt-fJwLBAYs.png)![image.png](/images/yuqueAssets/FiL7nA0gU5UVuwBJHd-Pnx7Fjm6S.png)

## Viewing 变换

![image.png](/images/yuqueAssets/FrxJKIUgntJ6kfWT0nlFopLZC_pl.png)![image.png](/images/yuqueAssets/FsBc7o5YHEbAbciL2nW0hbTyh7SL.png)![image.png](/images/yuqueAssets/FqRf241vm88CtloFjIC5xB66kzHr.png)

View 矩阵
将相机移动到原点并看向-z
将相机旋转到标准坐标的矩阵可以用旋转到相机角度的矩阵的逆

## Projection Transformation 投影变换

![image.png](/images/yuqueAssets/FgIQzpOLEIpjyBRKacKVFX1M-iVB.png)![image.png](/images/yuqueAssets/FjLuU-vY8SYuFakLQEzxQxsaj4pf.png)![image.png](/images/yuqueAssets/Fk907TaipK3Os-9yAQWrqowCPPPy.png)

变换到**标准化设备坐标（NDC）**坐标内

![image.png](/images/yuqueAssets/Fp0QGp065PRG4bC21yvSZSt9pSsD.png)

**正交投影矩阵**：先移动到原点，再缩放到 NDC（暂时忽略旋转）

![image.png](/images/yuqueAssets/Fh-nG8_f-u51cY-I6MxAabDBD7yv.png)
![image.png](/images/yuqueAssets/FpujeeIq47MYYiw92p96XIyUlnJv.png)

透视投影
先将远裁剪面“压扁”为近裁面大小，其中近裁面不变，远裁面中心点不变，然后进行正交投影

![image.png](/images/yuqueAssets/Fg869cDdJ2SXDXsCz35_lgtFDmgo.png)

由于近裁面和远裁面构成相似三角形，所以  ![](/images/yuqueAssets/FmLgt2vJV0twS4NTo75UIVV9vlWB.svg)

![image.png](/images/yuqueAssets/FsheC_01BolUEpKVSfPqQAoIc3sg.png)![image.png](/images/yuqueAssets/FvtBU1of62avx66us5EcmC2CL1_1.png)

可以推出压扁矩阵的一部分
z 的部分进行观察：

![image.png](/images/yuqueAssets/Fkblrv8Fy-GqsF0TDB3jmLUwau4E.png)![image.png](/images/yuqueAssets/FsUnhnK550YFP7nOKhhIhNch5-P4.png)![image.png](/images/yuqueAssets/FuO6k-3dHYkqxBXU43qG3zSmBT0t.png)

**远近裁面**上应用矩阵后 z 不变，故得出以下方程：

![image.png](/images/yuqueAssets/Fk6GZUcnw7r8_cPbgiqW4E9yKz1n.png)

带入得到压扁矩阵：
![](/images/yuqueAssets/FuVMc7ccUtiYBySq2ScRY4OZheax.svg)
之后带入 n、f 和 nf 中点的值，计算得出中点经过压扁后会**朝远裁面移动**
然后将压扁矩阵与正交投影矩阵复合得到透视投影矩阵

![CFE78BE3-A456-434C-9351-586CB98595C3.png](/images/yuqueAssets/Fq1TYl5v-ZCq4tIRTtEaDGFB9Gwt.png)

# 光栅化  [Rasterization 1 (Triangles)](https://www.bilibili.com/video/BV1X7411F744?p=5)

## 视锥

![image.png](/images/yuqueAssets/Fj95afv130d9jQ0zfXpo9sRVDWpD.png)
![image.png](/images/yuqueAssets/FkFucp9GwFDCI5rft1oium3suK8d.png)

定义透视投影视锥需要：
FOVY，垂直可视角度；Aspect Ratio 长宽比；远近裁面距离

## 视口

![image.png](/images/yuqueAssets/Fu_Ps_Ax130OOdEJA4E5yEsPumbz.png)
![image.png](/images/yuqueAssets/Fr3Kf5WQkRblCDzwIvj4XQNsNkZq.png)
![image.png](/images/yuqueAssets/Fn9cnzwaWhhWWaCq4yps4CzuxsCx.png)

视口变换：将 NDC 缩放、平移到屏幕空间

## 三角形

![image.png](/images/yuqueAssets/FsNdLJeQLsetEBVaVYaHpJj-13aX.png)

三角形在图形学中的特性：

- 所有多边形的基础
- 任意多边形都可以拆解为三角形
- 在一个平面内
- 定义清晰的内部
- 顶点之间易于插值

## 采样

![image.png](/images/yuqueAssets/Fm_i08qcP4KP85aLBO1hPZChCcQU.png)
![image.png](/images/yuqueAssets/Fu8mMtO7QfSBgqpjaFJGjnxVUbbM.png)![image.png](/images/yuqueAssets/Fn9Q14cQNIL8o5EkZaQ7eZpKU1_a.png)

采样 Sample：求函数某一点的值，采样可以离散一个函数
用像素中心对三角形采样，判断是否在三角形内
叉乘可以判断内外，见上文

![image.png](/images/yuqueAssets/FpPPhwKttUtYcV793sZnMsbD_bHf.png)![image.png](/images/yuqueAssets/FveqpOU2ac2DkGQMXckE8ZuZZ2vp.png)

只有三角形包围盒内的像素需要判断（AABB 轴向对齐包围盒  Axis-aligned bounding box）
可以每行判断最小最大以在某些情况下优化
光栅化采样的同时会产生锯齿

# 光栅化 Rasterization 2 (Antialiasing and Z-Buffering)

## 抗锯齿/反走样 1

![image.png](/images/yuqueAssets/FkG9t4GrlcuOIFbkW7Ylb6pXNsJK.png)
![image.png](/images/yuqueAssets/Fp1YKYPiFF6xjZuk_hvYSh3-fgYA.png)![image.png](/images/yuqueAssets/Fkil-ueUJC3mmu6NuWfBybp-Cvzw.png)![image.png](/images/yuqueAssets/FhmJbLZ1GI871YJoVcENNOd1szwz.png)
![image.png](/images/yuqueAssets/FvKWp2pk2gOotru9shCgBJu9c80u.png)

Artifact：走样（锯齿、摩尔纹、车轮倒转……）
是由于信号变化太快而采样速度跟不上导致

![image.png](/images/yuqueAssets/Fn85Kta35zn1lGzl2u9FIZLUy79h.png)
![image.png](/images/yuqueAssets/FnpffARlPI894_v0im9rNaiKAJ7z.png)
![image.png](/images/yuqueAssets/Fvmfm84dPpiQsUKTaLvFr0cMt_we.png)

可以通过采样前进行模糊的方法抗锯齿，而先采样后模糊则达不到效果

## 频域  Frequency Domain

![image.png](/images/yuqueAssets/FjXq9uIYSelOjW1XYki2ZMxXHZUL.png)

![](/images/yuqueAssets/FuDQBc3NFXh-dZrEX2hrXNn1Dx27.svg)=2=频率，![](/images/yuqueAssets/FuDQBc3NFXh-dZrEX2hrXNn1Dx27.svg)=![](/images/yuqueAssets/FkzKq-xUivWp5KvMbcUPZEuz1Yg-.svg)=导数=周期
空域/时域 相当于平时所接触的图像

![image.png](/images/yuqueAssets/FpByfn-ID5X8SysFDasJsUmhTGnv.png)
![image.png](/images/yuqueAssets/FvICRFL5UJT0yECeniUg3OjaO409.png)
![image.png](/images/yuqueAssets/Fl-rCWVIPQof8tvrxzr4h48QVCwy.png)

傅里叶级数展开：将一个函数描述为正弦余弦的和
不同的正弦余弦本质是不同的频率
采样的频率越低而函数频率越高则采样结果失真越严重

![image.png](/images/yuqueAssets/Fk3NrNTkSlQGd9cABm72PTe0xF-e.png)

走样的定义：两种完全不同的函数的采样结果完全相同

## 滤波 Filtering

![image.png](/images/yuqueAssets/FuU15AFU1RL3kHYncaA8QmDmGLVj.png)
![image.png](/images/yuqueAssets/Fmo6useonmcFppa6iAnMSEcnVfDT.png)
![image.png](/images/yuqueAssets/Ft-0AIP8Z6OCfgrKY0wgSPnLjS7q.png)
![image.png](/images/yuqueAssets/Fs8FItt82BTGzlyVIDFxXeCH_IK3.png)
![image.png](/images/yuqueAssets/FpKGKkx1nlrJnWlkQb1NuGII5P5g.png)

滤波：删除某些特定的频率
图像的频率：像素间的差异越小则频率越低，反之越高，也就是边界处的频率最高
High-pass filter 高通滤波器：只让高频部分通过，反之低通滤波器，可以提取图像的边缘或者模糊图像

卷积 Convolution

![image.png](/images/yuqueAssets/FklW7VFj5peQ4JRpO2fsTJhU2U0_.png)

滤波=卷积=平均

![image.png](/images/yuqueAssets/FnjG5m1SsjCoqVRwEkMRoeMEkMn1.png)
![image.png](/images/yuqueAssets/Flky5zABglTGN2cmcaXOVM-COmTv.png)

图形学中的卷积=对图像（信号）应用一个滤波器（卷积核）得到结果

![image.png](/images/yuqueAssets/FpkUzcjBwcWrtF93PFUV8Zgo8zfW.png)
![image.png](/images/yuqueAssets/Fsy-4sbkTZv6KHHsrW745ur2Nj84.png)

时域（图像）上的卷积相当于频域上的乘积
对图像进行卷积=对频率应用低通滤波器=模糊

![image.png](/images/yuqueAssets/FiT_HsC45j15Fz3wGtHufXjRvVLV.png)![image.png](/images/yuqueAssets/FuJDyv79F8YgS7jGttFN8YHDnZI-.png)

越大的卷积核图像越模糊，对应的频率越低

## 采样 Sampling

![image.png](/images/yuqueAssets/FqEiAnVICPAacvGbn09gsHk0CbOc.png)
![image.png](/images/yuqueAssets/Fp7fNZYUWk2d0REYre-l-zIwJ2TM.png)

时域上采样等于在频域上重复原始信号的频谱
而走样则是因为采样率太低，频谱间隔太小造成的重叠

## 抗锯齿/反走样 2

![image.png](/images/yuqueAssets/FmtxrT_skIICglu77yqZ1mnczakT.png)
![image.png](/images/yuqueAssets/FssS3z_gbGXQgfGqHEiLeZXHhhaG.png)

反走样

- 增加采样率
- 低通滤波（先去掉高频再采样）

![image.png](/images/yuqueAssets/FmTjLstiNKMcMzgBIwsXEo4xQEXm.png)
![image.png](/images/yuqueAssets/FkLMRZFmIY6VWnZL7ndjvXgN7RIc.png)

在一个像素内卷积，三角形覆盖的面积作为像素亮度（不易执行）

![image.png](/images/yuqueAssets/FjqMZsn5ywW_RVboyRVSV5OZ75jl.png)![image.png](/images/yuqueAssets/Fgx-Z7WGChnyalccymkSRJ3fQPwW.png)
![image.png](/images/yuqueAssets/FrL-hFi_sttUJYlhRlS1bBSRmw4R.png)![image.png](/images/yuqueAssets/FlEexdh9ot7jEmANt1gAIjKZ2RAk.png)
![image.png](/images/yuqueAssets/FgJXDbZ60I3a80dZ63tp7wWh3WXt.png)

# 着色 Shading 1 (Illumination, Shading and  Graphics Pipeline)

## Z-Buffer

![image.png](/images/yuqueAssets/Ft_vygUtzkFydI43xzSHA177GuL7.png)![image.png](/images/yuqueAssets/FthYxPkWl4nqaVCCt67pfUydklKk.png)
![image.png](/images/yuqueAssets/FlmnyLMYwhXM42-lsHnJW4SMmm0Z.png)![image.png](/images/yuqueAssets/Foy__fmv2l8OgkI_H0gSmJFuXBUU.png)
![image.png](/images/yuqueAssets/FltnJI0Jju1ezP_rav1zVCK8Yxwe.png)

## Shading

![image.png](/images/yuqueAssets/FvUgx5haRvYP_Srg2pmlYr7YnYD3.png)![image.png](/images/yuqueAssets/FlS0Lf7F08ee5X3O6bZr3v43Wkai.png)
![image.png](/images/yuqueAssets/FuhogqfCa8GlTYMCUhtqS_KYPcS4.png)![image.png](/images/yuqueAssets/Fi8hjfvSaZGYYFi-4wZRerPsPJO2.png)
![image.png](/images/yuqueAssets/Fg-PQtHEDQ-yeq_xDsZMm8M5ZafK.png)

# 着色 Shading 2 (Shading, Pipeline and Texture Mapping)

![image.png](/images/yuqueAssets/Fre_yCEu0WFBQYxyfo3EpPT05Hp2.png)![image.png](/images/yuqueAssets/Fqp1du8quozeiGaPGlyzynA4-1b8.png)
![image.png](/images/yuqueAssets/FrFxBE5cddcOL2t7N0VHd91SXqEx.png)![image.png](/images/yuqueAssets/Fjty30xYF7U3lqn8xXoyoqK66ZFQ.png)
![image.png](/images/yuqueAssets/FnZvgNkhpJSwhuRKaAYbKcnh-Htn.png)![image.png](/images/yuqueAssets/FnKlgFWpeojhvH5fHjer_dRrw1VU.png)

![image.png](/images/yuqueAssets/FiNdr1oUK7e1mp0iT4KLhq3r5tfj.png)
![image.png](/images/yuqueAssets/FhAvQ1Oae8-BXHhVc51ZrzTHRXZ0.png)
![image.png](/images/yuqueAssets/Fi5UepbRNh_zVR7L5FtkEzytjfjT.png)![image.png](/images/yuqueAssets/FkMODqqU5ZUHlSjM0vwgSmEHZv_r.png)
![image.png](/images/yuqueAssets/FhVV819H6rzmzv5J_XRAQnLUcBc5.png)
![image.png](/images/yuqueAssets/Fs-50ZmSMC1VBPl9am9fvUQkVwWY.png)
![image.png](/images/yuqueAssets/FsvqZO782wJyzcj6OIFzDognRUTf.png)
![image.png](/images/yuqueAssets/FpzndlIZlJFGHtDh5rOpxT7kedAj.png)
![image.png](/images/yuqueAssets/Ftsluk4h4MWDvI8tG5Uvj-3naXfD.png)

# Shading 3 (Texture Mapping Cont.)

## 重心坐标

![image.png](/images/yuqueAssets/Fh622KG2-AycVIUqRP0U_LWTzu7B.png)![image.png](/images/yuqueAssets/Fp6DRGp_2dg_3yNSNpQ_MPcdcoOG.png)

对于三角形内任意点都可以用三个点的坐标的线性组合来表示，![](/images/yuqueAssets/FjkCRKUM554t18eB_9PXcoJUxHng.svg)时在三角形内部
![image.png](/images/yuqueAssets/FjAjDORmCV9IZW4oBm8K5U47tYAB.png)![image.png](/images/yuqueAssets/FsniUSlmtvsjqtduB78sVFz-9Uk9.png)
面积比可以求出重心坐标，用点对面（不相邻的三角形）的三角形的面积除以总面积则为此点重心坐标
![image.png](/images/yuqueAssets/FtlXiPOCyFEVsHDb9P6cS248yVho.png)三角形的重心为 1/3

![image.png](/images/yuqueAssets/FpxYKxqCwnOUVoHgo9XSTMDmPsnx.png)![image.png](/images/yuqueAssets/Fq1PrQ02CBIsi7AsC-EyG-4_aeQn.png)

对于三角形内任意一点都可以计算其重心坐标，利用重心坐标对属性进行插值。注意：**投影后的重心坐标将改变，三维中的属性应在三维中插值**

## 纹理插值采样

![image.png](/images/yuqueAssets/FuNmnCYgg6h3Iq7kcbaFXbTTv8ay.png)
![image.png](/images/yuqueAssets/FiXv90AplLTYY-JIkHzFpSvMashY.png)
![image.png](/images/yuqueAssets/FtcBv7T6fYw9NYOL6Xl7Jcl_Geqd.png)![image.png](/images/yuqueAssets/Fg50qTm_e5Z8NGpFRTVJTPbcU9DF.png)

双线性插值：采样时用水平和竖直方向与纹素的相对位置进行颜色线性插值

![image.png](/images/yuqueAssets/FmiLFUaXSgyH18LvHbp5hRzyK5FQ.png)
![image.png](/images/yuqueAssets/Fre-xbKP14acFAuIvSsmJ-o8ARIc.png)

## MipMap

![image.png](/images/yuqueAssets/FmWQqE0Musjf5Yv97qcCzdoPzcQ9.png)
![image.png](/images/yuqueAssets/FrX5Zl6e7aERxxE-vvNgj4Whqbw4.png)
![image.png](/images/yuqueAssets/Fg95YLRvMQ05lL5tiuXQNRHH0VfO.png)

point sample：点查询
插值，求均值：范围查询
为解决远处一个像素覆盖过多纹素导致的锯齿，需要使用预计算的范围查询：MipMap（Image Pyramid）
每一级 lod 为上一级分辨率的 1/4，总共需要额外的 1/3 存储空间，可以将 3 张贴图级其 mipmap 刚好存在一张贴图上。

![image.png](/images/yuqueAssets/FvCPAS9D9Upw7nrKDQrnUZxEapry.png)![image.png](/images/yuqueAssets/Fr1X2sdXRI-_imxMalrMM7bIIren.png)![image.png](/images/yuqueAssets/FiJOu7x1989EAlsVbj9ISpdCk52x.png)![image.png](/images/yuqueAssets/FjPC-NGy4sfZQeh-26WbhFA2nnTE.png)

可以使用 ddx ddy 确定 uv 在两个方向上的导数/变化率，从而确定要在那一层 lod 采样，而在层与层之间再进行插值就是三线性插值

![image.png](/images/yuqueAssets/FpXwnuigfBpwEF5TPVLflTsWe0sO.png)![image.png](/images/yuqueAssets/Fnyz6hoqlVYRjSeGceK6GgrsgzZ7.png)
![image.png](/images/yuqueAssets/FnfozH2jAIZ2yGJxr9yiwibkxrEj.png)![image.png](/images/yuqueAssets/FkYzjEJMFdl79i7NBTWcK7FEzSSy.png)

各向异性插值相对三线性插值多了两个维度的压缩，允许进行矩形的范围查询

# 几何  [Geometry 1 (Introduction)](https://www.bilibili.com/video/BV1X7411F744?p=10)

## GPU 纹理的应用

![image.png](/images/yuqueAssets/Fo2MGd1HbHE5iGT0-dTeZx5uHJ9v.png)

在现代 GPU 上，纹理 = 一块内存 + 范围查询（滤波）

## 环境光照/天空球

![image.png](/images/yuqueAssets/FsirtEZgIlesuQZlfS9G8OL82X-7.png)![image.png](/images/yuqueAssets/FkbwgG0ChRI_PNl-JTeIdUtMuzog.png)![image.png](/images/yuqueAssets/Fvm2hhYAYdsJbtWbdlAM7R_kKF89.png)![image.png](/images/yuqueAssets/FgifIDZ0i408QkFyyiomMeVN83ow.png)

## 高度/法线

![image.png](/images/yuqueAssets/FpIk6Jsxiypbbu_YuPktnbUZjJk5.png)![image.png](/images/yuqueAssets/Fl1Q_R-3HzBcIfsQRMlPBXq1XKYR.png)![image.png](/images/yuqueAssets/FkKNoaqG2TlkD6IdqveXMI1_rCoE.png) ![image.png](/images/yuqueAssets/FmZsvz81e1Q6ClXMrcHPfgxjl3fw.png)

取高度图 UV 方向上的导数，交换 xy 取负得出法线

![image.png](/images/yuqueAssets/Fq7x9b7LZ1stGYT7N4MmH6pLpUY5.png)![image.png](/images/yuqueAssets/FtTGraIPMxSxuptw7ghjawDzuKt3.png)![image.png](/images/yuqueAssets/FrRJbidK3ewuwHkLN2Z3xzOsaTZw.png)![image.png](/images/yuqueAssets/FtciRvd6Q_YRq2B8lKKTtSBHB0l8.png)

## 几何

![image.png](/images/yuqueAssets/FiknJExRIXbC2QQyM7-sFFG-sZYF.png)![image.png](/images/yuqueAssets/FkdiQyLfV_v0Ec7uYaB3-ik7ExMA.png)
![image.png](/images/yuqueAssets/FgsGWYkKqsM_k-CswjFHPBWid6s5.png)![image.png](/images/yuqueAssets/Fi6IFGNGIZzvLlyhJ1orXXTY1mW0.png)

隐式几何

- 定义他们的关系（三维单位球）
- 不直观（难以想象形状）
- 易于计算（求位置关系）

![image.png](/images/yuqueAssets/FmQK7ArIzm84UWlB_aCqcZ3h0XJ9.png)![image.png](/images/yuqueAssets/FngKUMzIeYfv5tsnbgK6r18odCgC.png)![image.png](/images/yuqueAssets/Fv-0WRGZ62WmsSJWmCdebR89uBg1.png)

显式几何

- 直观（直接给出或参数映射（UV 映射马鞍面））
- 难以计算相对位置

![image.png](/images/yuqueAssets/FrFJi98e4fFlIHshyoZE2_0HWNLJ.png)
![image.png](/images/yuqueAssets/FsQ4g20V6Sk01IuhjHgI6yMKqdMH.png)
![image.png](/images/yuqueAssets/Flq0guJGAoLpcWoGOb4U0eLWxDPd.png)![image.png](/images/yuqueAssets/FrYaEu-NdUtPN6bWkwLn74sbIsGD.png)

代数表面

构造立体几何（CSG）

- 布尔运算

距离函数

- 距离函数表示任意一点到表面的最近距离
- 可以定义方向（内外=正负）
- 几何间的融合

![image.png](/images/yuqueAssets/FmoUa5dlfJb1Arvfzpav2tWbXmtq.png)![image.png](/images/yuqueAssets/FhfhXCaT1ZwfOIq4txt4A1tSjk9m.png)![image.png](/images/yuqueAssets/FtuBFaaBbhuGX6zzOHib4dH9xY5r.png)
![image.png](/images/yuqueAssets/FiZ4X7riaR4XjV5-UUTKp6wcUbq9.png)![image.png](/images/yuqueAssets/Fnd_nv_V1tyjKNCcmRKwNjsTEEk-.png)![image.png](/images/yuqueAssets/FqJWyb0meRU88QoHo2i6IoMc--ig.png)![image.png](/images/yuqueAssets/FoDUJwwKpFyrAoS4FrxLw7Y66WCo.png)

水平集

- 类似于等高线、SDF

分形几何

- 分形（自相似）

![image.png](/images/yuqueAssets/Fhzs5K16tk8wgJUZUg9XL-H_yvRY.png)

# 几何 Geometry 2 (Curves and Surfaces)

## 常见显式几何

![image.png](/images/yuqueAssets/FknTG4IMrO4TiHVI0wi3VW85Fze7.png)![image.png](/images/yuqueAssets/FlQlvLA5oiHwA_totV-ENvogCXS1.png)
![image.png](/images/yuqueAssets/FuGLmjWlG7xt-1pBizzjrJBKyc5n.png)

点云：扫描
polygon

## 贝塞尔曲线

![image.png](/images/yuqueAssets/Fjg1ZwUKGkwmGuAm0vStRP6zpse5.png)
![image.png](/images/yuqueAssets/FgNTG_c0CZ3eLQwNQI68D-OnxyJm.png)![image.png](/images/yuqueAssets/FkrhM42gfBqEwCDB4Bm0RK3Le2TQ.png)![image.png](/images/yuqueAssets/Flb47jmEeZZ-9f3RE1cJ1ywuQHfn.png)![image.png](/images/yuqueAssets/FoqI7lM6870fwjPfID69u6xrIT2N.png)![image.png](/images/yuqueAssets/FhJiCGrUpJqsa828vI5SaaRHWn1A.png)![image.png](/images/yuqueAssets/FtUJHzughlQPvVJhjQVoC_gYmrzK.png)![image.png](/images/yuqueAssets/FjITUMBSGto55D_QooJbav4GhJpk.png)![image.png](/images/yuqueAssets/FhSIsUEwHvYXdrzGAK9RLRaDePKL.png)

Bernstein 多项式：在 n 中从 i 开始求和，图中任意一 t 的 y 轴之和始终为 1

![image.png](/images/yuqueAssets/Fkk9enfgEOhXItQdJ82-JBRX3TfU.png)![image.png](/images/yuqueAssets/FsPv47Qq4w17k3CLj4-KLQh0Gh1n.png)

- 起点终点永远在第一个和最后一个点上
- 开始和结束的方向一定在切线上
- 仿射不变性，对整条曲线应用仿射变换等于对控制点应用
- 凸包性质，曲线一定在控制点形成的凸包（包住钉子的橡皮筋）内

## 分段贝塞尔曲线 Piecewise Bezier Curves

![image.png](/images/yuqueAssets/Fr85ik05uNf-_9DDWH44eIYyI1UT.png)![image.png](/images/yuqueAssets/FvZlwsLW9iOp3rLoXyCH7XCkViYQ.png)

PS 钢笔工具

![image.png](/images/yuqueAssets/FsAXJUnpupW0XtHBbuH6LkoVJWde.png)

![image.png](/images/yuqueAssets/FpI8xxpmoSuF7-JVCi5qlTDIq8GW.png) C0 只要点重合就算连续
![image.png](/images/yuqueAssets/Fpyeo_FrAAFPDIV0S6jbwbjlTU6g.png) C1 要求三点共线且等距（切线方向和大小相等），可导
C2 要求二阶连续

![image.png](/images/yuqueAssets/Fr5xTiHK257hfEmfK8R3qTWBnnQ_.png)![image.png](/images/yuqueAssets/FvSqXBJNK5hDbTUgqZNYT97lM-OP.png)![image.png](/images/yuqueAssets/FoSZBfmSgrAfSQmZrPi_tp485Jv6.png)
[点击查看【bilibili】](https://player.bilibili.com/player.html?bvid=BV1Db411c7M3)

B 样条、非均匀有理 B 样条（NURBS）相对于贝塞尔曲线具有局部性

## 贝塞尔曲面

![image.png](/images/yuqueAssets/FgAdgTpHcQq4f-adwQrTqh7rGjSS.png)![image.png](/images/yuqueAssets/Fu4LB_Oqctc2IZOtN_Hrb6LF03OM.png)![image.png](/images/yuqueAssets/FlhR3qGC74Rc1RAdgJ-IYPVPUW5v.png)
![image.png](/images/yuqueAssets/FriXVYKAMU1Sf2J2G6Rnn6RE8bp_.png)

有 4\*4 个控制点，生成贝塞尔曲面

- 每 4 个控制点生成一条贝塞尔曲线
- 每个时间 t ，取 4 条曲线上的点作为新贝塞尔曲线的控制点
- 连接每条生成的曲线

![image.png](/images/yuqueAssets/FjEjiK8KnaRbYvIprrYckPG8FWZG.png)![image.png](/images/yuqueAssets/FlrGZg5pw4GmGKKpm6oZ73jsY26P.png)

由于需要 2 个 t，可以用 UV 来表示，等于参数映射，所以贝塞尔曲面是显式几何

![image.png](/images/yuqueAssets/FpSks9nKNfSWw_Lzfacmf7wE1s2Z.png)

# 几何  [Geometry 3](https://www.bilibili.com/video/BV1X7411F744?p=12)

## 图灵奖

![image.png](/images/yuqueAssets/Fvf5kN8cwHVZi07_GeW8LM8u4yE6.png)

## 网格细分

![image.png](/images/yuqueAssets/FgEyoG5iMCDUJqh3qzxINy7_Oi3P.png)![image.png](/images/yuqueAssets/FuFnEdrHED3CnYbc_mSpXsHA8X1q.png)![image.png](/images/yuqueAssets/Fso3du0DCaHlCwGuYkvtYwpaeyRJ.png)![image.png](/images/yuqueAssets/Flw_TC6I_hgVbgDOPJfEqB1WCPgd.png)![image.png](/images/yuqueAssets/FjxGzbsjZgv7E0IOkWVaqt1zUCWz.png)

### Loop Subdivision：

- loop 为人名
- 取三角形的三边中点生成新顶点
  - 新顶点的位置取相邻三角形旧顶点位置的加权
- 旧顶点取周围所有旧顶点的加权
  - 周围顶点数量（顶点的**度** **dehree**）越多，自身的权重越少

![image.png](/images/yuqueAssets/Fg-geiU5c9gw4tyvQTpAQiETBwhv.png)![image.png](/images/yuqueAssets/FoUaxqpMYZxCSS-rfMikC3amre8w.png)![image.png](/images/yuqueAssets/FpaLq78XbJvZEFkF_KNt_4nliRzA.png)
![image.png](/images/yuqueAssets/FkntdtNK9xsAvchSykZd4iV8O35r.png)

Catmull-Clark 细分：

- 取每个面的中点与面所有边的中点相连
  - 一次细分会将所有非四边面转换为奇异点，且奇异点之后不再增加
- 之后按一定规则取周围新旧顶点加权

![image.png](/images/yuqueAssets/FtFQY2UkAaozEQy-Who4a8e98GFn.png)

## 网格简化

![image.png](/images/yuqueAssets/FjkmqZOoa-4gLTC-jf7zqyBalm1F.png)![image.png](/images/yuqueAssets/FvK2O2EqfTWqcs5Zw_Bf-ncpOppO.png)![image.png](/images/yuqueAssets/FkAN66kEiTuAApvhtdVkTrZliitW.png)
![image.png](/images/yuqueAssets/FlsKkySoCsrA3SoWfGLlL7x7xAac.png)![image.png](/images/yuqueAssets/FrJfsBLp_fO5CFPL9TR0eqH4N44v.png)

边坍缩的方法
二次误差度量

- 二次指平方
- 坍缩后的点的位置取到之前四条边距离平方的最小值
- 为所有边度量二次误差并取最小值应用坍缩
- 使用**堆**的数据结构允许坍缩一条边后立即更新误差

## 网格正规化

![image.png](/images/yuqueAssets/FqGKWxtaTP9XTuvRrAInm6c4UP8w.png)

## 阴影

![image.png](/images/yuqueAssets/FtQ-DmsAgFwUv7WPO54Ep-RKk-mB.png)![image.png](/images/yuqueAssets/FpwiXdQLXDpOQn6bALRGJGxHs0Ks.png)
![image.png](/images/yuqueAssets/FthKueJjR8CENfFea4t5YjKTJaZM.png)![image.png](/images/yuqueAssets/FilnYL9hA9-SZZPh3wmBQ-nJlOJH.png)![image.png](/images/yuqueAssets/Fts85ZFXZiTP4TMuKxgy5TekiBr3.png)![image.png](/images/yuqueAssets/Fiq6Vn0qlb4y3hJq6zg0F6t_ic_O.png)
![image.png](/images/yuqueAssets/FtVRHjKuzHc0Ed7JF3M8m8z-bsdj.png)![image.png](/images/yuqueAssets/FuDp-sUjruxiCZTpTzPpekooN6dU.png)![image.png](/images/yuqueAssets/FovxtLVWXsffZBFa5Eooi8ee_csc.png)![image.png](/images/yuqueAssets/FglFCzoZtV93Aiwi3hQYunweIGl-.png)![image.png](/images/yuqueAssets/FpVImvAXl8_Wun36nirGiou-Ndou.png)
![image.png](/images/yuqueAssets/FlS19tHsXiDDD_Bs4bDhei-flvl9.png)![image.png](/images/yuqueAssets/FlNQ4pirYZvYXFHk1VcdDFWQVyEC.png)

# 光线追踪 Ray Tracing 1

## Whitted-Style Ray Tracing

![image.png](/images/yuqueAssets/Ft6iZa1Gctf7AmWBRH6NtR7hIy5Q.png)![image.png](/images/yuqueAssets/FhSPdjOwi6E_YB7-maL6y6Y-AOZm.png)

光栅化

- 不能很好表现全局效果（阴影、反射、间接光 etc.）

光线追踪

- 准确
- 慢

![image.png](/images/yuqueAssets/FsjjS3qMqA_3vZw_unNiKiZ7PEO-.png)

光路的可逆性，光从光源经过反射进入眼睛，也可以从眼睛发射光线到达光源

![image.png](/images/yuqueAssets/FtCE3cKwr4rvKiiQamxAuJQYxu7e.png)![image.png](/images/yuqueAssets/FgseeMuq6IuTs8yZq5Ku7l_oQmb-.png)![image.png](/images/yuqueAssets/FvRF5s2Wq4srNncT90aLNJvnslxP.png)![image.png](/images/yuqueAssets/Fo61quIzvLC5r-5DuZZqlOJE25eK.png)

一个像素累计了光线所有交点的着色

## Ray-Surface Intersection

### 隐式表面

![image.png](/images/yuqueAssets/FlS7b-CC8ugZpuO2TS3U-Po51tH8.png)![image.png](/images/yuqueAssets/FnmI0ZlWihpVJwRwi799AcfgY61N.png)![image.png](/images/yuqueAssets/FsuLCyo-Km7zpcN_P1GvJon7pBrw.png)![image.png](/images/yuqueAssets/FpkaJwC5yUj3ImoehujPYSJtJpAD.png)

对于隐式表面用 Ray 和表面的表达式求解，当 t > 0 且为实数则相交

### 显式表面

![image.png](/images/yuqueAssets/Fj2sjyHyOrXSTDYHI3UUEPlu1yVj.png)

在一个**封闭物体**内部发射任意射线，一定会和物体发生**奇数**次相交
在外部发射一定会发生**偶数**次相交![](/images/yuqueAssets/FozyktvVfu7v1HhCHTI1_Qeas2qu.svg)

![image.png](/images/yuqueAssets/Fqjoh9235cMb0jqErP0kLmkpp-uS.png)![image.png](/images/yuqueAssets/FhCF0wFn4Ctl2cUNKbqa0WXEomSj.png)![image.png](/images/yuqueAssets/Ft1vJnM4WRfAhwOeCXLcprVCcTxP.png)

三角形和光线求交

- 平面如何与光线求交
- 交点是否在三角形内

定义一个平面需要定义一个法线和一个点

![image.png](/images/yuqueAssets/FkEEZ4wZ0Rl9B_6R_6qLgQDJRb5Z.png)

**MT(Moller Trumbore)算法**：直接对三角形和光线求交，光线上一点一定等于三角形中心坐标内一点
3 个变量 3 个式子的**线性方程组**，一定有解。中心坐标 3 个系数和为 1 且非负则相交

## Accelerating Ray-Surface Intersection

![image.png](/images/yuqueAssets/FtLkBuHAbhiQFbxvpA3Pg2gouaX2.png)
![image.png](/images/yuqueAssets/FqTeLKPk2-mmqO27KfcUV2B7J602.png)![image.png](/images/yuqueAssets/FvqE3eStb6GwS1Z85nGwZ0eAwsz9.png)![image.png](/images/yuqueAssets/FokGS-a2eVrJgGKSPqkerum4qFDn.png)
![image.png](/images/yuqueAssets/FqR2qo9FtANckeIFpIM3juUDdLag.png)![image.png](/images/yuqueAssets/FqJ2MZVQzXMskRhRI4GSUi5B2r66.png)

加速求交：AABB（轴对齐包围盒）

- 将包围盒看作 3 对面的交集
- 求光线在 3 对面内的最大最小 t
- 当且仅当![image.png](/images/yuqueAssets/FtVdkPjXNx4B5fbg_Ztnq--dVY9S.png)时与 AABB 相交
- 轴对齐的包围盒可以简化射线与平面的相交计算

#   光线追踪 2

## Grids

![image.png](/images/yuqueAssets/FmgwKUTD-ti5Aa1ypGoxZj8gEeb3.png)![image.png](/images/yuqueAssets/FkoFQD8zErOW_fJGhvlyv9SFebIU.png)![image.png](/images/yuqueAssets/Fl8pApWGsaQbedR5z4AaP-sxHuUB.png)![image.png](/images/yuqueAssets/Fi2Pi8SDGvMqFfKsgGtEp2_LyePv.png)![image.png](/images/yuqueAssets/FvE_Cawdew3dOnU4c-F4CRe4WnNP.png)

光线求交的一种加速方法

- 预处理将场景划分为 Grid
- 标记 Grid 内有无物体
- 射线与经过的每个 Grid 求交
- 若为有物体的 Grid 则和物体求交

![image.png](/images/yuqueAssets/FlxEKZzByNdHPSbAoFqc3YeN5KlU.png)

问题：场景比较空，物体分布不均匀，有大量浪费调的求交计算

## Spatial Partitions

![image.png](/images/yuqueAssets/Fjm0zFpRr5L38W65OWSe47oJ4q57.png)![image.png](/images/yuqueAssets/FjDdxUdvvjA7pCTrEjAChc9HlZrL.png)![image.png](/images/yuqueAssets/FvU0hcfkbRerQY5MupGZteRjHRvJ.png)

KD-Tree：

- 类似于八叉树地将场景不断划分为更小的节点
- 当满足某一条件（节点内的物体足够少时）停止划分，形成叶子节点
- 叶子节点内存放具体的要参与碰撞的几何信息
- 中间节点需要存放当前划分的轴向、位置、子节点

求交时：

- 从最根部的节点开始求交
- 若与节点相交则与子节点求交
- 若无子节点则为叶子节点，和内部所有几何求交

## Object Partitions & Bounding Volume Hierarchy (BVH)

![image.png](/images/yuqueAssets/Fojz89hf-q397POeIaNAyFa-DhQE.png)![image.png](/images/yuqueAssets/FtLWzpooS6_whAPVtp9FBPDCbo0E.png)

BVH

- 根据对象划分树
- 对包围盒内的物体分成两个子包围盒
  - 对于一堆无序的三角形快速找到坐标位于中位数的三角形（**快速选择**算法 O(n)）
- 重新计算包围盒

![image.png](/images/yuqueAssets/FpV6yRXdpMJsqnQo0riPm7763bpr.png)
![image.png](/images/yuqueAssets/Fs91Ur1W0UarXNav25qmbtJVMR3g.png)![image.png](/images/yuqueAssets/FmXZuCpjNdkFkZPS27t9JHESZa1q.png)

## 辐射度量学 Radiometry

![image.png](/images/yuqueAssets/Fq57TiJN3pbytQ1_iF56w1PBkMhH.png)![image.png](/images/yuqueAssets/FkVD-YeZYjKwMW5cA-3yPpZ_LCQg.png)
![image.png](/images/yuqueAssets/FiBjBexFKYhRZzig-4MlxJXks2Vm.png)

辐射度量学：定义光的物理属性以及光和表面的作用，PBR 基础

- Radiant flux 辐射通量
- Intensity 强度
- Irradiance 辐照度
- Radiance 辐射率

![image.png](/images/yuqueAssets/FnvcSI3Cze-oz-9xngKDIjxHZmDe.png)

Radiant Energy 辐射能单位：Joule 焦耳
Radiant flux （Power）辐射通量（单位时间内的 Radiant Energy，通常描述**亮度**）单位：lumen 流明

![image.png](/images/yuqueAssets/FsWHZvcHanmB0fNbPKvPeFjujxAD.png)

Intensity：光从光源发射
Irradiance：表面接收的光
Radiance：光沿射线传播

### Intensity（Power）

![image.png](/images/yuqueAssets/FpGB4F_uxNEBjonfqTnqXdabQtsk.png)

Intensity（Power）= 单位立体角（微分立体角）上的 Power = 任意方向上的亮度

![image.png](/images/yuqueAssets/FtnFcDFDyRiDqatmHoUMusW9zNWh.png)

弧长/半径=Radians 弧度
面积/半径平方=Steradians 立体弧度

![image.png](/images/yuqueAssets/Fu7CawYGr6KHeBAv6fG0HwEx-l-_.png)![image.png](/images/yuqueAssets/Fma4x4PPwuDAi86LG8Av-nzdWSOK.png)

空间上的任意方向都可以用球面上的两个角度（经纬、极坐标）表示
![](/images/yuqueAssets/FhLbcAozISryv3Q8JXC-6rgH8N-f.svg)是与竖直方向的夹角
![](/images/yuqueAssets/Fr5qMdvEi52f-THxk7pikMA7OYLc.svg)是在水平面上与正方向的夹角
![](/images/yuqueAssets/FnlHwoqDObnfPHbHx3jSNSz_YxtT.svg)是变化率（无限小）
![](/images/yuqueAssets/FgeunpJYgFqzMO8J8mbzOItSGSnt.svg) ![](/images/yuqueAssets/Fi5Pfi0VHiI1D5QxDei4C6mBuROU.svg)  表示在两个方向极小的变化
变化框出的弧面的面积：![image.png](/images/yuqueAssets/FnB_PLipr01EIYcqEUyD6fnjUt5t.png)
**微分立体角（单位立体角**（任意方向上的立体角）**）**：![image.png](/images/yuqueAssets/Fuga30TsG6a2cOxLabkc2z6EbofC.png)
整个球体的立体弧度：4![](/images/yuqueAssets/Frh4BWxyh4rghAkSAWLaxtJbsrBK.svg)

![image.png](/images/yuqueAssets/FlmuQ1YobwbSX4aFr88r-XIvlAe4.png)![image.png](/images/yuqueAssets/Fnt6ge9VH_WEevFjEt-gGAi5xtVv.png)

定义一个光源的亮度（Power/W/Intensity）
![](/images/yuqueAssets/Fi3NNTC3eBEfU7AKaGWNvoq1_80Y.svg)是单位长度向量
![](/images/yuqueAssets/FunvU9pVAVgRjfo-rT2bQSAhzPCq.svg)是所有方向的总 Intensity
![](/images/yuqueAssets/Fqqz3-CDwE7WrpBlz7qcgTnJNT57.svg)是任意方向的 Intensity

![image.png](/images/yuqueAssets/Fgy5Wqwzl04c5DAScloK7XYNYJZT.png)

### Irradiance

![image.png](/images/yuqueAssets/Fo1wF9suEq3aZrwhug_GSLblLLNL.png)
![image.png](/images/yuqueAssets/FoKdw-YZqm-z_Y3JJY1OVNl7pYce.png)![image.png](/images/yuqueAssets/FkCdC6zGZVvTURscUcFVqTbAS6R4.png)

辐照度：单位面积受到光照之和
注意：只算与表面垂直方向的受光，垂直方向收到非垂直的光则会衰减（投影到垂直方向）

![image.png](/images/yuqueAssets/FrCUqADFbR0PV4vT34VIRUJp28Ta.png)

点光源的光照衰减：光照强度（Power）/ 面积
球面（立体角）以![](/images/yuqueAssets/Fqe2P0btmc89t89KJjw4_ZCM2uAp.svg)扩张，辐照度以![](/images/yuqueAssets/Fqe2P0btmc89t89KJjw4_ZCM2uAp.svg)衰减

### Radiance

![image.png](/images/yuqueAssets/FjQCpqzMkH1izshjVboe0rU3NyrC.png)![image.png](/images/yuqueAssets/Fnj9rODD6vk5XQ_q1caRShTcBSAD.png)

Radiance 辐射率：表面在每单位立体角且单位面积上发射、反射、接收的 Power

![image.png](/images/yuqueAssets/Ft9XYFS71iTMvIE0ehTGKH6F_8xa.png)
![image.png](/images/yuqueAssets/FoXKjNK4KoMUCdYD9kKGSlq8Z-MI.png)![image.png](/images/yuqueAssets/FqLUDFQ2kbKEY9d9RvPG_vMWPsjy.png)

Irradiance 来自各个方向的 power，Radiance 来自特定方向的 power

## Bidirectional Reflectance Distribution Function（BRDF）

![image.png](/images/yuqueAssets/Fq9QDIpeXF9KFM5Nq8PWTbwKyc0E.png)![image.png](/images/yuqueAssets/Fg7pMNszk66pz7NBQTQYGFrvvG-W.png)

双向反射分布函数（BRDF）定义了从每个入射方向反射到每个出射方向的光能
用出射方向的微分 Radiance 除以入射方向的 Radiance

![image.png](/images/yuqueAssets/FrUJIphC-DqeMUVyHkNHf7uJTUna.png)

出射方向的 Radiance 等于所有入射方向 Irradiance 乘以 BRDF 的积分
![image.png](/images/yuqueAssets/FqOBK6hVboJznNikCBKpR9EOkxL8.png)入射 Irradiance
![image.png](/images/yuqueAssets/Fs5oVZ2QVRQxg_KcaIoTqJwmJVIZ.png)入射 Radiance

![image.png](/images/yuqueAssets/Fui2BD4-Fg2oJuTv9rryFJfvrPQr.png)

## Kajiya Rendering Equation

实际渲染中无法求解一个点受到的所有光线
![image.png](/images/yuqueAssets/FsvLSnVsSlDeK7fZic8xAI4GbnB9.png)

##

**Kajiya 渲染方程：**[**https://en.wikipedia.org/wiki/Rendering_equation**](https://en.wikipedia.org/wiki/Rendering_equation)
![](/images/yuqueAssets/Fpz2UIfVOklG_MGHADmR4PgJwnrK.svg)

![image.png](/images/yuqueAssets/Fi2HzSqNUG8OvSDh0-1OggNDMNAK.png)

只有点光源则等于所有光源的 BRDF 结果 \* cos 入射角 之和

![image.png](/images/yuqueAssets/Fl3P6JW-QxLBkIHflNCqI1c8vT7w.png)

用积分计算面光源

![image.png](/images/yuqueAssets/Fpz1FAMudJ_Pz4pSDlkjuRWNnbuF.png)

其他物体反射过来的光可以视为上一次函数计算的结果，也是一种间接光源
![image.png](/images/yuqueAssets/FlS2Ieuw7nlwx-Q5-Nz32g96XX-4.png)
![image.png](/images/yuqueAssets/FqC49eV36BmF88jkYAG_D9U-tJxk.png)

用数学方式简写方程，K 是内核，表示反射

![image.png](/images/yuqueAssets/FmwQD0-VKCjiGOkQhCc1weXkjzXU.png)

进一步写成某种操作符（算子）

![image.png](/images/yuqueAssets/FqptTEftYaxuRHl_InVmHtOuaAGR.png)

**I**为单位矩阵，K 为光线传输矩阵
二项式定理
![image.png](/images/yuqueAssets/FgUqFHFuAecteWe84bLgEE3JB2d1.png)
![](/images/yuqueAssets/Ftf8rFPNgC6U7x_DXMDic5x_NGQW.svg)
所以最终得到
![image.png](/images/yuqueAssets/FtsIyiKc1VQJo07o8G3ug1IaYh6X.png)
正好对应光线弹射次数
不弹射则为 E 自发光，弹射 1 次为 E+KE(上一次反射的结果)，更多同理![image.png](/images/yuqueAssets/Fnu4PmdZcXMUfNNLlC4fcy0DBsrt.png)
弹射一次为直接光照，更多次为间接光照，全部之和为全局光照
光栅化直接能告诉我们的是 0 次和 1 次的结果
![image.png](/images/yuqueAssets/FioMvfa9eKJKVcgU2TOq1tT7yZuq.png)![image.png](/images/yuqueAssets/FtTnX-AWWp5mJ92nJJ8BCzfqwYeD.png)![image.png](/images/yuqueAssets/Fq7Yq5yK6o_VFC4K7wD9lBNS_KFU.png)![image.png](/images/yuqueAssets/Fi72p5iEr8JRPiri5v7UmgS4nyOj.png)
可见光照反射次数越多对画面贡献越小，与方程一致

## 概率论

![image.png](/images/yuqueAssets/FrGEZZdiq1qr1znLU0H56GhfLZZZ.png)![image.png](/images/yuqueAssets/FqmRzd5mwv8ukjECLgQZIb4DAv3r.png)![image.png](/images/yuqueAssets/Fst83Hp-MnmfpqPDR1iTASjiCS55.png)
概念大于等于 0 且和为 1，期望指取一次获得的平均值。
![image.png](/images/yuqueAssets/FhV3gwuc6L0hxliA-AjtKoZWCmj8.png)
**概率密度函数 Probability Distribution Function**
与离散的概率不同，连续的概率指 dX 的 Y 方向上形成的面积与总面积的比
期望是概率密度 \* 值 的积分
![image.png](/images/yuqueAssets/FrAyiwtTH1VJnovHqKtaUBpPic6K.png)
对于一个有随机变量的函数可以用同样的方法求期望

# 光线追踪 4 Path Tracing

## 蒙特卡洛积分 Monte Carlo Integration

![image.png](/images/yuqueAssets/FnL05am8rGtxAqLJYTm2eUyeznZ3.png)
蒙特卡洛积分用来求一个定积分，在 ab 区间内随机采样多次并平均起来作为近似
![image.png](/images/yuqueAssets/FqDcLsoaeq9TMlkQ5gU9WWnTMJuf.png)![image.png](/images/yuqueAssets/FhD1oYpzm-kIDLwBCHN7Qgywjrkz.png)
![image.png](/images/yuqueAssets/Fo9d49lXJZ-sJob14falGuWZFJTS.png)![image.png](/images/yuqueAssets/FkuzEwSIUTh42Z38eRVFszLcc_K8.png)
如果用均匀的概念密度函数去采样![](/images/yuqueAssets/Fmt6UrEIx__eqjw2PEmmgELRjS90.svg)就等于![](/images/yuqueAssets/FjgQLwNgxGth19Fa9p5-SBHQrtJm.svg)
对于任何一个函数 f(x)，定义一个概率密度 p(x)，经过多次采样后平均起来就可以得到近似的定积分
采样数越多越接近真实结果，必须在 x 轴上采样

## Path Tracing

### DIrect Lighting

![image.png](/images/yuqueAssets/Fkm2rGfQDM4GgWDYctwvUBWsEHQE.png)![image.png](/images/yuqueAssets/FtfncVtvnBsP4PCo38jcYIl4mBWY.png)![image.png](/images/yuqueAssets/FuoR4WeMDqA92SLXywUyvhLIcbXx.png)
Whitted 风格 Ray Tracing 一直执行高光反射直到遇到漫反射表面，显然是不正确的
![image.png](/images/yuqueAssets/Fr0zE2HgPyMvrWsCCSUwqBJmRerf.png)
求渲染方程过程中的问题：

- 要求半球上的积分 =>蒙特卡洛
- 递归

![image.png](/images/yuqueAssets/FtKn3WtTfOjgqklRZgJmgPCy7yKT.png)![image.png](/images/yuqueAssets/FlGwLAUpZRnOHZiVqG6h5l5eJf_U.png)
先只考虑一个简单情况，用蒙特卡洛积分求简单场景中的直接光照
求半球上任意入射方向![](/images/yuqueAssets/FrMutNiYylQ2pehjEhUG5k8rse5I.svg)的入射光反射到出射方向![](/images/yuqueAssets/FlPBRkwmARo_WJyrFSpWFEz81i1O.svg)上的 Radiance 的积分
由于只是直接光照，所以入射方向非指向光源则 Radiance 直接为 0
根据蒙特卡洛只需要在半球上均匀地随机采样即可求出结果
![image.png](/images/yuqueAssets/FhvOoiDeFSRC9KQqFQKHuEFsaPcx.png)![image.png](/images/yuqueAssets/FnJmqzqM3YvK9xgBnO9VgNNhFpiC.png)![image.png](/images/yuqueAssets/FjWc3XS0pQGn5QhvWs5Aqj4Ru6fv.png)

### Indirect Lighting / Global Illumination

![image.png](/images/yuqueAssets/Ft_b_W3Qvmrl9oFOKH70BM5NJc8L.png)![image.png](/images/yuqueAssets/FoHEkDQAzf-h6HsjR6gDGkFBgIae.png)
对于一次间接光照，Q 点射向 P 点的光可以看作从 P 点观察 Q 点的直接光照
于是新增了一个递归的分支，如果这个点不是光源则计算这个点的直接光照
![image.png](/images/yuqueAssets/FgIEmYFhxG-VOy6PkrRxfkf84vuw.png)![image.png](/images/yuqueAssets/FgdcifrJF5gjuhm2okHbOZVArsb9.png)
以上的算法最大的问题是计算量指数级增长
将蒙特卡洛积分的采样次数 N 定为 1 可以解决，但同时结果会不准确
N=1 就是 Path Tracing，!=1 是分布式光线追踪
![image.png](/images/yuqueAssets/FhIKQ7H9uD3xPvukjznUIkeYcsHu.png)![image.png](/images/yuqueAssets/FsW598azVfEVjbKb7fXOhNwyYa85.png)
为了使结果更精确，在一个像素内多次采样，对结果取均值，这同时解决了锯齿问题
![image.png](/images/yuqueAssets/FmIf9hKyoHoGSlYfyDgmKewM9_xE.png)![image.png](/images/yuqueAssets/FrtBC7h2LMz7U4ZSSFTOZbpbsNcH.png)
![image.png](/images/yuqueAssets/FoG-sn2YN6CqndEFko8yzepi0xG3.png)![image.png](/images/yuqueAssets/FmfZ8l2B1oUqjwvXNoqSQYtyMrMn.png)
真实世界中光线的反射不计衰减理论上是无限反射的，渲染中反射次数越低损失的能量越多
为了解决光线不能无限反射的问题，引入俄罗斯轮盘赌的概念随机停止反射
设正确结果为 Lo，停止概率为 1 - P，光线着色结果除以 P，如此最后结果期望还是 Lo
也就是停止概率越小，越接近真实，结果补偿越小
![image.png](/images/yuqueAssets/Fqg391ARBDmW5oZ8srhPyNl8Db0a.png)
题外话：
生存概率=p
反射次数的期望为：![](/images/yuqueAssets/FvKBfFm-oR2bSGcykjsD45jCA2Ca.svg)  （？）
0.5=>2    0.8=>20
![image.png](/images/yuqueAssets/Fl36SzvjPDgywyF56n2Ol28hLW3Z.png)
常说的采样率就是 SPP (Samples Per Pixel)，每个像素发射多少 Path

### Sampling the Light

![image.png](/images/yuqueAssets/FtKYpesIne2LF1zDPIJgibj_pmZ8.png)

均匀的 PDF 会使很多光线落空，可以将采样域换成光源进行采样

![image.png](/images/yuqueAssets/FjA0A9M8YfkXDYoJnMJlTHURk8K2.png)
![image.png](/images/yuqueAssets/Fg8-QtgYwpdZ8Tu9GIOHP1F78AiT.png)

将光源投影到半球

![image.png](/images/yuqueAssets/FrXgqHTeLOAS9EmT8dJETt9rzHqB.png)![image.png](/images/yuqueAssets/FjTxLaY37WBblbMAp8K03dWidLJY.png)![image.png](/images/yuqueAssets/Ftaf4dwKdQrcSKJRxfy0n6Dcx_Tr.png)



于是采样分成两种：直接对光源均匀采样、对其他反射部分用以前的方案
采样光源同时要注意可见性

### 关于 Path Tracing

![image.png](/images/yuqueAssets/Ftj-TPCaWKYzylUFb_Ow7lVIlEzI.png)
![image.png](/images/yuqueAssets/Fm4A2kjv6DDdScU6Qyvy06m5TnUN.png)
![image.png](/images/yuqueAssets/Fjyz7fnYK7KMwzcTHmwo2QcgOjJV.png)![image.png](/images/yuqueAssets/FrLiLSIQD83ZEzrHvyc7AwKA5SKv.png)

# 材质 [Materials and Appearances](https://www.bilibili.com/video/BV1X7411F744?p=17)
