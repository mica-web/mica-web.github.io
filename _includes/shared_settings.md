{% assign lp = '/learn/' %}
{% assign course = page.collection | replace: 'gd', 'gd-' %}
{% assign week = page.title %}

{% assign data_src = site.data[page.collection] %}

{% capture wp %}
/{{course}}/{{week}}/
{% endcapture %}

{::options auto_id_prefix='w{{week}}-' /}
