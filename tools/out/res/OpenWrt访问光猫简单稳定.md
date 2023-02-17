OpenWrt访问光猫简单稳定
date: '2022-03-25T05:38:00.002+01:00'

---
测试可通过SSH连接并运行


> ifconfig eth1 192.168.1.3 netmask 255.255.255.0 broadcast 192.168.1.255  
> 
> 


> iptables -I forwarding\_rule -d 192.168.1.1 -j ACCEPT
> 
> 


> iptables -t nat -I postrouting\_rule -d 192.168.1.1 -j MASQUERADE 
> 
> 

eth1 为接光猫的口,自行修改即可。

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2NSYLQLx_-zwn1VOmC5DQBcfiX04wQ9ST_r_4WLV76cFU1VXJhiUM1lpxdWUSCyc_8qTEWtFxFAu85jwpZaxPVaqmptYzKHwwNeJM_nrmCGFu3bUyMpBq6ZRdtu-3GyLRt-ROTmLpGfzlivka_vW9t7ILoXYPpxn4LuYMSyuMJsHKm8v0XDfJgMb9/w324-h64/Screenshot%202022-03-25%20at%2012.37.08%20PM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2NSYLQLx_-zwn1VOmC5DQBcfiX04wQ9ST_r_4WLV76cFU1VXJhiUM1lpxdWUSCyc_8qTEWtFxFAu85jwpZaxPVaqmptYzKHwwNeJM_nrmCGFu3bUyMpBq6ZRdtu-3GyLRt-ROTmLpGfzlivka_vW9t7ILoXYPpxn4LuYMSyuMJsHKm8v0XDfJgMb9/s1104/Screenshot%202022-03-25%20at%2012.37.08%20PM.png)图  
但是，iptables是在内存中的，所以重启会失效。个人不敢通过ssh添加开机项，因为Linux发行版不一样，开机启动项的书写方法也会不一样，之前有过一次惨痛教训，配置NPS的时候，导致设备‘失联’。

**所以可以通过自启动命令运行。**

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg63d_hidsn4JM1DHcFGHcqGKvlxkPWzPNvK4bPcyohptLo20r2L_I2PJL_ij4_XnyiO_gmjuaAidxyhUXGpjs-Q1Bn56laCTslpJjJoSkjLDQw4G14ZnnKMHY2dK39DJ9Hi-xNu8luAEwsC9nsMSqG2VlMMeyZgu-CHb-yKZmXpu-PtSFt1ckAKRBl/s320/Screenshot%202022-03-25%20at%2012.43.45%20PM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg63d_hidsn4JM1DHcFGHcqGKvlxkPWzPNvK4bPcyohptLo20r2L_I2PJL_ij4_XnyiO_gmjuaAidxyhUXGpjs-Q1Bn56laCTslpJjJoSkjLDQw4G14ZnnKMHY2dK39DJ9Hi-xNu8luAEwsC9nsMSqG2VlMMeyZgu-CHb-yKZmXpu-PtSFt1ckAKRBl/s2880/Screenshot%202022-03-25%20at%2012.43.45%20PM.png)配置开机启动[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheR5A5u-QjTM9VhaFq0vAhNLP7CN9EF-_ErQbsdpGr7Re3lWXmf9ZjIGWoPpSqYKkqVT9vnDpaW9kQFOFqmwAZbI3WQn9jmDgbzhko0dgRxrrpDbk0qNbn3XSqMcjGRs1m_k3Kp2yGgp1u7l28kEABZamJ1XGSEQEfupVhhK3WaDV5T4aW3O4WJ_Xc/s320/Screenshot%202022-03-25%20at%2012.49.14%20PM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheR5A5u-QjTM9VhaFq0vAhNLP7CN9EF-_ErQbsdpGr7Re3lWXmf9ZjIGWoPpSqYKkqVT9vnDpaW9kQFOFqmwAZbI3WQn9jmDgbzhko0dgRxrrpDbk0qNbn3XSqMcjGRs1m_k3Kp2yGgp1u7l28kEABZamJ1XGSEQEfupVhhK3WaDV5T4aW3O4WJ_Xc/s2880/Screenshot%202022-03-25%20at%2012.49.14%20PM.png)完美运行  
  
  
  
  
  



