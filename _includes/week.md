## Intro
{{ include.intro }}

{::options parse_block_html="true" /}
<div class="due-wrapper">

## What's Due

  <p class="text-faded"><small>Please follow the links for specific details on what's due and how to submit it. <span class="emoji">🙏🏻</span></small></p>

  <ol>
    {% for list in include.hw %}
    <li>
      {% if list.replace_link %}
      {{ list.item | markdownify | | replace: '<p>', '' | replace: '</p>', '' | replace: '!link', list.replace_link }}
      {% else %}
      {{ list.item | markdownify | replace: '<p>', '' | replace: '</p>', '' }}
      {% endif %}
      {% if list.due %}
        <div class="text-faded">
          {{ list.due | markdownify | replace: '<p>', '' | replace: '</p>','' }}
          {% if list.etz %}
            (<a href="{{list.etz}}" target="_blank">see in your timezone</a>)
          {% endif %}
        </div>
      {% endif %}
    </li>
    {% endfor %}
  </ol>

</div>

## Sync Up

{% if include.sync.size > 1 %}
<ol>
  {% for list in include.sync %}
  <li>
    {% if list.link %}
    <a href="{{list.link}}" {% if list.target %}target="{{list.target}}" {% endif %}>{{ list.item }}</a>
    {% elsif list.markdown == true %}
      {% if list.replace_link %}
      {{ list.item | markdownify | replace: '<p>', '' | replace: '</p>', '' | replace: '!link', list.replace_link }}
      {% else %}
      {{ list.item | markdownify | replace: '<p>', '' | replace: '</p>', '' }}
      {% endif %}
    {% else %}
    {{ list.item }}
    {% endif %}
  </li>
  {% endfor %}
</ol>

{% else %}

<p> {{ include.sync.first.item }} </p>

{% endif %}

## Activities

{% if include.activities.size > 1 %}

<ul>
  {% for activity in include.activities %}
  <li>
    {% if activity.title %}
    {{ activity.title | markdownify | replace: '<p>', '' | replace: '</p>', '' | rstrip | append: ':' }}
    <ul>
      {% for item in activity.items %}
      <li><a href="{% if item.learn %}{{site.url}}{{item.learn}}{% endif %}{{item.link}}">{{ item.name }}</a>{% if item.optional == true %} {% include optional.html %}{% endif %}</li>
      {% endfor %}
    </ul>

    {% else %}
    <a href="{% if activity.learn %}{{site.url}}{{activity.learn}}{% endif %}{{activity.link}}">
      {{ activity.item }}
    </a>
    {% if activity.optional == true %} {% include optional.html %}{% endif %}
    {% endif %}
  </li>
  {% endfor %}
</ul>

{% else %}

<p> {{ include.activities.first.item }} </p>

{% endif %}
