---
title: "ADB Connect Cli"
date: 2024-04-10
draft: false
description: "adb cli pair and connect wireless"
tags: ["linux", "cli"]
---

abd connect  cli

[ADB PLATFROM TOOLS](https://developer.android.com/tools/releases/platform-tools)


```bash
# clear all server
adb kill-server
# pair new adb device
adb pair 192.168.0.1:00000
# add new device connection
adb connect 192.168.0.1:00000
# check connection
adb devices
``` 





Related Video

