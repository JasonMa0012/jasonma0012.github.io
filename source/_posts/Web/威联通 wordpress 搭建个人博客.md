---
title: 威联通 wordpress 搭建个人博客
urlname: hidx80bo8enk6ngm
author: Jason Ma
date: '2023-02-03 03:22:53'
updated: '2023-06-14 23:24:04'
categories:
  - Web
---

# 初始站点

安装 MariaDB 5 和 phpMyAdmin:

![image.png](/images/yuqueAssets/Fo5I5dDmMtvaO6mMHsgM7aXHP4HG.png)![image.png](/images/yuqueAssets/Fhh_izXuHN0GkEZpWSBaSM9PDW3u.png)
启动 MariaDB 5, 用默认配置创建数据库.
启动 phpMyAdmin, 输入:
用户名: root
密码: 你的 admin 账户密码.
接下来:
[QNAP 配置 wordpress_MurasameFan 的博客-CSDN 博客\_qnap wordpress 安装目录](https://blog.csdn.net/qq_34419607/article/details/110546382)
[零基础学 NAS 篇四：QNAP 配合 WordPress 让你拥有自己的秘密花园。*NAS 存储*什么值得买](https://post.smzdm.com/p/akmvk394/)
至此, 初始站点搭建完成.

# 备份

[如何使用 Multi-Application Recovery Service (MARS) 备份和恢复 WordPress 网站？](https://www.qnap.com.cn/zh-cn/how-to/tutorial/article/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-multi-application-recovery-service-mars-%E5%A4%87%E4%BB%BD%E5%92%8C%E6%81%A2%E5%A4%8D-wordpress-%E7%BD%91%E7%AB%99)

# 增加文件上传大小限制

官方教程完全不靠谱, 用插件快速解决:
[解决 wordpress 上传文件大小限制\_流星 418 的博客-CSDN 博客\_wordpress 上传限制](https://blog.csdn.net/METEORS7/article/details/123019671)
