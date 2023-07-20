2023-02-03 UTC
Visibility: Public



# ffmpeg的使用

ffmpeg非常棒，啥功能都有，这记下我测试过的功能。
再ChatGPT的帮助下，可以很轻松的生成命令。
使用ffmpeg剪辑拼接视频如果熟练使用会比iMoive/FinalCut导出快很多。

## Loop(批量转换):


- 把目录下所有文件都转成mp4，默认编码h264，建议直接使用这个。
```
for i in *.*; do
    ffmpeg -i "$i" "${i%.*}.mp4"
done
```
- 把目录下所有mkv文件都转成mp4，超级快速。
```
for i in *.mkv; do
    ffmpeg -i "$i" -codec copy "${i%.*}.mp4"
done
```

- 遍历子目录
```
find . -type f -iname "*.webm" -exec bash -c 'FILE="$1"; ffmpeg -i "${FILE}" -vn -ab 128k -ar 44100 -y "${FILE%.webm}.mp3";' _ '{}' \;
```


## 把A的视频和B音频快速合成
```
ffmpeg -i videoA.mp4 -i audioB.mp3 -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 output.mp4
```
视频A是mov格式的
```
ffmpeg -i videoA.mov -i audioB.mp3 -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 output.mp4
```

## 视频压缩
```
ffmpeg -i input.mov -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4
```
把4k视频变成720p 8fps
```
ffmpeg -i input.mp4 -vf "scale=1280:720" -r 8 output.mp4
```


## 图片生成视频
```
ffmpeg -framerate 30 -i image_%03d.jpg -c:v libx264 -crf 18 -preset fast output.mp4
```
这将从以image_001.jpg开始的一系列图片（例如image_002.jpg，image_003.jpg等）创建视频。

-framerate 30指定视频的帧率为30fps（帧每秒）。

-i image_%03d.jpg表示输入文件的命名模式，其中%03d表示以三位数的顺序命名的图片文件。例如，如果您有100张图片，命名为image_001.jpg，image_002.jpg，一直到image_100.jpg。

-c:v libx264使用libx264编码器进行视频压缩。

-crf 18指定视频的质量，值越小表示质量越高，但文件大小也会增加。根据您的需求，您可以调整此值。

-preset fast是编码速度和压缩效率的预设选项。在这种情况下，我们选择了较快的预设。如果您希望更好的压缩效率，可以选择较慢的预设，例如slow或veryslow，但这可能会导致编码时间更长。

请确保在运行命令之前已安装FFmpeg，并将image_%03d.jpg替换为适用于您的实际图片命名模式，并指定输出文件名（例如output.mp4）。您还可以根据需要调整帧率、质量和预设选项。

## 合并视频
要求：把a.mov b.mov c.mov d.mov 合并成一个视频
要将多个MOV文件（a.mov、b.mov、c.mov和d.mov）合并为一个视频，可以使用FFmpeg的concat协议。下面是一个示例命令行：

1. 创建一个文本文件（例如`input.txt`），并将需要合并的文件列表写入其中：
```
file 'a.mov'
file 'b.mov'
file 'c.mov'
file 'd.mov'
```

2. 运行以下命令：
```
ffmpeg -f concat -i input.txt -c copy output.mov
```

这将使用concat协议和输入文本文件`input.txt`来合并指定的MOV文件。`-c copy`选项将直接复制视频和音频流而不进行重新编码，以保持最佳质量和速度。

请确保在运行命令之前已安装FFmpeg，并将a.mov、b.mov、c.mov和d.mov替换为实际的文件名和路径。输出文件将是一个合并后的MOV文件（output.mov）。

如果您想将合并的视频输出为其他格式（如MP4），可以将输出文件扩展名更改为相应的格式，例如`output.mp4`，同时还需要根据需要设置适当的编码器和选项。

## Refer
[How to simply convert video files \(i.e.: MKV to MP4\)? \[duplicate\]](https://askubuntu.com/questions/396883/how-to-simply-convert-video-files-i-e-mkv-to-mp4)

[convert from avi to mp4 using ffmpeg](https://stackoverflow.com/questions/21328694/convert-from-avi-to-mp4-using-ffmpeg)

[Extract audio from WEBM to MP3](https://bytefreaks.net/gnulinux/bash/ffmpeg-extract-audio-from-webm-to-mp3)
