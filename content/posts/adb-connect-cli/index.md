---
title: "ADB Connect Cli"
date: 2024-04-10
draft: false
description: "adb cli pair and connect wireless"
tags: ["linux", "cli"]
---


# abd connect  cli

## Install adb

> [ADB PLATFROM TOOLS](https://developer.android.com/tools/releases/platform-tools")

> linux adb latest
{{< button href="https://dl.google.com/android/repository/platform-tools-latest-linux.zip" target="_self" >}}
Downloads.
{{< /button >}}

## debian install 

```bash 
sudo apt intall adb
```

## Direct usb connect to wifi

- plugin devices must

```bash
adb kill-server
adb devices
adb tcpip 5555
adb connect <device_ip_address>:5555
```


## wifi via connect devices


```bash
adb kill-server 
adb pair <device_ip_address>:<device_port> 
adb connect <device_ip_address>:<device_port> 
adb devices
``` 





> Related Video

