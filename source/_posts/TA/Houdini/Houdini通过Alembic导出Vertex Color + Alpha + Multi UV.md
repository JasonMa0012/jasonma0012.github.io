---
tags:
  - DCC
title: Houdini通过Alembic导出Vertex Color + Alpha + Multi UV
urlname: yf39e891h5yy57f5
author: Jason Ma
date: '2023-03-30 17:12:22'
updated: '2023-07-16 19:01:44'
categories:
  - TA
  - Houdini
---

Houdini 一般(FBX)的导出顶点色的方式是 Cd (vector) + Alpha (float), 但如果用 ABC 导出, 就需要用以下格式:
![YOG(04J`WVETOX{0BVZD@JX.png](/images/yuqueAssets/Fq5wW2welN9oMEsD1hVReGXAA1IW.png)
Cd (float4)
而且必须用 Attribute Create 节点, 如果用 Attribute Wrangle 试图写入 Cd, 只能写入前 3 个通道.
而 ABC 的顶点色颜色空间和 FBX 的不同, 这里用 Power 1.2 勉强和 FBX 的输出结果对上, 这个坑暂时不填.
多套 UV 则需手动指定:
![6F9`TWLM_{M2R$O2ZJYKBUQ.png](/images/yuqueAssets/Fqz_7tun676S-Go2HaCkiypiyiTO.png)
导入 UE:
![M83KG$HIA@ZP{W)7Q}IAY[7.png](/images/yuqueAssets/FhPoyOD9wR392sZBhwbnus07GjND.png)
![P59E_P_9W%TJ43DW$31%D$M.png](/images/yuqueAssets/FlK-exnzK14RWDX3QnkoJN3LaTz0.png)
可以看到已经正确导入顶点色和 Alpha.
多套 UV:
![K505)(8U5Q9MJ)O{E`3O$JB.png](/images/yuqueAssets/FvhzKIhEJNVVrj97RB90DCK2mNtq.png)
