---
layout: page
permalink: /categories/
title: Categories
---

<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>

    <h3 class="category-head">{{ category_name }}</h3>
    <a name="{{ category_name | slugize }}"></a>
    {% for post in site.categories[category_name] %}
    <article class="archive-item">
      <h4><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></h4>
    </article>
    {% endfor %}

  </div>
{% endfor %}
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
