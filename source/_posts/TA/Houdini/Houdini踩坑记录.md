---
title: Houdini踩坑记录
urlname: fsmrgf7ce2gotyvn
date: "2023-07-04 02:25:16"
updated: "2023-09-11 08:54:20"
author: Jason Ma
tags:
  - DCC
---

## 材质 / 贴图 不更新

Houdini 做材质经常遇到 Viewport 中材质不更新的问题, 是因为 Viewport 的渲染器使用的是 OpenGL, 是不会调用材质 VOP 的:
[https://www.sidefx.com/docs/houdini/shade/glsl.html](https://www.sidefx.com/docs/houdini/shade/glsl.html)
[https://www.sidefx.com/docs/houdini/shade/opengl.html](https://www.sidefx.com/docs/houdini/shade/opengl.html)
一些内置的 Shader 可以在 Viewport 中显示是因为已经绑定好了 OpenGL 属性.

但偶尔仍会遇到内置的 Shader 不更新的情况, 可以尝试:

- 切换光照模式
- 切换材质显示
- 调整材质参数
- Ctrl + S

比较极端的情况下可能要使用 Python 节点触发材质参数修改:

```python
import hou

def change_all_materials_color(new_color=(1, 0, 0)):

    # 寻找所有的材质节点
    # tooncolorshader替换为你的Shader VOP名称
    material_nodes = hou.nodeType(hou.vopNodeTypeCategory(), "tooncolorshader").instances()

    # 遍历所有材质节点
    for node in material_nodes:
        # Cdbias替换为Shader中某个不重要的参数的名称
        for parm in node.parmTuple("Cdbias"):
            # print(parm)
            parm.set(1)
            parm.set(0)

change_all_materials_color()
print(111)
```

这些代码会查找指定类型的 ShaderVOP 实例, 并修改其中参数从而触发材质更新.
打开文件后点击此 Python 节点即可运行代码.

## Maya HDA 无法修改法线

Houdini 18.0, Maya 2018
问题: Maya 内通过 Houdini Engine 加载的 HDA 无法修改模型法线
原因: Maya 模型法线必须锁定法线后才能修改
![image.png](/images/yuqueAssets/Fq97ul1lne-awq8u_4Csqh5-StDR.png)
解决方案: HDA 结尾加一个`maya_locked_normal`属性, 设置如图:
![企业微信截图_16944216285792.png](/images/yuqueAssets/Fj0_OHhaNuX8L0J7s82mZM-VyGdg.png)
