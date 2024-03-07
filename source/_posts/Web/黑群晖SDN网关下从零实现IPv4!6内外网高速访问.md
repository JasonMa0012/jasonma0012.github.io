---
title: 黑群晖SDN网关下从零实现IPv4/6内外网高速访问
urlname: dkz03dygqyd5081s
date: "2024-02-26 16:38:48"
updated: "2024-03-07 14:46:38"
author: Jason Ma
---

# 硬件准备（QNAS mini、网络拓扑、宽带）

- QNAS mini：N100 CPU，16G 内存，2 _ 2.5G 网口，6 _ 2.5 寸 SATA，买的闲鱼成品
- 公网 IPv6 地址（打电信客服电话，说要装监控，顺便可以改桥接）
- 光猫 <=> NAS <=> PC，NAS 设置网桥使 PC 上网

# 黑群晖 7.2+安装并洗白（U 盘引导）

由于买的是成品 NAS，卖家已经帮忙装好了虚拟机版黑群晖，但后来发现稳定性以及自定义的便捷性并不好，于是自己重新装了硬件黑群晖：
[一起来玩群晖 DSM7.2，ARPL 引导黑群晖 7.2 详细教程*NAS 存储*什么值得买](https://post.smzdm.com/p/allk3o4g/)
QNAS mini 建议选择型号 A6400，洗白码可以在电商平台购买到。如果不使用多媒体相关功能没有要求可以不洗白。
本想直接安装在内置 SSD 中，但 DSM7.2+后必须使用 U 盘引导，尝试了一些教程后失败，故放弃。

# 启用群晖 DDNS 服务实现外网 IPv6 访问

![image.png](/images/yuqueAssets/FrKP6wDhQ5uI3_semZCy-Y4rs0Zq.png)

# Cloudflare 代理自定义域名实现外网 IPv4 访问

由于我们只有公网 IPv6 地址，而某些网络是不支持 IPv6 的（比如公司内网），所以需要一个同时支持 IPv4 和 IPv6 的服务器做中转来访问 NAS。

[群晖 cloudflare 代理 ipv6 实现外网 ipv4 网络访问（2023 可用）\_cloudflareipv6 转 ipv4-CSDN 博客](https://blog.csdn.net/u013005016/article/details/134973993)
此教程中部分步骤是多余的，在将域名添加到 CF 后，需要 SSL/TLS 加密模式设为完全：
![image.png](/images/yuqueAssets/Fg70iX1FbmRj-1k4v9Hww_utNR2r.png)
然后通过 Origin Rules 给域名设置自定义的端口，即可用域名直接访问到群晖：
![image.png](/images/yuqueAssets/FpBYHEKDDWzV11H7hPCXo_vCERm_.png)

因为流量需要先经过 Cloudflare 服务器，所以对速度有一定影响。
上海电信的测速结果约为直接连接的 70%，但是延迟从数毫秒上升到数百毫秒，实际体验的响应速度明显变慢。
不过这对于一个免费的服务来说完全是可以接受的，甚至速度比付费的阿里云 CND（由于大陆区需要备案，所以用的是港澳台区进行测试）要快得多。

# 通过支持 IPv6 的付费 VPN 实现自定义端口的外网 IPv4 访问

在尝试使用经过 Cloudflare 代理的域名登录 Synology Drive 时会发现无法访问，因为 Synology Drive 使用的端口是 6690，而 Cloudflare 的代理仅支持少数几个端口。
解决方法是在 Synology Drive 登录界面设置代理服务器，使用支持 IPv6 的代理服务器，然后还要关掉群晖的 IP 检查：
![image.png](/images/yuqueAssets/FnSoF17RuO_GDbxupTMMzKNnTSi3.png)
