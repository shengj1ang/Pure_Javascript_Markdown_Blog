title:AccessrequestdetailswhenusingCloudflareworker
date: '2022-05-22T20:23:00.008+01:00'

---
Preface: *Cloudflare Worker* does not have the function of ip and visit logs. So add it manually with another PHP server.

  
  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzza3QGa_AAKDDkmDT6nb9t9Udbj3-RBBbuSFYvIWBbU1ja21JKKglASgIURaH2OG5yV1YmlNRvOcef50H_fdDOiwR2vqGuKr8rcuCYKRE9WPVmqWoWKhSa5KxCJ_lVnuzZloxBG3ebdqLUE7YHdqH0UH_a3CQpL0l1C10sCBzYnfZ513DSt6tDZYK/w400-h145/Screenshot%202022-05-23%20at%202.56.18%20PM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzza3QGa_AAKDDkmDT6nb9t9Udbj3-RBBbuSFYvIWBbU1ja21JKKglASgIURaH2OG5yV1YmlNRvOcef50H_fdDOiwR2vqGuKr8rcuCYKRE9WPVmqWoWKhSa5KxCJ_lVnuzZloxBG3ebdqLUE7YHdqH0UH_a3CQpL0l1C10sCBzYnfZ513DSt6tDZYK/s1264/Screenshot%202022-05-23%20at%202.56.18%20PM.png)  
1. Using PHP to write logs

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwXiXfro2Uggjv8mJM52bdfXHxy8InzZmr8HvFIMMh61hc3bqDeA8TBYE8N44ce0ld30gzqtnqgzT8Uv5C1rqUHksbMbXaDvlF7A5MHXvQOEih6G42Bz-hnUMqdJ4fExy0AqqG4vjC3blvP909_iGcE2oVltuB6NMlLpQeuLynNdFyzHUFTLdcsdtA/w400-h188/Screenshot%202022-05-23%20at%203.21.20%20AM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwXiXfro2Uggjv8mJM52bdfXHxy8InzZmr8HvFIMMh61hc3bqDeA8TBYE8N44ce0ld30gzqtnqgzT8Uv5C1rqUHksbMbXaDvlF7A5MHXvQOEih6G42Bz-hnUMqdJ4fExy0AqqG4vjC3blvP909_iGcE2oVltuB6NMlLpQeuLynNdFyzHUFTLdcsdtA/s1624/Screenshot%202022-05-23%20at%203.21.20%20AM.png)
> 
> ```
>   
>     <?php  
>     if (isset($\_GET["ip"])&&isset($\_GET["region"])&&isset($\_GET["path"])){  
>     $ip=$\_GET["ip"];  
>     $region=$\_GET["region"];  
>     $path=$\_GET["path"];  
>     $time=date('Y-m-d H:i:s');  
>     $filename="log/".date('Ymd').".txt";  
>     echo $time." IP:".$ip." Region:".$region." Path:".$path;  
>     $fp=fopen($filename,'a');  
>     fwrite($fp,$time." IP:".$ip." Region:".$region." Path:".$path."\r\n");  
>     fclose($fp); 
> ```
> 


> 
> ```
>     }  
>     else{  
>     echo "Error";  
>     }  
>     ?>
> ```
> 

2. Add To Workers Dash: 

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFOd74IW7QyiSb4ZBYVVqvA-CyvzaQcpzPM9XbswaS_YmQjc_siIkpKBol-cfZZJv86Ek67hSLhK1EwS4cfHb6I4tivSZRMhKr6DsXIP2GhiA6NTF2RutdAcwmla8Q76kQnyuXkwF7oqLa2lA51F5pzL0CBhocTMzN62r77WAZh6mRpMlMYnhewNMa/w400-h106/Screenshot%202022-05-23%20at%203.20.15%20AM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFOd74IW7QyiSb4ZBYVVqvA-CyvzaQcpzPM9XbswaS_YmQjc_siIkpKBol-cfZZJv86Ek67hSLhK1EwS4cfHb6I4tivSZRMhKr6DsXIP2GhiA6NTF2RutdAcwmla8Q76kQnyuXkwF7oqLa2lA51F5pzL0CBhocTMzN62r77WAZh6mRpMlMYnhewNMa/s1156/Screenshot%202022-05-23%20at%203.20.15%20AM.png)  


     const region = request.headers.get('cf-ipcountry').toUpperCase();     const ip\_address = request.headers.get('cf-connecting-ip');     let { pathname } = new URL(request.url);     fetch("https://exmaple.com/examplelocation?ip="+ip\_address+"&region="+region+"&path="+pathname);   
3. Additional: read.php[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXcfeHgijwtCX4_Bj-7NWOM6_0cDhLZQ_642oMzQnGSuxyw0Ts814xqdAKA1QB4njJfFtfuRU_umyv-XfkkxZut4JAflCzsvz3_DnDe7AsXbiTuQIso0t7F3oW7UAIasvsqfT4Pj40UzkYR1uJjcFmKDcGKrCPzNAgszFTHu5G_WDl8jObqEVJZiZp/w400-h180/Screenshot%202022-05-23%20at%205.58.21%20PM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXcfeHgijwtCX4_Bj-7NWOM6_0cDhLZQ_642oMzQnGSuxyw0Ts814xqdAKA1QB4njJfFtfuRU_umyv-XfkkxZut4JAflCzsvz3_DnDe7AsXbiTuQIso0t7F3oW7UAIasvsqfT4Pj40UzkYR1uJjcFmKDcGKrCPzNAgszFTHu5G_WDl8jObqEVJZiZp/s1012/Screenshot%202022-05-23%20at%205.58.21%20PM.png)  
  

```
    <?php  
    $filename="log/".date('Ymd').".txt";  
    if ( file\_exists ( $filename )){  
    $fp=fopen($filename,'r');  
    $str = fread ( $fp , filesize ( $filename ));  
    echo $str = str\_replace ( "\r\n" , "<br />" , $str );  
    fclose($fp);  
    }  
    else{  
    echo "No Log Today.";   
    }  
    ?>
```
  
4. **All function in one file**  

```
    <?php  
    if (isset($\_GET["ip"])&&isset($\_GET["region"])&&isset($\_GET["path"])){  
    $ip=$\_GET["ip"];  
    $region=$\_GET["region"];  
    $path=$\_GET["path"];  
    $time=date('Y-m-d H:i:s');  
    $filename="log/".date('Ymd').".txt";  
    echo $time." IP:".$ip." Region:".$region." Path:".$path;  
    $fp=fopen($filename,'a');  
    fwrite($fp,$time." IP:".$ip." Region:".$region." Path:".$path."\r\n");  
    fclose($fp);  
    }  
    elseif(isset($\_GET["read"]))  
    {  
 $filename="log/".date('Ymd').".txt";  
    if ( file\_exists ( $filename )){  
    $fp=fopen($filename,'r');  
    $str = fread ( $fp , filesize ( $filename ));  
    echo $str = str\_replace ( "\r\n" , "<br />" , $str );  
    fclose($fp);  
    }  
    else{  
    echo "No Log Today.";   
    }  
    }  
    else{  
    echo "Error";   
    }  
    ?>
```

```
**The End**
```

