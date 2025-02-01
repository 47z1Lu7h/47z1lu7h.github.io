---
layout: page
permalink: /categories/
title: Categorías
---

# Categorías

{% for category in site.categories %}

  <h2>{{ category[0] }}</h2>
  <ul>
    {% for post in category[1] %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

## <!-->

layout: page
permalink: /categories/
title: Categories

---

# Archive of posts from {{ page.date | date: "%Y" }}

<ul class="posts">
{% for post in page.posts | where: "category", Linux %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

<ul>
<hr>
{% for category in site.categories | where: "category", Linux %}
  <li><a name="{{ category | first }}">{{ category | first }}</a>
    <ul>
    {% for post in category.last %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>

# Archive of posts from {{ page.date | date: "%Y" }}

<ul class="posts">
{% for post in page.posts | where: "category", Linux %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
