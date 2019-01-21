---
title: Front End Web Development (GD 431)
course: gd-431
toggle: true
---

Front End Web Development (GD 431)
==================================

{% include gd-431/description.md %}

Syllabus
--------

<span class="highlighter">
[GD 431 Syllabus](files/Syllabus_FrontEndWebDevelopment.pdf){:target="_blank"} (PDF, 92kb)
</span>

{% include gd-431/assignments.md %}

<ol class="u-list-reset schedule-list">
{% for gd431 in site.gd431 %}
  <li class="accordion-wrapper">
    <h2 class="accordion-title{% if gd431.empty %} has-no-content js-content-toggle-ignore{% else %} js-trigger-content-toggle{% endif %}">
      {{ gd431.topic }}
    </h2>
    <section>
      {{ gd431.content | markdownify }}
    </section>
  </li>
{% endfor %}
</ol>
