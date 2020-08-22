{% assign currentdate = 'now' | date: "%Y-%m-%d" %}
{% comment %}
%  assign currentdate = '2020-09-03' | date: "%Y-%m-%d" %
{% endcomment %}
{% assign startdate = '2020-09-03' | date: "%Y-%m-%d" %}

{% if (currentdate <= startdate) %}

<section class="schedule-list">

### Prior to class start

Here's [a few things you can do](/gd-431/00/early-start) before the first class meeting on September 3rd.

</section>

{% endif %}


{% assign week = 6 | times: 24 | times: 60 | times: 60 %}

{% for week in site.gd431 %}

{% assign weeknum = week.path | replace:'_gd431/','' | replace:'.md', '' %}

{% assign scheduledate = week.course_date | date: "%Y-%m-%d" %}
{% assign weekstart = week.course_date | date: "%s" | minus: week | date: "%Y-%m-%d" %}

{% if (currentdate >= weekstart) and (currentdate <= scheduledate) %}


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
