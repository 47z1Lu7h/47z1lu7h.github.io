---
layout: default
title: Cheetsheets
category: ""
display_categories: [sql, enum, recon, expolitation, others]
img: assets/img/hacking/cheetsheets/cheat.jpg
horizontal: true
---

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  <ul>
    {% assign categorized_projects = site.docs | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "importance" %}
    {% for project in sorted_projects %}
      <li><a href="{{ project.url }}">{{ project.title }}</a></li>
    {% endfor %}
  </ul>
  {% endfor %}
{% else %}
  <!-- Display projects without categories -->
  <ul>
    {% assign sorted_projects = site.docs | sort: "importance" %}
    {% for project in sorted_projects %}
      <li><a href="{{ project.url }}">{{ project.title }}</a> - {{ project.date }}</li>
    {% endfor %}
  </ul>
{% endif %}
</div>
