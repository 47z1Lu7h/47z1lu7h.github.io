---
layout: page
title: Reverse Shells
permalink: /hacking/reverse-shells.md
description: Explora contenido sobre hacking de redes inalámbricas.
nav: true
nav_order: 3
---

# Wireless

Aquí encontrarás posts relacionados con hacking de redes inalámbricas.

## Últimos Posts

{% for post in site.categories['reverse-shells'] %}

  <article class="post-preview">
    <a href="{{ post.url }}">
      <h3>{{ post.title }}</h3>
      <p>{{ post.date | date: "%b %d, %Y" }}</p>
      <p>{{ post.excerpt }}</p>
    </a>
  </article>
{% endfor %}

# [**Shells - Linux**](linux.md)

# [**Shells - Windows**](windows.md)

# [**MSFVenom - CheatSheet**](msfvenom.md)

# [**Full TTYs**](full-ttys.md)

# **Auto-generated shells**

- [**https://reverse-shell.sh/**](https://reverse-shell.sh/)
- [**https://www.revshells.com/**](https://www.revshells.com/)
- [**https://github.com/ShutdownRepo/shellerator**](https://github.com/ShutdownRepo/shellerator)
- [**https://github.com/0x00-0x00/ShellPop**](https://github.com/0x00-0x00/ShellPop)
- [**https://github.com/cybervaca/ShellReverse**](https://github.com/cybervaca/ShellReverse)
- [**https://liftoff.github.io/pyminifier/**](https://liftoff.github.io/pyminifier/)
- [**https://github.com/xct/xc/**](https://github.com/xct/xc/)
- [**https://weibell.github.io/reverse-shell-generator/**](https://weibell.github.io/reverse-shell-generator/)
- [**https://github.com/t0thkr1s/revshellgen**](https://github.com/t0thkr1s/revshellgen)
- [**https://github.com/mthbernardes/rsg**](https://github.com/mthbernardes/rsg)
