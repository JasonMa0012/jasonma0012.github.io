---
title: 吴恩达 Improving Deep Neural Networks
urlname: mz2vt4
date: '2022-04-02 15:33:12'
updated: '2023-06-14 23:23:30'
author: Jason Ma
cover: 'https://cdn.nlark.com/yuque/0/2022/png/504873/1648885068639-555df7e8-e2a7-4d36-8ac9-ea3e8a8eb878.png'
description: 'https://player.bilibili.com/player.html?bvid=BV1FT4y1E74V&amp;p=61&amp;page=612.1 Mini-Batch梯度下降把巨大的数据集分割成很多小的进行训练2.2 理解mini-batch梯度下降每次迭代随机选择mini-batch，所以...'
---
[bilibili](https://player.bilibili.com/player.html?bvid=BV1FT4y1E74V&p=61&page=61)

# 2.1 Mini-Batch梯度下降
![](/images/yuqueAssets/4583b39703089ad917789627b959f1c4.png)![](/images/yuqueAssets/5415ae41d19cf6e2ef30df22eb6a58cb.png)

把巨大的数据集分割成很多小的进行训练

# 2.2 理解mini-batch梯度下降
![](/images/yuqueAssets/8d5c605a3ebf8dd3edc1e091f43c505f.png)

![](/images/yuqueAssets/9fc2d4ec2584680ea3064fa94188ea3f.png)

每次迭代随机选择mini-batch，所以会有noise

但随着不断训练，整体cost会下降，选择适中的mini-batch大小比较重要

![](/images/yuqueAssets/cb71e99877c0486860b133088285471f.png)

大小应该是2的倍数，并且数据量小于内存容量

# 2.3 指数加权平均
![](/images/yuqueAssets/9c13838da3d11b0be0b3bceaf4da6804.png)![](/images/yuqueAssets/e64c3ac5a2af88884152bfe943c27c5e.png)

![](/images/yuqueAssets/7a7739c8adfb04af24e4541f8c9554d4.png)

类似lerp，太快会抖动，太慢有延迟

β=0.5时是两天数据的平均，0.98时是50天数据的平均

# 2.4 理解指数加权平均
![](/images/yuqueAssets/9ca4f9a6c233a9c164c04196815cf250.png)![](/images/yuqueAssets/21f9643777f3967271a24eda076721d1.png)![](/images/yuqueAssets/1b74411c41fccc74e31730e112a14043.png)

# 2.5 指数加权平均的偏差修正
![](/images/yuqueAssets/b0194bd65abf93f1a489fb0a57bb887a.png)

Vt / (1- bate^t)帮助曲线在开始阶段更符合平均值

# 2.6 Gradient Descent with Momentum
![](/images/yuqueAssets/895e34fa027c909b91d18e1ff774805d.png)![](/images/yuqueAssets/5f2c42de12d4209868b8660eab9a5a64.png)

Momentum：矩

因为考虑了之前的梯度，不容易陷入局部最优解。从效果看，相当于保留了冲量

还有一个版本删去了1-β，相当于除以1-β，相应的α要缩小

# 2.7 RMSprop（Root Mean Square Prop）
![](/images/yuqueAssets/5581e90e957a9e05601163c65ea93861.png)

RMSprop结合Momentum可以消除梯度下降过程中的摆动，允许提高学习率，从而加快学习速度

RMSprop的诞生在coursera的课程里

# 2.8 Adam优化算法
![](/images/yuqueAssets/0d10ab03d71b135b45ef814256daac6d.png)

Adam：Adaptive Moment Estimation 自适应矩估计

# 2.9 学习率衰减
![](/images/yuqueAssets/38076776daf5c5550e30f3071304482c.png)![](/images/yuqueAssets/1665aa9bf9f75415be6fbe15f0c0beb0.png)![](/images/yuqueAssets/605194f32a30745b8dc3095039c29dd8.png)

# 2.10 局部最优问题
![](/images/yuqueAssets/bc2e57e1962d3e7d489d0b396c8d89d4.png)![](/images/yuqueAssets/7516ce216f381810d940a971355d12a5.png)

低维图像中的局部最优问题误导了我们，实际上在高维中更有可能遇到的问题是鞍点

![](/images/yuqueAssets/bce93585b5776309da7070a953554665.png)

遇到高维平缓段没有太好的办法，Adam等优化算法可以尽可能提高速度

## 补充：梯度下降法局部最优解和鞍点的问题
陷入局部最优并不是神经网络的问题，在一个高维空间中做梯度下降，很难收敛到局部最优，因为局部最小值要求函数在所有维度上都是局部最小值。若一个维度收敛到局部最小值的概率是0.5，则n维度收敛到局部最小值的概率是0.5^n，因此若n足够大，则收敛到局部最小值得概率接近于0。



实际情况，在高维平面，函数会落在鞍点上。鞍点是函数在某一维度或多个维度上梯度不为0的点。因此，落在鞍点上的概率为1-0.5^n。也就是说，当模型最后收敛到一个导数接近0的点，那这个点几乎可以肯定是鞍点。



我们使用的小批量梯度下降法(mini-batch SGD)，其本身是有噪声的梯度估计；因此即使位于梯度为0的点，也经常在某个mini-batch下将其估计偏了，导致往前或往后挪一步摔下马鞍。即使用小批量梯度下降法使得模型很容易逃离特征空间中的鞍点。



那么，神经网络难以踩到局部最优点，也很容易逃离鞍点，为什么最后模型会收敛呢？在高维空间中，真正可怕的不是局部最优点也不是鞍点，而是一些特殊地形，如大面积的平坦区域。在平坦区域，虽然导数不为0但也不大，但是其梯度下降的路程却非常的远。它需要走很多步才能走出这一片平台区域；在特殊情况下，使用一阶优化算法甚至走无穷步也走不出去。



因此，相比于局部最优和鞍点，优化算法更可能载到这种类似的平坦区域中；一旦陷入这些危险地形，几乎是无解的。



我们应该考虑的是如何设计一个没有类似平坦区域的loss空间，以及深度学习模型的设计。



参考：[http://www.360doc.com/content/17/1122/08/7669533_706045736.shtml](http://www.360doc.com/content/17/1122/08/7669533_706045736.shtml)

————————————————

版权声明：本文为CSDN博主「BingLZg」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。

原文链接：[https://blog.csdn.net/Bing_bing_bing_/article/details/95327020](https://blog.csdn.net/Bing_bing_bing_/article/details/95327020)

# 3.1 调试处理
![](/images/yuqueAssets/d75ffee35acdad5da33ce11e4469f922.png)

红色 alpha最重要

黄色其次

紫色更次

剩下的几乎不需要调试

![](/images/yuqueAssets/1ee43fe8e2137b11728807ea8c750059.png)![](/images/yuqueAssets/a1068a2acd5e29769810a538fcf56ef8.png)

在所有维度上随机取值

精确搜索，不断缩小取值范围

# 3.2 为超参数选择合适的范围
![](/images/yuqueAssets/7dd123f3a18558e5877bbc06fe4e08e9.png)![](/images/yuqueAssets/8ef2eb2759aab68dbbff9c2edf391705.png)

学习率取值0.0001-1，需要在对数轴上随机

![](/images/yuqueAssets/6630cb0cba30f141e7bcfb583c29b0a4.png)

# 3.3 实践中的超参数训练: 熊猫 vs. 鱼子酱
![](/images/yuqueAssets/f651ef6043271638607486f665374cf9.png)

定时更新超参数

![](/images/yuqueAssets/f57a08467a96e78646b48b6383d45bbb.png)

如果训练足够快，可以尝试大量随机的超参数，看哪一个更好

# 3.4 归一化网络的激活函数
![](/images/yuqueAssets/b9752e023764010b90e2030c888695f1.png)

Logistic Regression中可以用均值归一化加快训练

神经网络中可以用Batch归一化Z加快训练

![](/images/yuqueAssets/ab0dbb8b08bb0f3cc46164ae92159af2.png)

Batch Norm引入了两个学习参数γ和β，通过学习这两个参数可以使z有任意的均值和方差

# 3.5 Fitting Batch Norm into a Neural Network
![](/images/yuqueAssets/f7d00b92482afae6d50619d6dcfde5df.png)![](/images/yuqueAssets/b8217641e16614b085f4029ac8c67a07.png)

原来的b的作用被β替代了

![](/images/yuqueAssets/f29b68e98aa39cb5f9444e739bd88b3f.png)

# 3.6 Batch Norm为什么奏效
![](/images/yuqueAssets/0eaa1feb5833a2bd4dbd5a9a6903ce87.png)![](/images/yuqueAssets/eabc042a851f98be134761bb0be65d16.png)

Batch Norm通过限制均值和方差让每一层网络之间更独立，更少受到前层的影响，减少了<font style="color:rgb(221, 221, 221);">协变量转变（</font>Covariate Shift<font style="color:rgb(221, 221, 221);">）的问题</font>

![](/images/yuqueAssets/97236bc97a10076de6ecbd5a7166b84d.png)

配合mini-batch使用可以起到轻微的正则化作用，因为每个mini-batch相互独立

# 3.7 Batch Norm at Test Time
![](/images/yuqueAssets/34ecf2aaf12b804de6cdeeb0e6882f96.png)

归一化测试数据集不能依赖测试数据集本身，而是必须依赖训练数据集，这样才能验证模型的泛化性能



重点就是在训练时我们是用整个最小批 比如说64个或者128个或者其他数量的训练实例 来计算mu和sigma平方 但是在测试时 我们可能会需要处理单个测试实例 那么 处理的方式就是通过训练集来估算mu和sigma平方 我们有很多方式来做估算 理论上 我们可以用我们最后的网络运行整个训练集 来得到mu和sigma平方 但是实际上 人们通常会实现某种指数加权平均 来记住在训练时见到的mu和sigma平方的值 然后用这个指数加权平均数 有时也被称作移动均值 来得到mu和sigma平方的粗略的估算 然后我们用这些mu和sigma平方的估算值 在测试时进行比例缩放来获取隐藏神经元的Z值

# 3.8 softmax回归
![](/images/yuqueAssets/480c4c11d0f21b47a29a806d6156bbcd.png)![](/images/yuqueAssets/fc7ace91acb7043966a303c30505caa7.png)

softmax用玻尔兹曼分布并归一化求出不同分类的概率

![](/images/yuqueAssets/9235abd0b15ea58c89af6f22511c4a0d.png)

单层神经网络解决多线性分类，深层神经网络可以解决更复杂的非线性决策边界

# 3.9 训练一个softmax分类器
![](/images/yuqueAssets/64e909805d3e8b017a82b0ae67affe49.png)

Softmax是对Logistic Regression的推广

![](/images/yuqueAssets/116eca3bafb567e6a16c283cbc1684e8.png)

![](/images/yuqueAssets/5db588e4c84a8ef391d6bd7662a90eea.png)

导数计算和logistic regression的a-y类似

# 3.10 深度学习框架
![](/images/yuqueAssets/6c038ec8c200d1e991b918e764d42d71.png)

# 3.11 TensorFlow
![](/images/yuqueAssets/5f458d5a59501aa534b9ef9609072ecd.png)![](/images/yuqueAssets/eb19edcb819c4f84a63e0dbae188b14e.png)

