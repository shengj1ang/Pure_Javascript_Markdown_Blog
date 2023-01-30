---
date: '2022-02-26T06:05:00.016+01:00'
description: ''
published: true
slug: 2022-02-recording-of-opearation-in-dannys
tags:
- http://schemas.google.com/blogger/2008/kind#post
- legacy-blogger
time_to_read: 5
title: "\u8BB0\u5F55\u4E0B\u5728Danny\u7684Raspberry\u4E0A\u7684\u64CD\u4F5C"
---

*This was originally posted on blogger [here](https://sheng-jiang.blogspot.com/2022/02/recording-of-opearation-in-dannys.html)*.

<p><b>Preamble: The raspberry bought by danny has been idle in the school for a long time. I tried to deploy it.</b></p><p><b></b></p><div class="separator" style="clear: both; text-align: center;"><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSVXy7gliBC1AcNlyctU_KB7KRG4aMoIPUsglz7d2wR6zK9my-3CsUZJ7KVFMP2sx2kPqtdPLptuZsnnExKn0UjxAgHbVdWhdh5Wv6lgxetDBHXifSHjio4o1N1g6_nTztmhHr0Z9ZpV88jqXsk7tJZFd7h4UCfFkbtrRxUSQa2eSGM9aCBWZ7FJAO/s592/Screenshot%202022-03-23%20at%2010.55.50%20AM.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="174" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSVXy7gliBC1AcNlyctU_KB7KRG4aMoIPUsglz7d2wR6zK9my-3CsUZJ7KVFMP2sx2kPqtdPLptuZsnnExKn0UjxAgHbVdWhdh5Wv6lgxetDBHXifSHjio4o1N1g6_nTztmhHr0Z9ZpV88jqXsk7tJZFd7h4UCfFkbtrRxUSQa2eSGM9aCBWZ7FJAO/s320/Screenshot%202022-03-23%20at%2010.55.50%20AM.png" width="320" /></a></div><br /><b><br /></b></div><b><br /><br /></b><b>First, I connected the Raspberry Pi through the display, and then connected to Wi-Fi (because there is no screen where the network cable can be plugged in) to download the NPC and forward it to the external network.</b><p></p><p><b>No problems were encountered at this step.</b></p><p><b>Finally, access the Internet via the school library.</b></p><p><br /></p><p><b>However, In the further deployment, I faced a lot of problems.</b></p><ul style="text-align: left;"><li>Web Servers&nbsp;</li></ul><p></p><p>Errors Faced: Nginx=&gt;Loss cmake=&gt;(Loss yum)=&gt;apt error=&gt;apt sources=&gt;sources verify issues</p><p>Solutions:</p><p>1.apt sources</p><p><i>Refrence: https://zhuanlan.zhihu.com/p/251009600</i></p><p><i>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;https://cloud.tencent.com/developer/article/1590080</i></p><p>Codename:&nbsp; &nbsp; &nbsp; &nbsp;buster</p><p>2.sources verify issues&nbsp; - fix the GPG error "NO_PUBKEY"?</p><p>https://askubuntu.com/questions/13065/how-do-i-fix-the-gpg-error-no-pubkey</p><p>sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys &lt;PUBKEY&gt;</p><p>sudo apt-get update&nbsp;</p><p>3.</p><p>Unable to locate package yum</p><p>sudo apt install yum</p><p>4.Addition Functions</p><p>httping: sudo apt-get -y install httping</p><p>traceroute:<i> https://www.ipip.net/product/client.html</i></p><p><br /></p><p>Error:libxslt</p><p>checking for libxslt ... not found</p><p>checking for libxslt in /usr/local/ ... not found</p><p>checking for libxslt in /usr/pkg/ ... not found</p><p>checking for libxslt in /opt/local/ ... not found</p><p>Solution:</p><p>https://zoomadmin.com/HowToInstall/UbuntuPackage/libxslt-dev</p><p>sudo apt-get install -y libxslt-dev</p><p>sudo apt-get install traceroute</p><p>测试代码</p><p>wget -N --no-check-certificate https://raw.githubusercontent.com/V2RaySSR/vps/master/vpstest.sh &amp;&amp; bash vpstest.sh</p><div><ul style="text-align: left;"><li>IPLC X-UI Server</li></ul><i>https://github.com/vaxilu/x-ui</i><div class="separator" style="clear: both; text-align: center;"><br /></div></div><div class="separator" style="clear: both; text-align: center;"><i>白嫖学校超高价iplc</i></div><div><ul style="text-align: left;"><li>VNC Server</li></ul>Errors Faced:&nbsp;raspi-config not found=&gt;</div><div>Refrence:</div><div><i>https://shumeipai.nxez.com/2018/08/31/raspberry-pi-vnc-viewer-configuration-tutorial.html</i></div><div></div><div><i>https://forums.raspberrypi.com/viewtopic.php?t=42836</i></div><div><br /></div><div>sudo apt-get update</div><div><div>sudo apt-get install raspi-config</div><div>sudo raspi-config</div></div><div>Interfacing Options -&gt; VNC -&gt; Yes<br /></div><div><br /></div><div><ul style="text-align: left;"><li>MutiNPC</li></ul>-<i><u>&nbsp;使用update-rc.d添加开机自启动脚本<span style="color: red;">千万不要使用这种方法，会导致npc直接坏掉！</span></u></i></div><div><i><u>Reference: https://blog.ilemonrain.com/linux/linux-startup-run.html</u></i></div><div><figure class="highlight bash" style="line-height: 1.6; margin: 0px auto 20px; text-align: justify;"><div class="table-container"><br /></div><div class="table-container">- Use Docker</div><div class="table-container">Reference:<a href="https://ehang-io.github.io/nps/#/install?id=docker%e5%ae%89%e8%a3%85" target="_blank">https://ehang-io.github.io/nps/#/install?id=docker%e5%ae%89%e8%a3%85</a></div><div class="table-container"><br /></div><div class="table-container"><span face="Lato, PingFang SC, Microsoft YaHei, sans-serif"><span style="font-size: 18px;">docker pull ffdfgdfg/npc</span></span></div><div class="table-container"><span face="Lato, PingFang SC, Microsoft YaHei, sans-serif"><div class="table-container">无配置文件：docker run -d --name npc --net=host ffdfgdfg/npc -server=&lt;ip:port&gt; -vkey=&lt;web界面中显示的密钥&gt; &lt;以及一些其他参数&gt;</div><div class="table-container">配置文件：docker run -d --name npc --net=host -v &lt;本机conf目录&gt;:/conf ffdfgdfg/npc -config=/conf/npc.conf</div><div class="table-container"><div class="table-container"><span style="font-size: 18px;">设置docker开机启动&nbsp;docker&nbsp; update&nbsp; --restart=always 容器名称</span></div><div class="table-container"><span style="font-size: 18px;">systemctl&nbsp; &nbsp; enable docker.service</span></div><div class="table-container"><br /></div><div class="table-container"><br /></div><div class="table-container">-ssh远程服务器开启多个终端窗口</div><div>sudo apt install screen</div><div><div><br /></div><div>基本用法：</div><div>screen -S XX，创建一个名字为XX的screen。然后就会看见终端变成了一个新的终端窗口。</div><div>在新的终端窗口做你想做的事儿。</div><div>退出：按Ctrl+a，然后再按d，就回到了最原始的终端界面。</div><div>可以通过screen -ls来查看所有的screen。</div><div>可通过命名的screen名或者screen的id来进入对应的终端界面：screen -r XX</div><div>删除screen -S name-or-id -X quit</div><div><br /></div></div><div>- 安装 tindy2013/stairspeedtest-reborn</div><div><i>Reference:&nbsp;https://github.com/tindy2013/stairspeedtest-reborn/issues/78</i></div><div><i><br /></i></div></div></span></div></figure></div>