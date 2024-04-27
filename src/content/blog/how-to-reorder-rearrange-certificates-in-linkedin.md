---
title: How to reorder certificates in LinkedIn ?
description: LinkedIn doesn't provide way to reorder certificates, but we can
  change detail of certificate to order them as per our wish.
pubDatetime: 2024-04-21T12:25:33.200Z
slug: arrange-certificates-and-licenses-in-alphabetical-order-in-linkedin
featured: true
tags:
  - tutorial
modDatetime: 2024-04-21T12:25:33.211Z
---

LinkedIn automatically reorders/ rearranges your licenses and certificates in order of, **expiry date, issue date and alphabetical order.** Certificates with no expiry date appears at top, then newly issued certificate and finally in alphabetical order. We don't have control over expiry date and issue date, because we can't fake it to make it appear as per our wish. But still we have option to not add expiry and issue date of certificate, and make them alphabetically arrange as per our requirement.

For this we will be using Unicode **U+0020** i.e. Space. Alphabetically, it appears in top of other alphabetical characters. So we can add space ahead of our certificate name, and make it appear at top.

So, lets assume we have 3 certificates named :

`Certificate1 , Certificate2 and certificate3`

But I wish, them in order certificate3, certificate2 and certificate3. So we will rename them as :

`"__Certificate3"` - _two spaces before actual name_

`"_Certificate2"` - _one space before actual name_

`"Certificate1"`

**Don't worry spaces will not appear in certificate name for visitors.**

Now licenses and certificates will appear as per your wish. If you have any problems, feel free to reach us in our discord server _<https://discord.gg/Cqu5h9Qqhy>_
