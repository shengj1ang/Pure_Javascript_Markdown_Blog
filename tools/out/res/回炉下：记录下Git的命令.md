回炉下：记录下Git的命令
date: '2022-10-19T02:54:00.006+01:00'

---
前言：之前也有记录过，但是用太久GitHub Desktop导致我忘了命令怎么用了，所以在写下。

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvIWu-h5M6sCNqEp4KGRk4P-5VTeJyrTe8K9TML4VXxONO6CuMovMxESxmjW4pMIkVZKBONZDWntN5X-2rwUCwTupy5WfYbMUFoy9w-75lhEzQoG82IffG_Rk6aeGaXW9Rp98lHy1IwifQaMmcMgemal5iDaQnjBEFnfT0wIAWwx5Dwr4c-H17X7Qe/s320/git.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvIWu-h5M6sCNqEp4KGRk4P-5VTeJyrTe8K9TML4VXxONO6CuMovMxESxmjW4pMIkVZKBONZDWntN5X-2rwUCwTupy5WfYbMUFoy9w-75lhEzQoG82IffG_Rk6aeGaXW9Rp98lHy1IwifQaMmcMgemal5iDaQnjBEFnfT0wIAWwx5Dwr4c-H17X7Qe/s1122/git.png)  
  


- Initial

    //Global User  


    git config --global user.name "example-name"

    git config --global user.email "example@example.com"

    //UserForSingleRepository  


    git config  user.name "example-name"

    git config  user.email "example@example.com"

    //Show all configs  


    git config --list

    //Generate Key and Upload To GitHub account settings.  


    ssh-keygen -t rsa -C "example@example.com"

    //Test if it's working 

    ssh -T git@github.com 

  


- Project

    git clone git@github.com:github/github.git

- Upload

    git add .    //add all files

    git commit -m "First Commit"

    git push

  


- Remove all git history

    git checkout --orphan latest\_branch

    git add -A

    git commit -am "Your Commit"

    git branch -D master

    git branch -m master

    git push -f origin master

    git pull

  



