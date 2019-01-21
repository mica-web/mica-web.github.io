---
title: Front End Web Development (GD 431)
course: gd-431
toggle: true
---

Front End Web Development
=========================

{% include gd-431/description.md %}

Syllabus
--------

<span class="highlighter">
[GD 431 Syllabus](files/Syllabus_FrontEndWebDevelopment.pdf){:target="_blank"} (PDF, 92kb)
</span>

{% include gd-431/rubric.md %}

{: .button-wrapper }
<a href="{{ site.baseurl }}{% link resources.md %}" class="button--bordered">
<span class="button__borders"></span>
Resources</a>

<ol class="u-list-reset schedule-list">
{% for gd431 in site.gd431 %}
{% assign weeknum = gd431.path | replace:'_gd431/w','' | replace:'.md', '' %}
  <li class="accordion-wrapper" id="week{{ weeknum }}">
    <h2 class="accordion-title{% if gd431.empty %} has-no-content js-content-toggle-ignore{% else %} js-trigger-content-toggle{% endif %}">
      {{ gd431.topic }}
    </h2>
    {{ gd431.content | markdownify }}
  </li>
{% endfor %}
</ol>
