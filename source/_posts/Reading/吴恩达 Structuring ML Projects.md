---
title: 吴恩达 Structuring ML Projects
urlname: sopcnn
author: Jason Ma
date: '2022-03-28 17:00:27'
updated: '2023-07-16 18:18:48'
categories:
  - Reading
---

[点击查看【bilibili】](https://player.bilibili.com/player.html?bvid=BV1FT4y1E74V&p=84&page=84)

# 1.1 Why ML Strategy

![image.png](/images/yuqueAssets/Fr3ntkEZuqEaiK_ubkWXc7f4-Utm.png)
用在优化模型时往往有很多选择，一旦选错了可能白白浪费几个月时间，做出合理的判断、明智的选择非常重要，本课将会传授一些策略，向着最有希望的方向前进

# 1.2 正交化 Orthogonalization

![image.png](/images/yuqueAssets/FiGvPTa_yGp7AfNC_YjGZKePx7v7.png)
这里的正交化指的是参数的解耦，和 shader 参数解耦一个道理，如果每个参数对效果的影响互相独立不干扰，那么美术跳起来就比较容易达到想要的效果，如果大量参数之间互相有影响，就非常难以调整
正交指的是函数图像正交，两个参数互不影响
![image.png](/images/yuqueAssets/FrL3UMjVzl3qXoBi4R5j2jIpsueJ.png)
我们希望有几个互相正交的参数能够分别调整模型在不同训练集的性能，调整这些参数依次让训练集、开发集、测试集以及用户端表现得足够好，如果一个参数同时影响多个集合的性能，会非常难以调试

# 1.3 单一数字评估指标 Single Number Evaluation Metric

![image.png](/images/yuqueAssets/FuUACdnZAMd2ldngyhRLt_LxJrDi.png)
![image.png](/images/yuqueAssets/FvW-b9NOFk9bzTdf7T0mNwZcecaL.png)
单个性能指标有助于快速选择使用哪个模型，对于多个指标（正确率 Precision、回归率 Recall）则可以用一些算法将它们合并为一个指标（F1 Score）

# 1.4 满足和优化指标 Satisficing and Optimizing Metric

![image.png](/images/yuqueAssets/Fj5o2Ldc74P9-s4qeh9DagtAzQM8.png)
通过将某个参数设定为优化目标（不断迭代提高数值），其他参数设定为满足目标（达到阈值即可），可以保证有一个明确的迭代方向，可以自动选出更好的模型，进而提高开发效率

# 1.5 划分训练/开发/测试集 Train/Dev/Test Distributions

划分数据集的策略直接影响着团队开发效率
![image.png](/images/yuqueAssets/FvANuvXdYNQrD7rH7fDmhGzZqCao.png)
![image.png](/images/yuqueAssets/FmCfImMNcbpvLKtmY0lDTnPZ00md.png)
在开发集上进行快速迭代，在测试集上进行验证，并且他们数据的分布应该一致，避免做无用功
![image.png](/images/yuqueAssets/FoRLTgjNO3ypOGJfUMZm2OuahoOH.png)

# 1.6 开发集和测试集的大小

![image.png](/images/yuqueAssets/FroV1KDbZkmv80tA6s_Y4m2vnO3C.png)
以万为单位的样本量可以用 6：2：2 分配，百万量级可以 98：1：1，保持 DT 集的数量在万级足够用即可
![image.png](/images/yuqueAssets/FraNYRGkwYLegpWuWz8enuCNDI4l.png)
测试集需要有足够的无偏差的样本量来评估模型的性能，一般会远小于训练集

# 1.7 什么时候该改变 DT 集和目标

![image.png](/images/yuqueAssets/FoVL5ZqzDNc4dT4x0Fu7yng6NELd.png)
错误率更低的模型容易推送色情图像，这时候就需要调整错误率的算法，对色情图像施加更重的惩罚
![image.png](/images/yuqueAssets/FsoTsbNU3jK1vrz91cuOYAddp57m.png)![image.png](/images/yuqueAssets/Fi26reZ1en0dKRDVNe30cFuPlP4q.png)
当 DT 集和实际应用场景的数据有偏差时应该及时修改 DT 集

# 1.8 Why Human-level Performance

![image.png](/images/yuqueAssets/Fqz5mm-atkq-gp2CSqKTmxM40rCs.png)
![image.png](/images/yuqueAssets/FlH35EGQm36-DQI1EeJfYOrXU_6g.png)
在性能不及人类时尚可用人工帮助提高性能，超越人类后性能就很难再提升了，并且不会超过贝叶斯极限

# 1.9 可避免偏差 Avoidable Bias

![image.png](/images/yuqueAssets/Fo8jVfYeAtZtH1HOnLpolxJ7ZXbV.png)
当模型的错误率接近人类水平（或贝叶斯偏差），此时专注于减小方差（训练集和开发集错误率之差，泛化能力）更有效
当模型的错误率离人类或贝叶斯偏差还很远，那么专注减小偏差（或可避免偏差，Avoidable Bias）更有效

## 补充：偏差与方差

| 真实模型：获得所有可能的数据集合，并在这个数据集合上将 loss 最小化，这样学习到的模型就是真实模型 |
| ------------------------------------------------------------------------------------------------ |
| Bias： “用所有可能的训练数据集训练出的所有模型的输出的平均值” 与 “真实模型”的输出值之间的差异    |
| Variance：“不同的训练数据集训练出的模型”的输出值之间的差异                                       |

Bias 反映的是模型的拟合能力，Variance 反映的是模型的数据扰动所造成的影响。偏差大，说明模型拟合能力差，Variance 大说明模型数据扰动所造成的影响大即泛化能力差。

| Bias(偏差)大：增加特征数量，增加网络规模，增加多项式特征和交互特征，减少正则化参数值 |
| ------------------------------------------------------------------------------------ |
| Variance(方差)大：与 Bias(偏差)大采取相反的措施，获取更多地训练样本                  |

# 1.10 理解人类表现

![image.png](/images/yuqueAssets/FoN0j_mNmkg5coRs_4MIB8vGITm4.png)
冷知识：这个手势是双引号的意思
![image.png](/images/yuqueAssets/FmUrwo5Iy4Dvcbf-VfSImpL0YE-k.png)
不同人群的表现不一，一群专业人士》专业人士》普通人，为模型的实际情况选择合适的目标很重要，如果模型的要求很严格，要使用人类水平替代贝叶斯误差，那么应该使用人类的最高水平为目标
![image.png](/images/yuqueAssets/FvRKLR6PD3HvmIxj7pi19WGkCfAz.png)
![image.png](/images/yuqueAssets/FtXNPzNr_t12nfCkW44QRuDHw0ag.png)
偏差大，优化偏差（比如用更大训练集）
方差大，优化方差（正则化等）
最后偏差方差都很小的时候很难判断谁更大，以及贝叶斯偏差究竟有多小
对于比较清晰的训练集（猫图），人类和贝叶斯的误差都接近 0，此时用 0 近似贝叶斯误差是可行的，但是对于有很多 noise 的训练集，更准确地评估贝叶斯误差很重要，可以更好地估计偏差和方差

# 1.11 超越人类水平

![image.png](/images/yuqueAssets/FizqMntm4YFll4gvTCua9Tl7RCJu.png)![image.png](/images/yuqueAssets/FodQJMc5IdLh8Tuny6tRR5L6AwiG.png)
人类很擅长自然感知，但对于单个问题有足够数据的情况下，机器学习仍然能够超越人类

# 1.12 改善你的模型的表现

![image.png](/images/yuqueAssets/FiG4OnWA5Mc1N1EVJMdLeB8Hxjfu.png)
![image.png](/images/yuqueAssets/FsXJbafAfKNVtXR6lnBLI8JsI5-b.png)
改善偏差：

- 更大的网络
- 训练更久
- 更优化的算法
  - 加入 Momentum
  - RMSprop
  - Adam
- 更好的神经网络架构（CNN、RNN）
- 更好的超参数
- 改变激活函数
- 改变层数/神经元数

改善方差：

- 正则化
  - L2
  - Dropout
  - 数据扩增（Data Augmentation）
- 更好的架构
- 更好的超参数
- 更多的数据

# 测试：Bird Recognition in the City of Peacetopia (Case Study)

# 2.1 进行误差分析

![image.png](/images/yuqueAssets/Fllas66_GeBAzhHo_5j5Dqkuzxd2.png)
![image.png](/images/yuqueAssets/FkYbp_S8dVCm7MXmHUB1WHYVMGSu.png)
做优化之前评估一下性能上限（Ceiling），如果错误率有 10%，其中有一半是狗，那么可以考虑针对狗进行专项训练，如果只有 5%是狗，那么针对性研究收益很小
分析预测错误的样本，通过表格标记错误原因，统计哪些问题的价值更大，排优先级

# 2.2 清除标注错误的数据

![image.png](/images/yuqueAssets/FvoJxcfMzJvs2OTLO8uD_wBVnOtx.png)![image.png](/images/yuqueAssets/Fszabs32f6YVpgE7wCBv0vlxwFlA.png)
大部分情况下机器学习对样本中的随机错误有很好的鲁棒性，但是对于系统性错误无能为力，比如所有白色狗都被标记为猫，那么模型就会认为白色狗==猫
通常只有在这些错误数据严重影响了在开发集上评估模型才会花时间去纠正错误，比如预测错误的样本中有很大一部分是样本标记错误，这时候修复样本更有价值
![image.png](/images/yuqueAssets/FoSjAHzbIwCHge-aookQxou-PHVj.png)

- 修正数据需要同时在开发集和测试集上进行，以保证 DT 拥有相同的分布
- 考虑检验数据标记错误时，模型预测正确的情况。这种情况检验成本比较大，但有时不处理会导致模型出现偏差

## 设置开发集的意义

通过开发集上的测试结果来选择用哪个模型，当数据错误占比太大的时候，就无法分辨哪个模型更好了

## 训练集/开发集/测试集

[1. 训练集、开发集、测试集（Train/Dev/Test sets）*luoying_1993 的博客-CSDN 博客*开发集](https://blog.csdn.net/luoying_1993/article/details/87178165)
对 DT 做的修正不一定要应用到训练集，因为训练集大得多，并且不是那么重要

# 2.3 快速搭建你的第一个系统并快速迭代

![image.png](/images/yuqueAssets/FgzCaSlJExfc05wlBqrRutAFrppd.png)
如果要搭建一个全新领域的机器学习项目，最好快速设置目标，搭建 DT，然后训练一下，利用学到的错误分析方法找到优先要解决的问题进行快速迭代
如果这个领域已经有很多研究了，可以参考论文从一些比较复杂的系统开始搭建

# 2.4 在不同的分布上进行训练和测试

![image.png](/images/yuqueAssets/FsujZ3HFbq7vt0xxf8DfibNwYmYT.png)
现有数据：网络高清猫图，实际数据：用户上传低清图
对于这种情况，更好的方法是将少量的用户上传数据作为 DT，长期来看比平均分配有更好的性能
之后会介绍针对不同分布的训练测试集的技巧
![image.png](/images/yuqueAssets/Fj3ZY-D2rm0680Gj0L9mqTtmvYHb.png)
通过不同分布的训练测试集，可以获得大得多的训练集，将很多相关性不大的数据放入训练集
**不论数据来自哪里，target 都必须设置为你的实际应用场景**

# 2.5 不匹配数据划分的偏差和方差

![image.png](/images/yuqueAssets/FtYi1CCkao0c0O9kUvpE__O2eVKJ.png)![image.png](/images/yuqueAssets/FjunWLzoJ3ey8xnYl0f2XL58Jbpo.png)![image.png](/images/yuqueAssets/FhgvCBulAmiKD_-IYCdPVHLl1WLE.png)
对于数据分布不匹配的训练和测试集，从训练集中分出一小部分作为训练-测试集
贝叶斯错误率 与 训练集错误率 之间为可避免偏差
训练集 与 训练-测试集 之间错误率差为方差
训练-测试集 与 开发/测试集 之间错误率差为数据不匹配

# 2.6 解决数据不匹配

![image.png](/images/yuqueAssets/Fh4uYCJvUCdPyP5_bgFpRCvThoPL.png)
人工去判断数据之间的差异，尝试减小差异
比如测试集中有很多噪音，可以尝试在训练集中加入生成的噪音
![image.png](/images/yuqueAssets/FmThEDUa4EA7tOQKVIA3KcYzNEsd.png)![image.png](/images/yuqueAssets/FrBzHGCdV6ftLAge1slH48hs1tdr.png)
潜在的风险是取得的 noise 数据量太小，导致过拟合

# 2.7 迁移学习

![image.png](/images/yuqueAssets/FjrjCX5iSbcGyYv-vqRVdZo1L-ke.png)
![image.png](/images/yuqueAssets/Fq03ke0ajH9CKWxOEArzSJ1aI-KF.png)
如果一个新的模型，比如智能音箱的触发词，只能使用很有限的数据，而之前刚好用大量数据训练过语音识别相关的模型，那么可以将之前的模型迁移过来。
将之前的神经网络去掉 output 层，加上新模型需要的层，然后进行训练。

通常，当旧任务的数据量远超新任务，或者旧的模型的底层知识有助于新模型时，迁移学习的帮助更大

# 2.8 多任务学习

![image.png](/images/yuqueAssets/FiOxSH5PqKtibpv7qAJzBJLyIA68.png)
多任务学习（比如识别图中多个物体）和之前的神经网络类似，只是输出变成向量，代价函数要对向量求和。
有时样本没有标记所有物体，那么损失函数中跳过未标记的求和
![image.png](/images/yuqueAssets/FtkJgbdq1ww0dPAV8GHi8z0m8yob.png)
当：

- 多个任务之间可以复用低层次特征（自动驾驶中同时识别汽车、交通灯、牌）
- 如果任务特别多（单独训练每个任务的数据会很少，同时训练的性能相对会更好）
- 神经网络足够大

时多任务学习收益大

# 2.9 端到端深度学习 End-to-End DL

![image.png](/images/yuqueAssets/Fp1xWUzkAZTb-lWhXq4LbwYW2jBo.png)
传统领域，比如语音识别，X 和 Y 之间有很多人工设计的步骤，端到端直接跳过这些步骤，依旧可以取得很好的结果，前提是数据足够多
在数据量比较少的情况下，端到端可以替代传统流水线的一部分
![image.png](/images/yuqueAssets/FuudHu_UWZLbM0mdcywri06bKZMo.png)
将一个复杂的身份识别问题转换成两个简单问题：识别人脸、识别两张脸是不是同一人，更简单，数据更多，性能更好
端到端的局限性导致数据太少难以训练
![image.png](/images/yuqueAssets/Fv-6hH1PchAPYyGazPjNM9BVScyW.png)
关键还是看端到端的数据量，X 和已标记的 Y，足够多的情况下，端到端会简单、性能好

# 2.10 是否需要用端到端深度学习

![image.png](/images/yuqueAssets/FvsQQmzFrDuLkoqSQwdKwblwU1zl.png)
优点：

- 让数据说话
- 简化流程设计

缺点：

- 需要大量数据
- 排除了可能有用的人工设计组件

![image.png](/images/yuqueAssets/FmjOmTYcj1wqbWU7E-FG_H3dpbjT.png)
在过于复杂的问题上，目前来说不太可行
