---
layout: page
permalink: /categories/
title: Categories
---

<!-- pages/categoriess.md -->
<div class="categoriess">
{% if site.enable_categories_categories and page.display_categories %}
  <!-- Display categorized categoriess -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_categoriess = site.categoriess | where: "category", category %}
  {% assign sorted_categoriess = categorized_categoriess | sort: "importance" %}
  <!-- Generate cards for each categories -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for categories in sorted_categoriess %}
      {% include categoriess_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for categories in sorted_categoriess %}
      {% include categoriess.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display categoriess without categories -->

{% assign sorted_categoriess = site.categoriess | sort: "importance" %}

  <!-- Generate cards for each categories -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for categories in sorted_categoriess %}
      {% include categoriess_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for categories in sorted_categoriess %}
      {% include categoriess.liquid %}
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
