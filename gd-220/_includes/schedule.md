Schedule
--------

{% include_relative _includes/current.md %}

<button type="button" class="u-button-reset js-generic-toggle highlighter" aria-controls="js-target-schedule">View Full Schedule</button>

<h3 class="u-sr-only">Full Schedule</h3>

<ol id="js-target-schedule" class="u-list-reset has-reveal-animation schedule-list">
{% for week in site.gd220 %}
{% assign weeknum = week.path | replace:'_gd220/w','' | replace:'.md', '' %}

  <li class="accordion-wrapper" id="week{{ weeknum }}">
    <h4 class="accordion-title{% if week.empty %} has-no-content js-content-toggle-ignore{% else %} js-trigger-content-toggle{% endif %}">
      {{ week.topic }}
    </h4>
    {{ week.content | markdownify }}
  </li>

{% endfor %}
</ol>
