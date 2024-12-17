---
title: "Screencast Source"
date: 2024-12-17
draft: false
description: "screencast android to linux"
tags: ["linux", "cli"]
---

## Screen cast android to obs media source

### rtmp method

> Install rtmp app to phone 
1. PRISM Live Studio 
{{< button href="https://play.google.com/store/apps/details?id=com.prism.live&pcampaignid=web_share" target="_self" >}}
Install
{{< /button >}}

2. Larix 
{{< button href="https://play.google.com/store/apps/details?id=com.wmspanel.larix_screencaster&pcampaignid=web_share" target="_self" >}}
Install
{{< /button >}}


#### serve screen the rtmp 

> system-ip-address:port `192.168.0.100:8889`

> key  `streamkey`


#### ffmpeg reserve rtmp

```bash
ffmpeg -f flv -listen 1 -i rtmp://<system-ip-address:port>/live/<key> -c copy -f flv -listen 1 rtmp://<localhost:1935>/live/<key>
```

#### obs source input

> media source

> Input `rtmp://localhost:1935/live/streamkey`

> Input Format `rtmp`


## IP Camera to obs media source

> find camera ip address

`namp -sn routerip/subnet`

### ccplus rtsp ip

> media source

> Input `rtsp://username:password@192.168.0.50:554/camrealmonitor?channel=1&subtype=0`

> Input Format `rtsp`