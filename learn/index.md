---
title: Learn
type: learn-index
---

# Topics

{% assign topics = site.learn | group_by: 'category' %}

{% assign all_levels = site.learn | map: "level" | uniq %}

<p>Filter by level</p>
<ul class="filter-list">
{% for level in all_levels %}
  <li><button type="button" data-controls="{{ level | slice: 0 }}" class="u-button-reset js-filter-toggle">{{ level }}</button></li>
{% endfor %}
  <li><button type="button" data-controls="reset" class="u-button-reset js-filter-toggle">see all</button></li>
</ul>

{% for topic in topics %}
  <h2>{{ topic.name }}</h2>

  {% assign items = topic.items %}

  {{ items.category }}
  <ul>
  {% for item in items  %}
    {% assign levels = item.level %}

    <li data-level="{% for level in levels %}{{level | slice: 0 }} {% endfor %}">
      {{ item.topic }}
      {% for level in levels %} <span>{{ level }}</span> {% endfor %} 
    </li>

  {% endfor %}
  </ul>
{% endfor %}
