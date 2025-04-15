---
title: 吴恩达 Convolutional Neural Networks
urlname: kzxl93
date: '2022-03-31 19:20:15'
updated: '2023-06-14 23:23:38'
author: Jason Ma
categories:
  - Reading
---
[bilibili](https://player.bilibili.com/player.html?bvid=BV1FT4y1E74V&p=108&page=108)



# 1.1 计算机视觉
![](/images/yuqueAssets/de733713e9efd31b0b05d98edf1f7318.png)

![](/images/yuqueAssets/5d9b0a5a6656bb91c758fe5151215514.png)

# 1.2 边缘检测示例
![](/images/yuqueAssets/842e1397f27992e9db7a8e2d354eb9af.png)

![](/images/yuqueAssets/9da9a2b1edc288c3517bfeab38c1c098.png)![](/images/yuqueAssets/69eb3ed70f3d28b805f500273d06ba33.png)

# 1.3 更多的边缘检测内容
![](/images/yuqueAssets/c5358108ab0f345e715dd9f5ff6c6a61.png)

![](/images/yuqueAssets/2347b27425f641ef14dcdc2e56d9ec99.png)![](/images/yuqueAssets/6ea0d01d0b22f3a995c52d1d97bb1687.png)

可以将卷积核作为参数，让机器学习去决定卷积核

# 1.4 Padding
![](/images/yuqueAssets/ce4a73dd7b7149252ef8322a34e34345.png)![](/images/yuqueAssets/f6d6c1a65aed1fd953cb2998d2bacebe.png)

为了平等地对待周围的像素，需要在图像外侧填充p个像素

图像分辨率=n*n，卷积核=f*f，填充像素数p=(f-1)/2

Valid卷积：不进行填充，Same卷积：进行填充

# 1.5 卷积步长 <font style="color:rgb(31, 31, 31);">Strided Convolutions</font>
![](/images/yuqueAssets/dd69a0912d628d8aed15ec872e1330e4.png)![](/images/yuqueAssets/74a4c68841e56cb3bd5d29f79387ea2e.png)

## 原图 n*n，卷积核f*f，填充p，步长（Stride）s，输出分辨率：(n+2p-f)/s + 1向下取整
![](/images/yuqueAssets/3a97ba366fc6d2f9be985541010ebbf3.png)

数学中的卷积和卷积神经网络中的卷积严格意义上是两种不同的运算

信号处理中的卷积需要对卷积核做一次沿左下角到右上角的翻转，目的是使卷积满足结合律

卷积神经网络中“卷积”严格来说是cross-correlation，是为了提取图像的特征，其实只借鉴了“加权求和”的特点

# 1.6 三维卷积 Convolutions Over Volume
![](/images/yuqueAssets/f796fd286d469857640c57025d27ed1b.png)![](/images/yuqueAssets/c1a61d540f9d456b81195c89ce4130c4.png)![](/images/yuqueAssets/1c9cf8c5a004314633b8ec908cbadb85.png)

3D卷积就是同时将输入和卷积核扩展到多个channel，输出还是2D图像

此时可以将多个卷积核的结果堆叠在一起

# 1.7 单层卷积网络
![](/images/yuqueAssets/5e6c82bc2b0a266c32ef0c6e112748f6.png)![](/images/yuqueAssets/a98b2c82a557a49d9edc0a1a48c294a8.png)![](/images/yuqueAssets/3f79448476bb8f8a843eb091b3c0c202.png)

# 1.8 简单卷积网络示例
![](/images/yuqueAssets/1b23c0d840668768bee06b20f87f7d65.png)

![](/images/yuqueAssets/50f9f1affe375d7575d902bec69cb869.png)

# 1.9 池化层 Pooling Layers
![](/images/yuqueAssets/b41590ca4c992d276f56e29c28eda760.png)![](/images/yuqueAssets/acac1b4d5159903d833173706fe78ee1.png)

Max Pooling也是一种卷积，不过输入和输出的通道数相同，可以理解为从输入中提取一些特征

![](/images/yuqueAssets/759f7ebacc597ed9dbc191fffe09ecfd.png)![](/images/yuqueAssets/766e4dfcd3544e32735da379860c6344.png)

Average Pooling用的比较少，一个典型的用例是n很小，nc很大时，用均值池化输出1*1*nc

# 1.10 卷积神经网络示例
![](/images/yuqueAssets/60ee8aa435a61505a0d3eed5926a645b.png)

超参数很多，尽量不要自己设置超参数，去看paper里别人用了哪些超参数

![](/images/yuqueAssets/227adb6dbf5af8fcdcb8ba897f66a33c.png)

Activation Size随着层数减少，是一个将局部细节组合成大的特征的过程，减少得太快也会影响整体性能

## 补充：LeNet-5
[经典CNN模型LeNet解读](https://zhuanlan.zhihu.com/p/41736894)

# 1.11 为什么使用卷积
![](/images/yuqueAssets/b667084f72f8664a85ee2b3d30088203.png)![](/images/yuqueAssets/34bb6e61f9345342be4ab8088f7e468d.png)

CNN通过参数复用（同一个卷积核用在任何分辨率的图上）、稀疏连接（一个output只和卷积核覆盖的那几个输入有关）减少参数，减少过拟合

CNN还有很好的平移不变性（Translation Invariance）

![](/images/yuqueAssets/24cb7e13a01c51069788e4b1017a9863.png)![](/images/yuqueAssets/1005279a7eb7a6aed830392713ffdc7c.png)

# 2.1 为什么要进行实例探究
![](/images/yuqueAssets/1fa2fdbe45bf28b60d11c1e046ce706c.png)

# 2.2 经典网络
![](/images/yuqueAssets/d0574d11609efe879ec7f93b99b51fd6.png)

![](/images/yuqueAssets/49ef38cbed19fce61e8b12b6a5069120.png)

![](/images/yuqueAssets/70614341e2964c8823e0049f98cbe41f.png)

经典VGG 16结构通常分辨率会每层递减一倍，通道数每层递增一倍

其实是有一些道理的，一开始的通道比较少，因为3*3像素内的可能性比较有限，所以只有64个filter，第二层经过降采样，3*3相对于覆盖了6*6的范围，可能性增加了，所以filter数量翻了倍

# 2.3 残差网络 ResNets <font style="color:rgb(200, 195, 188);background-color:rgb(24, 26, 27);">Residual Network</font>
非常深的网络很难训练，因为存在梯度消失和梯度爆炸问题，ResNets可以跳过一些层从而训练更深的网络

![](/images/yuqueAssets/587f94dba3ef0a168fe17e27857a5871.png)![](/images/yuqueAssets/84dc71aeca27ae0c32535fa65efc1477.png)

随着层数的增加，普通网络的性能反而下降，而残差网络能保持性能提升

# 2.4 残差网络为什么有用
![](/images/yuqueAssets/45e6cd0ee0f98d8e68fbcd8cccf31571.png)

即使捷径间的L层遇到了最坏的情况，ReLU=0，那么L+1层的输入也会是L-1的输出，所以残差网络至少不会减少网络的性能，在此基础上可以提升网络的性能

![](/images/yuqueAssets/49320dd1909336f312c620255e666a7b.png)

当添加残差的头和尾的维度不一样的时候，可以使用乘以一个Ws将头尾的维度保持一致，就可以直接进行矩阵计算了。。实际过程中，一般都是维度不同就不使用残差

# 2.5 网络中的网络以及1*1卷积
![](/images/yuqueAssets/27d3799b813ae240c7d0ae515d658630.png)

1*1*nc的filter可以看作一个全连接的神经元，同层有多个filter相当于多个神经元

![](/images/yuqueAssets/691b234481ed4c42e654bcca4d2dd10a.png)

也可以压缩nc

# <font style="color:rgb(31, 31, 31);">2.6 Google Inception Network Motivation</font>
![](/images/yuqueAssets/ecf4f33f79e1d8c2e825858052a34094.png)

Inception层列出所有可能，让网络自己决定用那些filter，问题在于计算量太大

![](/images/yuqueAssets/48958a94c768b1db93b1a4f2c799e61b.png)![](/images/yuqueAssets/8e15769a3719560a18232c4a9a5c4765.png)

通过1*1的瓶颈层压缩参数和计算量，设置合理的情况下不会影响网络性能

# 2.7 <font style="color:rgb(31, 31, 31);">Inception Network</font>
![](/images/yuqueAssets/6384f956aad0cd3317535bda84567dd0.png)

![](/images/yuqueAssets/3266c1797706c915a3b6d77c54ec3fd8.png)

GooLeNet

中间额外的两个output层在训练时起到了正则化的作用，反之过拟合，确保中间层参与了目标识别

![](/images/yuqueAssets/3c914b8cf00f450742779edbe0ea3196.png)

Inception 盗梦空间

# 2.9 MobileNet
## Depthwise Separable Convolution
![](/images/yuqueAssets/29a182af6fc6e912145518b22f2a1c68.png)

![](/images/yuqueAssets/f760664d04b8f9b2bd89a8d5db5d7589.png)

![](/images/yuqueAssets/a5ac31b2c99c56bddd15c82c0449546f.png)![](/images/yuqueAssets/1f1be3470fac6df6bec810e362ca4ac5.png)![](/images/yuqueAssets/4446a689eba05a1c5876ac33a7b015e8.png)![](/images/yuqueAssets/bb2ce6baab28b844207b9a3f5dc45f16.png)

深度可分离卷积把普通卷积拆分成了逐深度（Depthwise）卷积和逐点（Pointwise）卷积，计算量下降了一个量级，有点像blur拆分横竖两个pass

# 2.10 MobileNet Architecture
![](/images/yuqueAssets/b86bc5b4b8540f67497266323726e5da.png)![](/images/yuqueAssets/4ab9d7f3a863eea6a8fa3ad5e0576073.png)

MobNet V2在两个瓶颈层之间先扩充，然后卷积，最后再投影回瓶颈层维度

由于中间的计算过程不会保存，所以可以节省内存

又因为扩充操作带来了更多参数，模型可以学到更多东西

# 2.11 EfficientNet
![](/images/yuqueAssets/dc30248ee439be8c724a38832835b32b.png)

EfficientNet可以解决如何调整分辨率、深度（层数）、宽度（Filter数）使得目标设备上的性能达标的问题

# 2.12 迁移学习 Transfer Learning
![](/images/yuqueAssets/dd3587ed87ba7930bb0c2f0b55cfa5d0.png)

使用别人开源、训练好的参数作为初始化可以大大加快进度

在训练好的模型的基础上迁移学习，手上的数据越多可训练的层数越多

# 2.13 数据扩充 Data Augmentation
![](/images/yuqueAssets/e0e65c57db65ffde15956e0bf30dfd9c.png)![](/images/yuqueAssets/0de3bd8b626ece058ec2875644db2e3d.png)

PCA可以适应有不同颜色倾向的图，为什么不试试先转换到其他色彩空间呢？

![](/images/yuqueAssets/e132eb90d07bc578fa0f7f5445582cff.png)

# 2.14 计算机视觉现状
![](/images/yuqueAssets/f5d6bc177a9185bea913c81dcae72e80.png)

计算机视觉的数据较少时，可以选择：

+ 迁移学习
+ 手工标记数据
+ 针对性地设计网络

工业中要训练网络很多时候得先训练一批人专门标记数据

![](/images/yuqueAssets/354899c012bfece3e31f4a16828da71c.png)

在竞赛中有用的技巧

![](/images/yuqueAssets/37e558bba4c8992433efbb70557bc7ee.png)

# 2.15 作业
## Residual Networks
Identity block. Skip connection "skips over" 3 layers.

![](/images/yuqueAssets/c56e9042b9ba3bba6357cee891be1e86.png)

The Convolutional Block![](/images/yuqueAssets/bb8bf68dd439bc74bbd41359fbf8ce09.png)

ResNet-50 model

![](/images/yuqueAssets/52f8fa773b373be3fe2e667b52c6e10f.png)

SIGNS dataset

![](/images/yuqueAssets/50e70ff2a5b9ab68cc28cf58180eff92.png)

+ Very deep "plain" networks don't work in practice because vanishing gradients make them hard to train.
+ Skip connections help address the Vanishing Gradient problem. They also make it easy for a ResNet block to learn an identity function.
+ There are two main types of blocks: The **identity block** and the **convolutional block**.
+ Very deep Residual Networks are built by stacking these blocks together.

## Transfer Learning with MobileNet
# 3.1 目标定位
![](/images/yuqueAssets/862d47c94b310a733fcfce148326ea47.png)

![](/images/yuqueAssets/c2b2fdbdac5037a1268eb6691b59e43b.png)![](/images/yuqueAssets/1a6fcffcc37594c6794eff4b58980f48.png)

目标定位的输出复杂一些，要输出分类的同时输出boundingbox的坐标和宽高

对于只有0和1的输出使用logistics loss，坐标用平方差

# 3.2 特征点检测
![](/images/yuqueAssets/6fcad09d9bfb8afb6f4b9d4682d11ffb.png)

通过添加输出来获取我们要的信息，当然，训练集得提前标注好

# 3.3 目标检测
## Sliding Window
![](/images/yuqueAssets/7c8465088295f02b597452cf90197365.png)

![](/images/yuqueAssets/c3dbd03091c5d06fc0e75d7940492615.png)

# 3.4 卷积的滑动窗口实现
![](/images/yuqueAssets/e70c4f86cd2ae71a3ca45265c459c0d7.png)

为了使整个CNN适应不同分辨率，需要将最后FC层转换成卷积层

![](/images/yuqueAssets/900d97bfc1f3aafa05179315bc53c9ce.png)

当输入更大的图片时，相当于对其使用Sliding Window检测，也就是所谓的平移不变性

![](/images/yuqueAssets/8d6b69e97bd639317429eb1e5b19dc65.png)

# 3.5 BoundingBox预测
![](/images/yuqueAssets/cc219333cc3c732dbab93064978fde57.png)

最简单的YOLO算法，将图片分为多个chunk，每个chunk可以检测一个物体并输出其BB，按物体中心判断属于哪个chunk

![](/images/yuqueAssets/e7967415fc586613d92f4058b8e84045.png)

# 3.6 交并比 Intersection-Over-Union
![](/images/yuqueAssets/84b2af3d871d46a0f70d4be10bed4b17.png)

# 3.7 非极大值抑制 Non-max Suppression
![](/images/yuqueAssets/efd04d6ef4bcc9bef4778aa5987b7e22.png)

![](/images/yuqueAssets/cb38c7e23d16da27895afb5aa030b60d.png)

对于每一个输出的类别：首先剔除概率低于阈值的结果，然后对于一簇IOU比较高的box，只选择概率最高的一个作为预测结果

# 3.8 Anchor Boxes
![](/images/yuqueAssets/20a78ed78b68f850f9782040e34061f9.png)

![](/images/yuqueAssets/2a1cc8b1a33f6b392046adb4a134e844.png)![](/images/yuqueAssets/beaa03c61d7657f08f6ce600259035a3.png)

Anchor Boxes的思想是将之前识别一个物体的y并列，实现一个格子中同时识别多个物体，并列几次就能最多同时识别几个物体

但是对于目标重叠的情况难以处理

同时不同的Anchor Box之间可以有针对性地进行识别，比如一些针对比较矮胖的车，一些针对比较高瘦的人

## K-Means
k均值聚类算法可以将两类对象的形状聚类，帮助自动选择Anchor Boxes大小

# 3.9 YOLO算法
![](/images/yuqueAssets/badcf7eacf1232536edaa358a4b96966.png)![](/images/yuqueAssets/8baca94a06ac3de1ffa26d9541cb554a.png)![](/images/yuqueAssets/2b2da6adc469ccaeaff550aa6c24f6b5.png)

# 3.10 候选区域 Region Proposals
## R-CNN / Region CNN
![](/images/yuqueAssets/4a61ef34c03939ad1f5178e2d19a0acc.png)

![](/images/yuqueAssets/b6692ca1b0b5d739a355ed7893bef133.png)

RCNN先对图片中的物体聚类，然后在可能的候选区域中进行目标检测

# 3.11 U-Net语义分割 Semantic Segmentation with U-Net
![](/images/yuqueAssets/4c36533a8a002b2165ee32ba4a3cff1e.png)![](/images/yuqueAssets/669f4456ad96b85ad0a80df20fc8af83.png)

![](/images/yuqueAssets/8bc7aceca8bd3178754708807f4f8e7e.png)![](/images/yuqueAssets/a50780d89942cc161cbd980cefd738d2.png)

输出的y包含每个像素的分类预测

## 3.12 转置卷积 Transpose Convolutions
![](/images/yuqueAssets/fe017935019f8835e5133826cb61de97.png)![](/images/yuqueAssets/c68f136938ce1937aad103243e5dae0b.png)

转置卷积用filter在output上卷积，每个像素的值等于输入乘卷积核对应值

# 3.13 U-Net Architecture Intuition
![](/images/yuqueAssets/6fd29879717826ede0b19f549c438d9e.png)

前半部分像素减少，深度增加，网络可以识别到猫，之后有一条捷径将完整分辨率的信息传输到最后几层，以判断猫究竟覆盖了哪些像素

# 3.14 U-Net Architecture
![](/images/yuqueAssets/9ec96c074b8ef3b88da97b4e11b97b59.png)![](/images/yuqueAssets/3c6d56c6c40d1073d3dc8e5e65977887.png)

[U-Net+与FCN的区别+医学表现+网络详解+创新](https://zhuanlan.zhihu.com/p/118540575)



# 4.1 什么是人脸识别 Face Recognition
![](/images/yuqueAssets/262798c65ba1d07e46e78b3dce17e67f.png)

实现人脸识别首先需要实现人脸验证（Verification），输入图片是不是数据库中某个人，并且准确率要非常高才可实际应用

# 4.2 One-Shot学习
![](/images/yuqueAssets/c25ef677faf7ab78a11890aa9239b793.png)![](/images/yuqueAssets/b08c7cbcd4c95f31983e811bdd22b63b.png)

Similarity函数通过判断两张图中脸的相似度解决一次学习任务，即使有新员工加入也只需要录一次脸即可

# 4.3 Siamese Net
![](/images/yuqueAssets/abd3205e88e5acef3bba8a6f4c88ffad.png)![](/images/yuqueAssets/3cd8b17bf71a3889113ea25da6951614.png)

SiameseNet通过最后的特征向量之间的距离判断是不是同一个人

# 4.4 Triplet Loss
[为什么triplet loss有效？](https://bindog.github.io/blog/2019/10/23/why-triplet-loss-works/)

![](/images/yuqueAssets/908599dbd8b7d3313051932cd9385993.png)

间隔（Margin）α确保了不同人脸之间的差异足够大，

![](/images/yuqueAssets/470611ef8f31dc1cdc898711d0ec4578.png)

![](/images/yuqueAssets/f22474e0c06788800a06ec85456fe0e2.png)

一个有用的策略是<font style="color:rgb(200, 195, 188);background-color:rgb(27, 29, 30);">hard mining：选择最不像的Positive，选择最像的Negative，这样网络会全力找出最重要的特征</font>

![](/images/yuqueAssets/8770a8d0d1896b4b1c6b28725601af22.png)

# 4.5 Face Verification and Binary Classification
![](/images/yuqueAssets/48bb40e169bc082a22456aebfdf3b5c7.png)

![](/images/yuqueAssets/15e7324df41ee08d45dcb817607e0e09.png)

对输入的两张图分别运行网络，对最后的特征向量计算方差 / $ \chi  $平方相似度，并使用Logistic Loss

两张图一张是录进数据库的，一张是摄像头实时捕捉的，数据库中的图可以预计算好特征向量

![](/images/yuqueAssets/6e5c50fa780e23dd011d97ae41a53270.png)

# 4.6 What is Neural Style Transfer?
![](/images/yuqueAssets/4143f3bbb80f6151e186d68df8637064.png)

# 4.7 What are deep ConvNets learning?
![](/images/yuqueAssets/ef2fd20ab3785b5666123682a8a3c5ba.png)

![](/images/yuqueAssets/569273fcfb450336f34a6b67783b736a.png)

浅层识别局部特征，深层识别更复杂的特征

# 4.8 Cost Function
![](/images/yuqueAssets/0c198a3ce4076efcead622f4184d35e5.png)![](/images/yuqueAssets/9f2194a3f96258e7eb288c5834fc0000.png)

基本的风格迁移需要定义两个Cost Function计算C和S的cost，然后梯度下降去最小化cost

# 4.9 Content Cost Function
![](/images/yuqueAssets/0aeae48a5a1c4c879c656fa6d0190090.png)

选择网络的中间层的Activation计算Cost

# 4.10 Style Cost Function
![](/images/yuqueAssets/2a8378b0d4a452f4fae4504804b6dcdd.png)

Style是L层的Activation在Channel之间的相关性（Correlation）

![](/images/yuqueAssets/ee91c3682e0f21fe17ccdb12b08d06d6.png)

风格的相似性检测思路完全不同于内容的相似性检测，这里使用出现的概率（通过相关系数描述）来判定风格相似性

比如L1层检测的是竖条纹，L2层检测的是红色块，如果L1与L2相关系数越高，竖条纹和红色块同时出现的概率越高

![](/images/yuqueAssets/0db7ad6f84830f22b1949f69b9839b13.png)

计算Style Cost需要先分别对S和G计算Style Matrix（Gram Matrix）：

![](/images/yuqueAssets/37fcbf5d2060bef918c03b87aba2a741.png)

k层与k'层的相关系数G等于将这两层对应位置相乘最后求和



[https://zh.wikipedia.org/wiki/%E5%8D%8F%E6%96%B9%E5%B7%AE](https://zh.wikipedia.org/wiki/%E5%8D%8F%E6%96%B9%E5%B7%AE)

![](/images/yuqueAssets/d24228182d4022cf2860e82fe41a01cd.png)

S和G之间的Style Cost Function：

![](/images/yuqueAssets/6eb7c11fceb6d4b5562ec153a6936cf6.png)

![](/images/yuqueAssets/a1e9a9fe639c8810efd7fec66a67eee5.png)

然后对所有层计算J Style求和，λ是每个层的系数，最后就获得了总的Style Cost，梯度下降最小化之后就可以获得有C内容和S风格的G

## Gram Matrix
[为什么Gram matrix可以代表一个图片的style?(格莱姆矩阵) - Tomorrow1126 - 博客园](https://www.cnblogs.com/h694879357/p/13417302.html)

![](/images/yuqueAssets/e51bef7532c36f53b662ad133a33f5b0.png)

[风格迁移(style_transfer)网络](https://zhuanlan.zhihu.com/p/84401154)

<font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">作者在他之前的一篇文章提到（</font>[Texture Synthesis Using Convolutional Neural Networks](https://link.zhihu.com/?target=https%3A//arxiv.org/pdf/1505.07376.pdf)<font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">）图像经过</font>_**<font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">卷积层后得到的特征图的协方差矩阵可以很好地表征图像的纹理特征</font>**_**<font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">，</font>**<font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">但是会损失位置信息。不过在风格迁移的任务中，我们可以忽略位置信息损失这个缺点，只需要找到一个方法可以表征图像的纹理信息，并把它这些纹理信息迁移到需要被风格迁移的图像中，完成风格迁移的任务；而现在，利用协方差矩阵可以得到纹理信息，我们就可以完成风格迁移。</font>

<font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">协方差是一个二阶的统计信息，文章里使用</font>_**<font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">Gram matrix来代替协方差矩阵</font>**_<font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">（其实就是没有减去均值的协方差矩阵），它能够描述全局特征的自相关。</font>

![](/images/yuqueAssets/c8627153e62e7855d2118581ed839f6f.png)

# 4.11 从一维到三维的推广
![](/images/yuqueAssets/34a350c26f1d58f8b3f6de96452eac4c.png)

![](/images/yuqueAssets/7225ac53a07717ea8c849dc092461f48.png)![](/images/yuqueAssets/7d95d8ccf8f623203971afa8710ed128.png)

视频可以看作3D Volume，用来检测人物行为

# 作业：人脸识别
## 1对1
### Triplet Loss
![](/images/yuqueAssets/77de49360bd30aa75a4d72d76edae13e.png)

![](/images/yuqueAssets/6002da111cdf57d8f55423c1b61e9225.jpeg)

计算m个128维向量的**距离**，作业里的公式是L2范数的平方，也就是先平方后求和。。。

也可以简化为一般L2范数，相当与常见的向量length，np.linalg.<font style="color:#dbdbaa;">norm</font>

[Triplet Network, Triplet Loss及其tensorflow实现](https://zhuanlan.zhihu.com/p/35560666)

![](/images/yuqueAssets/74104be73a2fde1f5f1829836d80acb8.png)

## 1对多
实现验证给定的两张脸是不是同一人后，可以更进一步找出给定的人脸是否在数据库中，用for循环或者向量化找出features距离最近的脸即可



# 作业：Neural Style Transfer
## cost of C G
![](/images/yuqueAssets/e447e552f31a7cb2e88ce116e8df5c1c.png)

+ For the `shape` parameter, a `-1` tells the function to choose the correct dimension size so that the output tensor still contains all the values of the original tensor.
+ So `tf.reshape(a_C, shape=[m, n_H * n_W, n_C])` gives the same result as `tf.reshape(a_C, shape=[m, -1, n_C])`.
+ If you prefer to re-order the dimensions, you can use `tf.transpose(tensor, perm)`, where `perm` is a list of integers containing the original index of the dimensions.
+ For example, `tf.transpose(a_C, perm=[0,3,1,2])` changes the dimensions from $ (m, n_H, n_W, n_C) $ to $ (m, n_C, n_H, n_W) $.

## cost of S G：Gram Matrix
![](/images/yuqueAssets/9d62add02ba4d0fad761d0369d9fd05c.png)

Gram矩阵的一个元素G_ij表示的是第i个filter与第j个filter的activation的相似度，Gram矩阵边长为filter个数

对角线元素，比如G_ii，表示的是i filter的活跃程度，也就是被激活的次数，图中检测到i图形的次数

如果i检测的是竖条纹，G_ii表示的就是竖条纹的出现次数，越多越大

![](/images/yuqueAssets/709d0cc8fedd4cdabdb6a60b54f582fa.png)

![](/images/yuqueAssets/de53431f881485f6a38439d6515e97ca.png)![](/images/yuqueAssets/e09f92491e972b1835127d1f64f49d57.png)

<font style="color:rgb(221, 221, 221);">如何选择每一层的系数?更深层次的图像捕捉更高层次的概念，而更深层次的特征在图像中相对于其他层的局部化程度较低。因此，如果您希望生成的图像柔和地遵循样式图像，请尝试为更深的层选择较大的权值，为第一个层选择较小的权值。相反，如果您希望生成的图像严格遵循样式图像，请尝试为更深的层选择较小的权值，而为第一个层选择较大的权值。</font>

<font style="color:rgb(221, 221, 221);">Style特征需要多个隐藏层的activation组合，而content特征只需要一个隐藏层</font>

![](/images/yuqueAssets/500d7057d936a5ddcb475d63bd6bfa2b.png)



