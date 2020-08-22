
{% assign currentdate = 'now' | date: "%Y-%m-%d" %}
{% comment %}
% assign currentdate = '2020-09-03' | date: "%Y-%m-%d" %
{% endcomment %}
{% assign startdate = '2020-09-03' | date: "%Y-%m-%d" %}

{% if (currentdate <= startdate) %}

<section class="schedule-list">

### Prior to class start

Here's [a few things you can do](/gd-220/00/early-start) before the first class meeting on September 3rd.

</section>

{% endif %}


{% assign week = 6 | times: 24 | times: 60 | times: 60 %}

{% for week in site.gd220 %}

{% assign weeknum = week.path | replace:'_gd220/w','' | replace:'.md', '' %}

{% assign scheduledate = week.date | date: "%Y-%m-%d" %}
{% assign weekstart = week.date | date: "%s" | minus: week | date: "%Y-%m-%d" %}

{% if (currentdate >= weekstart) and (currentdate <= scheduledate) %}


<section class="schedule-list">

<h3 id="current-week">{{weeknum}} // Current Week: {{ week.topic }}</h3>

{{ week.content | markdownify }}

</section>


{% endif %}

{% endfor %}
