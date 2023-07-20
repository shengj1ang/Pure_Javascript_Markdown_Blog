2017-01-13
Visibility: Public



Delete All Ds_Store Files In Terminal:

```
find . -name ".DS_Store" -print -delete
```
If you or your server admin become frustrated by the seemingly endless creation of these files, there is a quick and easy way to turn off the creation of .DS_Store files--execute the following command in Terminal:
```
defaults write com.apple.desktopservices DSDontWriteNetworkStores true
```
After the command is executed, reboot your Mac, and you'll be good to go--no more .DS_Store files gunking up your system's folders. If you need to set certain folders a particular way and want to reenable the creation of these files, the fix is just as simple--enter the command below and reboot your system once it's executed:

```
defaults write com.apple.desktopservices DSDontWriteNetworkStores false
```
Note: The change is considered a per-user modification, so if you're in a corporate environment with multiple Apple users, this command must be performed from each user's account when logged on with their profile. This may be scripted out and run by your IT department as a logon script or as part of ongoing maintenance routine tasks through Apple Remote Desktop (ARD) or other third-party management suites.