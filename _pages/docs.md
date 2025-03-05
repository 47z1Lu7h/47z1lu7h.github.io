---
layout: page
title: / d0Cs \
nav: true
permalink: /docs/
display_categories: [code, hacking, "cheet sheets", misc]
horizontal: true
---

---

<br>

- ##### **Here I have all the cheetsheets that I find interesting**.
  - ##### **Many from kown repositories and people, and some mine.** :ok_hand::slightly_smiling_face::wink:

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
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
  <ul>
    {% assign sorted_projects = site.docs | sort: "importance" %}
    {% for project in sorted_projects %}
      <li><a href="{{ project.url }}">{{ project.title }}</a> - {{ project.date }}</li>
    {% endfor %}
  </ul>
{% endif %}
</div>
