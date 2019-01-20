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

<span class="highlight">
[GD 431 Syllabus](files/Syllabus_FrontEndWebDevelopment.pdf){:target="_blank"} (PDF, 92kb)
</span>

{% include gd-431/assignments.md %}

<ol>
{% for gd431 in site.gd431 %}
  <li class="accordion-wrapper">
    <div class="accordion-title js-trigger-content-toggle">
      {{ gd431.topic }}
    </div>
    <section>
      {{ gd431.content | markdownify }}
    </section>
  </li>
{% endfor %}
</ol>
