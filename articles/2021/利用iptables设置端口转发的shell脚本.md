2021-06-11
Visibility: Public

<span style="color:#ab4642">#2022-03-12 号更新：建议直接用NPS，效果更好，还有GUI界面。
</span>
<span style="color:#dc9656">此工具已经过时，但是教程理论上可用。
</span>


利用iptables设置端口转发的shell脚本
项目地址：
[https://github.com/arloor/iptablesUtils](https://github.com/arloor/iptablesUtils)项目作用
便捷地设置iptables流量转发规则
当域名解析的地址发生变化时，自动更新流量转发规则，不需要手动变更（适用于ddns域名）
用法
# 如果vps不能访问 raw.githubusercontent.com 推荐使用这个
wget --no-check-certificate -qO natcfg.sh http://www.arloor.com/sh/iptablesUtils/natcfg.sh && bash natcfg.sh
或

wget --no-check-certificate -qO natcfg.sh https://raw.githubusercontent.com/arloor/iptablesUtils/master/natcfg.sh && bash natcfg.sh
输出如下：

#############################################################
# Usage: setup iptables nat rules for domian/ip             #
# Website:  http://www.arloor.com/                          #
# Author: ARLOOR <admin@arloor.com>                         #
# Github: https://github.com/arloor/iptablesUtils           #
#############################################################

你要做什么呢（请输入数字）？Ctrl+C 退出本脚本
1) 增加转发规则          3) 列出所有转发规则
2) 删除转发规则          4) 查看当前iptables配置
#?
此时按照需要，输入1-4中的任意数字，然后按照提示即可

卸载
wget --no-check-certificate -qO uninstall.sh https://raw.githubusercontent.com/arloor/iptablesUtils/master/dnat-uninstall.sh && bash uninstall.sh
trojan转发
总是有人说，不能转发trojan，这么说的人大部分是证书配置不对。最简单的解决方案是：客户端选择不验证证书。复杂一点是自己把证书和中转机的域名搭配好。

小白记住一句话就好：客户端不验证证书。

推荐新项目——使用nftables实现nat转发
iptables的后继者nftables已经在debain和centos最新的操作系统中作为生产工具提供，nftables提供了很多新的特性，解决了iptables很多痛点。

因此创建了一个新的项目/arloor/nftables-nat-rust。该项目使用nftables作为nat转发实现，相比本项目具有如下优点：

支持端口段转发
转发规则使用配置文件，可以进行备份以及导入
更加现代
所以强烈推荐使用/arloor/nftables-nat-rust。不用担心，本项目依然可以正常稳定使用。

PS: 新旧两个项目并不兼容，切换到新项目时，请先卸载此项目