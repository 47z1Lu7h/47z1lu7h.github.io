---
layout: page
title: awake
permalink: /awake/
description: A growing collection of videos of topics that make yo think.
nav: true
nav_order: 3
display_categories: [light_side, dark_side]
horizontal: true
---

<!-- pages/awake.md -->
<div class="awake">
{% if site.enable_awake_categories and page.display_categories %}
  <!-- Display categorized awake -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_awake = site.awake | where: "category", category %}
  {% assign sorted_awake = categorized_awake | sort: "importance" %}
  <!-- Generate cards for each awake -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for awake in sorted_awake %}
      {% include awake_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for awake in sorted_awake %}
      {% include awake.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display awake without categories -->

{% assign sorted_awake = site.awake | sort: "importance" %}

  <!-- Generate cards for each awake -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for awake in sorted_awake %}
      {% include awake_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for awake in sorted_awake %}
      {% include awake.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
