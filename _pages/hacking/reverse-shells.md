---
layout: page
title: Wireless
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
