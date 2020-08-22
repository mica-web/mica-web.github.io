Schedule
--------

{% include_relative _includes/current.md %}

{: .callout }
The schedule for fall 2020 is a work in progress, so most of the content below still reflects last year's schedule. You can review it to get a sense of what the class has covered in the past.

<button type="button" class="u-button-reset js-generic-toggle highlighter" aria-controls="js-target-schedule">View Full Schedule</button>

<ol id="js-target-schedule" class="u-list-reset has-reveal-animation schedule-list">
{% for week in site.gd220 %}

  <li>
    <h3 class="schedule-topic">
      {% if week.empty %}
        {{ week.topic }}
      {% else %}
      <a href="{{ week.url }}">
        {{ week.topic }}
      </a>
      {% endif %}
    </h3>
  </li>

{% endfor %}
</ol>
