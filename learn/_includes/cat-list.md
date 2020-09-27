{% assign category = site.learn | where: 'category', page.category %}

{% if category.size == 0 %}

  {% include wip.md %}

{% else %}

<ul>

  {% for topic in category %}

  {% assign levels = topic.level %}

  <li>
    <a href="{{ topic.url }}">{{ topic.topic }}</a>
    <span class="tag-wrapper">
      {% for level in levels %}
        <span class="tag-name tag--{{ level | slice: 0 }}">
          {% if level == 'advanced' %}
          adv
          {% else %}
          {{ level }}
          {% endif %}
        </span>
      {% endfor %} 
    </span>
  </li>

  {% endfor %}

</ul>

{% endif %}
