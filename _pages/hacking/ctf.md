---
layout: page
title: CTF
permalink: /hacking/ctf/
description: Explora desafíos de Capture The Flag y write-ups.
nav: true
nav_order: 2
---

# CTF

Aquí encontrarás posts relacionados con desafíos de Capture The Flag.

## Últimos Posts

{% for post in site.categories['ctf'] %}

  <article class="post-preview">
    <a href="{{ post.url }}">
      <h3>{{ post.title }}</h3>
      <p>{{ post.date | date: "%b %d, %Y" }}</p>
      <p>{{ post.excerpt }}</p>
    </a>
  </article>
{% endfor %}
