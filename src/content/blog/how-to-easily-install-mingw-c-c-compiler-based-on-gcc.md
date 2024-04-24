---
title: How to easily install MinGW ( C, C++ compiler based on GCC ) ?
description: Quickly set up MinGW with a single line of code. Simplify C/C++
  development by following this easy installation guide.
pubDatetime: 2024-04-21T10:38:50.742Z
slug: install-mingw-gcc-easily
tags:
  - tutorial
modDatetime: 2024-04-21T10:38:50.752Z
---

<!--StartFragment-->

MinGW is a suite of development tools that contains GCC (among others), and GCC is a C compiler within that suite. Installing MinGW can be a difficult and tedious process due to navigating complex setup procedures, resolving compatibility issues with system configurations, and troubleshooting installation errors arising from dependencies or environment variables.

We will be using chocolatey for our installation process :

## 1. Install Chocolatey

If you don't have chocolatey installed in your device, follow the steps mentioned here to install chocolatey in windows :

_[`https://pem.com.np/posts/install-chocolatey-in-windows/`](https://pem.com.np/posts/install-chocolatey-in-windows/)_

## 2. Install MinGW

Make Sure to run CMD / PowerShell as administrator ( this is required for addition of MinGW path in environment variable, so that we can access it from any terminal without specifying full path of our program )

To install MinGW, just use the command :

```cmd
choco install mingw -A
```

If you face any problems, fell free to reach us out in discord : _[`https://discord.gg/Cqu5h9Qqhy`](https://discord.gg/Cqu5h9Qqhy)_

<!--EndFragment-->
