2016-08-22
Visibility: Public




快速创建指定大小文件（Windows、Linux） 



Windows命令： 

<span style="color:#ab4642">

Cd C:/ 

fsutil file createnew test.txt 6442450944 

</span>

后面的数字是文件字节数 



Linux命令： 
<span style="color:#ab4642">
dd if=/dev/zero of=100mb.bin bs=100M count=1 
</span>


创建这个文件的作用：可以测试服务器硬盘写入速度、测网速、快速侵占服务器空间、覆盖硬盘u盘数据以免数据恢复软件。 干坏事：可以随便打个数放到百度网盘里，再删掉换个数，再放进去。