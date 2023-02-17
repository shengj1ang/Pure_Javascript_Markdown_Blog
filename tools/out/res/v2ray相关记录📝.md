v2ray相关记录📝
date: '2021-01-08T18:54:00.001+01:00'

---
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2OTs9oGlvSi4esBghsLA7ui9JGB0wkWTKrMk6zxoT8JkpvVNv4HFl9Q0HakXmacTZWh5QcEmq3w7a-FthTcVOar1jbCRpcc8SvdKY5v2vjAqXqkueSXU4f_1i8Fl6MY-_Dg9oAqKwYA7EYyB7YzyLb0MVVr60M5RMefFw4BUfMiqc6zUTckpvgKKM/s1600/Screenshot%202022-03-23%20at%2011.15.57%20AM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2OTs9oGlvSi4esBghsLA7ui9JGB0wkWTKrMk6zxoT8JkpvVNv4HFl9Q0HakXmacTZWh5QcEmq3w7a-FthTcVOar1jbCRpcc8SvdKY5v2vjAqXqkueSXU4f_1i8Fl6MY-_Dg9oAqKwYA7EYyB7YzyLb0MVVr60M5RMefFw4BUfMiqc6zUTckpvgKKM/s254/Screenshot%202022-03-23%20at%2011.15.57%20AM.png)  
  
-相关目录程序目录：/usr/local/v2ray配置文件：/etc/v2ray/config.json  
      - 服务文件：/usr/lib/systemd/system/v2ray.service  


|  |  |
| --- | --- |
| 12345678910111213141516 | `[Unit]``Description=V2Ray Service``Documentation=https:``//www``.v2fly.org/``After=network.target nss-lookup.target` `[Service]``User=nobody``CapabilityBoundingSet=CAP_NET_ADMIN CAP_NET_BIND_SERVICE``AmbientCapabilities=CAP_NET_ADMIN CAP_NET_BIND_SERVICE``NoNewPrivileges=``true``ExecStart=``/usr/local/v2ray/v2ray` `-config``/etc/v2ray/config``.json``Restart=on-failure``RestartPreventExitStatus=23` `[Install]``WantedBy=multi-user.target` |

-相关命令  


|  |  |
| --- | --- |
| 1234 | `cp` `v2ray.service``/usr/lib/systemd/system/``systemctl daemon-reload``systemctl``enable` `v2ray``systemctl start v2ray` |

  
  
  
  
  

