---
title: UE开发常用Git指令
urlname: swszkkg8zqxp9em3
date: "2023-10-16 16:55:00"
updated: "2023-10-16 17:17:00"
author: Jason Ma
---

--
tags:

- Git
- UE

---

## 升级 UE 版本

### 将当前分支相对于 Epic 的改动打包成 diff.patch

需要先将 Epic 仓库添加到 repo, 如:
![image.png](/images/yuqueAssets/Fmrpo7LYBwSZ07aYpGrhkPF2KsAm.png)

```
$ git diff --binary Epic/5.2 5.2 > diff.patch
```

### 将 patch 应用到新分支

```
$ git apply --reject --binary --whitespace=nowarn diff.patch
```

--reject: 这将在发生冲突的每个文件旁边创建一个 .rej 文件，该文件包含无法应用的差异。您可以手动编辑这些文件以解决冲突。解决冲突后，您可以删除.rej 文件并添加和提交合并后的文件以完成应用过程。

插件目录可能不会立即被 Git 追踪, 需要先解决.gitignore 的冲突, 确保没有被忽略.
