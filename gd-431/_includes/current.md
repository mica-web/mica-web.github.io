{% assign currentdate = 'now' | date: "%s" %}
{% assign startdate = '2020-09-03' | date: "%s" %}

{% if (currentdate <= startdate) %}

<section class="schedule-list">

### Prior to class start

Here's [a few things you can do]({% link gd-431/00/early-start.md %}) before the first class meeting on September 3rd.

</section>

{% endif %}


{% assign range = 7 | times: 24 | times: 60 | times: 60 %}

{% for week in site.gd431 %}

{% assign weeknum = week.path | replace:'_gd431/','' | replace:'.md', '' %}

{% assign weekstart = week.course_date | date: "%s" %}
{% assign weekend = week.course_date | date: "%s" | plus: range | date: "%s" %}

{% if (currentdate >= weekstart) and (currentdate < weekend)  %}

<section class="schedule-list">

{::options parse_block_html="false" /}
<header class="current-header">
  <h3 id="current-week">{{ weeknum }} // Current Week: {{ week.topic }}</h3>
  <a href="{{ week.url }}" class="u-link-reset">
    {% include new-window.svg %}
  </a>
</header>
{::options parse_block_html="true" /}

{{ week.content | markdownify | replace: '<h2', '<h4' | replace: '</h2>', '</h4>'  }}

</section>

{% endif %}

{% endfor %}
