---
title: Front End Web Development (GD 431)
course: gd-431
toggle: true
type: course
---

{::options parse_block_html="true" /}
<section class="overview">

Front End Web Development
=========================

<div class="overview__content">

**NOTE:** This content is still being updated and revised for 2020.

---
{% include_relative _includes/description.md %}

</div>

<div class="overview__sidebar">

Syllabus
--------

<span class="highlighter">
[GD 431 Syllabus](https://docs.google.com/document/d/1ZuXB5erTCGdzSI3VPOQMzFkac8Rp96WEojIBBZY3oJs/edit?usp=sharing){:target="_blank"}
</span>

</div>

</section>

<section>

Schedule
--------

The current schedule is a work in progress, but you can choose instead to review a previous year's schedule:

<button type="button" class="u-button-reset js-generic-toggle highlighter" aria-controls="js-target-schedule">View Previous Schedule</button>

<ol id="js-target-schedule" class="u-list-reset has-reveal-animation schedule-list">
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

</section>
