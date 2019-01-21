---
title: Graphic Design 2 (GD 220)
course: gd-220
toggle: true
type: course
---

{::options parse_block_html="true" /}
<section>

Graphic Design 2
================

{: .u-text-right .jump-link }
[jump to schedule](#week01){: .highlighter }

{% include gd-220/description.md %}

</section>

<aside>

Syllabus
--------

<span class="highlighter">
[GD 220 Syllabus](){:target="_blank"} (PDF, 92kb)
</span>

{% include gd-220/rubric.md %}

{: .button-wrapper }
<a href="{{ site.baseurl }}{% link resources.md %}" class="button--bordered">
<span class="button__borders"></span>
Resources</a>

</aside>

<ol class="u-list-reset schedule-list">
{% for gd220 in site.gd220 %}
{% assign weeknum = gd220.path | replace:'_gd220/w','' | replace:'.md', '' %}

  <li class="accordion-wrapper" id="week{{ weeknum }}">
    <h2 class="accordion-title{% if gd220.empty %} has-no-content js-content-toggle-ignore{% else %} js-trigger-content-toggle{% endif %}">
      {{ gd220.topic }}
    </h2>
    {{ gd220.content | markdownify }}
  </li>

{% endfor %}
</ol>
