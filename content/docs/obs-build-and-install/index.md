---
title: "Obs Build and Install"
date: 2024-04-02
draft: false
description: ""
tags: ["docs", "linux"]
series: ["My Setup"]
series_order: 4
---

obs-studio build in debian 12 from source.

## Build in Debian

1. Install Dependencies in debian
```bash
# Build system dependencies
sudo apt install cmake ninja-build pkg-config clang clang-format build-essential curl ccache git zsh
```

```bash
# OBS dependencies (core):
sudo apt install libavcodec-dev libavdevice-dev libavfilter-dev libavformat-dev libavutil-dev libswresample-dev libswscale-dev libx264-dev libcurl4-openssl-dev libmbedtls-dev libgl1-mesa-dev libjansson-dev libluajit-5.1-dev python3-dev libx11-dev libxcb-randr0-dev libxcb-shm0-dev libxcb-xinerama0-dev libxcb-composite0-dev libxcomposite-dev libxinerama-dev libxcb1-dev libx11-xcb-dev libxcb-xfixes0-dev swig libcmocka-dev libxss-dev libglvnd-dev libgles2-mesa libgles2-mesa-dev libwayland-dev librist-dev libsrt-openssl-dev libpci-dev libpipewire-0.3-dev libqrcodegencpp-dev
```

```bash
# OBS Qt6 dependencies (UI):
sudo apt install \
       qt6-base-dev \
       qt6-base-private-dev \
       libqt6svg6-dev \
       qt6-wayland \
       qt6-image-formats-plugins
```

2. Build source

```bash
# OBS Source Code
git clone --recursive https://github.com/obsproject/obs-studio.git
# CEF Source
wget https://cdn-fastly.obsproject.com/downloads/cef_binary_5060_linux64.tar.bz2
tar xf cef_binary_5060_linux64.tar.bz2

cd obs-studio

```

```bash
# Config
cmake -S . -B build -G Ninja -DCMAKE_BUILD_TYPE="Release" \
        -DCEF_ROOT_DIR="../cef_binary_5060_linux64" \
        -DENABLE_AJA=0  \
        -DENABLE_LIBFDK=1 \
        -DQT_VERSION=6 
```
```bash
# build
cmake --build build -j$(nproc)

# deb package
cmake --build build --target package -j$(nproc)

```

3. Install Builds

```bash
sudo apt remove obs-studio && sudo apt autoremove
sudo apt-mark unhold obs-studio 
sudo dpkg -i ./build/*.deb

```


## Official Build Instructions 
 - [OBS-STUDIO](https://github.com/obsproject/obs-studio/wiki/Build-Instructions-For-Linux)


## PLUGINS
1. [URL-SOURCE](https://github.com/occ-ai/obs-urlsource)
1. [OBS-NDI](https://github.com/obs-ndi/obs-ndi)
1. [ADVANCE-SCENE-SWITCHER](https://github.com/WarmUpTill/SceneSwitcher)
1. [MOVE-TRANSITION](https://github.com/exeldro/obs-move-transition)
1. [OBS-VOCAL](https://github.com/occ-ai/obs-localvocal)




