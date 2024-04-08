---
title: 常用Git指令
urlname: swszkkg8zqxp9em3
date: "2023-10-16 16:55:00"
updated: "2024-04-08 17:29:55"
author: Jason Ma
---

--
tags:

- Git
- UE

---

# 设置网络代理

## 代理

```
git config --global http.proxy socks5://127.0.0.1:10800
git config --global https.proxy socks5://127.0.0.1:10800
```

## 取消代理

```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

# 拉取新版 UE

## 拉取特定远端分支

fetch 特定分支的同时需要手动更新引用, 该分支才会出现在 origin 列表中:

```
git fetch origin 5.3:refs/remotes/origin/5.3 --depth=1
```

然后再 checkout 到本地分支:

```
git checkout -b 5.3 origin/5.3
```

# 升级自定义 UE 的版本

## 将当前分支相对于 Epic 的改动打包成 diff.patch

需要先将 Epic 仓库添加到 repo, 如:
![image.png](/images/yuqueAssets/Fmrpo7LYBwSZ07aYpGrhkPF2KsAm.png)

```
git diff --binary Epic/5.2 5.2 > diff.patch
```

## 将 patch 应用到新分支

```
git apply --reject --binary --whitespace=nowarn diff.patch
```

--reject: 这将在发生冲突的每个文件旁边创建一个 .rej 文件，该文件包含无法应用的差异。您可以手动编辑这些文件以解决冲突。解决冲突后，您可以删除.rej 文件并添加和提交合并后的文件以完成应用过程。

某些目录可能不会立即被 Git 追踪, 需要先解决.gitignore 的冲突, 确保没有被忽略.
