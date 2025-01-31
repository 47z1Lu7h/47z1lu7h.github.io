---
layout: page
title: awakening
permalink: /awakening/
description: A growing collection of things that make you thing/awake... if you want ☺️ 😜
display_categories: [Light-Side, Dark-Side, System, "Alien Wisdom", Spirituality, Food]
news: true
social: true
---

<hr>

<br>

# Change date order by adding '| reversed'

# To sort by title or other variables use {% assign sorted_posts = category[1] | sort: 'title' %}

<hr>

{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
{% assign sorted_posts = category[1] | reverse %}

<h2 id="{{category[0] | uri_escape | downcase }}">{{category[0] | capitalize}}</H2>
<ul>
  {% for post in sorted_posts %}
 	  <li><a href="{{ site.url }}{{ site.baseurl }}{{  post.url }}">{{  post.title }}</a></li>
  {% endfor %}
</ul>
{% endfor %}
