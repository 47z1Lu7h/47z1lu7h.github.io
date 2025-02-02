---
layout: page
title: Pentesting
permalink: /hacking/
description: A growing collection of hacking stuff...
nav: true
nav_order: 3
display_categories: [hacking, Windows, linux, hackthebox, walkthrought, cCtf]
horizontal: false
discus_comments: true
comments: true
toc:
  sidebar: left
related_posts: true
news: true
---

# Pentesting

## Subcategorías

- [pentesting-web](/hacking/pentesting-web)
- [reverse-shell](/hacking/reverse-shells)
- [reversing-tools](/hacking/reversing-tools)
- [CTF](/hacking/ctf)

# Archive of posts from `hackthebox`

<div class="posts">
  {% for post in site.categories['hackthebox'] %}
    <article class="post">
          <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
      <div>
        {{ post.date | date: "%B %e, %Y" }}
      </div>
      <div class="entry">
        {{ post.excerpt }}
      </div>
      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">
          Read More
      </a>
    </article>
  {% endfor %}
</div>
