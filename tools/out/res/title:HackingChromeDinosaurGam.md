title:HackingChromeDinosaurGam
date: '2021-10-08T09:52:00.012+01:00'

---
 Hacking Chrome Dinosaur Game

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQ3UwJvAJIhlDbgk_KZCoFIP6QElUbz0DelUgRF0DdOCaQ56oqz4SMM15Dw10LZpxVvgw0zKJGL3cyqAroPFUwguKkHS2qUnzaQBuKsxg1jnVdYZtUfVd1PCZPMzVKcqzYEYX9nea1IQEJjupc74Qg8BXpbYoRsTm2a49zCG9TaDhvpkRFXF_2IEC4/s1600/Screenshot%202022-03-23%20at%2011.19.16%20AM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQ3UwJvAJIhlDbgk_KZCoFIP6QElUbz0DelUgRF0DdOCaQ56oqz4SMM15Dw10LZpxVvgw0zKJGL3cyqAroPFUwguKkHS2qUnzaQBuKsxg1jnVdYZtUfVd1PCZPMzVKcqzYEYX9nea1IQEJjupc74Qg8BXpbYoRsTm2a49zCG9TaDhvpkRFXF_2IEC4/s310/Screenshot%202022-03-23%20at%2011.19.16%20AM.png)  
  
  
  


1. Open Console: Using F12 or Inspect

  


2. Game Script:

     Runner.prototype

     var defRunner=Runner.prototype.gameOver

     Runner.prototype.gameOver=function(){console.log("Fuck u Chrome")}

     Runner.instance\_.setSpeed(15000)

   ►Normal Speed: Runner.instance\_.setSpeed(10) 

  


3. For all those wondering how to maintain this score before this resets to 0, and therefore would require to kill it before highest possible score . To reset to default values , use 

     Runner.instance\_.setSpeed(10) 

     Runner.prototype.gameOver= defRunner

defRunner was used to save the initial state. 

And then let the dinosaur die at the highest possible score.

  
  
Console  
  
  
var defRunner=Runner.prototype.gameOver  
  Runner.prototype.gameOver=function(){console.log("Fuck u Chrome")}  
Runner.instance\_.setSpeed(15000)  
  
  
 Runner.instance\_.setSpeed(10)     Runner.prototype.gameOver= defRunner  
  

