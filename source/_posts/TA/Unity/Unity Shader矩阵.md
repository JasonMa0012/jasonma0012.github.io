---
title: Unity Shader矩阵
urlname: anpupr
date: '2021-01-22 12:07:34'
updated: '2025-04-15 23:48:06'
author: Jason Ma
tags:
  - Shader
categories:
  - TA
  - Unity
---
[Per-Component数学运算 - Win32 apps](https://learn.microsoft.com/zh-cn/windows/win32/direct3dhlsl/dx-graphics-hlsl-per-component-math#matrix-ordering)

# 构造矩阵
按行填充分量

```python

float2x2 fMatrix = { 0.0f, 0.1, // row 1
                     2.1f, 2.2f // row 2
                   };   

float3 row0 = float3(1, 0, 0);
float3 row1 = float3(0, 1, 0);
float3 row2 = float3(0, 0, 1);

float3x3 matrix = float3x3(row0, row1, row2);
```

# 访问矩阵元素
可以使用数组访问表示法（一组从零开始的索引）访问矩阵。 每个索引都位于方括号内。 使用以下索引访问 4x4 矩阵：

+ [0][0], [0][1], [0][2], [0][3]
+ [1][0], [1][1], [1][2], [1][3]
+ [2][0], [2][1], [2][2], [2][3]
+ [3][0], [3][1], [3][2], [3][3]

所以使用单个方括号时为按行访问

```plain
float2x2 fMatrix = { 1.0f, 1.1f, // row 1
                     2.0f, 2.1f  // row 2
                   };
float temp;

temp = fMatrix[0][0] // single component read
temp = fMatrix[0][1] // single component read
fMatrix[0] // row 1
fMatrix[1] // row 2
```

还可以使用_mXX访问任意位置:

_m00、_m01、_m02、_m03

_m10、_m11、_m12、_m13

_m20、_m21、_m22、_m23

_m30、_m31、_m32、_m33

```plain
// given
float2x2 fMatrix = { 1.0f, 1.1f, // row 1
                     2.0f, 2.1f  // row 2
                   }; 

float f_1D;
f_1D = matrix._m00; // read the value in row 1, column 1: 1.0
f_1D = matrix._m11; // read the value in row 2, column 2: 2.1

f_1D = matrix._11;  // read the value in row 1, column 1: 1.0
f_1D = matrix._22;  // read the value in row 2, column 2: 2.1
```

# unity_ObjectToWorld / UNITY_MATRIX_M


+ 第1行、第2行、第3行 = Object Rotation的xyz axis，length = 其xyz缩放，normalize = xyz hat
+ unity_ObjectToWorld._m03_m13_m23 = Object Center World Pos





# UNITY_MATRIX_V
camera right = V[0].xyz

camera up= V[1].xyz

camera forward = -V[2].xyz





# UNITY_MATRIX_P
![](/images/yuqueAssets/44fa9ba98cdcf3771be01e1a665cd0de.png)![](/images/yuqueAssets/f77c364d1bc0dabc5ef1de2ad5d85e77.png)

