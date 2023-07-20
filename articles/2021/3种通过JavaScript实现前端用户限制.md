2021-08-02
Visibility: Public



这些方法不需要动态语言就可以实现。

1. 密码限制

```
<html xmlns="http://www.w3.org/1999/xhtml" >
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon"  href="../favicon.png" sizes="23x23" type="image/x-icon" >
    <title>SUBSCRIPTION</title>
  </head>
  <body>
    <h1>请输入密码访问</h1>

    <BR><BR><BR>
    <h6>请输入UUID:</h6>
     <BR>
  <input type="text" id="inputbox" style="width:225px; height:30px;" value=""/>
<br><br>
<input id="button1" type="button" value="ENTER" onclick="window.location.href=document.getElementById('inputbox').value"/>
 <BR><BR>
  </body>
<script>
    document.getElementById("inputbox").focus();
    document.onkeydown=function(event){
        var code = event.keyCode;
        if(code ==13){
            document.getElementById("button1").click();
        }
    }

</script>
    
    
</html>  
```

2. 用户语言限制
```
<script>if (navigator.language=="zh-CN"||navigator.language=="zh-TW"||navigator.language=="zh-CHS"||navigator.language=="zh-HANS"){location.href = "https://batit.aliyun.com/";}</script>
```

3. user agent限制 
```
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="../favicon.png" sizes="23x23" type="image/x-icon">
    <title>SUBURL-Safedog-KKK</title>
    <script type="text/javascript">
    var link = "https://xxxx"
      var fakelink = "https://www.xuexi.cn/"
      var useragent = navigator.userAgent;
      if (useragent.match(/MicroMessenger/i) == 'MicroMessenger' || useragent.match(/Tencent/i) == 'Tencent' || useragent.match(/QQTheme/i) == 'QQTheme' || useragent.match(/Ali/i) == 'Ali' || useragent.match(/MetaSr/i) == 'MetaSr' || useragent.match(/UCWEB/i) == ' UCWEB'|| useragent.match(/Huawei/i) == ' Huawei') {
        alert('识别危险软件特征。出于安全原因，禁止使用黑名单软件访问！详细特征：腾讯/阿里/UC/搜狗/华为');
        alert('请用合适的软件打开！即将跳转到适合你访问的页面。');
        location.href = fakelink;
      } else {
        var is360js = _mime("type", "application/vnd.chromium.remoting-viewer");
        //判断mime
        function _mime(option, value) {
          //debugger;
          let mimeTypes = navigator.mimeTypes;
          for (var mt in mimeTypes) {
            console.log('type:', mimeTypes[mt][option]);
            if (mimeTypes[mt][option] == value) {
              alert('识别危险软件特征。出于安全原因，禁止使用黑名单软件访问！详细特征：360相关浏览器');
              alert('请用合适的软件打开！即将跳转到适合你访问的页面。');
              location.href = fakelink;
            } else {
              location.href = link;
            }
          }

        }
      }
    </script>
  </head>
  <body>
    <h3>正在运行浏览器安全检查，这个过程是自动的。</h3>
    <h4>如果卡住了，请启用JavaScript。当然如果你会禁用JavaScript，绕过这个安全检查也是很简单的。</h4>
    <p>copyright</p>
  </body>

</html>
```