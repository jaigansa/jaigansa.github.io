+++
author = "Jai Ganesh"
title = "Template"
date = "2020-04-21"
description = "how to use template folder"
tags = [
   "linux",
   "template",
]
categories = [
    "linux",
    
]
series = ["linux"]
aliases = ["hello"]
image = "template_cover.webp"
license = "Licensed under CC 0 4.0"
+++

#### What is template?
* easy to create new specific program files

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
etc

## Template in Dolphin

kde desktop using dolphin this file manager template depend two files main program file and desktop file link to main file

#### step_1
open template folder in home directory /home/$user/Templates

#### step_2
create some program file we create markdown file

#### step_3
create desktop file link the markdown file 

> Right Click check Template file
 
![dolphin] (https://drive.google.com/uc?export=download&id=1-r7wa4C-icruRs0BK_Gztk3P27uJyAyc)

### Terminal 
```
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

![gnome right click](https://lh3.googleusercontent.com/7BukfnN_kAelXPL1-eVl8CX5Bmc2fCdxj9jPYBvn9FJG3tNygaLvzg1UyEeRa9w3GdpY81LFy_kKo7krwOZUtjsRp7KSgJiq9I-Dgguqz_dyzjkPjcrdoazX9hz_SIbF)

#### step_1
open template folder in home directory /home/$user/Templates

#### step_2
create some program file we create markdown file done 

> Right Click check Template file


Related Video
{{<youtube _Adz47gEbuw>}}
