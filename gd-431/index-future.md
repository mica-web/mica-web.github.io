---
title: Front End Web Development (GD 431)
course: gd-431
toggle: true
type: course
---

{::options parse_block_html="true" /}
<section>

Front End Web Development
=========================

{: .u-text-right .jump-link }
[jump to schedule](#week01){: .highlighter }

{% include_relative _includes/description.md %}

</section>

<aside>

Syllabus
--------

<span class="highlighter">
[GD 431 Syllabus](files/Syllabus_FrontEndWebDevelopment.pdf){:target="_blank"} (PDF, 92kb)
</span>

{% include_relative _includes/rubric.md %}

{: .button-wrapper }
<a href="{{ site.baseurl }}{% link resources.md %}" class="button--bordered">
<span class="button__borders"></span>
Resources</a>

</aside>

<ol class="u-list-reset schedule-list">
{% for week in site.gd431 %}
{% assign weeknum = week.path | replace:'_gd431/w','' | replace:'.md', '' %}

  <li class="accordion-wrapper" id="week{{ weeknum }}">
    <h2 class="accordion-title{% if week.empty %} has-no-content js-content-toggle-ignore{% else %} js-trigger-content-toggle{% endif %}">
      {{ week.topic }}
    </h2>
    {{ week.content | markdownify }}
  </li>

{% endfor %}
</ol>
