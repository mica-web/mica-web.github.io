# {{ page.topic }}

{% assign category = site.learn | where: 'category', page.category %}

{% if category.size == 0 %}

  {: .wip-wrapper}
  ![This page is a work in progress](https://media.giphy.com/media/SwP1HunIXetehTvy43/giphy.gif)

{% else %}

  {% for topic in category %}

  - [{{ topic.topic }}]({{ topic.url }})

  {% endfor %}

{% endif %}
