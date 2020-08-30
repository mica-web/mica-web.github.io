Schedule
--------

{% include_relative _includes/current.md %}

<button type="button" class="u-button-reset highlighter js-generic-toggle" aria-controls="js-target-schedule">View Full Schedule</button>

<ol id="js-target-schedule" class="u-list-reset has-reveal-animation schedule-list">
{% for week in site.gd431 %}

  <li>
    <h3 class="schedule-topic">
      {% if week.published %}
      <a href="{{ week.url }}">
        {{ week.topic }}
      </a>
      {% else %}
        {{ week.topic }}
      {% endif %}
    </h3>
  </li>

{% endfor %}
</ol>
