---
title: CloudFlare加速Github Pages全球访问(含大陆)
urlname: sfpr2alhqp7gh1xm
date: '2023-06-02 00:36:29'
updated: '2023-06-14 23:24:00'
author: Jason Ma
categories:
  - Web
---
参考: 

[Hexo配置Cloudflare免费CDN](https://tding.top/archives/12c6c559.html)

配置完之后会发现无法访问, [经查](https://community.cloudflare.com/t/github-pages-require-disabling-cfs-http-proxy/147401/8)需要将SSL模式设为Full:

![](/images/yuqueAssets/f89391ee5700f05c717c301e52394ddc.png)

完成后使用国内移动数据进行测试, 可以裸连Github Pages, 速度挺快, 除了某些比较大的图片稍慢.

另外Argo Smart Routing还可以进一步加速:

![](/images/yuqueAssets/c9220fcf55908117d83f2202f24f140b.png)



