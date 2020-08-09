### Current Week

<!-- {% assign currentdate = 'now' | date: "%Y-%m-%d" %} -->
{% assign currentdate = '2020-08-31' | date: "%Y-%m-%d" %}
{% assign week = 6 | times: 24 | times: 60 | times: 60 %}

{% for gd220 in site.gd220 %}

{% assign weeknum = gd220.path | replace:'_gd220/w','' | replace:'.md', '' %}

{% assign scheduledate = gd220.date | date: "%Y-%m-%d" %}
{% assign weekstart = gd220.date | date: "%s" | minus: week | date: "%Y-%m-%d" %}

{% if (currentdate >= weekstart) and (currentdate <= scheduledate) %}

<h4>{{weeknum}} {{ gd220.topic }}</h4>

{% endif %}

{% endfor %}
