---
layout: default
title: SQL-Injection
permalink: /sql-injection/
description:
nav: true
nav_order: 5
category: Cheetsheets
display_categories: [sql-injection, sqlmap, postgresql-injection, mysql-injection]
img: assets/img/hacking/cheetSheet/sql-injection.avif
horizontal: true
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  <ul>
    {% assign categorized_projects = site.hacking | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "importance" %}
    {% for project in sorted_projects %}
      <li><a href="{{ project.url }}">{{ project.title }}</a></li>
    {% endfor %}
  </ul>
  {% endfor %}
{% else %}
  <!-- Display projects without categories -->
  <ul>
    {% assign sorted_projects = site.hacking | sort: "importance" %}
    {% for project in sorted_projects %}
      <li><a href="{{ project.url }}">{{ project.title }}</a> - {{ project.date }}</li>
    {% endfor %}
  </ul>
{% endif %}
</div>
