---
title: 吴恩达 Improving Deep Neural Networks
urlname: mz2vt4
author: Jason Ma
date: '2022-04-02 15:33:12'
updated: '2023-06-14 23:23:30'
categories:
  - Reading
---

[点击查看【bilibili】](https://player.bilibili.com/player.html?bvid=BV1FT4y1E74V&p=61&page=61)

# 2.1 Mini-Batch 梯度下降

![image.png](/images/yuqueAssets/FqI-EWWouNwPAos4kEtoUadwzbCO.png)![image.png](/images/yuqueAssets/FuLwKdEUrzX1EmPgMJbQMjtLD9EW.png)
把巨大的数据集分割成很多小的进行训练

# 2.2 理解 mini-batch 梯度下降

![image.png](/images/yuqueAssets/Fi3hrDDeOn0sCWikbq6xt5K7CgK4.png)
![image.png](/images/yuqueAssets/Fh00nZDVsrHnJgz_udENNlt_CDW6.png)
每次迭代随机选择 mini-batch，所以会有 noise
但随着不断训练，整体 cost 会下降，选择适中的 mini-batch 大小比较重要
![image.png](/images/yuqueAssets/FnpZIfVIYzQerXjIIbn-fi8FC8qT.png)
大小应该是 2 的倍数，并且数据量小于内存容量

# 2.3 指数加权平均

![image.png](/images/yuqueAssets/Fh-Z4Kr1zpx36C99MH9kFM24pK7d.png)![image.png](/images/yuqueAssets/FreKOHjmHyYtfNcCsM16CZtgmDij.png)
![image.png](/images/yuqueAssets/FswtYRgSy6M_8ng45zfiIpO_yhbH.png)
类似 lerp，太快会抖动，太慢有延迟
β=0.5 时是两天数据的平均，0.98 时是 50 天数据的平均

# 2.4 理解指数加权平均

![image.png](/images/yuqueAssets/FrqdxWcNy4qcy_uQjjs4P1zn9fD2.png)![image.png](/images/yuqueAssets/Fv29yAMEuXinEZfIHP-Ebs7ZTvr9.png)![image.png](/images/yuqueAssets/Fvvv_MEGcYW7NKXjEB55q06UhK_W.png)

# 2.5 指数加权平均的偏差修正

![image.png](/images/yuqueAssets/FukeILKJqJuX5ReMBcrLuxJQiZV8.png)
Vt / (1- bate^t)帮助曲线在开始阶段更符合平均值

# 2.6 Gradient Descent with Momentum

![image.png](/images/yuqueAssets/FoIPxT1rTY8I01dPusoKbvV_m2_1.png)![image.png](/images/yuqueAssets/Fle88RjhaW03MJtRo66DFoe3N9iw.png)
Momentum：矩
因为考虑了之前的梯度，不容易陷入局部最优解。从效果看，相当于保留了冲量
还有一个版本删去了 1-β，相当于除以 1-β，相应的 α 要缩小

# 2.7 RMSprop（Root Mean Square Prop）

![image.png](/images/yuqueAssets/Fg1UEXwmf3OwmW6E93E1xwLRwPsZ.png)
RMSprop 结合 Momentum 可以消除梯度下降过程中的摆动，允许提高学习率，从而加快学习速度
RMSprop 的诞生在 coursera 的课程里

# 2.8 Adam 优化算法

![image.png](/images/yuqueAssets/FjI1-VHmnerSD7_RjJKJO-7IMNhx.png)
Adam：Adaptive Moment Estimation 自适应矩估计

# 2.9 学习率衰减

![image.png](/images/yuqueAssets/FpDf___oGiklIZniwsf8K4MRG9WT.png)![image.png](/images/yuqueAssets/FsaBdLoQQLr8Sgje8ulBtRFubFfX.png)![image.png](/images/yuqueAssets/Fl1l7AkEG_IiQkAEkC6DKhY67q4z.png)

# 2.10 局部最优问题

![image.png](/images/yuqueAssets/FoBBFIhRcF1Cun5R-3Q3pVPXiri-.png)![image.png](/images/yuqueAssets/Fkb9drpv6YR71C3Gr-mPy1JLOpYt.png)
低维图像中的局部最优问题误导了我们，实际上在高维中更有可能遇到的问题是鞍点
![image.png](/images/yuqueAssets/Fi0z6XNIJtkPf5zvprNgY16YZrgu.png)
遇到高维平缓段没有太好的办法，Adam 等优化算法可以尽可能提高速度

## 补充：梯度下降法局部最优解和鞍点的问题

陷入局部最优并不是神经网络的问题，在一个高维空间中做梯度下降，很难收敛到局部最优，因为局部最小值要求函数在所有维度上都是局部最小值。若一个维度收敛到局部最小值的概率是 0.5，则 n 维度收敛到局部最小值的概率是 0.5^n，因此若 n 足够大，则收敛到局部最小值得概率接近于 0。

实际情况，在高维平面，函数会落在鞍点上。鞍点是函数在某一维度或多个维度上梯度不为 0 的点。因此，落在鞍点上的概率为 1-0.5^n。也就是说，当模型最后收敛到一个导数接近 0 的点，那这个点几乎可以肯定是鞍点。

我们使用的小批量梯度下降法(mini-batch SGD)，其本身是有噪声的梯度估计；因此即使位于梯度为 0 的点，也经常在某个 mini-batch 下将其估计偏了，导致往前或往后挪一步摔下马鞍。即使用小批量梯度下降法使得模型很容易逃离特征空间中的鞍点。

那么，神经网络难以踩到局部最优点，也很容易逃离鞍点，为什么最后模型会收敛呢？在高维空间中，真正可怕的不是局部最优点也不是鞍点，而是一些特殊地形，如大面积的平坦区域。在平坦区域，虽然导数不为 0 但也不大，但是其梯度下降的路程却非常的远。它需要走很多步才能走出这一片平台区域；在特殊情况下，使用一阶优化算法甚至走无穷步也走不出去。

因此，相比于局部最优和鞍点，优化算法更可能载到这种类似的平坦区域中；一旦陷入这些危险地形，几乎是无解的。

我们应该考虑的是如何设计一个没有类似平坦区域的 loss 空间，以及深度学习模型的设计。

参考：[http://www.360doc.com/content/17/1122/08/7669533_706045736.shtml](http://www.360doc.com/content/17/1122/08/7669533_706045736.shtml)
————————————————
版权声明：本文为 CSDN 博主「BingLZg」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：[https://blog.csdn.net/Bing*bing_bing*/article/details/95327020](https://blog.csdn.net/Bing_bing_bing_/article/details/95327020)

# 3.1 调试处理

![image.png](/images/yuqueAssets/FukSvTU4ehJWyvujby5vRfJjzcQI.png)
红色 alpha 最重要
黄色其次
紫色更次
剩下的几乎不需要调试
![image.png](/images/yuqueAssets/FmrhBuuBf6Hc9quEwdqY1DegCPzl.png)![image.png](/images/yuqueAssets/FuG-jNrWz2EsTq6h5zPMby0SsjxX.png)
在所有维度上随机取值
精确搜索，不断缩小取值范围

# 3.2 为超参数选择合适的范围

![image.png](/images/yuqueAssets/Fjgy1a28CVgqSy92rzs7ID4faPev.png)![image.png](/images/yuqueAssets/Fv0Kh0oPZavg67F1Tj_L3wwxbnBV.png)
学习率取值 0.0001-1，需要在对数轴上随机
![image.png](/images/yuqueAssets/Fl9YNmiQUrzoXKzL5NVJ-_0TUI-8.png)

# 3.3 实践中的超参数训练: 熊猫 vs. 鱼子酱

![image.png](/images/yuqueAssets/FkcKWRvzkaqEIEA-wEl-gSymEq32.png)
定时更新超参数
![image.png](/images/yuqueAssets/FlRz1HHl1duNR3OS3lXjHPfh2eb6.png)
如果训练足够快，可以尝试大量随机的超参数，看哪一个更好

# 3.4 归一化网络的激活函数

![image.png](/images/yuqueAssets/FrZdGh8c7Oe4hcJNjZ3e3U1WfR_Z.png)
Logistic Regression 中可以用均值归一化加快训练
神经网络中可以用 Batch 归一化 Z 加快训练
![image.png](/images/yuqueAssets/FmQHEDtE9rdQQduWRMgX-vCJsOq9.png)
Batch Norm 引入了两个学习参数 γ 和 β，通过学习这两个参数可以使 z 有任意的均值和方差

# 3.5 Fitting Batch Norm into a Neural Network

![image.png](/images/yuqueAssets/Fv5_gvm6mCk3uFAElIY7qufOiQGF.png)![image.png](/images/yuqueAssets/Fn9EnmXSBbBCdzhavEUOEnOfCLw_.png)
原来的 b 的作用被 β 替代了
![image.png](/images/yuqueAssets/FuhGVhKI3Lytj8Tk-7fOTx_9aoCF.png)

# 3.6 Batch Norm 为什么奏效

![image.png](/images/yuqueAssets/FibjjmkR2xvJlvTzEDdVqNdn9L-F.png)![image.png](/images/yuqueAssets/FlvAkzqN7Jgfka16ujivihn0CxKq.png)
Batch Norm 通过限制均值和方差让每一层网络之间更独立，更少受到前层的影响，减少了协变量转变（Covariate Shift）的问题
![image.png](/images/yuqueAssets/FoHHL-NR8IWkolAjm4YK4kwLfQcS.png)
配合 mini-batch 使用可以起到轻微的正则化作用，因为每个 mini-batch 相互独立

# 3.7 Batch Norm at Test Time

![image.png](/images/yuqueAssets/FlsJZhmX2Alq94yf1jg9JuYoC1OQ.png)
归一化测试数据集不能依赖测试数据集本身，而是必须依赖训练数据集，这样才能验证模型的泛化性能

重点就是在训练时我们是用整个最小批 比如说 64 个或者 128 个或者其他数量的训练实例 来计算 mu 和 sigma 平方 但是在测试时 我们可能会需要处理单个测试实例 那么 处理的方式就是通过训练集来估算 mu 和 sigma 平方 我们有很多方式来做估算 理论上 我们可以用我们最后的网络运行整个训练集 来得到 mu 和 sigma 平方 但是实际上 人们通常会实现某种指数加权平均 来记住在训练时见到的 mu 和 sigma 平方的值 然后用这个指数加权平均数 有时也被称作移动均值 来得到 mu 和 sigma 平方的粗略的估算 然后我们用这些 mu 和 sigma 平方的估算值 在测试时进行比例缩放来获取隐藏神经元的 Z 值

# 3.8 softmax 回归

![image.png](/images/yuqueAssets/FkEYG4n-mBlf09tMXsoZWQSPmSLn.png)![image.png](/images/yuqueAssets/FjD9DBNXpLCbSiEHjp-07uZBa0ko.png)
softmax 用玻尔兹曼分布并归一化求出不同分类的概率
![image.png](/images/yuqueAssets/FrgW5i23_WVgXI-1Ddd6gWdoYCHJ.png)
单层神经网络解决多线性分类，深层神经网络可以解决更复杂的非线性决策边界

# 3.9 训练一个 softmax 分类器

![image.png](/images/yuqueAssets/FrFVwBq_uK7mKZbcGckNsSF3U2hB.png)
Softmax 是对 Logistic Regression 的推广
![image.png](/images/yuqueAssets/Fn7_g0rt7aIGMqNXSRG_PUp5bpku.png)
![image.png](/images/yuqueAssets/FhnqzMVi4ebTVXuakqGH5pcKG1TY.png)
导数计算和 logistic regression 的 a-y 类似

# 3.10 深度学习框架

![image.png](/images/yuqueAssets/FjCmyvUvVgYlYxG3Wg_OhpqGbh0T.png)

# 3.11 TensorFlow

![image.png](/images/yuqueAssets/FkvBrXIHT8ivYjmCYG1Zy7iC-TkW.png)![image.png](/images/yuqueAssets/FkyNW-P55wqxeqNhbjARESmTMaZj.png)
