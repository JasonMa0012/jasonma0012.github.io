---
title: Houdini通过Alembic导出Vertex Color + Alpha + Multi UV
urlname: yf39e891h5yy57f5
date: '2023-03-30 17:12:22'
updated: '2025-04-15 23:53:39'
author: Jason Ma
tags:
  - DCC
categories:
  - TA
  - Houdini
---
Houdini一般(FBX)的导出顶点色的方式是Cd (vector) + Alpha (float), 但如果用ABC导出, 就需要用以下格式:

![](/images/yuqueAssets/c6e816eed7578267fbeb5238097e2157.png)

Cd (float4)

而且必须用Attribute Create节点, 如果用Attribute Wrangle试图写入Cd, 只能写入前3个通道.

而ABC的顶点色颜色空间和FBX的不同, 这里用Power 1.2勉强和FBX的输出结果对上, 这个坑暂时不填.

多套UV则需手动指定:

![](/images/yuqueAssets/649059d45b8d6bc30dafe33d3b840ea5.png)

导入UE:

![](/images/yuqueAssets/00bcb86efa2fafd4c41fe05004ed2196.png)

![](/images/yuqueAssets/c0a15991771007a240f921942a801344.png)

可以看到已经正确导入顶点色和Alpha.

多套UV:

![](/images/yuqueAssets/3b919ca04bdc2200eca9a601438cd157.png)

