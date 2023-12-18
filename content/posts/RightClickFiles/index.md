---
title: "File Template for linux"
date: 2023-11-10
draft: false
description: "easy to create files"
tags: ["linux"]
showAuthor: true
authors:
  - "jaiganesh"
showAuthorsBadges : true
---

#### What is template?
* easy to create premade files. its have copy of original file, prevent to scrath work.

#### When using right click template option?
* without open program first create file and folder structure

#### Why using template feature?
* reduce time consumption 

### How to use Template Files

template concept usage are same in linux but more file manager application so setup is different.

#### List of File Manager
1. Dolphin
2. nautilus
3. nemo
4. thunar
5. etc....

## Template in Dolphin

kde desktop using dolphin this file manager template depend two files main program file and desktop file link to main file

<ul>
<li>open template folder in home directory /home/$user/Templates</li>

<li>create some program file we create markdown file</li>

<li>create desktop file link the markdown file</li>
</ul>

> Right Click check Template file
 [dolphin](https://drive.google.com/uc?export=download&id=1-r7wa4C-icruRs0BK_Gztk3P27uJyAyc)

### Terminal 
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

## Template in Nautilus
Gnome Desktop using Nautilus file manager. its very simple to create template file 

[gnome right click]()


<ul>
    <li>open template folder in home directory /home/$user/Templates
    </li>
    <li>create some program file we create markdown file done 
    </li>
    <li>Right Click check Template file</li>
</ul>




Related Video
{{<youtube _Adz47gEbuw>}}
