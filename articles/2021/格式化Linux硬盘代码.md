2021-06-29
Visibility: Public


```
 fdisk -ll

//查看硬盘数据


df -Th

//查看所有挂载盘


yum install wget -y && wget -O auto_disk.sh http://download.bt.cn/tools/auto_disk.sh && bash auto_disk.sh

//挂载所有硬盘


umount -f /dev/vdb1     /dev/vdb1为路径

//解挂命令


mkfs.xfs -f /dev/vdb1       /dev/vdb1为路径

//格式化命令


ext4格式    xfs格式




mount /dev/vdb1 /www

//手动挂载命令


ls 

//看目前文件夹


mkdir /zzz  

//创建文件夹


```