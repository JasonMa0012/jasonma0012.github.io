---
title: 吴恩达 Convolutional Neural Networks
urlname: kzxl93
author: Jason Ma
date: '2022-03-31 19:20:15'
updated: '2023-06-14 23:23:38'
categories:
  - Reading
---

[点击查看【bilibili】](https://player.bilibili.com/player.html?bvid=BV1FT4y1E74V&p=108&page=108)

# 1.1 计算机视觉

![image.png](/images/yuqueAssets/FmbERBlttv3h3901cZ3g0lSeK9A0.png)
![image.png](/images/yuqueAssets/Fi4ZWQRPRn0Tx2043pfK-O2pRcdY.png)

# 1.2 边缘检测示例

![image.png](/images/yuqueAssets/FpjpsuOGYXPt9br7GfyE2-NBJqoY.png)
![image.png](/images/yuqueAssets/FgIanVDkxPk8Bmp5SJmT0YIbQ3hc.png)![image.png](/images/yuqueAssets/Fu256DfBCGuV5tDAOu3cg6S59utL.png)

# 1.3 更多的边缘检测内容

![image.png](/images/yuqueAssets/FlCdx-A2w9AheJFMuAfaeO9Rastn.png)
![image.png](/images/yuqueAssets/FvYGqv-Yer1kCr-uW5gQfa5XhS9A.png)![image.png](/images/yuqueAssets/Fi8jBcvpkkomWCGq4B7zH-CSygFd.png)
可以将卷积核作为参数，让机器学习去决定卷积核

# 1.4 Padding

![image.png](/images/yuqueAssets/Fm6s5-KFMBd2lLjHQyx4R8_1WkBb.png)![image.png](/images/yuqueAssets/Fi_zfADGQ0NB7mHL5e2idPlgi_sV.png)
为了平等地对待周围的像素，需要在图像外侧填充 p 个像素
图像分辨率=n*n，卷积核=f*f，填充像素数 p=(f-1)/2
Valid 卷积：不进行填充，Same 卷积：进行填充

# 1.5 卷积步长 Strided Convolutions

![image.png](/images/yuqueAssets/FgSswQS7PoGaTEZgyyXMWRODS1ON.png)![image.png](/images/yuqueAssets/Fg3ijXnTdDJenCaRouLzDfmmeutn.png)

## 原图 n*n，卷积核 f*f，填充 p，步长（Stride）s，输出分辨率：(n+2p-f)/s + 1 向下取整

![image.png](/images/yuqueAssets/FuYrdWsRratXE296BuXDsPgrxDNc.png)
数学中的卷积和卷积神经网络中的卷积严格意义上是两种不同的运算
信号处理中的卷积需要对卷积核做一次沿左下角到右上角的翻转，目的是使卷积满足结合律
卷积神经网络中“卷积”严格来说是 cross-correlation，是为了提取图像的特征，其实只借鉴了“加权求和”的特点

# 1.6 三维卷积 Convolutions Over Volume

![image.png](/images/yuqueAssets/Fjvdd85A9-QbXEifI7Ymwudptt7z.png)![image.png](/images/yuqueAssets/Ft47aw1SaW9BrY11KuNN4ERjKk5Q.png)![image.png](/images/yuqueAssets/FkfI1VYME0lTXQlitO-sgCCoOOLs.png)
3D 卷积就是同时将输入和卷积核扩展到多个 channel，输出还是 2D 图像
此时可以将多个卷积核的结果堆叠在一起

# 1.7 单层卷积网络

![image.png](/images/yuqueAssets/Fui1JDpvArUrlqoMmIDygv3xU7wx.png)![image.png](/images/yuqueAssets/FrFo8-2ZEaJioTi9U2z9HHTp1KUM.png)![image.png](/images/yuqueAssets/Fu7NbCqIVB1ZgQQABzgO7Mp7Bh3K.png)

# 1.8 简单卷积网络示例

![image.png](/images/yuqueAssets/Fi5Z_eci-Dx3NQoejcckC7IPjFzP.png)
![image.png](/images/yuqueAssets/FoWwCWrPBUc2w2a4TS-MIzA8Xwof.png)

# 1.9 池化层 Pooling Layers

![image.png](/images/yuqueAssets/Fsm-7vRgrKPFIFicv65eiIq3-fqw.png)![image.png](/images/yuqueAssets/Fum6enVmM-TIKIXxfRWKcr4KuH70.png)
Max Pooling 也是一种卷积，不过输入和输出的通道数相同，可以理解为从输入中提取一些特征
![image.png](/images/yuqueAssets/Fjyy9ApLWMN7f9TW6oBM7YfV7_Hf.png)![image.png](/images/yuqueAssets/Ftr2KC8sFqE0HgZhiwhulPF_my8g.png)
Average Pooling 用的比较少，一个典型的用例是 n 很小，nc 很大时，用均值池化输出 1*1*nc

# 1.10 卷积神经网络示例

![image.png](/images/yuqueAssets/FudCW_tczHkPRBJBVFFTow0lsBJF.png)
超参数很多，尽量不要自己设置超参数，去看 paper 里别人用了哪些超参数
![image.png](/images/yuqueAssets/Fi2Q1C7n_v5lQFRzWhyaga218X3u.png)
Activation Size 随着层数减少，是一个将局部细节组合成大的特征的过程，减少得太快也会影响整体性能

## 补充：LeNet-5

[经典 CNN 模型 LeNet 解读](https://zhuanlan.zhihu.com/p/41736894)

# 1.11 为什么使用卷积

![image.png](/images/yuqueAssets/FmzJhTfVUeuIv-GqQ3_aKwoD1tkq.png)![image.png](/images/yuqueAssets/FpMc23d1Uh9_CB7OP24moXzyuQKa.png)
CNN 通过参数复用（同一个卷积核用在任何分辨率的图上）、稀疏连接（一个 output 只和卷积核覆盖的那几个输入有关）减少参数，减少过拟合
CNN 还有很好的平移不变性（Translation Invariance）
![image.png](/images/yuqueAssets/FndxpANSCXlR1O8qKQraI_vi8LK_.png)![image.png](/images/yuqueAssets/FrYqhLhFcvS1g5ua1zM77b5taMMM.png)

# 2.1 为什么要进行实例探究

![image.png](/images/yuqueAssets/Fta1ofAWLDHrxHkOmMUWo393Alki.png)

# 2.2 经典网络

![image.png](/images/yuqueAssets/Fk4ny6Ye7D8KdONM65pI2NTOBHuQ.png)
![image.png](/images/yuqueAssets/Fr0iMkdPoBEL-fKOwzvzHnbMyDXm.png)
![image.png](/images/yuqueAssets/FhdYQSU150cFSHW_LgiASloH1uyz.png)
经典 VGG 16 结构通常分辨率会每层递减一倍，通道数每层递增一倍
其实是有一些道理的，一开始的通道比较少，因为 3*3 像素内的可能性比较有限，所以只有 64 个 filter，第二层经过降采样，3*3 相对于覆盖了 6\*6 的范围，可能性增加了，所以 filter 数量翻了倍

# 2.3 残差网络 ResNets Residual Network

非常深的网络很难训练，因为存在梯度消失和梯度爆炸问题，ResNets 可以跳过一些层从而训练更深的网络
![image.png](/images/yuqueAssets/FlAnGM2mwrO7cJSFWgRXKvj7eWZM.png)![image.png](/images/yuqueAssets/Fh-uK7sJOYZjePsG8uRVxLzWHMuJ.png)
随着层数的增加，普通网络的性能反而下降，而残差网络能保持性能提升

# 2.4 残差网络为什么有用

![image.png](/images/yuqueAssets/FnFrMairt-Kzx9UBl48cg1ZjAUGI.png)
即使捷径间的 L 层遇到了最坏的情况，ReLU=0，那么 L+1 层的输入也会是 L-1 的输出，所以残差网络至少不会减少网络的性能，在此基础上可以提升网络的性能
![image.png](/images/yuqueAssets/Fr1SBHtCO7ZFbtN6Zw4gSEta03_D.png)
当添加残差的头和尾的维度不一样的时候，可以使用乘以一个 Ws 将头尾的维度保持一致，就可以直接进行矩阵计算了。。实际过程中，一般都是维度不同就不使用残差

# 2.5 网络中的网络以及 1\*1 卷积

![image.png](/images/yuqueAssets/Foa3OnjnbRJiONb2z80O9NXdY2EM.png)
1*1*nc 的 filter 可以看作一个全连接的神经元，同层有多个 filter 相当于多个神经元
![image.png](/images/yuqueAssets/FglKkDdFHx0M2K0Uoits_vbfLqPT.png)
也可以压缩 nc

# 2.6 Google Inception Network Motivation

![image.png](/images/yuqueAssets/FqW8fAyF4t3EG53Y-Bry-U5aMu9P.png)
Inception 层列出所有可能，让网络自己决定用那些 filter，问题在于计算量太大
![image.png](/images/yuqueAssets/FltFddkne_OdPEZP7alB01bSGHr-.png)![image.png](/images/yuqueAssets/FsZr3KdomN-_eyvQC057niXcDfxY.png)
通过 1\*1 的瓶颈层压缩参数和计算量，设置合理的情况下不会影响网络性能

# 2.7 Inception Network

![image.png](/images/yuqueAssets/FtvHcdSQqlbvmtEQUJhA4jDZptqU.png)
![image.png](/images/yuqueAssets/FoKjm7ig6oJ2yTXM0y31yRU-FO_c.png)
GooLeNet
中间额外的两个 output 层在训练时起到了正则化的作用，反之过拟合，确保中间层参与了目标识别
![image.png](/images/yuqueAssets/FhJCAmrDiNyjzoxCuNqjEG6ENLo2.png)
Inception 盗梦空间

# 2.9 MobileNet

## Depthwise Separable Convolution

![image.png](/images/yuqueAssets/Fj8-cunJW8PGsEHIhldIgE5Os68P.png)
![image.png](/images/yuqueAssets/FnkL68HGdr3XzfF1WXwdNOdBMkTo.png)
![image.png](/images/yuqueAssets/FqUCmY2VO0Yr5svBk4LEuu1C5egg.png)![image.png](/images/yuqueAssets/Fkbdxf9XOACzEUX9cCw1bZYdgVLS.png)![image.png](/images/yuqueAssets/FjGbUmkiMsu7iD_s-3r50J0L6Sdw.png)![image.png](/images/yuqueAssets/FnBHa4pVXP0_R26LTtk4x7ODoHPJ.png)
深度可分离卷积把普通卷积拆分成了逐深度（Depthwise）卷积和逐点（Pointwise）卷积，计算量下降了一个量级，有点像 blur 拆分横竖两个 pass

# 2.10 MobileNet Architecture

![image.png](/images/yuqueAssets/Fgb4mzoNJDpWDNhVwgNRkJSsO3CM.png)![image.png](/images/yuqueAssets/FsSlsp870Or0HYyUeuD3cHufQ8TR.png)
MobNet V2 在两个瓶颈层之间先扩充，然后卷积，最后再投影回瓶颈层维度
由于中间的计算过程不会保存，所以可以节省内存
又因为扩充操作带来了更多参数，模型可以学到更多东西

# 2.11 EfficientNet

![image.png](/images/yuqueAssets/FiRHdqm-vqywExvGvavHFE_E7TA6.png)
EfficientNet 可以解决如何调整分辨率、深度（层数）、宽度（Filter 数）使得目标设备上的性能达标的问题

# 2.12 迁移学习 Transfer Learning

![image.png](/images/yuqueAssets/FuSx1w3yGhN0pfrdmOezz847cGdA.png)
使用别人开源、训练好的参数作为初始化可以大大加快进度
在训练好的模型的基础上迁移学习，手上的数据越多可训练的层数越多

# 2.13 数据扩充 Data Augmentation

![image.png](/images/yuqueAssets/Fmwlly59ZW-A3llZiasWlPJcn4ez.png)![image.png](/images/yuqueAssets/Fhnj-NR24UfDw6ruHtplx0ceqQvS.png)
PCA 可以适应有不同颜色倾向的图，为什么不试试先转换到其他色彩空间呢？
![image.png](/images/yuqueAssets/Fjqar4ld0rPEQmPXrwuBH-dH7IAI.png)

# 2.14 计算机视觉现状

![image.png](/images/yuqueAssets/FvxWX5frrZTFpmXPScQZ7rBShdF5.png)
计算机视觉的数据较少时，可以选择：

- 迁移学习
- 手工标记数据
- 针对性地设计网络

工业中要训练网络很多时候得先训练一批人专门标记数据
![image.png](/images/yuqueAssets/FmkdTJ8JoTl2nk63bmAK7TcSQTT5.png)
在竞赛中有用的技巧
![image.png](/images/yuqueAssets/Fn8w52w8OxrQtH_FT-Wv0VKPstzh.png)

# 2.15 作业

## Residual Networks

Identity block. Skip connection "skips over" 3 layers.
![idblock3_kiank.png](/images/yuqueAssets/FvdPrioD3oicyqD_XLTTFr9_Dgp2.png)
The Convolutional Block![convblock_kiank.png](/images/yuqueAssets/FuWMLaCi6Aq6BXCgfmtL5YVrrCL-.png)
ResNet-50 model
![resnet_kiank.png](/images/yuqueAssets/FgXk2Dp-sVYJ3ji7-Js5mRwtghGD.png)
SIGNS dataset
![signs_data_kiank.png](/images/yuqueAssets/FmcDEVD8Wmkg6a3TncT0xsYUCW_P.png)

- Very deep "plain" networks don't work in practice because vanishing gradients make them hard to train.
- Skip connections help address the Vanishing Gradient problem. They also make it easy for a ResNet block to learn an identity function.
- There are two main types of blocks: The **identity block** and the **convolutional block**.
- Very deep Residual Networks are built by stacking these blocks together.

## Transfer Learning with MobileNet

# 3.1 目标定位

![image.png](/images/yuqueAssets/Fj3i64DDvgQhTJ78jl8rlEU3F0GT.png)
![image.png](/images/yuqueAssets/FpEt9-hak72mFk-q3E8_6PP8jZZE.png)![image.png](/images/yuqueAssets/FsKGKH08eu8iDGnWThOxxpHowqhw.png)
目标定位的输出复杂一些，要输出分类的同时输出 boundingbox 的坐标和宽高
对于只有 0 和 1 的输出使用 logistics loss，坐标用平方差

# 3.2 特征点检测

![image.png](/images/yuqueAssets/FrX81LMlm3kOVDJpOe2NgQ0cn9e5.png)
通过添加输出来获取我们要的信息，当然，训练集得提前标注好

# 3.3 目标检测

## Sliding Window

![image.png](/images/yuqueAssets/FgnMaXJjD6x7b6IkitsTxzerJGbW.png)
![image.png](/images/yuqueAssets/Fqi9gGoR0vAfs9fXNq3CpZVPTIVA.png)

# 3.4 卷积的滑动窗口实现

![image.png](/images/yuqueAssets/FtVufOqd90ucHCU7oac0V00EEdI4.png)
为了使整个 CNN 适应不同分辨率，需要将最后 FC 层转换成卷积层
![image.png](/images/yuqueAssets/FrPdeLg82dbMVCb2Wzq-CQFFyHpJ.png)
当输入更大的图片时，相当于对其使用 Sliding Window 检测，也就是所谓的平移不变性
![image.png](/images/yuqueAssets/FjEY0ITqBTo5zxvY04nB7i4s3Ghl.png)

# 3.5 BoundingBox 预测

![image.png](/images/yuqueAssets/FowH0fsK6nAOiDYFLgbrlYLbQ_YG.png)
最简单的 YOLO 算法，将图片分为多个 chunk，每个 chunk 可以检测一个物体并输出其 BB，按物体中心判断属于哪个 chunk
![image.png](/images/yuqueAssets/FqHO2JHSE7eGZyIVFh4Y9rtZUL01.png)

# 3.6 交并比 Intersection-Over-Union

![image.png](/images/yuqueAssets/FsJaQ-frFAmgygqwPhd2qybJKpx7.png)

# 3.7 非极大值抑制 Non-max Suppression

![image.png](/images/yuqueAssets/FqN2al1HBXZYxQLRGbQMw2INhdgP.png)
![image.png](/images/yuqueAssets/Fnm7hAPN5YU9-TAPpH8-jhl2IGNI.png)
对于每一个输出的类别：首先剔除概率低于阈值的结果，然后对于一簇 IOU 比较高的 box，只选择概率最高的一个作为预测结果

# 3.8 Anchor Boxes

![image.png](/images/yuqueAssets/Ftn2SYy2K9MFL2UIOrVY_NMaSiRa.png)
![image.png](/images/yuqueAssets/FhD_uBw2XBUu99ZVrTZw4cUtsOBx.png)![image.png](/images/yuqueAssets/Fs4mX0eSf1jdwARlu7jKekCzn9od.png)
Anchor Boxes 的思想是将之前识别一个物体的 y 并列，实现一个格子中同时识别多个物体，并列几次就能最多同时识别几个物体
但是对于目标重叠的情况难以处理
同时不同的 Anchor Box 之间可以有针对性地进行识别，比如一些针对比较矮胖的车，一些针对比较高瘦的人

## K-Means

k 均值聚类算法可以将两类对象的形状聚类，帮助自动选择 Anchor Boxes 大小

# 3.9 YOLO 算法

![image.png](/images/yuqueAssets/Ft54Mkte-WF34oCEXzgOOgMfFEna.png)![image.png](/images/yuqueAssets/Fuei67E2ZdludG2-OkgY5k2Yc8qK.png)![image.png](/images/yuqueAssets/Fgp1VaYsdRp44jNF-l2skB-iFK6k.png)

# 3.10 候选区域 Region Proposals

## R-CNN / Region CNN

![image.png](/images/yuqueAssets/Fs_etNZWsx9oxfzNra_SOJ9zXM7q.png)
![image.png](/images/yuqueAssets/FjCxaA3yKWzx--G_9kf5G_7bTPPS.png)
RCNN 先对图片中的物体聚类，然后在可能的候选区域中进行目标检测

# 3.11 U-Net 语义分割 Semantic Segmentation with U-Net

![image.png](/images/yuqueAssets/FqdeBK4xvRhQVCTBaoAlGx4MmGez.png)![image.png](/images/yuqueAssets/FqXXxQyV-ygNeTKkfV75QN6146FZ.png)
![image.png](/images/yuqueAssets/FpI_aYRcLUpJtNYjMdUMRR6Gof27.png)![image.png](/images/yuqueAssets/FiIvsONCwmwHSlm3SzzXeldGFlD1.png)
输出的 y 包含每个像素的分类预测

## 3.12 转置卷积 Transpose Convolutions

![image.png](/images/yuqueAssets/FtWzdUoDaMBlkxON6rtGBcTdvUCv.png)![image.png](/images/yuqueAssets/Fk9qrPuJ877ysvvkWv228uVgKT2r.png)
转置卷积用 filter 在 output 上卷积，每个像素的值等于输入乘卷积核对应值

# 3.13 U-Net Architecture Intuition

![image.png](/images/yuqueAssets/FrmI8oQUCWtbBXhut4P2QDp_d44R.png)
前半部分像素减少，深度增加，网络可以识别到猫，之后有一条捷径将完整分辨率的信息传输到最后几层，以判断猫究竟覆盖了哪些像素

# 3.14 U-Net Architecture

![image.png](/images/yuqueAssets/Fqwgd8ohwW2KmODKSIKkFqEK5XhP.png)![image.png](/images/yuqueAssets/Fn8DhpuVE3qnql3zAbhgZi9EZqh_.png)
[U-Net+与 FCN 的区别+医学表现+网络详解+创新](https://zhuanlan.zhihu.com/p/118540575)

# 4.1 什么是人脸识别 Face Recognition

![image.png](/images/yuqueAssets/FkRmqAnHt1CpjjgkkN9T2-_5A-Gl.png)
实现人脸识别首先需要实现人脸验证（Verification），输入图片是不是数据库中某个人，并且准确率要非常高才可实际应用

# 4.2 One-Shot 学习

![image.png](/images/yuqueAssets/FlzfhxC_Qwv0hja5mfTAFlyOS7Bl.png)![image.png](/images/yuqueAssets/FkyIBYtingoacCI9QCRMS3PQbomW.png)
Similarity 函数通过判断两张图中脸的相似度解决一次学习任务，即使有新员工加入也只需要录一次脸即可

# 4.3 Siamese Net

![image.png](/images/yuqueAssets/FpKK7ndPx-BDCdhlIWE4GHSTqIyv.png)![image.png](/images/yuqueAssets/FhrJlUCoRHPPSeGMJuqY4w0UjTKW.png)
SiameseNet 通过最后的特征向量之间的距离判断是不是同一个人

# 4.4 Triplet Loss

[为什么 triplet loss 有效？](https://bindog.github.io/blog/2019/10/23/why-triplet-loss-works/)
![image.png](/images/yuqueAssets/FiPaGWm5cKzV4VgLVDOLk2g3xr3l.png)
间隔（Margin）α 确保了不同人脸之间的差异足够大，
![image.png](/images/yuqueAssets/FgdZsvcCk6ihxgH8Wr2W33X9MEjR.png)
![image.png](/images/yuqueAssets/Fu5NCb1jhEKKo2B_TIPdd5TLVQtj.png)
一个有用的策略是 hard mining：选择最不像的 Positive，选择最像的 Negative，这样网络会全力找出最重要的特征
![image.png](/images/yuqueAssets/FryK0h6aV5GYmdSIQlFYZ6r35t-G.png)

# 4.5 Face Verification and Binary Classification

![image.png](/images/yuqueAssets/Fma_Ul-1uN-XhPiFasapNQ1Yl9Yh.png)
![image.png](/images/yuqueAssets/FiaxvOPOz9oQjS_8dnJ7wJbtE9lD.png)
对输入的两张图分别运行网络，对最后的特征向量计算方差 / ![](/images/yuqueAssets/FoGtEq0_Rk2hAO0ijbxGJj4oUYXe.svg)平方相似度，并使用 Logistic Loss
两张图一张是录进数据库的，一张是摄像头实时捕捉的，数据库中的图可以预计算好特征向量
![image.png](/images/yuqueAssets/FjHrN9o4d795x9XkMoRzuJ5TnWi8.png)

# 4.6 What is Neural Style Transfer?

![image.png](/images/yuqueAssets/FhGYJ2nVxXAePUQch8sfsGjmeKa8.png)

# 4.7 What are deep ConvNets learning?

![image.png](/images/yuqueAssets/FjNLPYsZumceSyyrEF4cH23G8To3.png)
![image.png](/images/yuqueAssets/Fvxfv5qOrO4pNzC8rcOxAnh2e3Ka.png)
浅层识别局部特征，深层识别更复杂的特征

# 4.8 Cost Function

![image.png](/images/yuqueAssets/FhqA6iz-8EYUAFqHCShZ8vGsv9LW.png)![image.png](/images/yuqueAssets/FlqxdP0yQ_yETvnmZsjH84QW6CeS.png)
基本的风格迁移需要定义两个 Cost Function 计算 C 和 S 的 cost，然后梯度下降去最小化 cost

# 4.9 Content Cost Function

![image.png](/images/yuqueAssets/FsnOYR84SYVRJHOY1nIJcck5FoRl.png)
选择网络的中间层的 Activation 计算 Cost

# 4.10 Style Cost Function

![image.png](/images/yuqueAssets/Fh2ESp3v58JOXoZI4RmMmLUmuSqK.png)
Style 是 L 层的 Activation 在 Channel 之间的相关性（Correlation）
![image.png](/images/yuqueAssets/FlMVmqkSIpuY6_SUyOMn9zUsXIYv.png)
风格的相似性检测思路完全不同于内容的相似性检测，这里使用出现的概率（通过相关系数描述）来判定风格相似性
比如 L1 层检测的是竖条纹，L2 层检测的是红色块，如果 L1 与 L2 相关系数越高，竖条纹和红色块同时出现的概率越高
![image.png](/images/yuqueAssets/FkbObcZ1Fcky2QTULclnixs2-wX1.png)
计算 Style Cost 需要先分别对 S 和 G 计算 Style Matrix（Gram Matrix）：
![image.png](/images/yuqueAssets/Fqy31KAlaiNEPkqv9DgLuvsxDq2g.png)
k 层与 k'层的相关系数 G 等于将这两层对应位置相乘最后求和

[https://zh.wikipedia.org/wiki/%E5%8D%8F%E6%96%B9%E5%B7%AE](https://zh.wikipedia.org/wiki/%E5%8D%8F%E6%96%B9%E5%B7%AE)
![image.png](/images/yuqueAssets/FkBM2QWE28kFlIap0tSKKw_2j1LC.png)
S 和 G 之间的 Style Cost Function：
![image.png](/images/yuqueAssets/FoJ7RjiXd44DF-r81xuQRElFwSqZ.png)
![image.png](/images/yuqueAssets/Fl62bJIC1E_aQsgZo-Mrx_MpGe08.png)
然后对所有层计算 J Style 求和，λ 是每个层的系数，最后就获得了总的 Style Cost，梯度下降最小化之后就可以获得有 C 内容和 S 风格的 G

## Gram Matrix

[为什么 Gram matrix 可以代表一个图片的 style?(格莱姆矩阵) - Tomorrow1126 - 博客园](https://www.cnblogs.com/h694879357/p/13417302.html)
![](/images/yuqueAssets/Fi1ODgXC4TpSQU5P-B1n-GgH1v6u.png)
[风格迁移(style_transfer)网络](https://zhuanlan.zhihu.com/p/84401154)
作者在他之前的一篇文章提到（[Texture Synthesis Using Convolutional Neural Networks](https://link.zhihu.com/?target=https%3A//arxiv.org/pdf/1505.07376.pdf)）图像经过**_卷积层后得到的特征图的协方差矩阵可以很好地表征图像的纹理特征_，**但是会损失位置信息。不过在风格迁移的任务中，我们可以忽略位置信息损失这个缺点，只需要找到一个方法可以表征图像的纹理信息，并把它这些纹理信息迁移到需要被风格迁移的图像中，完成风格迁移的任务；而现在，利用协方差矩阵可以得到纹理信息，我们就可以完成风格迁移。
协方差是一个二阶的统计信息，文章里使用**_Gram matrix 来代替协方差矩阵_**（其实就是没有减去均值的协方差矩阵），它能够描述全局特征的自相关。
![image.png](/images/yuqueAssets/Fil4RiBSMyj_xPbPg7abp1FkFMBQ.png)

# 4.11 从一维到三维的推广

![image.png](/images/yuqueAssets/FmF86Eo4Oi325-g3Lxmcmyh5QExg.png)
![image.png](/images/yuqueAssets/Fs0hj_n8xdnncuCYmz_GNfaXsfxW.png)![image.png](/images/yuqueAssets/FkJyMkYFP36cgBM7f-NjdlVFEJDR.png)
视频可以看作 3D Volume，用来检测人物行为

# 作业：人脸识别

## 1 对 1

### Triplet Loss

![image.png](/images/yuqueAssets/FvnUfXRg2rVNEN7NXlNR3xO9n4hG.png)
![](/images/yuqueAssets/FsqJRB-vRnCjZ_jfDiqs-zn1MmfE.jpeg)
计算 m 个 128 维向量的**距离**，作业里的公式是 L2 范数的平方，也就是先平方后求和。。。
也可以简化为一般 L2 范数，相当与常见的向量 length，np.linalg.norm
[Triplet Network, Triplet Loss 及其 tensorflow 实现](https://zhuanlan.zhihu.com/p/35560666)
![image.png](/images/yuqueAssets/Frg5v-qKu4P7PLkvgKZGItINp_8R.png)

## 1 对多

实现验证给定的两张脸是不是同一人后，可以更进一步找出给定的人脸是否在数据库中，用 for 循环或者向量化找出 features 距离最近的脸即可

# 作业：Neural Style Transfer

## cost of C G

![image.png](/images/yuqueAssets/FjyxtFbPy85qu2NSoTxZzeqRUTpv.png)

- For the `shape` parameter, a `-1` tells the function to choose the correct dimension size so that the output tensor still contains all the values of the original tensor.
- So `tf.reshape(a_C, shape=[m, n_H * n_W, n_C])` gives the same result as `tf.reshape(a_C, shape=[m, -1, n_C])`.
- If you prefer to re-order the dimensions, you can use `tf.transpose(tensor, perm)`, where `perm` is a list of integers containing the original index of the dimensions.
- For example, `tf.transpose(a_C, perm=[0,3,1,2])` changes the dimensions from ![](<https://g.yuque.com/gr/latex?(m%2C%20n_H%2C%20n_W%2C%20n_C)#card=math&code=%28m%2C%20n_H%2C%20n_W%2C%20n_C%29&id=JdmLc>) to ![](<https://g.yuque.com/gr/latex?(m%2C%20n_C%2C%20n_H%2C%20n_W)#card=math&code=%28m%2C%20n_C%2C%20n_H%2C%20n_W%29&id=RNyqp>).

## cost of S G：Gram Matrix

![image.png](/images/yuqueAssets/FmAuvEAgrz-N9qLVUP7Y78X62T7f.png)
Gram 矩阵的一个元素 G_ij 表示的是第 i 个 filter 与第 j 个 filter 的 activation 的相似度，Gram 矩阵边长为 filter 个数
对角线元素，比如 G_ii，表示的是 i filter 的活跃程度，也就是被激活的次数，图中检测到 i 图形的次数
如果 i 检测的是竖条纹，G_ii 表示的就是竖条纹的出现次数，越多越大
![image.png](/images/yuqueAssets/FmldzX8VU5TsbH-nn-5p2jbk8WDH.png)
![image.png](/images/yuqueAssets/FmTPaQ8pYBP6WqFuSNI1YHDmSc4O.png)![image.png](/images/yuqueAssets/FtbcSLf5Qg1Th2mJuO3O9gmI0ESO.png)
如何选择每一层的系数?更深层次的图像捕捉更高层次的概念，而更深层次的特征在图像中相对于其他层的局部化程度较低。因此，如果您希望生成的图像柔和地遵循样式图像，请尝试为更深的层选择较大的权值，为第一个层选择较小的权值。相反，如果您希望生成的图像严格遵循样式图像，请尝试为更深的层选择较小的权值，而为第一个层选择较大的权值。
Style 特征需要多个隐藏层的 activation 组合，而 content 特征只需要一个隐藏层
![image.png](/images/yuqueAssets/FjXWo4t9ZU3bL4MTPmgvhm2nZ66v.png)
