---
title: JS Demo Project
course: gd-431
quiz: false
issues: true
---

{% assign week = '14' %}

{::options auto_id_prefix='w{{week}}-' /}

{% capture wp %}
/gd-431/{{week}}/
{% endcapture %}

# Week {{week}}: {{ page.title }}

{: .callout }
**Purpose:** Build a small project using the JavaScript you've learned to date.

## Tasks
1. Remix [this Glitch project](https://glitch.com/~pizzascript-demo-start){:target="_blank"}
1. Follow along with the demo project videos below

<div class="loom-embed-wrapper" style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe id="js-loom-target" src="https://www.loom.com/embed/83cd4299b7c74948948b05dd14f93449" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

<ol>
  {% for video in site.data.jsDemo %}
  <li>
    <a
      class="js-loom-trigger"
      href="https://www.loom.com/share/{{ video.id }}"
      data-embed="{{ video.id }}">
      {{ video.title }}
    </a> <span class="text-faded">({{ video.length }})</span>
  </li>
  {% endfor %}
</ol>
<!-- 76 mins of video -->

Want to check out the final project? You can view:

- The [finished page in the browser](https://pizzascript-demo-done.glitch.me/order/)
- The [project code on Glitch](https://glitch.com/~pizzascript-demo-done)
- The code in [this GitHub repo](https://github.com/mica-web/pizzascript)

You can also view all the tutorial videos on a [single page](https://loom.com/share/folder/798153adf7074ac6a023d5fb550ed2f6). Note that the videos are in reverse order on this page. <span class="emoji">🤷🏻‍♀️</span>

<script>
  let triggers = document.querySelectorAll(".js-loom-trigger");
  let iframe = document.getElementById("js-loom-target");
  Array.prototype.forEach.call(triggers, (trigger, i) => {
    trigger.addEventListener("click", e => {
      e.preventDefault();
      updateIframe();
    });
  });
  const updateIframe = () => {
    const id = event.target.dataset.embed;
    const url = "https://www.loom.com/embed/" + id;
    iframe.src = url;
  }
</script>
