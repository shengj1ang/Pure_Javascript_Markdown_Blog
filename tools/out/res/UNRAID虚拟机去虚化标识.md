UNRAID虚拟机去虚化标识
date: '2023-01-07T16:41:00.005+01:00'

---
在未配置前，我们查看Windows的任务管理器，找到CPU的部分查看信息。

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjCBPXaYmFrAgzk5B6uCmuPQ8OglhV7_hf-oeiT5R0pE2BzNC9YrgiezWMXij2acJSSFupJt7lqbiDtQhFVroZOCO1WT044WjgnvCdv5R0PDGKF4w3pi7uHSTFH_RdGOJmN8xDeWXCnXzO3a-IsSHS38XdZ941B9uT4yFRurpPPGW-1d4Ljz7lXMkoi)](https://blogger.googleusercontent.com/img/a/AVvXsEjCBPXaYmFrAgzk5B6uCmuPQ8OglhV7_hf-oeiT5R0pE2BzNC9YrgiezWMXij2acJSSFupJt7lqbiDtQhFVroZOCO1WT044WjgnvCdv5R0PDGKF4w3pi7uHSTFH_RdGOJmN8xDeWXCnXzO3a-IsSHS38XdZ941B9uT4yFRurpPPGW-1d4Ljz7lXMkoi)  
红色圈主的范围，已经标注了这是一台虚拟机，我们关闭虚拟机，进入编辑模式，然后改为XML VIEW模式添加代码。

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgqU9_NkrWfZSz4Dbm4B9pmom9QAzCl6eyAMAjXdfinZhIVDj38uQ1uCOUb6tlTUGmUvRdukTta9xFy_jnTzat3-7AdWrkR0VkWC_l2jSAOcUY-32IE04YIzmesA38T-PMefiAKTmIkiZyoGIykEP7EGhp6LYE2buoaRHwTZiGUTjDcY2yIxgXsUiVW)](https://blogger.googleusercontent.com/img/a/AVvXsEgqU9_NkrWfZSz4Dbm4B9pmom9QAzCl6eyAMAjXdfinZhIVDj38uQ1uCOUb6tlTUGmUvRdukTta9xFy_jnTzat3-7AdWrkR0VkWC_l2jSAOcUY-32IE04YIzmesA38T-PMefiAKTmIkiZyoGIykEP7EGhp6LYE2buoaRHwTZiGUTjDcY2yIxgXsUiVW)
```
<qemu:commandline>  
    <qemu:arg value='-cpu'/>  
    <qemu:arg value='host,-hypervisor,+kvm_pv_unhalt,+kvm_pv_eoi,hv_spinlocks=0x1fff,hv_vapic,hv_time,hv_reset,hv_vpindex,hv_runtime,hv_relaxed,kvm=off,hv_vendor_id=intel'/>  
 </qemu:commandline>
```
保存后，重新启动虚拟机，然后在进入管理器查看CPU。

[![](https://blogger.googleusercontent.com/img/a/AVvXsEh8Imw4pvLWKOvPVkovbUocUynTva_NcR0LdqVdd6QnLZQRWo5ACUCsrOGfew-c3T2i0F88lDuWieYn-9aOXjSIMjMl7Ar_hl3u05FW6ho7nuxzaWtbFblG1Swf1TFraHVfyeG_zaAWAlXiw_3nk31HbKebdbge0Dr-i546KvIcdYrejCcWrVjpx5X7)](https://blogger.googleusercontent.com/img/a/AVvXsEh8Imw4pvLWKOvPVkovbUocUynTva_NcR0LdqVdd6QnLZQRWo5ACUCsrOGfew-c3T2i0F88lDuWieYn-9aOXjSIMjMl7Ar_hl3u05FW6ho7nuxzaWtbFblG1Swf1TFraHVfyeG_zaAWAlXiw_3nk31HbKebdbge0Dr-i546KvIcdYrejCcWrVjpx5X7)  
这样就去掉了虚拟化的标识，但是需要注意的是配置完成后的虚拟机，如果后期需要修改内容，使用了UNRAID的模板修改了配置，都需要重新添加上面的代码。  
结尾：虽然内容很简单，但是在虚拟机做云游戏服务器的时候，这几行代码是非常实用的，可以解决部分游戏检虚拟化的问题。  


  


  


  


  
  

