2020-08-27T02:15:00.001+01:00
Visibility: Public



使用 Nginx 的 ngx_http_sub_module 和 ** ngx_http_autoindex_module**  模块构建一个能够自动列举证书目录的服务，这样就不需要PHP了。
```

server {

    listen 80;

    server_name localhost;

    location = /favicon.ico {

        empty_gif;

    }

    location / {

        root /public;

        autoindex on;

        sub_filter '<h1>Index of /</h1>'  '<h1>Get Certs</h1>';

        sub_filter_once on;

    }

}
```