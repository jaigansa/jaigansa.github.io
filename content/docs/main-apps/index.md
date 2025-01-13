---
title: "Main Apps"
date: 2023-12-18
draft: false
description: ""
tags: ["docs"]
series: ["Install Linux"]
series_order: 4
---

our main app list and setup details.

### Initial Apps

1. Browser

 ```bash
 # Chromium 
 sudo apt install chromium
 ```
- [Chrome](https://www.google.com/chrome/)
- [Firefox](https://www.mozilla.org/en-US/firefox/all/#product-desktop-release)
``` bash
sudo apt update && sudo apt upgrade
cd ~/Downloads
sudo tar xjf firefox-*.tar.bz2
sudo mv firefox /opt
sudo ln -s /opt/firefox/firefox /usr/local/bin/firefox
sudo wget https://raw.githubusercontent.com/mozilla/sumo-kb/main/install-firefox-linux/firefox.desktop -P /usr/local/share/applications
```

2. Communication
 - [Telegram](https://telegram.org/apps)
 - [signal](https://signal.org/download/)
 - [discord](https://discord.com/download)


### Major Apps

1. Graphics
    - [Blender]() 3d Modeling animation tools
    - [Inkscape]() vector graphics software
    - [Gimp]() photo manuplation software

1. CAD

    - [Freecad]()

1. Coding IDE

    - [vscodium]()
    - [brackets](https://brackets.io/)


1. Multimedia 

    - [obs-studio]()
    - [vlc]()


1. Production Tools

    - [docker]()
    - [erpnext]()
    - [frappebook]()
    - [odoo]()
    - [nextcloud]()
    - [ghost]()


### Tools

1. default tools

```bash
# update system
sudo apt update && sudo apt upgrade -y
# Install tools list
sudo apt install lm-sensors nano -y

```





