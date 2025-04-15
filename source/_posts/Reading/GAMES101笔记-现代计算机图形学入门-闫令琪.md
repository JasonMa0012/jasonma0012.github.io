---
title: GAMES101笔记-现代计算机图形学入门-闫令琪
urlname: mypdxo
date: '2020-04-04 16:05:31'
updated: '2023-06-14 23:27:03'
author: Jason Ma
cover: 'https://cdn.nlark.com/yuque/__latex/0cc175b9c0f1b6a831c399e269772661.svg#card=math&amp;code=a&amp;height=12&amp;width=8'
description: "---title: GAMES101笔记-现代计算机图形学入门-闫令琪---https://player.bilibili.com/player.html?bvid=BV1X7411F744概览\_Overview of Computer Graphics图形学的应用：视频游戏 Video Ga..."
---
[bilibili](https://player.bilibili.com/player.html?bvid=BV1X7411F744)



# 概览 [Overview of Computer Graphics](https://www.bilibili.com/video/BV1X7411F744?p=1)
图形学的应用：

+ 视频游戏 Video Games
    - PBR
    - NPR
+ 电影 Movies
+ 动画 Animations
+ 设计 Design
+ 可视化 Visualization
+ 虚拟现实 Virtual Reality
+ 数字绘图 Digital Illustration
+ 模拟 Simulation
+ GUI
+ 字体 Typography



**We learn Graphics，not Graphics APIs！**

<font style="background-color:#FADB14;"></font>

# <font style="color:#404040;">线性代数 </font>[Review of Linear Algebra](https://www.bilibili.com/video/BV1X7411F744?p=2)
图形学中的向量一般是**列向量**，矩阵可以**左乘**

## Dot Product 点积
![](/images/yuqueAssets/3fa2f0735c13937e7a89eb5edfd6a050.png)



$ \hat{a} $  =  $ \vec a $的单位向量  = a hat



![](/images/yuqueAssets/4115ae5917167e04bc305e7091ed4482.png)

![](/images/yuqueAssets/55e6f24c478163b408d27d64977b381d.png)



向量点乘满足**交换律、结合律、分配律**



![](/images/yuqueAssets/f3aa718e7e71ae18202c3374d9d110a2.png)



点乘可以用来计算向量**夹角**和向量间的**投影**

垂直 $ \perp $ Perpendicular



![](/images/yuqueAssets/5e38af350a1968f411e7cf486eb3a658.png)![](/images/yuqueAssets/eb70df7716014b4514ce969800463974.png)



点乘可以**分解****向量、判断****前后******

## Cross Product 叉积
![](/images/yuqueAssets/da2aca589c94543a4c411398d4f24a32.png)



叉积**垂直**于两条初始向量，叉积方向取决于**右手螺旋法则**，叉积大小 = $ \| a\| \ \| b\| \ \sin \theta  $



![](/images/yuqueAssets/3fbb55f04d81085c56a682a800704533.png)



叉乘可以构建坐标系，$ \vec{x} \times \vec{y} \ =\ +\vec{z} $则说明是右手坐标系



![](/images/yuqueAssets/078ef97d5cd025d1d793aaf1572b6555.png)![](/images/yuqueAssets/1699054fce82affe594260926a69740f.png)![](/images/yuqueAssets/2830d5f6e8263b1a1cfb248be297e231.png)



叉积在图形学中可以判断**左右**和**内外**

左图给定**右手坐标系**，$ \vec{a} \times \vec{b} \ $得到**向上**的向量，说明a在b的**右边**

右图同理，若**ab****在****ap****右侧**且**bc****在****bp****右侧**且**ca****在****cp****右侧**则p在abc**内部**

无论是按顺时针或逆时针输入3个顶点，只要p一直在左侧或者右侧就说明在内部，

**光栅化**将会用到类似原理



![](/images/yuqueAssets/93433158f7820ad2e1133b7fcfebca14.png)



对于3D空间中的任意右手、单位、垂直 UVW坐标系：

p可以表示为p在UVW3个轴上的投影（直接点乘，依据在上面）的和

## Matrix 矩阵
![](/images/yuqueAssets/48058ed5902e245be4566d9004146f0e.png)

![](/images/yuqueAssets/12a7175b50f3e93900b01e30c6d66fac.png)

![](/images/yuqueAssets/9960aa86ade945f0174d695ae09e988d.png)



矩阵乘法不满足交换律



![](/images/yuqueAssets/57b525d476ea5fe6733de2ac9de3a057.png)![](/images/yuqueAssets/61b7a26b3677eb38db42083caef91fdc.png)



矩阵转置是将原矩阵行列互换



![](/images/yuqueAssets/426f1caec02955e53428dc395af33096.png)



矩阵与其逆相乘等于单位矩阵



![](/images/yuqueAssets/d8706bea6620ca067e389c544f871e9b.png)

 



向量点乘叉乘的**矩阵形式**

叉乘的矩阵形式：先将a向量转换成矩阵$ A^* $（**dual matrix**）再与向量相乘

# 变换 [Transformation](https://www.bilibili.com/video/BV1X7411F744?p=3)
## Scale 缩放
![](/images/yuqueAssets/9dae7ecd1adf518c82b70c89aa48f8e7.png)



$ x' $（x **\****prime**）

## Shear 切变
![](/images/yuqueAssets/a338339821009c300caf88d49ea6da12.png)



## Rotation 旋转
![](/images/yuqueAssets/19b69d3739a7c678f9d5c71ad81dc9f7.png)![](/images/yuqueAssets/51fc101021a21a9204ff28c9ba8dfdad.png)



## Linear Transform 线性变换
![](/images/yuqueAssets/763d593c55871ba85e9dfca53401517e.png)



**线性变换**：由**相同维度**的矩阵进行的变换（？？



## Homogeneous Coordinate 齐次坐标
![](/images/yuqueAssets/c6bc5748aee81f2fa920dd6ebc7a57cf.png)



齐次坐标：增加一个维度以复合多种类型的变换



![](/images/yuqueAssets/5deb35d47ea0e483e1e7ea61ff5284dc.png)



规定：

齐次坐标中的点末位为1，向量为0。

若齐次坐标中的**向量末位不为0**，则其代表一个点，**点的坐标为此向量 / 向量末位**

齐次坐标中**两点相加****等于他们的****中点**



## Affine Transformation 仿射变换
![](/images/yuqueAssets/68174714db9acb4340fcceb269272edc.png)



齐次坐标中的矩阵变换**先进行线性变换再进行仿射变换**

****

## 2D 矩阵变换
![](/images/yuqueAssets/ccdc294a9ec4f8a8961c0719b157f5c0.png)



## Inverse 逆变换
![](/images/yuqueAssets/b84200281cf81ccaec3eec30f29f2288.png)![](/images/yuqueAssets/4312b4fdd970bdafe59ad66fe4ed55cf.png)



旋转矩阵的**逆就是其转置**** ****（正交矩阵）**

****

## 复合变换
![](/images/yuqueAssets/070567adcc03e04ef7fbb35ec25261ac.png)![](/images/yuqueAssets/2dbf81b69cf6e41b439362bf1e1866a9.png)



变换的顺序不可交换

多个矩阵应用于向量时，**从最右侧**逐个应用于向量



## 绕某一点旋转、缩放
![](/images/yuqueAssets/510098a798da4ed0cbbd132d78699c14.png)



先移到原点，再进行旋转、缩放，再移回去



## 3D旋转
![](/images/yuqueAssets/7931e17c6cb8dbef4b92ed0264d8bf80.png)



绕y旋转矩阵与xz相反，是由于**循环对称**原理，$ \vec{x} \times \vec{y} =+\vec{z} \ ;\ \vec{y} \times \vec{z} =+\vec{x} \ ;\ \vec{z} \times \vec{x} =+\vec{y} $



![](/images/yuqueAssets/93aa42ee8f82c6e3e08e003305eb6ae9.png)



任意3D旋转都可以表示为绕xyz轴的欧拉角旋转，欧拉角不适合插值，

会有万向节锁，一般软件内部用四元数和矩阵替代欧拉角。



![](/images/yuqueAssets/5f3e07a2393e1142edbcd5266e4ebce1.png)



Rodrigues旋转公式：**绕任意轴旋转**，Unity有封装



![](/images/yuqueAssets/6c92b93ffc11f2eb8e5642d0cf0235f9.png)![](/images/yuqueAssets/1f6ef0e4eb87739d18fef2fb6ee874b0.png)

## Viewing 变换
![](/images/yuqueAssets/5f79b485160c602d1affa3984dd975fb.png)![](/images/yuqueAssets/b4d07d433a79e9ea04a186531c348a1c.png)![](/images/yuqueAssets/4cd470e7b6710f02b78051cfdd5dc759.png)



View矩阵

将相机移动到原点并看向-z

将相机旋转到标准坐标的矩阵可以用旋转到相机角度的矩阵的逆



## Projection Transformation 投影变换
![](/images/yuqueAssets/d4839ae63c30d9701c2ce9798f545151.png)![](/images/yuqueAssets/3d4a0f6a1e81c8923786f1ef59af5f2f.png)![](/images/yuqueAssets/250d1a968f405f5097b881650618736c.png)



变换到**标准化设备坐标（****NDC****）**坐标内



![](/images/yuqueAssets/a6c2fdfbcfcaa5afad79d358b54d2e61.png)



**正交投影矩阵**：先移动到原点，再缩放到NDC（暂时忽略旋转）



![](/images/yuqueAssets/44786cae01a7a900e63a79032bfc7e48.png)

![](/images/yuqueAssets/475f8163d923f0d670edc9b964e0bdb1.png)



透视投影

先将远裁剪面“压扁”为近裁面大小，其中近裁面不变，远裁面中心点不变，然后进行正交投影



![](/images/yuqueAssets/324a44a48a22abfcd2edcf588e1c67f1.png)



由于近裁面和远裁面构成相似三角形，所以 $ y':y=n:z $



![](/images/yuqueAssets/387747f2f138609736a7c07713f871b5.png)![](/images/yuqueAssets/eac7ddf4c73d386d9a3b1b31f8c9c96a.png)



可以推出压扁矩阵的一部分

z的部分进行观察：



![](/images/yuqueAssets/cc1908ae5020fec5004706db6316c3a9.png)![](/images/yuqueAssets/70deb9bacc6228aad36aa8260cc1f80c.png)![](/images/yuqueAssets/fbd84458e09e1c3368791c3ab3cbbad6.png)



**远近裁面**上应用矩阵后z不变，故得出以下方程：



![](/images/yuqueAssets/3fd178352b5123b457b21aa6f80545a0.png)



带入得到压扁矩阵：

$ \begin{pmatrix}
n & 0 & 0 & 0\\
0 & n & 0 & 0\\
0 & 0 & n+f & -nf\\
0 & 0 & 1 & 0
\end{pmatrix} $

之后带入n、f和nf中点的值，计算得出中点经过压扁后会**朝远裁面移动**

然后将压扁矩阵与正交投影矩阵复合得到透视投影矩阵



![](/images/yuqueAssets/0992e30e4c99c70908635520e6d4fe77.png)

# 光栅化 [Rasterization 1 (Triangles)](https://www.bilibili.com/video/BV1X7411F744?p=5)
## 视锥
![](/images/yuqueAssets/9b63bb506fece0267f5be6c4bc810e15.png)

![](/images/yuqueAssets/28b00e8e177d539ef26d5a3488708c5d.png)



定义透视投影视锥需要：

FOVY，垂直可视角度；Aspect Ratio 长宽比；远近裁面距离

## 视口
![](/images/yuqueAssets/1e0cf69d072a5bc78a2073519c74bde8.png)

![](/images/yuqueAssets/1d66ac2490def83d2d77a2a57690efad.png)

![](/images/yuqueAssets/6dd359e98eafb288d7e1d56742c7fd3f.png)



视口变换：将NDC缩放、平移到屏幕空间

## 三角形
![](/images/yuqueAssets/f42a765679c66da3d269a5b6afb35964.png)



三角形在图形学中的特性：

+ 所有多边形的基础
+ 任意多边形都可以拆解为三角形
+ 在一个平面内
+ 定义清晰的内部
+ 顶点之间易于插值

## 采样
![](/images/yuqueAssets/19d5de4d1fcd832829265649498f957e.png)

![](/images/yuqueAssets/e617b3c1abf55194a6d9034e3e4da0d1.png)![](/images/yuqueAssets/e12429e12c196b4997edb902e94f5640.png)



采样 Sample：求函数某一点的值，采样可以离散一个函数

用像素中心对三角形采样，判断是否在三角形内

叉乘可以判断内外，见上文



![](/images/yuqueAssets/a655e2b655dbd0fee4aa4cd1ed6d8beb.png)![](/images/yuqueAssets/624f42f716fca842c4fa21fc360e84c4.png)



只有三角形包围盒内的像素需要判断（AABB 轴向对齐包围盒 <font style="color:#D6D3CD;background-color:#181A1B;">Axis-aligned bounding box</font>）

可以每行判断最小最大以在某些情况下优化

光栅化采样的同时会产生锯齿

# 光栅化 Rasterization 2 (Antialiasing and Z-Buffering)
## 抗锯齿/反走样1
![](/images/yuqueAssets/f4bb2ebf9fea28bbfee0c7c1daff119a.png)

![](/images/yuqueAssets/12b6b19dd32b91e7b513996f63c336f1.png)![](/images/yuqueAssets/ee95703f3bb25c61a51428b9fea82667.png)![](/images/yuqueAssets/b50b2ca469c5f336b50a7921bf142253.png)

![](/images/yuqueAssets/936162e21c6fc604c459af6f40985058.png)



Artifact：走样（锯齿、摩尔纹、车轮倒转……）

是由于信号变化太快而采样速度跟不上导致



![](/images/yuqueAssets/a8431ae1b99399d9fff1081a34ab3183.png)

![](/images/yuqueAssets/2150d06e2fe1f1bcded26dc7da551ad0.png)

![](/images/yuqueAssets/acc693c5e23c82ed9606d2d184ec0271.png)



可以通过采样前进行模糊的方法抗锯齿，而先采样后模糊则达不到效果

## 频域 Frequency Domain
![](/images/yuqueAssets/9d23c1e017cedb82c7caf8b75a85fd01.png)



$ f $=2=频率，$ f $=$ \frac{1}{T} $=导数=<font style="color:#404040;">周期</font>

<font style="color:#404040;">空域/时域 相当于平时所接触的图像</font>

<font style="color:#404040;"></font>

![](/images/yuqueAssets/1fd9395baa6d6b6612cca1ae743d698b.png)

![](/images/yuqueAssets/5abb3f05e89e546fc8667973fe3b4df5.png)

![](/images/yuqueAssets/09ac99c421e59081b9495d42f966815d.png)

<font style="color:#404040;"></font>

<font style="color:#404040;">傅里叶级数展开：将一个函数描述为正弦余弦的和</font>

<font style="color:#404040;">不同的正弦余弦本质是不同的频率</font>

<font style="color:#404040;">采样的频率越低而函数频率越高则采样结果失真越严重</font>

<font style="color:#404040;"></font>

![](/images/yuqueAssets/19c963407524ddb471f8cde04d5fe60d.png)

<font style="color:#404040;"></font>

<font style="color:#404040;">走样的定义：两种完全不同的函数的采样结果完全相同</font>

<font style="color:#404040;"></font>

## <font style="color:#404040;">滤波 Filtering</font>
![](/images/yuqueAssets/05c219a89a561ea1eb42e4adeb9d1696.png)

![](/images/yuqueAssets/2872d21b9559f07d873de0f8cbcd7435.png)

![](/images/yuqueAssets/15ead06b8036f58e66e3ca8d7d5e2cd8.png)

![](/images/yuqueAssets/2b95974ef69389cd8174af54afec2d7c.png)

![](/images/yuqueAssets/a51463bcb2522d2de95f3c1e431ed279.png)

<font style="color:#404040;"></font>

<font style="color:#404040;">滤波：删除某些特定的频率</font>

图像的频率：像素间的差异越小则频率越低，反之越高，也就是边界处的频率最高

High-pass filter 高通滤波器：只让高频部分通过，反之低通滤波器，可以提取图像的边缘或者模糊图像



卷积 Convolution



![](/images/yuqueAssets/8ab82e318049d90c1bc5b4eaed760668.png)



滤波=卷积=平均



![](/images/yuqueAssets/efa457bc3223bb332dbff82aa57cf77f.png)

![](/images/yuqueAssets/2e935ace2f71386312e131be54ee4091.png)

<font style="color:#404040;"></font>

<font style="color:#404040;">图形学中的卷积=对图像（信号）应用一个滤波器（卷积核）得到结果</font>

<font style="color:#404040;"></font>

![](/images/yuqueAssets/8665f476edef2d62aa1a953c2de2081b.png)<font style="color:#404040;"></font>

![](/images/yuqueAssets/cc60ceaf57b2a272986d41a9cf149c50.png)

<font style="color:#404040;"></font>

时域（图像）上的卷积相当于频域上的乘积

对图像进行卷积=对频率应用低通滤波器=模糊



![](/images/yuqueAssets/24e7e8b5c4ff9deb2917dfde5ffa2a79.png)![](/images/yuqueAssets/548746ed860e5cb077c1a5b11a08f53c.png)



越大的卷积核图像越模糊，对应的频率越低

## 采样 Sampling
![](/images/yuqueAssets/00ff7cdb38afbdf371da7437a3c99bfe.png)

![](/images/yuqueAssets/e44e09fbe0de5004577a27510db87f90.png)





时域上采样等于在频域上重复原始信号的频谱

而走样则是因为采样率太低，频谱间隔太小造成的重叠

## 抗锯齿/反走样2
![](/images/yuqueAssets/54bc641c80cee5d42fe2400ca95b96ee.png)

![](/images/yuqueAssets/08cb689624f32f7c5ec2907d7b4058fc.png)



反走样

+ 增加采样率
+ 低通滤波（先去掉高频再采样）



![](/images/yuqueAssets/d3752593417277e74197d9d39ee20f62.png)

![](/images/yuqueAssets/ea5f7e573dc8b033e31bc92fe70d8a2a.png)



在一个像素内卷积，三角形覆盖的面积作为像素亮度（不易执行）



![](/images/yuqueAssets/f483d08778f6b696eeef7f2636725dc2.png)![](/images/yuqueAssets/2a2407ef578ca53646f06f27fd90d422.png)

![](/images/yuqueAssets/5c99cf2cea0f8389248d5e3c9bd14b1e.png)![](/images/yuqueAssets/784771ec51ca81f67b62e73819f788a0.png)

![](/images/yuqueAssets/f08de81d8a27238fed42b8ce305527ff.png)

# 着色 Shading 1 (Illumination, Shading and  Graphics Pipeline)
## Z-Buffer
![](/images/yuqueAssets/3f456915f7bccd1328334dd141b7fc33.png)![](/images/yuqueAssets/0ffe4b2c55bb3aebe56f8ecdce011ca3.png)

![](/images/yuqueAssets/d349f92c54010caf56662b49f45524a5.png)![](/images/yuqueAssets/510c6234d2b7f517d99b65c22bc732d5.png)

![](/images/yuqueAssets/291ccf58e26a0e327d38d18992e8c7be.png)

## Shading
![](/images/yuqueAssets/5ae19f9162d991b402543e973b58b9f0.png)![](/images/yuqueAssets/076fdc4ed3e2a344f2bb765953b64e57.png)

![](/images/yuqueAssets/53ebbdb9df0c7ebddbe7c7330979baf5.png)![](/images/yuqueAssets/07427abaedeafe78c1c7b933456d9681.png)

![](/images/yuqueAssets/7bec80b037ed0fca8d5b7078377b8d8e.png)

# 着色 Shading 2 (Shading, Pipeline and Texture Mapping)
![](/images/yuqueAssets/20d0789c54d522261a9a42a54a7790db.png)![](/images/yuqueAssets/23ed9295ec10895e2dd55f50c30316f1.png)

![](/images/yuqueAssets/f406dd1749b23999fe6f55494b703111.png)![](/images/yuqueAssets/628979452d05c8a13fea4f16f2ffd43c.png)

![](/images/yuqueAssets/459c3e8cf7db6e2e52d5d6a3b86524b1.png)![](/images/yuqueAssets/0169a298dd1c4a2ffe5e913c82058c48.png)



![](/images/yuqueAssets/8d0b9434d2f54bc19a521d2963417001.png)

![](/images/yuqueAssets/b44f0d465f9fc94e903f08a12bd5500f.png)

![](/images/yuqueAssets/9a7ad4490d98f8d5be4a5427b9d7540a.png)![](/images/yuqueAssets/bd3f7f24d32ab39833ccc2d463846bef.png)

![](/images/yuqueAssets/2d005126b4499ad65b1bd8583d0ffe32.png)

![](/images/yuqueAssets/3be59e27a089371bea71e925ba7ac72f.png)

![](/images/yuqueAssets/ba5048ab1ed0b2f0e506a3cf61584f5e.png)

![](/images/yuqueAssets/bc14df616fb20596a73644e947dbe198.png)

![](/images/yuqueAssets/3f61b8ce52ed43d9e49245acf4749a4c.png)

# Shading 3 (Texture Mapping Cont.)
## 重心坐标
![](/images/yuqueAssets/10b93648d609214dead166ab995c8f7a.png)![](/images/yuqueAssets/fcebf8a15f29c05798e2d00681c9d6c2.png)



对于三角形内任意点都可以用三个点的坐标的线性组合来表示，$ \alpha \geqslant 0\ \&\ \beta \geqslant 0\ \&\ \gamma \geqslant 0 $时在三角形内部

![](/images/yuqueAssets/1401a71d4a539c9d9d5bacdf5baa14d4.png)![](/images/yuqueAssets/5493281395ec8415c1f5f52ba116a311.png)

面积比可以求出重心坐标，用点对面（不相邻的三角形）的三角形的面积除以总面积则为此点重心坐标

![](/images/yuqueAssets/56ab8b8261034205f8613e37343451b0.png)三角形的重心为1/3



![](/images/yuqueAssets/0d73c88a7cbbb1f9b8adefe27172cbbb.png)![](/images/yuqueAssets/107dd3ddfe5c976e363f9879ab059009.png)



对于三角形内任意一点都可以计算其重心坐标，利用重心坐标对属性进行插值。注意：**投影后的重心坐标将改变，三维中的属性应在三维中插值**

****

## 纹理插值采样
****

![](/images/yuqueAssets/ea766740934b4c62c32341c71d44e662.png)

![](/images/yuqueAssets/5ce7573e4febdda1215eff101cb4762d.png)

![](/images/yuqueAssets/3de4ed529929715131a850418826a993.png)![](/images/yuqueAssets/49f876b453dcb7a41c6125624e0b1e2f.png)



双线性插值：采样时用水平和竖直方向与纹素的相对位置进行颜色线性插值



![](/images/yuqueAssets/6e5dcad5eeaf87f7b5bf35fa6dbabf8a.png)

![](/images/yuqueAssets/f09224e178f7dd431b6b578a72b315da.png)

## MipMap
![](/images/yuqueAssets/5cf68ab4e7f58d6f70a9e74ca7b983f1.png)

![](/images/yuqueAssets/fe123c8a2925a4080fc114bd4673fdba.png)

![](/images/yuqueAssets/fe51a3bc77b8b9c35b81f8082bf6c34d.png)



point sample：点查询

插值，求均值：范围查询

为解决远处一个像素覆盖过多纹素导致的锯齿，需要使用预计算的范围查询：MipMap（Image Pyramid）

每一级lod为上一级分辨率的1/4，总共需要额外的1/3存储空间，可以将3张贴图级其mipmap刚好存在一张贴图上。



![](/images/yuqueAssets/dff7c14f4362d196334f2941e779cbcc.png)![](/images/yuqueAssets/39b1b6bfa87fb2f9e4e72e11a40ec34c.png)![](/images/yuqueAssets/88224fdc27f3f3de8c984f3d3261608a.png)![](/images/yuqueAssets/68634351f92bdd98acf376d50e718dd9.png)



可以使用ddx ddy确定uv在两个方向上的导数/变化率，从而确定要在那一层lod采样，而在层与层之间再进行插值就是三线性插值



![](/images/yuqueAssets/4cb64a52b52e1a669c93af9a89e6860f.png)![](/images/yuqueAssets/74184797d3db3e7087511efb8149e4ab.png)

![](/images/yuqueAssets/33c15c750e7db739441af258cf0dbfac.png)![](/images/yuqueAssets/fdee22695d273add36ab7ce6086febe5.png)



各向异性插值相对三线性插值多了两个维度的压缩，允许进行矩形的范围查询



# 几何 [Geometry 1 (Introduction)](https://www.bilibili.com/video/BV1X7411F744?p=10)
## GPU纹理的应用
![](/images/yuqueAssets/68eb5a8987e3156ebe55bd7a3e89df6d.png)



在现代GPU上，纹理 = 一块内存 + 范围查询（滤波）



## <font style="color:#404040;">环境光照/天空球</font>


![](/images/yuqueAssets/f16dd189aca15dbbe3ce576a4c2335ed.png)![](/images/yuqueAssets/0a54a6df2e726cdd4b402b0acf85ca1e.png)![](/images/yuqueAssets/acee11bd511aff320d65e64bd634ecc1.png)![](/images/yuqueAssets/b3cbdc0c38ee6f13757045262c3d9255.png)



## 高度/法线


![](/images/yuqueAssets/c73551ba3bebe06f03e10a031f3278ba.png)![](/images/yuqueAssets/bd94f8c0e173d80c6b8b04e809d0f73a.png)![](/images/yuqueAssets/5d60a310b85680fc3d7c79886c05b733.png) ![](/images/yuqueAssets/402c6ee03adfcab373e39a4a0a1d5c40.png)



取高度图UV方向上的导数，交换xy取负得出法线



![](/images/yuqueAssets/9814207c56f1b9213c5d8d3e7d6bed2f.png)![](/images/yuqueAssets/ea347a8730fb0b4e5f550e6dac81941e.png)![](/images/yuqueAssets/b230fcab2d3ce18709cb5cbac1009c50.png)![](/images/yuqueAssets/69d872c0ce5a6dd136b861b068fd0fff.png)



## 几何
![](/images/yuqueAssets/c97874432d459c0492542b2c2670e20f.png)![](/images/yuqueAssets/f6e58b7efb7c00db5e21fba6da5ff1e0.png)

![](/images/yuqueAssets/483bec26802d31fda830dee1c60606cc.png)![](/images/yuqueAssets/53d64cb06b95fe9c8d6a1efd0b1ed30c.png)



隐式几何

+ 定义他们的关系（三维单位球）
+ 不直观（难以想象形状）
+ 易于计算（求位置关系）



![](/images/yuqueAssets/1e61b7a3174e2f885588dde1cc910f3a.png)![](/images/yuqueAssets/40f1cdfed128e0a41d8d344ce196da6f.png)![](/images/yuqueAssets/02e99d98f67bdfe38763febbbd4dd921.png)



显式几何

+ 直观（直接给出或参数映射（UV映射马鞍面））
+ 难以计算相对位置



![](/images/yuqueAssets/b341b91bd14ae581a6128a73d78a9e76.png)

![](/images/yuqueAssets/ff2b5e6a77e947d5dd501c9f9ea78e7a.png)

![](/images/yuqueAssets/7ea6393e0048168988edb3562e482d86.png)![](/images/yuqueAssets/c171edd4b8ad4cd691ea1568af27520f.png)



代数表面



构造立体几何（CSG）

+ 布尔运算



距离函数

+ 距离函数表示任意一点到表面的最近距离
+ 可以定义方向（内外=正负）
+ 几何间的融合



![](/images/yuqueAssets/4414e7b30ac8195dbc2d5ab588b7e4d1.png)![](/images/yuqueAssets/29b5732f82fced9898c62acb3fb15baf.png)![](/images/yuqueAssets/f4bdd92d64afaf6942ecb4013e7cbdf3.png)

![](/images/yuqueAssets/903775c9d311ca1849aaa2f2eaee80a3.png)![](/images/yuqueAssets/7569db7c9a30d14c1938d21495fdaeed.png)![](/images/yuqueAssets/1da006a218534aecaef5d58308760393.png)![](/images/yuqueAssets/1107c64bc4ceb5a52cf25f1af0b5f85b.png)



水平集

+ 类似于等高线、SDF



分形几何

+ 分形（自相似）



![](/images/yuqueAssets/1f4799441b5c00aff3a368aa531a06eb.png)

# 几何 Geometry 2 (Curves and Surfaces)
## 常见显式几何
![](/images/yuqueAssets/cbee30f55dd0624d67750d2d15c1517e.png)![](/images/yuqueAssets/ec9b10c69c453189462ad18f8c996403.png)

![](/images/yuqueAssets/970107229c3aaaf0cf52881c0348dfda.png)



点云：扫描

polygon

## 贝塞尔曲线
![](/images/yuqueAssets/cb05f9f0048e0e5ff18065650ac21504.png)

![](/images/yuqueAssets/4b5b9fe74c57ecd138b514d5989111d5.png)![](/images/yuqueAssets/1a195102ef7ce68ad3d2b139e15235fa.png)![](/images/yuqueAssets/e6c01716b6eb6f0857cbab1e25eec643.png)![](/images/yuqueAssets/544bdeacd7200be543eaa60c0f61a378.png)![](/images/yuqueAssets/55ed86508257dd5b8a6d74b86fd35014.png)![](/images/yuqueAssets/a6b5aaad9ee9e1f2defe34d8cb9c399c.png)![](/images/yuqueAssets/abe602ec12ea4cd109a269c217d8c6c7.png)![](/images/yuqueAssets/19147a1dd6e56455a426785ca1eda9d3.png)



Bernstein多项式：在 n 中从 i 开始求和，图中任意一 t 的 y 轴之和始终为 1



![](/images/yuqueAssets/540a2991da07f23e225a262ef89713b4.png)![](/images/yuqueAssets/01265563c72fe0d4c83563120caf13aa.png)



+ 起点终点永远在第一个和最后一个点上
+ 开始和结束的方向一定在切线上
+ 仿射不变性，对整条曲线应用仿射变换等于对控制点应用
+ 凸包性质，曲线一定在控制点形成的凸包（包住钉子的橡皮筋）内



## 分段贝塞尔曲线 Piecewise Bezier Curves
![](/images/yuqueAssets/fac5f0dfb82517755165d507089ad024.png)![](/images/yuqueAssets/acfa36c797c0b025179db9a9ba798dab.png)



PS钢笔工具



![](/images/yuqueAssets/4331b9473721618e0a87099dc2532daf.png)



![](/images/yuqueAssets/5da27262e9a2caad573e0deb1ce5fe17.png) C0 只要点重合就算连续

![](/images/yuqueAssets/7fa3b5f926754db6163ab90177110c00.png) C1 要求三点共线且等距（切线方向和大小相等），可导

C2 要求二阶连续



![](/images/yuqueAssets/e1132a7c1cc301fb8ade5adf2161a98a.png)![](/images/yuqueAssets/afe2ac6d0fa347bc231a4c09f3526b42.png)![](/images/yuqueAssets/8bf643d534ab9be7a5b9e96e2f250b01.png)

[bilibili](https://player.bilibili.com/player.html?bvid=BV1Db411c7M3)



B样条、非均匀有理B样条（NURBS）相对于贝塞尔曲线具有局部性



## 贝塞尔曲面
![](/images/yuqueAssets/b44a2debc311102f693e36502fbe0850.png)![](/images/yuqueAssets/65db5811e773b067fc8d2e431a29443a.png)![](/images/yuqueAssets/a64f0e69e111fec924a8b68917352610.png)

![](/images/yuqueAssets/eeb0e987fedbc5b3551211e0a9c8643d.png)



有4*4个控制点，生成贝塞尔曲面

+ 每4个控制点生成一条贝塞尔曲线
+ 每个时间 t ，取4条曲线上的点作为新贝塞尔曲线的控制点
+ 连接每条生成的曲线



![](/images/yuqueAssets/786ef9286de3c6200c3f7ee680bffe31.png)![](/images/yuqueAssets/ce8802c2544c436782c5066a7a31626e.png)



由于需要2个t，可以用UV来表示，等于参数映射，所以贝塞尔曲面是显式几何



![](/images/yuqueAssets/4b82da3f3d6302e6d151eb924dff54d2.png)



# 几何 [Geometry 3](https://www.bilibili.com/video/BV1X7411F744?p=12)
## 图灵奖
![](/images/yuqueAssets/a29e6f6517bb28b5d1373e20620b7654.png)

## 网格细分
![](/images/yuqueAssets/f045d4f3d4261638d88d6f8b20fd3f45.png)![](/images/yuqueAssets/f79f761f739c3894325c00c3e29e3cfa.png)![](/images/yuqueAssets/66390c1668ce20ec941283c24f25e05a.png)![](/images/yuqueAssets/a76c4c1073f4fd788ec2b25fa275a3ee.png)![](/images/yuqueAssets/44a2bd26e4cc2c0e73b26ae78851321f.png)



### Loop Subdivision：
+ loop为人名
+ 取三角形的三边中点生成新顶点
    - 新顶点的位置取相邻三角形旧顶点位置的加权
+ 旧顶点取周围所有旧顶点的加权
    - 周围顶点数量（顶点的**度** **dehree**）越多，自身的权重越少 



![](/images/yuqueAssets/3fca5bc1e76e050795adc75cbbb2618c.png)![](/images/yuqueAssets/935c05eabad0f14c318cd160c5bbb63d.png)![](/images/yuqueAssets/b3d9cb038f2d839900b8456af9d59f46.png)

![](/images/yuqueAssets/adfdd28b6f9e08a468e5df91d3bf3037.png)



Catmull-Clark细分：

+ 取每个面的中点与面所有边的中点相连
    - 一次细分会将所有非四边面转换为奇异点，且奇异点之后不再增加
+ 之后按一定规则取周围新旧顶点加权



![](/images/yuqueAssets/63735f913cfae6a963888d8226071e3e.png)



## 网格简化
![](/images/yuqueAssets/0eb4bb603b83340ae777d10f26a8f925.png)![](/images/yuqueAssets/b5a81c8545532666d48b3669ae95fb67.png)![](/images/yuqueAssets/04b51970bb8118a064838d0f12a2e565.png)

![](/images/yuqueAssets/81f2164fe2d7cbf5618ee095290282b0.png)![](/images/yuqueAssets/317a0f01528453225d09fe8e3b1a4553.png)



边坍缩的方法

二次误差度量

+ 二次指平方
+ 坍缩后的点的位置取到之前四条边距离平方的最小值
+ 为所有边度量二次误差并取最小值应用坍缩
+ 使用**堆**的数据结构允许坍缩一条边后立即更新误差

## 网格正规化
![](/images/yuqueAssets/33c68f78aea2af76dd7961de2dcbe3b3.png)



## 阴影
![](/images/yuqueAssets/5e39937708809d7608277c30b87c64eb.png)![](/images/yuqueAssets/2abed2d7e4a553185249bd566fc289ff.png)

![](/images/yuqueAssets/716e434d3ce8c0f61ba5d9ce2aa08955.png)![](/images/yuqueAssets/7d1d5f21a7e276b40dfff4eb264388dd.png)![](/images/yuqueAssets/c294f39ff738aea1144b061eae2d5081.png)![](/images/yuqueAssets/9571963a2eb0378437bc269fa9e78f3e.png)

![](/images/yuqueAssets/5310f673a498f07efb7ea96662ef1fb0.png)![](/images/yuqueAssets/6727133f3648ccfe4cf94757279ee3ea.png)![](/images/yuqueAssets/c179708237967837c9af88b2047f6022.png)![](/images/yuqueAssets/b6b1e59bb299cc21ca580a4f194ee88f.png)![](/images/yuqueAssets/06a031c1b7bb51de465939fda4b6f4c1.png)

![](/images/yuqueAssets/19ef09f099e7cc899a495191f065bd2e.png)![](/images/yuqueAssets/8d59f23936f097db442f2bf68e7601d2.png)



# 光线追踪 Ray Tracing 1
## Whitted-Style Ray Tracing
![](/images/yuqueAssets/9fcb116cd73088c9e606d6fc80e38a6e.png)![](/images/yuqueAssets/ed23545bf9f06058c29ec53ce2eee132.png)



光栅化

+ 不能很好表现全局效果（阴影、反射、间接光etc.）

光线追踪

+ 准确
+ 慢



![](/images/yuqueAssets/1a682a1b8095fedab0cf49d2187049d8.png)



光路的可逆性，光从光源经过反射进入眼睛，也可以从眼睛发射光线到达光源



![](/images/yuqueAssets/ab5775168c1a82c8cc725327fc127860.png)![](/images/yuqueAssets/44c1234437a121cf3f8357cae14ec17e.png)![](/images/yuqueAssets/81721d02370b1b18e1a8954b646ee6b8.png)![](/images/yuqueAssets/074d0b60d4fcc05c45749615abd99cf2.png)



一个像素累计了光线所有交点的着色



## Ray-Surface Intersection
### 隐式表面
![](/images/yuqueAssets/690eb529e9dbe94688fe1e1d03ae5dd9.png)![](/images/yuqueAssets/0455317b6c895fbf2db7b8083809386a.png)![](/images/yuqueAssets/12ba6896bb4b9add586a36224085f3b0.png)![](/images/yuqueAssets/71527352dd4e0c7d95b16059afe5c6fe.png)



对于隐式表面用Ray和表面的表达式求解，当t > 0且为实数则相交



### 显式表面
![](/images/yuqueAssets/dc8b3efcda72f1e58e20b0c0aa84de7e.png)



在一个**封闭物体**内部发射任意射线，一定会和物体发生**奇数**次相交

在外部发射一定会发生**偶数**次相交$ xyz\sqrt{} \Theta  $



![](/images/yuqueAssets/91a41a4fc18123362bb87522fb11af3e.png)![](/images/yuqueAssets/b83c0d5ccc6a8a5461cc9ffa1c533668.png)![](/images/yuqueAssets/4fe43ed6e8a475560b9caf73086c3a82.png)



三角形和光线求交

+ 平面如何与光线求交
+ 交点是否在三角形内

定义一个平面需要定义一个法线和一个点



![](/images/yuqueAssets/fc91f5654e26200a2da96659f43e6f8d.png)



**MT(Moller Trumbore)算法**：直接对三角形和光线求交，光线上一点一定等于三角形中心坐标内一点

3个变量3个式子的**线性方程组**，一定有解。中心坐标3个系数和为1且非负则相交



## Accelerating Ray-Surface Intersection
![](/images/yuqueAssets/9e6d9f3cb02de202e2daf649eb97acc4.png)

![](/images/yuqueAssets/6a954a65f6fc643ae0e3d1b1ec3bee33.png)![](/images/yuqueAssets/36b8d496dee00b0b98f9fe4c028ad991.png)![](/images/yuqueAssets/c4073eb7939e7b52bc04a4c6e1cd339e.png)

![](/images/yuqueAssets/d351a6a0fefa0425c8a5638e7cd854b7.png)![](/images/yuqueAssets/1b857e4fcdd7cfaab7c4f877bf0b7936.png)



加速求交：AABB（轴对齐包围盒）

+ 将包围盒看作3对面的交集
+ 求光线在3对面内的最大最小 t
+ 当且仅当![](/images/yuqueAssets/76c3278ca9bcb0024a0781a3f3b12dfe.png)时与AABB相交
+ 轴对齐的包围盒可以简化射线与平面的相交计算



#  光线追踪2
## Grids
![](/images/yuqueAssets/b2da9144dcdb9956f167854209239f24.png)![](/images/yuqueAssets/3fd2054e97f02e7d597108305cdd32f7.png)![](/images/yuqueAssets/8c69118d0fabf8ed0a6d7b7c3c0c48e3.png)![](/images/yuqueAssets/e4cc8d17b16b93496206056512434a8a.png)![](/images/yuqueAssets/596aeed745cc76ca911a22538f686caf.png)



光线求交的一种加速方法

+ 预处理将场景划分为Grid
+ 标记Grid内有无物体
+ 射线与经过的每个Grid求交
+ 若为有物体的Grid则和物体求交



![](/images/yuqueAssets/0996f6dd49e022b442bcc68be41eacd0.png)



问题：场景比较空，物体分布不均匀，有大量浪费调的求交计算

## Spatial Partitions
![](/images/yuqueAssets/30b2108d68abfbeb02ae32ff8ed2450e.png)![](/images/yuqueAssets/d50b7bcad0be099f0eb3124fae251581.png)![](/images/yuqueAssets/90d8d2990c618d36f11a1f1104a14d6a.png)



KD-Tree：

+ 类似于八叉树地将场景不断划分为更小的节点
+ 当满足某一条件（节点内的物体足够少时）停止划分，形成叶子节点
+ 叶子节点内存放具体的要参与碰撞的几何信息
+ 中间节点需要存放当前划分的轴向、位置、子节点

求交时：

+ 从最根部的节点开始求交
+ 若与节点相交则与子节点求交
+ 若无子节点则为叶子节点，和内部所有几何求交



## Object Partitions & Bounding Volume Hierarchy (BVH)
![](/images/yuqueAssets/4ba813095a72e1425698469dc19be06e.png)![](/images/yuqueAssets/ab7cea3b863d09ae89a3cf5a61db92d7.png)





BVH

+ 根据对象划分树
+ 对包围盒内的物体分成两个子包围盒
    - 对于一堆无序的三角形快速找到坐标位于中位数的三角形（**快速选择**算法 O(n)）
+ 重新计算包围盒



![](/images/yuqueAssets/0b889bf2f809fc7e078dda9b87ec7a0e.png)

![](/images/yuqueAssets/62f0df6ecd7514860bd93a7c76126aba.png)![](/images/yuqueAssets/340efc2d067bc30754d61ccb442421d6.png)







## 辐射度量学 Radiometry
![](/images/yuqueAssets/9e91e3a95abec8642c52578c77927c69.png)![](/images/yuqueAssets/c18491f3882b113ac5bb88813866bd53.png)

![](/images/yuqueAssets/6071bc00f1f5d2c0d31ffda0eade41cf.png)



辐射度量学：定义光的物理属性以及光和表面的作用，PBR基础

+ <font style="color:#333333;background-color:#F7F8FA;">Radiant flux 辐射通量</font>
+ <font style="color:#333333;background-color:#F7F8FA;">Intensity 强度</font>
+ <font style="color:#333333;background-color:#F7F8FA;">Irradiance 辐照度</font>
+ <font style="color:#333333;background-color:#F7F8FA;">Radiance 辐射率</font>

<font style="color:#333333;background-color:#F7F8FA;"></font>

![](/images/yuqueAssets/5151405c8e979bf8b597d54a8cba6173.png)

<font style="color:#333333;background-color:#F7F8FA;"></font>

<font style="color:#333333;background-color:#F7F8FA;">Radiant Energy辐射能单位：Joule 焦耳</font>

<font style="color:#404040;background-color:#F7F8FA;">Radiant flux （Power）辐射通量（单位时间内的</font><font style="color:#404040;background-color:#F7F8FA;">Radiant Energy，通常描述</font>**<font style="color:#404040;background-color:#F7F8FA;">亮度</font>**<font style="color:#404040;background-color:#F7F8FA;">）单位：lumen 流明</font>

<font style="color:#404040;background-color:#F7F8FA;"></font>

![](/images/yuqueAssets/99d05e8a7d06fdd68607ff839af77013.png)

<font style="color:#404040;background-color:#F7F8FA;"></font>

<font style="color:#404040;background-color:#F7F8FA;">Intensity：光从光源发射</font>

<font style="color:#404040;background-color:#F7F8FA;">Irradiance：表面接收的光</font>

<font style="color:#404040;background-color:#F7F8FA;">Radiance：光沿射线传播</font>

<font style="color:#404040;background-color:#F7F8FA;"></font>

### <font style="color:#404040;">Intensity（Power）</font>
<font style="color:#404040;background-color:#F7F8FA;"></font>

![](/images/yuqueAssets/94f9bd24cb765448dff8798b1b903e8f.png)

<font style="color:#404040;background-color:#F7F8FA;"></font>

<font style="color:#404040;background-color:#F7F8FA;">Intensity（Power）= 单位立体角（微分立体角）上的Power = 任意方向上的亮度</font>

<font style="color:#404040;background-color:#F7F8FA;"></font>

![](/images/yuqueAssets/66da499d2c473c1791815b9203f879b4.png)

<font style="color:#404040;background-color:#F7F8FA;"></font>

<font style="color:#404040;background-color:#F7F8FA;">弧长/半径=Radians 弧度</font>

<font style="color:#404040;background-color:#F7F8FA;">面积/半径平方=</font>Steradians 立体弧度



![](/images/yuqueAssets/cbbd92e619e9ecff2e4ddc41ec6d9484.png)![](/images/yuqueAssets/df63b1f2bf67c42e52ccbaf9169e7d61.png)



空间上的任意方向都可以用球面上的两个角度（经纬、极坐标）表示

$ \theta $是与竖直方向的夹角

$ \ph $是在水平面上与正方向的夹角

$ d $是变化率（无限小）

$ d\theta $<font style="color:#404040;"> </font>$ d\phi $<font style="color:#404040;"> 表示在两个方向极小的变化</font>

变化框出的弧面的面积：![](/images/yuqueAssets/1a8a03dc28d8e00d5e1550c4b44da514.png)

**微分立体角（单位立体角**（任意方向上的立体角）**）**：![](/images/yuqueAssets/4a4786fda64a2d4f11cca3028b0db69e.png)

整个球体的立体弧度：4$ \pi $ 



![](/images/yuqueAssets/c14cf270d808cd405cb11b471ec60a94.png)![](/images/yuqueAssets/739f8ade0e0e8e597bf0df9b1525bb41.png)



定义一个光源的亮度（Power/W/Intensity）

$ \omega  $是单位长度向量

$ \Phi  $是所有方向的总Intensity

$ I
 $是任意方向的Intensity



![](/images/yuqueAssets/d8ac521b8e636105333ee0ec869b97ec.png)



### Irradiance
![](/images/yuqueAssets/68fb9f98b2ac6192dfb7c8731eeafae7.png)

![](/images/yuqueAssets/0c3549c3959f823c962894cdb889add5.png)![](/images/yuqueAssets/6e5a26870f6ff2ea90b91bacea3940e1.png)



辐照度：单位面积受到光照之和

注意：只算与表面垂直方向的受光，垂直方向收到非垂直的光则会衰减（投影到垂直方向）



![](/images/yuqueAssets/f31474803a890799a59155149b4961c3.png)



点光源的光照衰减：光照强度（Power）/ 面积

球面（立体角）以$ r^2 $扩张，辐照度以$ r^2 $衰减



### Radiance
![](/images/yuqueAssets/0079d30ab3b0401353bebde59462692a.png)![](/images/yuqueAssets/cf6901db7aada24b35bb20fd2d8bc1f4.png)



Radiance 辐射率：表面在每单位立体角且单位面积上发射、反射、接收的Power



![](/images/yuqueAssets/28992ecd3a44d4b1c19e8e5438611099.png)

![](/images/yuqueAssets/d54385006dc38ff8a52021dc13138e9e.png)![](/images/yuqueAssets/c32c3d3c12eaba85ee8227384bd90947.png)



Irradiance来自各个方向的power，Radiance来自特定方向的power



## Bidirectional Reflectance Distribution Function（BRDF）
![](/images/yuqueAssets/f970357b1bc62533cc3c9cfdb7b46e80.png)![](/images/yuqueAssets/f4a5b46fbda17541d9128c5a75438f5d.png)



双向反射分布函数（BRDF）定义了从每个入射方向反射到每个出射方向的光能

用出射方向的微分<font style="color:#404040;">Radiance除以入射方向的</font><font style="color:#404040;">Radiance </font>

<font style="color:#404040;"></font>

![](/images/yuqueAssets/b73496659721a398c698bd657c01f7a3.png)



出射方向的Radiance等于所有入射方向<font style="color:#404040;">Irradiance</font>乘以BRDF的积分

![](/images/yuqueAssets/d4d58775b9b3e41eb7aa092c209b4ef7.png)<font style="color:#404040;">入射Irradiance</font>

![](/images/yuqueAssets/b36c7996a88170c30ef503848f5d942b.png)入射Radiance



![](/images/yuqueAssets/b02bc4df8aa3cb57e230fad15125371a.png)

## <font style="color:#404040;">Kajiya Rendering Equation</font>


实际渲染中无法求解一个点受到的所有光线

![](/images/yuqueAssets/e6094486e9da08d0dc9348da24e9c5c0.png)

## 
**Kajiya渲染方程：**[**https://en.wikipedia.org/wiki/Rendering_equation**](https://en.wikipedia.org/wiki/Rendering_equation)****

$ {\displaystyle L_{\text{o}}(\mathbf {x} ,\omega _{\text{o}},\lambda ,t)=L_{\text{e}}(\mathbf {x} ,\omega _{\text{o}},\lambda ,t)\ +\int _{\Omega }f_{\text{r}}(\mathbf {x} ,\omega _{\text{i}},\omega _{\text{o}},\lambda ,t)L_{\text{i}}(\mathbf {x} ,\omega _{\text{i}},\lambda ,t)(\omega _{\text{i}}\cdot \mathbf {n} )\operatorname {d} \omega _{\text{i}}} $

****

![](/images/yuqueAssets/1e50ac254b61d5fbf346a4ff8eee02b9.png)

****

只有点光源则等于所有光源的BRDF结果 * cos入射角 之和

****

![](/images/yuqueAssets/fa580ead3966ad28dbc1a23966e04e4f.png)

****

用积分计算面光源



![](/images/yuqueAssets/52d01772356cbb506b5965b5c0904510.png)



其他物体反射过来的光可以视为上一次函数计算的结果，也是一种间接光源

![](/images/yuqueAssets/aa1f182324aa16adc2b9bce2f432e6a1.png)

![](/images/yuqueAssets/7998b2ddc1f08b1f7d1c0c94307351e7.png)

****

用数学方式简写方程，K是内核，表示反射

****

![](/images/yuqueAssets/387c3360a90a5463719e895045e92c3e.png)



进一步写成某种操作符（算子）

****

![](/images/yuqueAssets/f5527e6127ecedc5a014b2c6c7fe994f.png)

****

**I**为单位矩阵，K为光线传输矩阵

二项式定理

![](/images/yuqueAssets/958b3a7f3a2b782940b1f1f9e2b54ba7.png)

$ \frac{1}{1-x} =1+x+x^{2} +x^{3} +... $

所以最终得到

![](/images/yuqueAssets/582331e5999d613c10cb2461cbe09f36.png)

正好对应光线弹射次数

不弹射则为E 自发光，弹射1次为E+KE(上一次反射的结果)，更多同理![](/images/yuqueAssets/c6fb59e8decef3d18253bea11b6806d0.png)

弹射一次为直接光照，更多次为间接光照，全部之和为全局光照

光栅化直接能告诉我们的是0次和1次的结果

![](/images/yuqueAssets/0a10394cce4cc4caf8312c60b809ac84.png)![](/images/yuqueAssets/6664ec0d86bddd6227ae8f9513114a95.png)![](/images/yuqueAssets/9f50346a097fa6b8629d4e37307840c1.png)![](/images/yuqueAssets/e19d1181cce0ecec4572b5eb7708a654.png)

可见光照反射次数越多对画面贡献越小，与方程一致



## 概率论
![](/images/yuqueAssets/17bd1eb44994554cba29d45aea2250ca.png)![](/images/yuqueAssets/ccc7a81abb1e065a900ca7c02624d34a.png)![](/images/yuqueAssets/0720016279d50fca9628518b4ce45248.png)

概念大于等于0且和为1，期望指取一次获得的平均值。

![](/images/yuqueAssets/d2af7867e51388cc67c3c7ba140051d8.png)

**<font style="color:#D6D3CD;background-color:#181A1B;">概率密度函数 </font>****Probability Distribution Function**

与离散的概率不同，连续的概率指dX的Y方向上形成的面积与总面积的比

期望是概率密度 * 值 的积分

![](/images/yuqueAssets/2dd804d157d726314d0160def0ffd883.png)

对于一个有随机变量的函数可以用同样的方法求期望

# 光线追踪4 Path Tracing
## 蒙特卡洛积分 Monte Carlo Integration
![](/images/yuqueAssets/4cd3498345ba1bd0699bf9d097db5a42.png)

蒙特卡洛积分用来求一个定积分，在ab区间内随机采样多次并平均起来作为近似

![](/images/yuqueAssets/b4d2c0621c5ec7398babb9afe4daf435.png)![](/images/yuqueAssets/a9537551285ce8a3d4b5c73f47e68db5.png)

![](/images/yuqueAssets/28af710e2e259301583af94eecb09e58.png)![](/images/yuqueAssets/0c60d88487f479447e4342ead01061cd.png)

如果用均匀的概念密度函数去采样$ p(x) $就等于$ \frac 1 {b-a} $

对于任何一个函数f(x)，定义一个概率密度p(x)，经过多次采样后平均起来就可以得到近似的定积分

采样数越多越接近真实结果，必须在x轴上采样

## Path Tracing
### DIrect Lighting
![](/images/yuqueAssets/a1a3e1aa70c0e78488ede73763c86c62.png)![](/images/yuqueAssets/2fb62f4bcf62a846f59d70bd7f0aac20.png)![](/images/yuqueAssets/17e8e3409711e1a587e67c183222b4f3.png)

Whitted风格Ray Tracing一直执行高光反射直到遇到漫反射表面，显然是不正确的

![](/images/yuqueAssets/e8fa68a35a503b495e4c9f71d6619e61.png)

求渲染方程过程中的问题：

+ 要求半球上的积分 =>蒙特卡洛
+ 递归

![](/images/yuqueAssets/a8bfc0c05964fda7095aadc4f8f2af07.png)![](/images/yuqueAssets/6852af30da73ff9a70741ee62a036f5d.png)

先只考虑一个简单情况，用蒙特卡洛积分求简单场景中的直接光照

求半球上任意入射方向$ \omega _{i} $的入射光反射到出射方向$ \omega _{o} $上的Radiance的积分

由于只是直接光照，所以入射方向非指向光源则Radiance直接为0

根据蒙特卡洛只需要在半球上均匀地随机采样即可求出结果

![](/images/yuqueAssets/41f8ab47e3535cdf741c1b7dcfc2fc72.png)![](/images/yuqueAssets/869b1f06163fd4757b35e83e18219adc.png)![](/images/yuqueAssets/c4172732a55aceb6e012978a86e23030.png)

### Indirect Lighting / Global Illumination
![](/images/yuqueAssets/dbe3da1fcd99000a38f4e265baedb15a.png)![](/images/yuqueAssets/6feb47f659f41aa47f47feed63caa8ba.png)

对于一次间接光照，Q点射向P点的光可以看作从P点观察Q点的直接光照

于是新增了一个递归的分支，如果这个点不是光源则计算这个点的直接光照

![](/images/yuqueAssets/d0083b3279297e0c0425e9252fb2a735.png)![](/images/yuqueAssets/306fc3996dd42298ce4844acffb836c8.png)

以上的算法最大的问题是计算量指数级增长

将蒙特卡洛积分的采样次数N定为1可以解决，但同时结果会不准确

N=1就是Path Tracing，!=1是分布式光线追踪

![](/images/yuqueAssets/2843bb033136f9f6db9362eb48dd0bf2.png)![](/images/yuqueAssets/6aa7b58523f68ecb5ed600b7f7e6d64e.png)

为了使结果更精确，在一个像素内多次采样，对结果取均值，这同时解决了锯齿问题

![](/images/yuqueAssets/125f8724110fe76c54b83866bbb87d69.png)![](/images/yuqueAssets/192125f0f4099aad9b7b5b10c538d4a0.png)

![](/images/yuqueAssets/29486ba9f1c26db3d2580f0b03f77189.png)![](/images/yuqueAssets/4bd9bd6832f69f66c8f0ba1c45fedb73.png)

真实世界中光线的反射不计衰减理论上是无限反射的，渲染中反射次数越低损失的能量越多

为了解决光线不能无限反射的问题，引入俄罗斯轮盘赌的概念随机停止反射

设正确结果为Lo，停止概率为1 -  P，光线着色结果除以P，如此最后结果期望还是Lo

也就是停止概率越小，越接近真实，结果补偿越小

![](/images/yuqueAssets/63a8539d7b26d605852fd5ee42e8690c.png)

题外话：

生存概率=p

反射次数的期望为：$ \sum ^{\infty }_{i=1} ip^{i} $   （？）

0.5=>2    0.8=>20

![](/images/yuqueAssets/95320818c28dafa3829cd95ecbc2d198.png)

常说的采样率就是SPP (Samples Per Pixel)，每个像素发射多少Path

### Sampling the Light
![](/images/yuqueAssets/9d56a74d13f35c29718fc1095bd21243.png)



均匀的PDF会使很多光线落空，可以将采样域换成光源进行采样



![](/images/yuqueAssets/fca2a544159f8d04b32889d466600b6e.png)

![](/images/yuqueAssets/29fbeab67800e588b0a0b16f6e269c1f.png)



将光源投影到半球



![](/images/yuqueAssets/82aa65575836336a68a309996cb6d1a2.png)![](/images/yuqueAssets/23ee66a3c1cfdc0b003ad85b63ef2638.png)![](/images/yuqueAssets/771ea26cd2e9ca6ec09a2197d5e1c8b0.png)

                            



于是采样分成两种：直接对光源均匀采样、对其他反射部分用以前的方案

采样光源同时要注意可见性

### 关于Path Tracing


![](/images/yuqueAssets/f02368571d52a4c1d4e54e921bc90647.png)

![](/images/yuqueAssets/4d9f8fa3ebedad15275c5c37c765b18d.png)

![](/images/yuqueAssets/cdc3bb9580fd4be39593b721f80a9540.png)![](/images/yuqueAssets/228b59bc9f3801958f164ac868c920bd.png)

# 材质 [Materials and Appearances](https://www.bilibili.com/video/BV1X7411F744?p=17)


