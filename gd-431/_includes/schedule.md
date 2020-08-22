Schedule
--------

{% include_relative _includes/current.md %}

{: .callout }
The schedule for fall 2020 is a work in progress, so most of the content below still reflects last year's schedule. You can review it to get a sense of what the class has covered in the past.

<button type="button" class="u-button-reset js-generic-toggle highlighter" aria-controls="js-target-schedule">View Full Schedule</button>

<ol id="js-target-schedule" class="u-list-reset has-reveal-animation schedule-list">
{% for week in site.gd431 %}
{% assign weeknum = week.path | replace:'_gd431/w','' | replace:'.md', '' %}

  <li class="accordion-wrapper" id="week{{ weeknum }}">
    <h3 class="accordion-title{% if week.empty %} has-no-content js-content-toggle-ignore{% else %} js-trigger-content-toggle{% endif %}">
      {{ week.topic }}
    </h3>
    {{ week.content | markdownify }}
  </li>

{% endfor %}
</ol>
