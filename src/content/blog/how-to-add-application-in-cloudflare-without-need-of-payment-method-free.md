---
title: How to add application in Cloudflare, without need of Payment Method ? FREE !!
description: Are you tired of Cloudflare asking for payment method while
  configuring new application ? Don't worry, there is simple method to bypass
  it.
pubDatetime: 2024-04-11T13:51:40.463Z
slug: add-cloudflare-application-without-payment-method-setup-in-free-tier
featured: true
tags:
  - networking
  - cloudflare
author: Anuj Paudel
modDatetime: 2024-04-11T13:51:34.076Z
---
<!--StartFragment-->

Cloudflare Access allows you to secure your web applications by acting as an identity aggregator, or proxy. Users can only log in to the application if they meet the criteria you want to introduce.

Whenever you try to add new application without payment method, Cloudflare doesn't let you move forward without adding one.

![Cloudflare requesting to choose a plan](../../assets/screenshot-2024-04-11-193954.png "Cloudflare requesting to choose a plan")

**There is simple work around this page. You just need to include, /add at the end of your URL.**

`https://one.dash.cloudflare.com/7b10d7d0fdgeae343abdbd59e2405/access/apps/add`

![include /add at the end of URL](../../assets/screenshot-2024-04-11-194610.png "Bypass Cloudflare plan page in application")

Now, you can add application as per you requirement.

![new application page after successfully bypassed Cloudflare choose plan page](../../assets/screenshot-2024-04-11-194721.png "Add new application page")

<!--EndFragment-->