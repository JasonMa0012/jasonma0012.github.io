---
title: 吴恩达 Structuring ML Projects
urlname: sopcnn
date: '2022-03-28 17:00:27'
updated: '2024-08-25 14:36:16'
author: Jason Ma
categories:
  - Reading
---
[bilibili](https://player.bilibili.com/player.html?bvid=BV1FT4y1E74V&p=84&page=84)





# 1.1 Why ML Strategy
![](/images/yuqueAssets/df2b30798116549b838f97b8f3f2f831.png)

用在优化模型时往往有很多选择，一旦选错了可能白白浪费几个月时间，做出合理的判断、明智的选择非常重要，本课将会传授一些策略，向着最有希望的方向前进

# 1.2 正交化 Orthogonalization
![](/images/yuqueAssets/206b65c32fc8c7ed0a471703f0c8212e.png)

这里的正交化指的是参数的解耦，和shader参数解耦一个道理，如果每个参数对效果的影响互相独立不干扰，那么美术跳起来就比较容易达到想要的效果，如果大量参数之间互相有影响，就非常难以调整

正交指的是函数图像正交，两个参数互不影响

![](/images/yuqueAssets/c9a5455be13b738a0b591895b6faea77.png)

我们希望有几个互相正交的参数能够分别调整模型在不同训练集的性能，调整这些参数依次让训练集、开发集、测试集以及用户端表现得足够好，如果一个参数同时影响多个集合的性能，会非常难以调试

# 1.3 单一数字评估指标 Single Number Evaluation Metric
![](/images/yuqueAssets/84e2c92f1f4dfd1d3a256474480413f3.png)

![](/images/yuqueAssets/cc19f6907e1792098385ae4eadb2cb17.png)

单个性能指标有助于快速选择使用哪个模型，对于多个指标（正确率 Precision、回归率 Recall）则可以用一些算法将它们合并为一个指标（F1 Score）

# 1.4 满足和优化指标 Satisficing and Optimizing Metric
![](/images/yuqueAssets/f7c348687cc82212975bc7a9aeae0cb1.png)

通过将某个参数设定为优化目标（不断迭代提高数值），其他参数设定为满足目标（达到阈值即可），可以保证有一个明确的迭代方向，可以自动选出更好的模型，进而提高开发效率

# 1.5 划分训练/开发/测试集 Train/Dev/Test Distributions
划分数据集的策略直接影响着团队开发效率

![](/images/yuqueAssets/260c6872452256cc03e6fb131465cc4b.png)

![](/images/yuqueAssets/f29c08deb06f982e0b5b0969bac8d649.png)

在开发集上进行快速迭代，在测试集上进行验证，并且他们数据的分布应该一致，避免做无用功

![](/images/yuqueAssets/ae5135051705352aa27ded7262a87d3c.png)

# 1.6 开发集和测试集的大小
![](/images/yuqueAssets/ed405b2fd561202494d92b103c504779.png)

以万为单位的样本量可以用6：2：2分配，百万量级可以98：1：1，保持DT集的数量在万级足够用即可

![](/images/yuqueAssets/d69a5c34d24ad798880f7838c530a797.png)

测试集需要有足够的无偏差的样本量来评估模型的性能，一般会远小于训练集

# 1.7 什么时候该改变DT集和目标
![](/images/yuqueAssets/37ebbf503357830cd4e1a0ffc60eadd9.png)

错误率更低的模型容易推送色情图像，这时候就需要调整错误率的算法，对色情图像施加更重的惩罚

![](/images/yuqueAssets/3f1619eaf8ead3af87c073c83e66c0d9.png)![](/images/yuqueAssets/52bea1faf9cd486bf65ae0689eadf0c6.png)

当DT集和实际应用场景的数据有偏差时应该及时修改DT集

# 1.8 Why Human-level Performance
![](/images/yuqueAssets/44bd87a55f70f57008c0cca84154fdcf.png)

![](/images/yuqueAssets/8b18c11b4dbeeaff2c48558b424ae60f.png)

在性能不及人类时尚可用人工帮助提高性能，超越人类后性能就很难再提升了，并且不会超过贝叶斯极限

# 1.9 可避免偏差 Avoidable Bias
![](/images/yuqueAssets/a553e9a1c482561de32a424432168e24.png)

当模型的错误率接近人类水平（或贝叶斯偏差），此时专注于减小方差（训练集和开发集错误率之差，泛化能力）更有效

当模型的错误率离人类或贝叶斯偏差还很远，那么专注减小偏差（或可避免偏差，Avoidable Bias）更有效

## 补充：偏差与方差
| <font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">真实模型：获得所有可能的数据集合，并在这个数据集合上将loss最小化，这样学习到的模型就是真实模型</font> |
| --- |
| <font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">Bias： “用所有可能的训练数据集训练出的所有模型的输出的平均值” 与 “真实模型”的输出值之间的差异</font> |
| <font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">Variance：“不同的训练数据集训练出的模型”的输出值之间的差异</font> |


<font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">Bias反映的是模型的拟合能力，Variance反映的是模型的数据扰动所造成的影响。偏差大，说明模型拟合能力差，Variance大说明模型数据扰动所造成的影响大即泛化能力差。</font>

| <font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">Bias(偏差)大：增加特征数量，增加网络规模，增加多项式特征和交互特征，减少正则化参数值</font> |
| --- |
| <font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">Variance(方差)大：与Bias(偏差)大采取相反的措施，获取更多地训练样本</font> |


# <font style="color:rgb(221, 218, 213);background-color:rgb(24, 26, 27);">1.10 理解人类表现</font>
![](/images/yuqueAssets/7f97d48a34666b7d5dd22a4fae489b20.png)

冷知识：这个手势是双引号的意思

![](/images/yuqueAssets/6f4c78bfb3a58c8c08cfb8149b37099e.png)

不同人群的表现不一，一群专业人士》专业人士》普通人，为模型的实际情况选择合适的目标很重要，如果模型的要求很严格，要使用人类水平替代贝叶斯误差，那么应该使用人类的最高水平为目标

![](/images/yuqueAssets/e183094aeef764b892a12a08777b6398.png)

![](/images/yuqueAssets/f4b88af0de5833bbcc0aafb66a9d3217.png)

偏差大，优化偏差（比如用更大训练集）

方差大，优化方差（正则化等）

最后偏差方差都很小的时候很难判断谁更大，以及贝叶斯偏差究竟有多小

对于比较清晰的训练集（猫图），人类和贝叶斯的误差都接近0，此时用0近似贝叶斯误差是可行的，但是对于有很多noise的训练集，更准确地评估贝叶斯误差很重要，可以更好地估计偏差和方差

# 1.11 超越人类水平
![](/images/yuqueAssets/330231bda4472fec7ce09fdd4ab40bac.png)![](/images/yuqueAssets/feb4b28cb99586942b0b94a9438928e5.png)

人类很擅长自然感知，但对于单个问题有足够数据的情况下，机器学习仍然能够超越人类

# 1.12 改善你的模型的表现
![](/images/yuqueAssets/08fdbcd9dedc677f6f8dc7c94bef3774.png)

![](/images/yuqueAssets/5357843e0bc01cf87303dd1ea34bab47.png)

改善偏差：

+ 更大的网络
+ 训练更久
+ 更优化的算法
    - 加入Momentum
    - RMSprop
    - Adam
+ 更好的神经网络架构（CNN、RNN）
+ 更好的超参数
+ 改变激活函数
+ 改变层数/神经元数

改善方差：

+ 正则化
    - L2
    - Dropout
    - 数据扩增（Data Augmentation）
+ 更好的架构
+ 更好的超参数
+ 更多的数据

# 测试：Bird Recognition in the City of Peacetopia (Case Study)
# 2.1 进行误差分析
![](/images/yuqueAssets/4524cd9cc6b953fc65b0aea7b9d030bd.png)

![](/images/yuqueAssets/29888f4d6904f6f3ab72e242c6711fef.png)

做优化之前评估一下性能上限（Ceiling），如果错误率有10%，其中有一半是狗，那么可以考虑针对狗进行专项训练，如果只有5%是狗，那么针对性研究收益很小

分析预测错误的样本，通过表格标记错误原因，统计哪些问题的价值更大，排优先级

# 2.2 清除标注错误的数据
![](/images/yuqueAssets/56591af72aa5956b86829305a5ad8927.png)![](/images/yuqueAssets/6a243fdab40a6cefc89369aec521ceb4.png)

大部分情况下机器学习对样本中的随机错误有很好的鲁棒性，但是对于系统性错误无能为力，比如所有白色狗都被标记为猫，那么模型就会认为白色狗==猫

通常只有在这些错误数据严重影响了在开发集上评估模型才会花时间去纠正错误，比如预测错误的样本中有很大一部分是样本标记错误，这时候修复样本更有价值

![](/images/yuqueAssets/6a0dffcc1e224adf01130593c7c441f4.png)

+ 修正数据需要同时在开发集和测试集上进行，以保证DT拥有相同的分布
+ 考虑检验数据标记错误时，模型预测正确的情况。这种情况检验成本比较大，但有时不处理会导致模型出现偏差

## 设置开发集的意义
通过开发集上的测试结果来选择用哪个模型，当数据错误占比太大的时候，就无法分辨哪个模型更好了

## 训练集/开发集/测试集
[1. 训练集、开发集、测试集（Train/Dev/Test sets）_luoying_1993的博客-CSDN博客_开发集](https://blog.csdn.net/luoying_1993/article/details/87178165)

对DT做的修正不一定要应用到训练集，因为训练集大得多，并且不是那么重要

# 2.3 快速搭建你的第一个系统并快速迭代
![](/images/yuqueAssets/7cdaf28d0736fc19bb3b7f427863728c.png)

如果要搭建一个全新领域的机器学习项目，最好快速设置目标，搭建DT，然后训练一下，利用学到的错误分析方法找到优先要解决的问题进行快速迭代

如果这个领域已经有很多研究了，可以参考论文从一些比较复杂的系统开始搭建

# 2.4 在不同的分布上进行训练和测试
![](/images/yuqueAssets/2cddad47808ddc55a850989ba774155c.png)

现有数据：网络高清猫图，实际数据：用户上传低清图

对于这种情况，更好的方法是将少量的用户上传数据作为DT，长期来看比平均分配有更好的性能

之后会介绍针对不同分布的训练测试集的技巧

![](/images/yuqueAssets/476069474ea3ba3e2325f8f525671f91.png)

通过不同分布的训练测试集，可以获得大得多的训练集，将很多相关性不大的数据放入训练集

**不论数据来自哪里，target都必须设置为你的实际应用场景**

# 2.5 不匹配数据划分的偏差和方差
![](/images/yuqueAssets/ca86c16f89977600477a678cf4a9951e.png)![](/images/yuqueAssets/971d7890d8cae529ae34b0c719b9af85.png)![](/images/yuqueAssets/7b8633024e094637acd17671ef0c8b2c.png)

对于数据分布不匹配的训练和测试集，从训练集中分出一小部分作为训练-测试集

贝叶斯错误率 与 训练集错误率 之间为可避免偏差

训练集 与 训练-测试集 之间错误率差为方差

训练-测试集 与 开发/测试集 之间错误率差为数据不匹配

# 2.6 解决数据不匹配
![](/images/yuqueAssets/c22b6ac4d083a47ad45eee567be2079f.png)

人工去判断数据之间的差异，尝试减小差异

比如测试集中有很多噪音，可以尝试在训练集中加入生成的噪音

![](/images/yuqueAssets/d891b136c10cb5452dedd1aef2d44511.png)![](/images/yuqueAssets/33385fe90e116875cfd714d966186590.png)

潜在的风险是取得的noise数据量太小，导致过拟合

# 2.7 迁移学习
![](/images/yuqueAssets/c0a8453fff6cc219ba779547551af4f4.png)

![](/images/yuqueAssets/410a7ff91cc7e830bdd6df138ec16568.png)

如果一个新的模型，比如智能音箱的触发词，只能使用很有限的数据，而之前刚好用大量数据训练过语音识别相关的模型，那么可以将之前的模型迁移过来。

将之前的神经网络去掉output层，加上新模型需要的层，然后进行训练。



通常，当旧任务的数据量远超新任务，或者旧的模型的底层知识有助于新模型时，迁移学习的帮助更大

# 2.8 多任务学习
![](/images/yuqueAssets/1099bc8f2c7fde8ef72212ef740d222e.png)

多任务学习（比如识别图中多个物体）和之前的神经网络类似，只是输出变成向量，代价函数要对向量求和。

有时样本没有标记所有物体，那么损失函数中跳过未标记的求和

![](/images/yuqueAssets/1d53223cdf74181c1756989d74466846.png)

当：

+ 多个任务之间可以复用低层次特征（自动驾驶中同时识别汽车、交通灯、牌）
+ 如果任务特别多（单独训练每个任务的数据会很少，同时训练的性能相对会更好）
+ 神经网络足够大

时多任务学习收益大

# 2.9 端到端深度学习 End-to-End DL
![](/images/yuqueAssets/7026e95eb3af871c4e4abe945928d787.png)

传统领域，比如语音识别，X和Y之间有很多人工设计的步骤，端到端直接跳过这些步骤，依旧可以取得很好的结果，前提是数据足够多

在数据量比较少的情况下，端到端可以替代传统流水线的一部分

![](/images/yuqueAssets/756e75b28d11453ee0fc675bd4e87c9e.png)

将一个复杂的身份识别问题转换成两个简单问题：识别人脸、识别两张脸是不是同一人，更简单，数据更多，性能更好

端到端的局限性导致数据太少难以训练

![](/images/yuqueAssets/34fcf2e12cf54129d1b341a6b9593a7c.png)

关键还是看端到端的数据量，X和已标记的Y，足够多的情况下，端到端会简单、性能好

# 2.10 是否需要用端到端深度学习
![](/images/yuqueAssets/4c9ec0c701212ef9687161398c86f4db.png)

优点：

+ 让数据说话
+ 简化流程设计

缺点：

+ 需要大量数据
+ 排除了可能有用的人工设计组件

![](/images/yuqueAssets/1b17460eb7f737a8b756adc3027ed903.png)

在过于复杂的问题上，目前来说不太可行



