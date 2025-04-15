---
title: 常用Git指令
urlname: swszkkg8zqxp9em3
date: '2023-10-17 00:55:00'
updated: '2025-04-15 23:50:41'
author: Jason Ma
cover: 'https://cdn.nlark.com/yuque/0/2023/png/504873/1697475565605-cbd1391a-0db1-42e6-9722-0ce30a7524b6.png'
description: '---tags: - Git - UE---设置网络代理代理git config --global http.proxy socks5://127.0.0.1:10800 git config --global https.proxy socks5://127.0.0.1:10800取消代理g...'
tags:
  - Git
  - UE
---
# 设置网络代理
## 代理
```plain
git config --global http.proxy socks5://127.0.0.1:10800
git config --global https.proxy socks5://127.0.0.1:10800
```

## 取消代理
```plain
git config --global --unset http.proxy
git config --global --unset https.proxy
```

# 拉取新版UE
## clone特定分支
```plain
git clone -b 5.4 https://github.com/EpicGames/UnrealEngine.git --depth 1
```

## fetch特定远端分支
fetch特定分支的同时需要手动更新引用, 该分支才会出现在origin列表中:

```plain
git fetch origin 5.3:refs/remotes/origin/5.3 --depth=1
```



然后再checkout到本地分支:

```plain
git checkout -b 5.3 origin/5.3
```

**注意: 建议使用此命令checkout, 如果此时使用Fork的GUI checkout可能出现报错**

# 升级自定义UE的版本
## 将当前分支相对于Epic的改动打包成diff.patch
需要先将Epic仓库添加到repo, 如:

![](/images/yuqueAssets/d8d9a60f48769be6c0a8668406450ac8.png)



```plain
git diff --binary Epic/5.2 5.2 > diff.patch
```



## 将patch应用到新分支


```plain
git apply --reject --binary --whitespace=nowarn diff.patch
```

--reject: 这将在发生冲突的每个文件旁边创建一个 .rej 文件，该文件包含无法应用的差异。您可以手动编辑这些文件以解决冲突。解决冲突后，您可以删除.rej文件并添加和提交合并后的文件以完成应用过程。



某些目录可能不会立即被Git追踪, 需要先解决.gitignore的冲突, 确保没有被忽略.



**注意: 此命令不会输出需要解决的冲突列表, 需要手动搜索所有.rej文件**

****

# 初始化并更新子模块
```plain
git submodule update --init --recursive
```

# 删除子模块
1. 删除submodule缓存

```plain
git rm --cached submodule_name
```

2. 删除submodule目录
3. 删除.gitmodules中对应部分
4. 删除.git/modules中目录
5. 删除.git/config中对应部分

