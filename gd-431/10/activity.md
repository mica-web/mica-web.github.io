---
title: Activity
course: gd-431
quiz: false
issues: true
---

{% assign week = '10' %}

{::options auto_id_prefix='w{{week}}-' /}

{% capture wp %}
/gd-431/{{week}}/
{% endcapture %}

# Week {{week}} {{ page.title }}: Eleventy Tutorial

{: .callout }
**Purpose:** This tutorial will walk you through understanding and using some of the functionality of Eleventy before you start from scratch for your Project 4 sites.

## Tasks
1. Remix [this Glitch project](https://glitch.com/~mica-11ty-demo-start){:target="_blank"}
1. Follow along with the tutorial videos below to modify your Glitch project and learn about the powers of Eleventy.

{: .callout }
<span class="emoji">🆘</span> If you're stuck at any point, I've created a separate video about [troubleshooting Eleventy + Glitch](https://www.loom.com/share/c6ea14cd5d1d435885b11741dfe62d97){:target="_blank"}.

<div class="loom-embed-wrapper" style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe id="js-loom-target" src="https://www.loom.com/embed/063ae33f22ce448a96b9af67b6323a55" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

<ol>
  <li>
    <a
      class="js-loom-trigger"
      href="https://www.loom.com/share/063ae33f22ce448a96b9af67b6323a55"
      data-embed="063ae33f22ce448a96b9af67b6323a55">
      Tutorial introduction
    </a> <span class="text-faded">(6mins)</span>
  </li>
  <li>
    <a
      class="js-loom-trigger"
      href="https://www.loom.com/share/329cac3627b646219dd2cba87f8566e7"
      data-embed="329cac3627b646219dd2cba87f8566e7">
      Layout files: Basics
    </a> <span class="text-faded">(9mins)</span>
  </li>
  <li>
    <a
      class="js-loom-trigger"
      href="https://www.loom.com/share/284cc18598df414f89c8ac8b4ac38e95"
      data-embed="284cc18598df414f89c8ac8b4ac38e95">
      Layout files: Advanced
    </a> <span class="text-faded">(7mins)</span>
  </li>  
  <li>
    <a
      class="js-loom-trigger"
      href="https://www.loom.com/share/e7ad659caa19477a9d2724f8deeea99c"
      data-embed="e7ad659caa19477a9d2724f8deeea99c">
      Includes: Basics
    </a> <span class="text-faded">(6mins)</span>
  </li>  
  <li>
    <a
      class="js-loom-trigger"
      href="https://www.loom.com/share/87af830769a14efc9fa200bbca77a578"
      data-embed="87af830769a14efc9fa200bbca77a578">
      Sass partials
    </a> <span class="text-faded">(8mins)</span>
  </li>
  <li>
    <a
      class="js-loom-trigger"
      href="https://www.loom.com/share/7ab3bc38bbc94e218aacdd63eb31a462"
      data-embed="7ab3bc38bbc94e218aacdd63eb31a462">
      Using dynamic logic
    </a> <span class="text-faded">(16mins)</span>
  </li>  
  <li>
    <a
      class="js-loom-trigger"
      href="https://www.loom.com/share/72ae1973b1a04bbc9d998cea00ef9c7a"
      data-embed="72ae1973b1a04bbc9d998cea00ef9c7a">
      Collections
    </a> <span class="text-faded">(14mins)</span>
  </li>  
  <li>
    <a
      class="js-loom-trigger"
      href="https://www.loom.com/share/36668f5310904fc9b6d216377ae9d1ef"
      data-embed="36668f5310904fc9b6d216377ae9d1ef">
      Includes: Advanced
    </a> <span class="text-faded">(14mins)</span>
  </li>  
</ol>

Want to check out the final project? You can either:
- View [this Glitch project](https://glitch.com/~mica-11ty-demo-done) to see what things look like in the browser, or
- View the code in [this GitHub repo](https://github.com/mica-web/11ty-demo)

You can also view all the tutorial videos on a [single page](https://www.loom.com/share/folder/b2c08180bdcc4fbb9153d475a1646c84). Note that the videos are in reverse order on this page. <span class="emoji">🤷🏻‍♀️</span>

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
