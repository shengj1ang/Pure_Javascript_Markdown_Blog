# 支持表格、图标和柱状图的强大MarkDown修改器，甚至支持图片上传！
| @cols=2:merged |
| --- | --- |
| table | table |
```uml
partition Conductor {
  (*) --> "Climbs on Platform"
  --> === S1 ===
  --> Bows
}

partition Audience #LightSkyBlue {
  === S1 === --> Applauds
}

partition Conductor {
  Bows --> === S2 ===
  --> WavesArmes
  Applauds --> === S2 ===
}

partition Orchestra #CCCCEE {
  WavesArmes --> Introduction
  --> "Play music"
}
```
```chart
,category1,category2
Jan,21,23
Feb,31,17

type: column
title: Monthly Revenue
x.title: Amount
y.title: Month
y.min: 1
y.max: 40
y.suffix: $
