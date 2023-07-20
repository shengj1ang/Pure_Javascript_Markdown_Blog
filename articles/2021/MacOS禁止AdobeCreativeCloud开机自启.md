2021-02-10
Visibility: Public




打开终端禁止开机自启：

```
launchctl unload -w /Library/LaunchAgents/com.adobe.AdobeCreativeCloud.plist

```


恢复自启：

```
launchctl load -w /Library/LaunchAgents/com.adobe.AdobeCreativeCloud.plist
```