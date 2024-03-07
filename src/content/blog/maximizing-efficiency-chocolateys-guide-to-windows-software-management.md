---
title: "Maximizing Efficiency: Chocolatey's Guide to Windows Software Management"
description: Chocolatey is an open-source package manager for Windows. It builds
  on top of existing technologies like PowerShell and NuGet. Chocolatey operates
  via command-line interface (CLI), which makes it easy to automate software
  installation and management.
pubDatetime: 2024-03-07T13:44:02.124Z
modDatetime: 2024-03-07T13:44:02.131Z
---
<!--StartFragment-->



To install and set up Chocolatey on Windows, follow these steps:

<!--EndFragment-->

### **1﻿. Open CMD as Admin :**

### **2﻿.** **Install Chocolatey**:

Run the following command in the command prompt:

```cmake
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

### **3﻿. Verify Installation:**

![](/assets/screenshot-2024-03-07-193948.png)



### **4﻿. Usage:** 

L﻿et's install GoogleChrome using Chocolatey.

![](/assets/screenshot-2024-03-07-194151.png)



<!--EndFragment-->