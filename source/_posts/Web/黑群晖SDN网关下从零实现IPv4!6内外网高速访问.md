---
title: 黑群晖SDN网关下从零实现IPv4/6内外网高速访问
urlname: dkz03dygqyd5081s
date: '2024-02-27 00:38:48'
updated: '2024-06-15 14:36:26'
author: Jason Ma
categories:
  - Web
---
# 硬件准备（QNAS mini、网络拓扑、宽带）
+ QNAS mini：N100 CPU，16G内存，2 * 2.5G网口，6 * 2.5寸SATA，买的闲鱼成品
+ 公网IPv6地址（打电信客服电话，说要装监控，顺便可以改桥接）
+ 光猫 <=> NAS <=> PC，NAS设置网桥使PC上网

# 黑群晖7.2+安装并洗白（U盘引导）
由于买的是成品NAS，卖家已经帮忙装好了虚拟机版黑群晖，但后来发现稳定性以及自定义的便捷性并不好，于是自己重新装了硬件黑群晖：

[一起来玩群晖DSM7.2，ARPL引导黑群晖7.2详细教程_NAS存储_什么值得买](https://post.smzdm.com/p/allk3o4g/)

QNAS mini建议选择型号SA6400，洗白码可以在电商平台购买到。如果不使用多媒体相关功能没有要求可以不洗白。

本想直接安装在内置SSD中，但DSM7.2+后必须使用U盘引导，尝试了一些教程后失败，故放弃。

# 启用群晖DDNS服务实现外网IPv6访问
![](/images/yuqueAssets/d198bbfd988e2a98435557db9169e825.png)

# Cloudflare代理自定义域名实现外网IPv4访问
由于我们只有公网IPv6地址，而某些网络是不支持IPv6的（比如公司内网），所以需要一个同时支持IPv4和IPv6的服务器做中转来访问NAS。



[群晖cloudflare 代理ipv6实现外网ipv4网络访问（2023可用）_cloudflareipv6转ipv4-CSDN博客](https://blog.csdn.net/u013005016/article/details/134973993)

此教程中部分步骤是多余的，在将域名添加到CF后，需要SSL/TLS 加密模式设为完全：

![](/images/yuqueAssets/7e57b108c821d0ce90e3d06600aab719.png)

然后通过Origin Rules给域名设置自定义的端口，即可用域名直接访问到群晖：

![](/images/yuqueAssets/067ba011acc41b8c11a3d1990cff02fa.png)



因为流量需要先经过Cloudflare服务器，所以对速度有一定影响。

上海电信的测速结果约为直接连接的70%，但是延迟从数毫秒上升到数百毫秒，实际体验的响应速度明显变慢。

不过这对于一个免费的服务来说完全是可以接受的，甚至速度比付费的阿里云CND（由于大陆区需要备案，所以用的是港澳台区进行测试）要快得多。



# 通过支持IPv6的付费VPN实现自定义端口的外网IPv4访问
在尝试使用经过Cloudflare代理的域名登录Synology Drive时会发现无法访问，因为Synology Drive使用的端口是6690，而Cloudflare的代理仅支持少数几个端口。

解决方法是在Synology Drive登录界面设置代理服务器，使用支持IPv6的代理服务器，然后还要关掉群晖的IP检查：

![](/images/yuqueAssets/6e4706cf34a1672a5d353824dcabcc0a.png)

