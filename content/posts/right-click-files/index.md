---
title: "Right Click Files "
date: 2023-01-01
draft: false
description: "easy to create files"
tags: ["linux"]
---

A template is a pre-made file that acts as a copy of the original, making it easier to avoid starting from scratch. 

## Benefit
The right-click template option lets you quickly create files and folder structures without opening a program, saving time and boosting efficiency.


## right click templates concept

The concept of templates is the same in Linux, but there are more file manager applications, so the setup different via.

### linux File Manager
- Dolphin
- nautilus


## KDE Setup
kde desktop using dolphin  file manager so depend two files template file and desktop file link

- open template folder in home directory ```/home/$user/Templates```
- create template file we create markdown file
- create desktop file.

copy & paste 

```bash
cd ~/Templates
touch markdown.md markdown.desktop
cat <<-"EOF">> markdown.desktop
[Desktop Entry]
Name=Markdown
Comment=Enter Filename:
Type=Link
URL=markdown.md
Icon=text-markdown
EOF
```

## Nautilus Setup
Gnome Desktop using Nautilus file manager. its very simple to create template file 


- Open template folder in home directory ```/home/$user/Templates```
- Create template file we create markdown file
- Right click check template file





## Demo video

{{< youtubeLite id="_Adz47gEbuw" label="Right-Click Demo" >}}
