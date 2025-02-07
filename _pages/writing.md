---
layout: page
title: hacking
permalink: /hacking/
description: A collection of my hackings.
nav: true
only_highlights: true
#display_categories: [web-pentesting, hacking]
nav_order: 7
---

<!-- pages/hacking.md -->
<div class="hacking">
{%- if site.enable_project_categories and page.display_categories -%}
  <!-- Display categorized hacking -->
  {%- for category in page.display_categories -%}
  <h2 class="category">{{ category }}</h2>
  {%- if page.only_highlights -%}
    {%- assign categorized_projects = site.hacking | where: "highlighted", true | where: "category", category -%}
  {%- else -%}
    {%- assign categorized_projects = site.hacking | where: "category", category -%}
  {%- endif -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" | sort: "date" -%}
  <!-- Generate cards for each hacking type -->
  <div class="list-style mx-auto">
    {%- for project in categorized_projects -%}
      {% include hacking.liquid %}
    {%- endfor %}
  </div>
  {% endfor %}

{%- else -%}

<!-- Display hacking without categories -->

{%- if page.only_highlights -%}
{%- assign sorted_projects = site.hacking | where: "highlighted", true | sort: "importance" | sort: "date" -%}
{%- else -%}
{%- assign sorted_projects = site.hacking | sort: "importance" | sort: "date" -%}
{%- endif -%}

  <!-- Generate cards for each project -->
  <div class="list-style mx-auto">
    {%- for project in sorted_projects -%}
      {% include hacking.liquid %}
    {%- endfor %}
  </div>
{%- endif -%}

</div>
