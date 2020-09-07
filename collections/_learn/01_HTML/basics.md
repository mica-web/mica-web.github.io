---
topic: HTML Basics
category: HTML
level: [ intro ]
permalink: /:collection/html/:name
code_example: false
quiz: true
issues: true
---

{% assign ip = '/learn/01_html/img/' %}


# {{ page.topic }}

<b>HTML</b> stands for <b>Hypertext Markup Language</b>, and all the pages you browse when using the web are HTML documents.

Read MDN's [Getting started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started){% include estimate.html time=18 %} and do each of the activities embedded in that page. You are _not_ required to follow any of the links in that content or read any additional pages.

When you get to the activity titled "Active learning: Adding some features to an HTML document," instead of working on your local computer, remix [this Glitch project](https://glitch.com/edit/#!/html-active-learning) instead.

Your page should include the following elements:
- `h1`
- `p`
- `strong`
- `a` (the link element)
- `img` (you can link to an image on an existing web page or add an image to your assets folder)
- an HTML comment

When you've completed the entire MDN page and your own `index.html`, copy the link for your project. See this screen capture to see how to do that:

![Click the Share button and then the Code button. Copy the URL that reveals.]({{ ip | append: 'glitch-share.gif' }})

{% include quiz.html
  title="Share Your Work"
  quizId="FTPZNH8"
%}
