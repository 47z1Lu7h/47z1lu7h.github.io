---
layout: page
title: Ctf's
permalink: /hacking/ctf/
description:
thumbnail: assets/img/pentest/ctf/ctf-Red-mini.jpeg
nav: true
nav_order: 2
---

## Latest Posts

{% for post in site.categories['ctf'] %}

  <article class="post-preview">
    <a href="{{ post.url }}">
      <h3>{{ post.title }}</h3>
      <p>{{ post.date | date: "%b %d, %Y" }}</p>
      <p>{{ post.excerpt }}</p>
    </a>
  </article>
{% endfor %}
