---
title: CloudFlare加速Github Pages全球访问(含大陆)
urlname: sfpr2alhqp7gh1xm
author: Jason Ma
date: '2023-06-02 00:36:29'
updated: '2023-06-14 23:24:00'
categories:
  - Web
---

参考:
[Hexo 配置 Cloudflare 免费 CDN](https://tding.top/archives/12c6c559.html)
配置完之后会发现无法访问, [经查](https://community.cloudflare.com/t/github-pages-require-disabling-cfs-http-proxy/147401/8)需要将 SSL 模式设为 Full:
![image.png](/images/yuqueAssets/FhUPSScFFK-CN76RcO4See3-Cxfv.png)
完成后使用国内移动数据进行测试, 可以裸连 Github Pages, 速度挺快, 除了某些比较大的图片稍慢.
另外 Argo Smart Routing 还可以进一步加速:
![image.png](/images/yuqueAssets/Fmr-6BXOjxH27PgeX0l6ZXEqME18.png)
