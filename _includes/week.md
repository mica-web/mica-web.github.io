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

## Activities

<ul>
  {% for activity in include.activities %}
  <li>
    {% if activity.title %}
    {{ activity.title | markdownify | replace: '<p>', '' | replace: '</p>', '' | rstrip | append: ':' }}
    <ul>
      {% for item in activity.items %}
      <li><a href="{% if item.learn %}{{site.url}}{{item.learn}}{% endif %}{{item.link}}">{{ item.name }}</a></li>
      {% endfor %}
    </ul>

    {% else %}
    <a href="{% if activity.learn %}{{site.url}}{{activity.learn}}{% endif %}{{activity.link}}">
      {{ activity.item }}
    </a>
    {% endif %}
  </li>
  {% endfor %}
</ul>
