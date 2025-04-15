---
title: Houdini踩坑记录
urlname: fsmrgf7ce2gotyvn
date: '2023-07-04 10:25:16'
updated: '2025-04-15 23:52:46'
author: Jason Ma
cover: 'https://cdn.nlark.com/yuque/0/2023/png/504873/1688455716241-6b691d04-b8db-4351-9446-64eeb2fba9fa.png'
description: '---tags: - DCC---材质 / 贴图 不更新Houdini做材质经常遇到Viewport中材质不更新的问题, 是因为Viewport的渲染器使用的是OpenGL, 是不会调用材质VOP的:https://www.sidefx.com/docs/houdini/shade/glsl....'
tags:
  - DCC
---
## 材质 / 贴图 不更新
Houdini做材质经常遇到Viewport中材质不更新的问题, 是因为Viewport的渲染器使用的是OpenGL, 是不会调用材质VOP的:

[https://www.sidefx.com/docs/houdini/shade/glsl.html](https://www.sidefx.com/docs/houdini/shade/glsl.html)

[https://www.sidefx.com/docs/houdini/shade/opengl.html](https://www.sidefx.com/docs/houdini/shade/opengl.html)

一些内置的Shader可以在Viewport中显示是因为已经绑定好了OpenGL属性.



但偶尔仍会遇到内置的Shader不更新的情况, 可以尝试:

+ 切换光照模式
+ 切换材质显示
+ 调整材质参数
+ Ctrl + S



比较极端的情况下可能要使用Python节点触发材质参数修改:

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

这些代码会查找指定类型的ShaderVOP实例, 并修改其中参数从而触发材质更新.

打开文件后点击此Python节点即可运行代码.



## 


