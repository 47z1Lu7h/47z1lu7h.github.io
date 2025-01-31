---
layout: page
title: awakening
permalink: /awakening/
description: A growing collection of things that make you thing/awake... if you want ☺️ 😜
nav: true
nav_order: 3
display_categories: [Light-Side, Dark-Side, System, "Alien Wisdom", Spirituality, Food]
horizontal: false
news: true
social: true
---

<ul>
{% for category in site.categories %}
  <li><a name="{{ category | first }}">{{ category | first }}</a>
    <ul>
    {% for post in category.last %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>

<br>
<hr>

# Categories

{% for category in site.categories %}
{% assign cat = category[0] %}
<h6><a href="#">{{ cat }}</a></h6>
{% for post in site.categories[cat] %}
<a href="{{ post.url }}">{{ post.title }}</a> <small>{{ post.date }}</small>
{% endfor %}
{% endfor %}

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
