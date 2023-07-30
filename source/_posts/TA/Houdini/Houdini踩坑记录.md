---
title: Houdini踩坑记录
urlname: fsmrgf7ce2gotyvn
author: Jason Ma
date: '2023-07-04 10:25:16'
updated: '2023-07-16 19:01:50'
tags:
  - DCC
categories:
  - TA
  - Houdini
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
