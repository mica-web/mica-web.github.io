---
title: Graphic Design 2 (GD 220)
course: gd-220
toggle: true
type: course
---

{::options parse_block_html="true" /}
<section class="overview">

Graphic Design 2
================

<div class="overview__content">

**NOTE:** This content is still being updated and revised for 2020.

---
{% include_relative _includes/description.md %}

</div>

<div class="overview__sidebar">

Syllabus
--------

<span class="highlighter">
[GD 220 Syllabus](https://docs.google.com/document/d/1U2pwRJ7SyvGpGD4lyYk8bEcxOe33caysKf7sSJQlkAM/edit?usp=sharing){:target="_blank"}
</span>

</div>

</section>

<section>

Schedule
--------

The current schedule is a work in progress, but you can choose instead to review last year's schedule:

<button type="button" class="u-button-reset js-generic-toggle highlighter" aria-controls="js-target-schedule">View Previous Schedule</button>

<ol id="js-target-schedule" class="u-list-reset has-reveal-animation schedule-list">
{% for week in site.gd220 %}
{% assign weeknum = week.path | replace:'_gd220/w','' | replace:'.md', '' %}

  <li class="accordion-wrapper" id="week{{ weeknum }}">
    <h2 class="accordion-title{% if week.empty %} has-no-content js-content-toggle-ignore{% else %} js-trigger-content-toggle{% endif %}">
      {{ week.topic }}
    </h2>
    {{ week.content | markdownify }}
  </li>

{% endfor %}
</ol>

</section>
