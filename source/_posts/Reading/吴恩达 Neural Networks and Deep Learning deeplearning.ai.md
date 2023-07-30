---
title: 吴恩达 Neural Networks and Deep Learning deeplearning.ai
urlname: xdbdqx
author: Jason Ma
date: '2022-03-19 18:28:15'
updated: '2023-06-14 23:23:27'
categories:
  - Reading
---

官网：
[Deep Learning](https://www.coursera.org/specializations/deep-learning#about)

[点击查看【bilibili】](https://player.bilibili.com/player.html?bvid=BV1FT4y1E74V)
![image.png](/images/yuqueAssets/FvozMcD1lyzdjaSQkNCRD-51bUJW.png)

# 1.2 什么是神经网络（Neural Network）

![image.png](/images/yuqueAssets/Fr48SkLBleLTOWCjTNwfDI2Mw_JD.png)
通过一个神经元（Neuron）预测房价，这个神经元输入是面积，经过线性计算，输出不小于 0 的价格，也就是 ReLU 函数（修正线性单元，Rectified Linear Unit，修正是指取不小于 0 的值），这就是最简单的神经网络，大型神经网络通过堆叠神经元组成。
![image.png](/images/yuqueAssets/Fn4dm0Tl-f4PIlwqrFDw_H4tOBd-.png)
![image.png](/images/yuqueAssets/FpVvgCXJzWh8T7w_zcBy03F1Sgup.png)
![image.png](/images/yuqueAssets/Fmx7SYqlnZ6bUiG50UMMXWa25Q6l.png)![image.png](/images/yuqueAssets/FtOcI2pySRXw6qk5nZ3I1qOvJr0A.png)

# 1.3 用神经网络进行监督学习

## 对不同的问题选择最合适的模型

![image.png](/images/yuqueAssets/FtRCR7_EBOXfYS_JCKEl37jLLAMk.png)
![image.png](/images/yuqueAssets/FkhQmAcmOdY6auc76X7p5b5j0Dzv.png)
![image.png](/images/yuqueAssets/FqlpVCfEhP5inhGIC7qclhxlYM1k.png)

# 1.4 为什么深度学习会兴起

![image.png](/images/yuqueAssets/FgBTgiy6xGR1HbVrMHqFHBqcJaBN.png)
随着人类在网络上创造的数据越来越多，收集大量数据越来越容易，并且随着投入数据的增加，大规模神经网络的性能增速要远超其他算法。同时硬件的快速发展也带动了神经网络的规模增大。
![image.png](/images/yuqueAssets/Fp63-ijPszwdnf1_-2lns2iDKEP0.png)
算法的改进（比如将 Logistic 函数换成 ReLU 改进大于 1 时梯度过小的问题）可以提升训练速度和性能，速度的提升又能使算法迭代更快

# Geoffrey Hinton Interview

[Geoffrey Hinton Interview - Introduction to Deep Learning | Coursera](https://www.coursera.org/learn/neural-networks-deep-learning/lecture/dcm5r/geoffrey-hinton-interview)
Geoffrey Hinton 并不是第一个发明反向传播算法的人，但他的 paper 是第一个有显著影响力的。因为他花了大量工作让他人理解这套算法，1986 年 Nature 的编辑里有个心理学家，Geoffrey 也学过心理学，他用更直观的方式使编辑理解了算法。
只是埋头做研究还不够，让别人理解并接受研究成果同样重要。

# 2.1 二分分类

![image.png](/images/yuqueAssets/FgFuMk_5GyEH4OpGFByMyrXULgXq.png)
![image.png](/images/yuqueAssets/Fm77XDx7-Bs2idN-vnIXkUZNZo9M.png)
本课程比起 ML 有一些改进，X 中的每个 x 向量改为列向量，编程环境改成 python

# 2.2 Logistic Regression

![image.png](/images/yuqueAssets/Fmlgf_rWBneOh1h9uC2uAzje5HGi.png)
这里使用新的符号表示线性计算：y=wx+b，ML 课里的 θ0 在这里是 b，更清晰了
2.3 Logistic
![image.png](/images/yuqueAssets/FhuNtvMiZA4CHv-gzbG4wPuHJnT9.png)

## 补充：对数几率回归

逻辑回归（Logistic Regression）是一种广义线性回归。
（西瓜书里认为 Logistic Regression 翻译成逻辑回归不太准确，翻译成了对数几率回归）。
线性回归解决的是回归问题，预测值是实数范围，逻辑回归则相反，解决的是分类问题，预测值是[0,1]范围。
所以逻辑回归名为回归，实为分类。
二分类情况下很容易理解，分类标签为 0、1，预测结果在[0,1]之间，我们得到的实际上是样本为 0 或 1 的概率。

# 2.4 梯度下降法

![image.png](/images/yuqueAssets/FiH4XKqAOMVsIRHMAitZglCb3rMO.png)![image.png](/images/yuqueAssets/FmlXj4kUBEOeDXC5MLfoJZ7Ai5DE.png)

# 2.7 计算图

![image.png](/images/yuqueAssets/FhC21LVKGs1ZzAoPVGFFMoCz8jkG.png)
链式法则

# 2.8 使用计算图求导

![image.png](/images/yuqueAssets/FinISJtEHWxT4Dcwx-M9nSMzSfLZ.png)
![image.png](/images/yuqueAssets/FqZ5F-Cxbay7nrUmIjGEfEDJ_l8c.png)
反向传播类似链式法则，若求 u 关于 J 的偏导：dJ/du，从 J 出发走到 u，有几条路最后就有几大项相加，同一条路每有几座桥最后就有几项相乘。
![image.png](/images/yuqueAssets/Fs5OuIb48Jm2mBqpb3rn4ZRqq_37.png)
机器学习中的自动求导的原理是，对于每一个神经元中做的每一个最小的计算，预先算好导数，在需要求某个参数的导数时，按照链式法则从右向左反向依次将导数相乘得到结果

## 补充：复合函数求导，链式法则

[点击查看【bilibili】](https://player.bilibili.com/player.html?bvid=BV1gQ4y1X7rL)

## 补充：神经网络

[[Deep Learning] 神经网络基础 - Poll 的笔记 - 博客园](https://www.cnblogs.com/maybe2030/p/5597716.html)

## 补充：反向传播

[一文弄懂神经网络中的反向传播法——BackPropagation - Charlotte77 - 博客园](https://www.cnblogs.com/charlotte77/p/5629865.html)

## 补充：自动求导

[Tensorflow 是如何求导的？ - 知乎](https://www.zhihu.com/question/66200879/answer/870023448)

# 2.9 Logistic 回归中的梯度下降法

![image.png](/images/yuqueAssets/FkTmx13qTnuru_S5T4Cq4eadORFp.png)
将 Logistic Regression 写成神经网络的格式，第一步，对 L(a,y)求导：
![image.png](/images/yuqueAssets/Fq_Se9INUlNX-nVWxt0s5AShkhAf.png)
![image.png](/images/yuqueAssets/FvW3BP8-E2hoJzU9uS2njLEcpYza.png)
![image.png](/images/yuqueAssets/FlZJgD7JkCjK87q6JN-biOkypyxg.png)
算好 dz 之后，求 dwn 只需和 wn 直接相乘就可以了，然后又是熟悉的梯度下降公式

# 2.10 m 个样本的梯度下降

![image.png](/images/yuqueAssets/FgXKC-1_tpknrrtJpotIXp4_iUHI.png)
![image.png](/images/yuqueAssets/Flk1xBKbxuKxprDLLF-l4mmZlgaN.png)
不使用向量化的单次梯度下降逻辑

# 2.11 向量化

![image.png](/images/yuqueAssets/Fho2v_eXEmS2ARO9wpz09Y-wn1SS.png)
![image.png](/images/yuqueAssets/Fk1lxyo5xPXTxFvmN3ng6jY5wif-.png)

# 2.12 向量化更多例子

![image.png](/images/yuqueAssets/Fmum_yAM_ucqLtg0w65GKTv7nt_6.png)
![image.png](/images/yuqueAssets/Fpqj4L3j5jCKQMATlaPD2kZcCho1.png)
![image.png](/images/yuqueAssets/FlFBGsIWv25ZXjzwM3jtYnsZjs0c.png)

# 2.13 向量化 Logistic 回归

![image.png](/images/yuqueAssets/Fv1wZqms9JOq5SaGVHH6oTgfU-3l.png)

# 2.14 向量化 Logistic 回归的梯度输出

![image.png](/images/yuqueAssets/FnYHL7fHumckdGNimGi0rH6ABbLm.png)
![image.png](/images/yuqueAssets/FvdIie2BnCzhBaRw7yQGCLRIEXIi.png)

# 2.15 Python 中的广播

[https://www.runoob.com/numpy/numpy-broadcast.html](https://www.runoob.com/numpy/numpy-broadcast.html)
![image.png](/images/yuqueAssets/Fto28ovIWbJOKfsbxmlJFom2e35N.png)
![image.png](/images/yuqueAssets/FuPgCNUlhp15-O4mT8pJEHuTHMPu.png)
![image.png](/images/yuqueAssets/FqXEiLS2ozeNuQcrSjlHkVf3r9Nu.png)

# 2.16 关于 Numpy 向量的说明

![image.png](/images/yuqueAssets/FrrNm84qf-BFMJZ2Qy_qWIiy1VBN.png)
不要使用数组，始终用明确行列的矩阵，并适时使用 assert 确保 shape 是预期的，否则会产生各种难以调试的 bug

# 2.18 Logistic 代价函数的解释

![image.png](/images/yuqueAssets/FkpYxY0yx2eIib8tTDgbQ-vqmWtz.png)
![image.png](/images/yuqueAssets/FrO3nSusFP0DggMo4m1Adaaib8lC.png)
最大似然估计、加 log 方便求导

## 补充：交叉熵代价函数

交叉熵（cross-entropy）
![](https://i.stack.imgur.com/LSVEc.png#from=url&id=fkQm6&originHeight=80&originWidth=288&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
[看得见的信息论-为什么用交叉熵作为逻辑回归的代价函数](https://zhuanlan.zhihu.com/p/31207556)
[逻辑回归与交叉熵](https://zhuanlan.zhihu.com/p/38853901)

# 3.1 神经网络概览

![image.png](/images/yuqueAssets/Fs-7ofid9jp6KfKbKsi12E8M9Axe.png)
方括号表示 Leyer，圆括号表示第几个样本

# 3.2 神经网络表示

![image.png](/images/yuqueAssets/FnTWs44lY73DqIpyilVF0gurrv2v.png)
这是一个双层神经网络的表示，一般忽略输入层，所以有实际计算的是隐藏层和输出层两层。
之前的 X 现在=a^[0]，预测结果 y hat = a^[2]

# 3.3 计算神经网络的输出

![image.png](/images/yuqueAssets/FmkHAbd-cECx48qKkKIl4vhz221G.png)
方括号上标表示第几层，下标表示第几个节点
![image.png](/images/yuqueAssets/FoXOtXEvd2wefygN5Q-M6OXfvuNT.png)
![image.png](/images/yuqueAssets/Frny_A--zUYFtDpiv858l0uVS2pc.png)

# 3.4 多个样本的向量化

![image.png](/images/yuqueAssets/Fv5WkTI5AxTzQJ_JO8A2ziYotvuI.png)![image.png](/images/yuqueAssets/FtqZ9VsXyCuzkt7iar6CB7qGVjDs.png)

# 3.5 向量化的解释

![image.png](/images/yuqueAssets/Fne3_S_W9mMNbYjgXwX0iqv88nQp.png)
矩阵两个维度，第几个参数/节点，第几个样本
![image.png](/images/yuqueAssets/FixVA9KGhfec7R1Bo54TQxeXNbwO.png)

# 3.6 激活函数

![image.png](/images/yuqueAssets/Fre5iY1ck_JZtzEYlkoMFiaZqEWg.png)![image.png](/images/yuqueAssets/FtaYoGBfTl8AmJITWqqKfjgoUCD9.png)
激活函数（Activation Function）
[深度学习领域最常用的 10 个激活函数，一文详解数学原理及优缺点](https://finance.sina.com.cn/tech/2021-02-24/doc-ikftssap8455930.shtml)
Sigmoid 函数适合用在二元分类最后的 output 节点中，非要用在隐藏层的话应该选择 tanh 函数，因为平均值更接近 0，梯度下降更快。
目前最流行的是 ReLU 函数，因为大于 0 时梯度为 1，梯度下降更快，可以直接在隐藏层中替换掉 Sigmoid。
Leaky ReLU 弥补了小于 0 梯度为 0 的缺点

# 3.7 为什么需要非线性激活函数

![image.png](/images/yuqueAssets/Fv0T1uVYn2sHqw2LUJHfPLjLoGY7.png)
线性激活函数是指输出直接等于输入，a=z，这会导致 y hat 就等于这些线性计算的组合，还是个线性函数，那么无论有多少层和一层是等效的。只能解决线性可分问题，如果要解决线性不可分问题就必须使用非线性激活函数

# 3.8 激活函数的导数

## Sigmoid

![image.png](/images/yuqueAssets/FnERaASNvoZbkvtGgZxctYNZIzgl.png)
关于 g'=g(1-g)：
![image.png](/images/yuqueAssets/FjFQEHCWiT_7Na4fpU42KmIrf4ch.png)
![image.png](/images/yuqueAssets/FmYgPf7wHKqb1TsU-SuU4nRvn4fA.png)
![](/images/yuqueAssets/FmuFu6LHbQWnEOzmd6iXBZJsI0hs.svg)

## Tanh

![image.png](/images/yuqueAssets/Fg15RP3U1wVVDYud88wyZeYnW3y2.png)
g'=1-g^2

## ReLU and Leaky ReLU

![image.png](/images/yuqueAssets/Fv6TQ3qSNEehMmv2jK3xvOQV-xXZ.png)
这里的激活函数的导数很明显是预先计算好最优的，为了节省计算量尽可能复用正向传播的计算结果

# 3.9 神经网络梯度下降

[一文弄懂神经网络中的反向传播法——BackPropagation - Charlotte77 - 博客园](https://www.cnblogs.com/charlotte77/p/5629865.html)
![image.png](/images/yuqueAssets/FkXOPJ3bhdw0Jp_60bt3vYC9HaRk.png)
![image.png](/images/yuqueAssets/Frzl1arybklIPc1jybvaTGajz19x.png)
反向传播上面的博客讲的很清楚了，还是要带入数值计算

# 3.10 直观理解反向传播

![image.png](/images/yuqueAssets/FrTFh6EjI0yzf5SW6xQao8C73tPA.png)
![image.png](/images/yuqueAssets/Fl5kR741MP0kVx9478iWyz0hn-hZ.png)
![image.png](/images/yuqueAssets/FnnjrBq5tEhKwSA4CI0-bRrWMVPp.png)
![image.png](/images/yuqueAssets/Fj_wuhMTMscxvufLpLzp4e5I6Xdo.png)
目前只是求导

# 3.11 随机初始化

![image.png](/images/yuqueAssets/FiEXpEIqW3ky3XPOrw6biuPz5yBU.png)
如果并排的神经元的权重相同，则两个神经元的函数相同，出现对称，会影响梯度下降。
全部初始化为 0 则所有神经元的计算是一样的，对结果的共享一样，无论梯度下降运行多久，所有神经元的仍然进行一样的计算
![image.png](/images/yuqueAssets/FqyxyJYBl9t3fNsXeSvmx9exTQvG.png)
初始参数太大可能导致分类算法的激活函数落在梯度接近 0 的部分，会减慢梯度下降速度，神经网络越深，初始值应该越小

# Pieter Abbeel Interview

深度强化学习应用前景广阔，比如让机器人学习叠衣服、走路等等，并且是无监督学习。还可以用在根据屏幕像素打游戏上

# 4.1 深层神经网络

![image.png](/images/yuqueAssets/FvasGlTRlgoJzjmRFBTzTaS6dQl0.png)
![image.png](/images/yuqueAssets/Fr1ZPlKkJdofzQ_vTrZVEwr0hygM.png)
方括号上标代表神经网络层数，n 代表当前层有几个神经元

# 4.2 深层网络中的正向传播

![image.png](/images/yuqueAssets/FoJ2g9z6216cgWYvuqtWP_vB3Gjy.png)

# 4.3 检查矩阵的维度

实现深层神经网络的时候一定要注意矩阵的维度，可以用纸和注释记录并检查
![image.png](/images/yuqueAssets/FsDgHIrsKF07uYaNKRyt6u3p13w4.png)
![image.png](/images/yuqueAssets/FgIkqZvaOkr9xAs2h68g_tYalCj0.png)
L 是第几层，m 是样本数，n 是每层节点数
z = wx+b
a = Activision(z)
维度：
z、a：（n[L], n[L-1]）
Z、A：（n[L], m）
x：（n[L-1], 1）
X：（n[L-1], m）
b：（n[L], 1）广播到（n[L], m）

# 4.4 为什么使用深度表示

![image.png](/images/yuqueAssets/FgLBGrd_J5DYoORNP_IZI9-Gjg9u.png)![image.png](/images/yuqueAssets/FqRrg_SZj8QfGp_jfsT5sca9UpCm.png)
神经网络将复杂的问题**分而治之**，如果要识别人脸，则先识别边缘，用边缘组合成局部，再组合成鼻子眼睛，最后组合成人脸。电路设计中也有同样的现象，同一个函数，如果用多个隐藏层实现，使用的门的数量是 O(logn)，而只用一层需要的门的数量是 O(2^n)，相当于穷举法

# 4.5 搭建神经网络基础组成部分

![image.png](/images/yuqueAssets/FuTqD6YQ5uzf9Mp3Swp6azvHpmSO.png)
![image.png](/images/yuqueAssets/FiyEiyGEbkCh1CiLh8GrgNWEqyrg.png)
将之前单层神经元的计算封装成可复用的模块

# 4.6 前向和反向传播

![image.png](/images/yuqueAssets/FsWACSdIDDb-ScpBH2mke51Av2Kc.png)![image.png](/images/yuqueAssets/FjzRlux6jq4KSwMHF6wt3AQOe9hP.png)
![image.png](/images/yuqueAssets/FsG9NeY2h3_Uzh9GJjuzq3CZZMCL.png)
传播算法流程图
正向输入样本 X，输出预测 y hat 和 cost
反向输入 da 对于 J 的导数，中间模块输出每个元素的导数和上一层的 da
中间模块可以任意修改层数 L 和每层神经元数 n

# 4.7 参数 vs 超参数

![image.png](/images/yuqueAssets/FjlPwdsb8aMYjgzkA5NNHBtMEe3D.png)
超参数（Hyper Parameters）指影响 W、b 参数的参数，比如 Iterations、Learning Rate、Layers
![image.png](/images/yuqueAssets/FhXcUV4P8yXRneKPgOk5Hml4dY3H.png)
超参数的设置目前主要基于经验，多尝试几次，选择最适合自己的

# 4.8 这与大脑有什么关系

![image.png](/images/yuqueAssets/FlG4APOqcSDLjuu_qKfqZCor2F72.png)
![image.png](/images/yuqueAssets/FipHdDafpOzzVMb7sJhoVvOYQ1PX.png)
目前对大脑的研究还远远不足以解释神经元的学习原理，神经网络是对生物神经元的过度简化，他们之间一点都不像

# 4.9 作业：一步步构建深度神经网络

![final outline.png](/images/yuqueAssets/FoB_qxUNU3n2HzwiY5JgelR-_iEW.png)
![image.png](/images/yuqueAssets/FsNqdalLVU9fXwynJvsWGNcg349F.png)

# 采访 lan Goodfellow

花书作者之一，GAN 创始人，早期研究神经学
GAN 是目前深度学习的中心，机器学习算法的安全性很重要
