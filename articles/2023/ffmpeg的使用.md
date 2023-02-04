# ffmpeg非常棒，啥功能都有，这记下我测试过的功能。# 

日期：20230203 UTC

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

Refer:


[How to simply convert video files \(i.e.: MKV to MP4\)? \[duplicate\]](https://askubuntu.com/questions/396883/how-to-simply-convert-video-files-i-e-mkv-to-mp4)

[convert from avi to mp4 using ffmpeg](https://stackoverflow.com/questions/21328694/convert-from-avi-to-mp4-using-ffmpeg)

[fmpeg: Extract audio from .WEBM to .MP3]
(https://bytefreaks.net/gnulinux/bash/ffmpeg-extract-audio-from-webm-to-mp3)