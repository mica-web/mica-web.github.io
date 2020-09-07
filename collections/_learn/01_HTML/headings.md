---
topic: Headings
category: HTML
level: [ intro, advanced ]
permalink: /:collection/html/:name
code_example: false
quiz: false
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}

In [HTML Basics]({{ lp | append: 'html/basics' }}), you created an `h1` element. `h1` is one of six heading levels available in HTML. Headings are used to establish hierarchy within your web content.

So, `h1` is the equivalent of the title of the current page and each of the following levels falls below that, much like a table of contents.

<p class="codepen" data-height="404" data-theme-id="39278" data-default-tab="html,result" data-user="angeliquejw" data-slug-hash="LYNeeeB" data-editable="true" style="height: 404px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Headings">
  <span>See the Pen <a href="https://codepen.io/angeliquejw/pen/LYNeeeB">
  HTML Headings</a> by Angelique (<a href="https://codepen.io/angeliquejw">@angeliquejw</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

In the example above, you can see all six heading levels and, on the right, their default formatting in your web browser.

It's important to note at this point that when you get into learning CSS, you'll be able to make headings and any other HTML elements look the way you want in terms of spacing, font size, color, etc. While browsers apply default styles to HTML documents like what you see here, this should not limit you _and_ should not change how you write your HTML.

{: .callout }
CSS is used to adapt what a web page looks like; HTML is used to provide structure and meaning to your web content.

To be more clear: Just because you want text in your HTML document to be large does _not_ mean you should use an `h1` element. You should use an `h1` element because the content it wraps is the title or subject of the web content.
