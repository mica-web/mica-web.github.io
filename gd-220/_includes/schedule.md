Schedule
--------

{% include_relative _includes/current.md %}

<button type="button" class="u-button-reset js-generic-toggle" aria-controls="js-target-schedule">View All</button>

<ol id="js-target-schedule" class="u-list-reset has-reveal-animation schedule-list">
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
