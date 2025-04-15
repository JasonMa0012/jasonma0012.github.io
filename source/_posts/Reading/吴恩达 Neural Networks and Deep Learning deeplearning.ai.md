---
title: 吴恩达 Neural Networks and Deep Learning deeplearning.ai
urlname: xdbdqx
date: '2022-03-19 18:28:15'
updated: '2023-06-14 23:23:27'
author: Jason Ma
categories:
  - Reading
---


官网：

[Deep Learning](https://www.coursera.org/specializations/deep-learning#about)



[bilibili](https://player.bilibili.com/player.html?bvid=BV1FT4y1E74V)

![](/images/yuqueAssets/cdb561f108954c20d056d1a74397cdd7.png)



# 1.2 什么是神经网络（Neural Network）
![](/images/yuqueAssets/8adb658a4e86e0562abe882ad8fa0880.png)

通过一个神经元（Neuron）预测房价，这个神经元输入是面积，经过线性计算，输出不小于0的价格，也就是ReLU函数（修正线性单元，Rectified Linear Unit，修正是指取不小于0的值），这就是最简单的神经网络，大型神经网络通过堆叠神经元组成。

![](/images/yuqueAssets/dd5b0ff1ef338eba4f9edaa1f9026211.png)

![](/images/yuqueAssets/11b8eb461e837ae52d2ea773eeef84b3.png)

![](/images/yuqueAssets/03283f78571829ddf658cb8461bd0a16.png)![](/images/yuqueAssets/0afb6be9137e4c8b44b47fe391723194.png)

# 1.3 用神经网络进行监督学习
## 对不同的问题选择最合适的模型
![](/images/yuqueAssets/608a9584abe9013012788c3963263015.png)

![](/images/yuqueAssets/5af6791e599d4729328fe78042989e5c.png)

![](/images/yuqueAssets/9c603490d4537ebf7b54024edcb42006.png)

# 1.4 为什么深度学习会兴起
![](/images/yuqueAssets/785c0ca776d6f3dc6492cd6060afd0af.png)

随着人类在网络上创造的数据越来越多，收集大量数据越来越容易，并且随着投入数据的增加，大规模神经网络的性能增速要远超其他算法。同时硬件的快速发展也带动了神经网络的规模增大。

![](/images/yuqueAssets/de5cf3aed079394a15cc14ae8c162a81.png)

算法的改进（比如将Logistic函数换成ReLU改进大于1时梯度过小的问题）可以提升训练速度和性能，速度的提升又能使算法迭代更快

# Geoffrey Hinton Interview
[Geoffrey Hinton Interview - Introduction to Deep Learning | Coursera](https://www.coursera.org/learn/neural-networks-deep-learning/lecture/dcm5r/geoffrey-hinton-interview)

Geoffrey Hinton并不是第一个发明反向传播算法的人，但他的paper是第一个有显著影响力的。因为他花了大量工作让他人理解这套算法，1986年Nature的编辑里有个心理学家，Geoffrey也学过心理学，他用更直观的方式使编辑理解了算法。

只是埋头做研究还不够，让别人理解并接受研究成果同样重要。

# 2.1 二分分类
![](/images/yuqueAssets/658f413475f3e5b67e4e8fd706b18977.png)

![](/images/yuqueAssets/24d5706e456161184be92c264ef631c7.png)

本课程比起ML有一些改进，X中的每个x向量改为列向量，编程环境改成python

# 2.2 Logistic Regression
![](/images/yuqueAssets/ca108f7db1f452441532ff83216977b4.png)

这里使用新的符号表示线性计算：y=wx+b，ML课里的θ0在这里是b，更清晰了

2.3 Logistic

![](/images/yuqueAssets/fd51b23d420ba596f9587ae3888ed6f7.png)

## 补充：对数几率回归
逻辑回归（Logistic Regression）是一种广义线性回归。

（西瓜书里认为Logistic Regression翻译成逻辑回归不太准确，翻译成了对数几率回归）。 

线性回归解决的是回归问题，预测值是实数范围，逻辑回归则相反，解决的是分类问题，预测值是[0,1]范围。

所以逻辑回归名为回归，实为分类。

二分类情况下很容易理解，分类标签为0、1，预测结果在[0,1]之间，我们得到的实际上是样本为 0 或 1 的概率。

# 2.4 梯度下降法
![](/images/yuqueAssets/7e1d6bc4f04b32bd2bcd1be7c1982035.png)![](/images/yuqueAssets/4b456e198b7b69e0cedfc8145507361f.png)

# 2.7 计算图
![](/images/yuqueAssets/d7b1cb294460cc629db4626b7cc09f60.png)

链式法则

# 2.8 使用计算图求导
![](/images/yuqueAssets/a405ad6e54f9b59181e1bee87af0b950.png)

![](/images/yuqueAssets/15f4f80837c43d4db00773a0d1bd651f.png)

反向传播类似链式法则，若求u关于J的偏导：dJ/du，从J出发走到u，有几条路最后就有几大项相加，同一条路每有几座桥最后就有几项相乘。

![](/images/yuqueAssets/583904c5c669693500b6451c45f2144e.png)

机器学习中的自动求导的原理是，对于每一个神经元中做的每一个最小的计算，预先算好导数，在需要求某个参数的导数时，按照链式法则从右向左反向依次将导数相乘得到结果



## 补充：复合函数求导，链式法则
[bilibili](https://player.bilibili.com/player.html?bvid=BV1gQ4y1X7rL)

## 补充：神经网络
[[Deep Learning] 神经网络基础 - Poll的笔记 - 博客园](https://www.cnblogs.com/maybe2030/p/5597716.html)

## 补充：反向传播
[一文弄懂神经网络中的反向传播法——BackPropagation - Charlotte77 - 博客园](https://www.cnblogs.com/charlotte77/p/5629865.html)

## 补充：自动求导
[Tensorflow 是如何求导的？ - 知乎](https://www.zhihu.com/question/66200879/answer/870023448)



# 2.9 Logistic回归中的梯度下降法
![](/images/yuqueAssets/d82f6967dd0ba9c1982db18ac7e714f3.png)

将Logistic Regression写成神经网络的格式，第一步，对L(a,y)求导：

![](/images/yuqueAssets/b1f68b105994677f289569fd31d91473.png)

![](/images/yuqueAssets/0e8cff4b65d53e264b84673d420a0f4b.png)

![](/images/yuqueAssets/0978424aac285013507087f7537056df.png)

算好dz之后，求dwn只需和wn直接相乘就可以了，然后又是熟悉的梯度下降公式

# 2.10 m个样本的梯度下降
![](/images/yuqueAssets/66685df9951cae5448884557dce4043d.png)

![](/images/yuqueAssets/8449115dfad9642352e0817e54184835.png)

不使用向量化的单次梯度下降逻辑

# 2.11 向量化
![](/images/yuqueAssets/544000f710d34ff6e5ecbc7dc3f88255.png)

![](/images/yuqueAssets/9bda85322f6bdccb132c6d18b7619bc0.png)

# 2.12 向量化更多例子
![](/images/yuqueAssets/f8fa1f561f147cffd0cd7d37b3c6493f.png)

![](/images/yuqueAssets/52e8c66365bfef11c2cb6c197d3c9bdf.png)

![](/images/yuqueAssets/edd128b7de4595350683537f3306f63d.png)

# 2.13 向量化Logistic回归
![](/images/yuqueAssets/870c4166b341a25b2ac21a5c2df7db04.png)

# 2.14 向量化Logistic回归的梯度输出
![](/images/yuqueAssets/9c84ea6f92faaae0909272937fbe8bd5.png)

![](/images/yuqueAssets/20a5a5ad38091ab3d0f6658e9bffe213.png)

# 2.15 Python中的广播
[https://www.runoob.com/numpy/numpy-broadcast.html](https://www.runoob.com/numpy/numpy-broadcast.html)

![](/images/yuqueAssets/7b5d3a8c94d8b35243a936a9ead3d8d4.png)

![](/images/yuqueAssets/1dd1c9aa81e53a911875a6004b02358c.png)

![](/images/yuqueAssets/372d4d14ce20b5094515e5b86b03385d.png)

# 2.16 关于Numpy向量的说明
![](/images/yuqueAssets/ba97a42eba1d0697a7ddcc88acc9c010.png)

不要使用数组，始终用明确行列的矩阵，并适时使用assert确保shape是预期的，否则会产生各种难以调试的bug

# 2.18 Logistic代价函数的解释
![](/images/yuqueAssets/625cc9982aae6883d9cdc359f87174dc.png)

![](/images/yuqueAssets/e94de1f25dec360bf18d9130e0d9f0ee.png)

最大似然估计、加log方便求导

## 补充：交叉熵代价函数
交叉熵（cross-entropy）

![](https://i.stack.imgur.com/LSVEc.png)

[看得见的信息论-为什么用交叉熵作为逻辑回归的代价函数](https://zhuanlan.zhihu.com/p/31207556)

[逻辑回归与交叉熵](https://zhuanlan.zhihu.com/p/38853901)

# 3.1 神经网络概览
![](/images/yuqueAssets/cb3d4ca96d19ad41330767e94e7cff28.png)

方括号表示Leyer，圆括号表示第几个样本

# 3.2 神经网络表示
![](/images/yuqueAssets/92f558c2f8a62d3d30138790116d1e39.png)

这是一个双层神经网络的表示，一般忽略输入层，所以有实际计算的是隐藏层和输出层两层。

之前的X现在=a^[0]，预测结果y hat = a^[2]

# 3.3 计算神经网络的输出
![](/images/yuqueAssets/702948215cd27c797aaa30f18f21d12c.png)

方括号上标表示第几层，下标表示第几个节点

![](/images/yuqueAssets/a29b3e62f28860140ff60e193b79ea1f.png)

![](/images/yuqueAssets/e1f2bac4553879c7cc55959307266981.png)

# 3.4 多个样本的向量化
![](/images/yuqueAssets/763689fb15647a06dde4359c214de8b8.png)![](/images/yuqueAssets/380a304f9e1cdc5b71922221b091f5d7.png)

# 3.5 向量化的解释
![](/images/yuqueAssets/9ceffb1777e697c227c65f522801ac27.png)

矩阵两个维度，第几个参数/节点，第几个样本

![](/images/yuqueAssets/f4bda1d861ba5c3f12f8d8b8d38b1519.png)

# 3.6 激活函数
![](/images/yuqueAssets/5330024f8cbc5fad9f5a623ba3908161.png)![](/images/yuqueAssets/6b56dcd0630e3ff93a3dbf9f953d4fbb.png)

激活函数（Activation Function）

[深度学习领域最常用的10个激活函数，一文详解数学原理及优缺点](https://finance.sina.com.cn/tech/2021-02-24/doc-ikftssap8455930.shtml)

Sigmoid函数适合用在二元分类最后的output节点中，非要用在隐藏层的话应该选择tanh函数，因为平均值更接近0，梯度下降更快。

目前最流行的是ReLU函数，因为大于0时梯度为1，梯度下降更快，可以直接在隐藏层中替换掉Sigmoid。

Leaky ReLU弥补了小于0梯度为0的缺点

# 3.7 为什么需要非线性激活函数
![](/images/yuqueAssets/537e4c14f6c07077a4df563b966b89b3.png)

线性激活函数是指输出直接等于输入，a=z，这会导致y hat就等于这些线性计算的组合，还是个线性函数，那么无论有多少层和一层是等效的。只能解决线性可分问题，如果要解决线性不可分问题就必须使用非线性激活函数

# 3.8 激活函数的导数
## Sigmoid
![](/images/yuqueAssets/67fbb62b0d0c06e154b41eed39c4b982.png)

关于g'=g(1-g)：

![](/images/yuqueAssets/a02e22c69c61d0e25a5ab0677dddedb1.png)

![](/images/yuqueAssets/56947f0322371f88dc75ede1c30a9222.png)

$  \begin{array}{l}
\frac{d}{dx}\frac{1}{1+e^{-x}}\\
=\frac{1}{1+e^{-x}}\frac{e^{-x}}{1+e^{-x}}\\
=\frac{1}{1+e^{-x}}\left(\frac{1+e^{-x}}{1+e^{-x}} -\frac{1}{1+e^{-x}}\right)\\
=\frac{1}{1+e^{-x}}\left( 1-\frac{1}{1+e^{-x}}\right)
\end{array} $

## Tanh
![](/images/yuqueAssets/abf1e77bcc0024f903c16f372d68d72e.png)

g'=1-g^2

## ReLU and Leaky ReLU
![](/images/yuqueAssets/23c2f98a9931f94063498ff83bb32ebc.png)

这里的激活函数的导数很明显是预先计算好最优的，为了节省计算量尽可能复用正向传播的计算结果

# 3.9 神经网络梯度下降
[一文弄懂神经网络中的反向传播法——BackPropagation - Charlotte77 - 博客园](https://www.cnblogs.com/charlotte77/p/5629865.html)

![](/images/yuqueAssets/5eff778430da597977aa911914678667.png)

![](/images/yuqueAssets/7b8393345867e042bce99d09167b2d3f.png)

反向传播上面的博客讲的很清楚了，还是要带入数值计算

# 3.10 直观理解反向传播
![](/images/yuqueAssets/2ae7bf6b5d1467d4e0634cd66697f7f1.png)

![](/images/yuqueAssets/25c7505c95d0b4fa5d489807db4d6e24.png)

![](/images/yuqueAssets/613f878332f264d7a2c2b7ae8447d690.png)

![](/images/yuqueAssets/63a5dca37b325feef208f8927132d23b.png)

目前只是求导

# 3.11 随机初始化
![](/images/yuqueAssets/316ee7872e94576a6430d7fd22c97510.png)

如果并排的神经元的权重相同，则两个神经元的函数相同，出现对称，会影响梯度下降。

全部初始化为0则所有神经元的计算是一样的，对结果的共享一样，无论梯度下降运行多久，所有神经元的仍然进行一样的计算

![](/images/yuqueAssets/b5e57326cc1f2abc72ed38259178591c.png)

初始参数太大可能导致分类算法的激活函数落在梯度接近0的部分，会减慢梯度下降速度，神经网络越深，初始值应该越小

# <font style="color:rgb(31, 31, 31);">Pieter Abbeel Interview</font>
深度强化学习应用前景广阔，比如让机器人学习叠衣服、走路等等，并且是无监督学习。还可以用在根据屏幕像素打游戏上

# 4.1 深层神经网络
![](/images/yuqueAssets/01f468f4edc0a3ed9dcdf5f5f4b053a0.png)

![](/images/yuqueAssets/1eb99827357eb10f09ddf077a7064497.png)

方括号上标代表神经网络层数，n代表当前层有几个神经元

# 4.2 深层网络中的正向传播
![](/images/yuqueAssets/0baa74afdebe61953e8b81263f0befc8.png)

# 4.3 检查矩阵的维度
实现深层神经网络的时候一定要注意矩阵的维度，可以用纸和注释记录并检查

![](/images/yuqueAssets/4b78880d18faebb9e158f7d0e5072eea.png)

![](/images/yuqueAssets/e03f7375d65cf9352eceaf45fc562c08.png)

L是第几层，m是样本数，n是每层节点数

z = wx+b

a = Activision(z)

维度：

z、a：（n[L], n[L-1]）

Z、A：（n[L], m）

x：（n[L-1], 1）

X：（n[L-1], m）

b：（n[L], 1）广播到（n[L], m）

# 4.4 为什么使用深度表示
![](/images/yuqueAssets/71b28bb87b4f0a4bdc103232d81c92bb.png)![](/images/yuqueAssets/418a79dd2b3af9b04926df4ccdb889ca.png)

神经网络将复杂的问题**分而治之**，如果要识别人脸，则先识别边缘，用边缘组合成局部，再组合成鼻子眼睛，最后组合成人脸。电路设计中也有同样的现象，同一个函数，如果用多个隐藏层实现，使用的门的数量是O(logn)，而只用一层需要的门的数量是O(2^n)，相当于穷举法

# 4.5 搭建神经网络基础组成部分
![](/images/yuqueAssets/062d76791cc02ea3fcb93819a2ac08ab.png)

![](/images/yuqueAssets/3d32fa46bcc4d10c1f4a3a4603878c78.png)

将之前单层神经元的计算封装成可复用的模块

# 4.6 前向和反向传播
![](/images/yuqueAssets/9d432d67a1914904473263864d3cee7e.png)![](/images/yuqueAssets/366d3db1a927930bde6f43bf436c97a7.png)

![](/images/yuqueAssets/7d6428c9062d351a3cd2435316300529.png)

传播算法流程图

正向输入样本X，输出预测y hat和cost

反向输入da对于J的导数，中间模块输出每个元素的导数和上一层的da

中间模块可以任意修改层数L和每层神经元数n

# 4.7 参数vs超参数
![](/images/yuqueAssets/732d39e2ab1844555e774c6365f686a0.png)

超参数（Hyper Parameters）指影响W、b参数的参数，比如Iterations、Learning Rate、Layers

![](/images/yuqueAssets/e479fbb67614fff7a0e3635871118a53.png)

超参数的设置目前主要基于经验，多尝试几次，选择最适合自己的

# 4.8 这与大脑有什么关系


![](/images/yuqueAssets/0f540ebd0a0653ae960abc2da3ef1681.png)

![](/images/yuqueAssets/04a9b192e5e501ca2142786534e84313.png)

目前对大脑的研究还远远不足以解释神经元的学习原理，神经网络是对生物神经元的过度简化，他们之间一点都不像

# 4.9 作业：一步步构建深度神经网络
![](/images/yuqueAssets/9300a09b17d819703217c9677517cfb5.png)

![](/images/yuqueAssets/ce598c38114e6ae69703750e094b50f3.png)

# 采访lan Goodfellow
花书作者之一，GAN创始人，早期研究神经学

GAN是目前深度学习的中心，机器学习算法的安全性很重要











