---
title: Debugging HTML
course: gd-431
type: activity
quiz: true
issues: true
---

{% assign ip = '/learn/01_html/img/' %}


# {{ page.title }}

## In Brief
The following HTML example has several errors in it. <b>Remix</b> this project on Glitch and do your best to improve this code.

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/debugging-html?path=index.html&previewSize=0&sidebarCollapsed=true"
    title="debugging-html on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

## Purpose
This is meant to be a quick way for you to consider your current familiarity with HTML and for me to evaluate where you stand. This exercise is a **participation grade** so, do your best, but **don't stress about what you don't know or can't fix at this point.**

## Process
1. Click the <b>Remix to Edit</b> button to make a copy of this Glitch project.
1. Next, click <b>Edit Fullscreen</b>; this will force the project to open in its own window where you can save your work. **You must do this in order to have a copy of your changes to share back with me.**
1. Make changes to the `index.html`, focusing first on any code that is broken.
1. After you've fixed the areas with broken code, review the HTML to see if there are other improvements to be made.
1. When you are satisfied with your code, copy the link for your project and add it to the form immediately below. See this screen capture to see how to get the link:

![Click the Share button and then the Code button. Copy the URL that reveals.]({{ ip | append: 'glitch-share.gif' }})

<!-- Debugging HTML 1 -->
{% include quiz.html
  title="Share Your Work"
  quizId="5H6S36C"
%}

## Next Steps
If this activity made you want to review some HTML, see these tutorials and explainers:
  - [HTML Basics]({{ lp | append: 'html/basics' }}){% include optional.html %}
  - [HTML Headings]({{ lp | append: 'html/headings' }}){% include optional.html %}
  - [HTML Text]({{ lp | append: 'html/text' }}){% include optional.html %}
  - [Block and Inline Elements]({{ lp | append: 'html/block-inline' }}){% include optional.html %}
