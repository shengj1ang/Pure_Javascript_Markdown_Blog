2019-07-16
Visibility: Public



What to do if the installation package is damaged and cannot be opened? Can't open "XXX" because it comes from an unidentified developer. How to deal with it


Method 1. 

1.Open the terminal and enter

```
sudo spctl --master-disable

```
And password.



Method 2.

1. Open the terminal, paste the following command in the terminal: 
```
sudo xattr -r -d com.apple.quarantine 
```
and <span style="color:#ab4642">enter a space</span> after the command (note: there is a space after the command).

2. Drag and drop the damaged software from the application program to the back of the command, press Enter, enter the power-on password, the password will not be displayed, press Enter to get it done, and other software can also operate in the same way.



Further more, if it's not working, try to use<span style="color:#dc9656"> sudo -i</span> to get in the root account.(The password will not be displayed, press Enter to get it done)