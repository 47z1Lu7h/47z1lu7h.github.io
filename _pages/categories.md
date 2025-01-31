---
layout: page
permalink: /categories/
title: Categories
---

<!-- pages/categories.md -->
<div class="categories">
{% if site.enable_categories_projects and page.display_categories %}
  <!-- Display categorized categories -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.categories | where: "category", category %}
  {% assign sorted_categories = categorized_categories | sort: "importance" %}
  <!-- Generate cards for each categories -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for categories in sorted_categories %}
      {% include categories_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for categories in sorted_categories %}
      {% include categories.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display categories without categories -->

{% assign sorted_categories = site.categories | sort: "importance" %}

  <!-- Generate cards for each categories -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for categories in sorted_categories %}
      {% include categories_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for categories in sorted_categories %}
      {% include categories.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

<!-->

<div class="posts-by-tag">
    <ul class="tag-post-list">
        {% for category in site.categories %}
        {% capture tag_name %}{{ category | first }}{% endcapture %}
        <li>
            <h3 class="tag-header">{{ tag_name | capitalize }}</h3>
            {% for post in site.categories[tag_name] %}
            <div class="tag-post-title">
                <h4><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></h4>
            </div>
            {% endfor %}
        </li>
        {% endfor %}
    </ul>
</div>
