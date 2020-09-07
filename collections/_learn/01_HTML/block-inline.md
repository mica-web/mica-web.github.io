---
topic: Block and inline elements
category: HTML
level: [ intro, advanced ]
permalink: /:collection/html/:name
code_example: false
quiz: true
issues: true
---

# {{ page.topic }}

In general, you can think of HTML elements as some type of box around some type of content. These boxes take two different forms:

- <b>block elements</b> start on a new line and stretch the full width of the browser (regardless of the text inside of them); and
- <b>inline elements</b> do not start on a new line and are exactly the width of the text inside of them.

In the following example, each of the HTML elements has a background color with some transparency added, so you can see how they are layered and nested.

<p class="codepen" data-height="251" data-theme-id="39278" data-default-tab="html,result" data-user="angeliquejw" data-slug-hash="YzqeKaX" data-editable="true" style="height: 251px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Block-Inline">
  <span>See the Pen <a href="https://codepen.io/angeliquejw/pen/YzqeKaX">
  Block-Inline</a> by Angelique (<a href="https://codepen.io/angeliquejw">@angeliquejw</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Based on this example, which elements do you expect are block elements and which are inline?

<!-- Inline-Block 1 -->
{% include quiz.html
  title="Share What You've Learned"
  quizId="5WHZ7Q5"
%}

These settings that make block and inline elements distinctive are just defaults and can be overridden when you start to write CSS. Having said that, it's still important to understand the default settings as it helps you better understand what's happening in the browser and will prevent you from writing unneeded code. For example, there's no reason to write CSS to tell an `h1` element to be full width; it does that by default.

Occasionally, you'll have reason to want to introduce line breaks inside of a block element, like a `p` element. You can do this with the line break element: `br`.

In the example below, you can see how the `br` element breaks up the song lyrics:

<p class="codepen" data-height="444" data-theme-id="39278" data-default-tab="html,result" data-user="angeliquejw" data-slug-hash="yLOvBGq" data-editable="true" style="height: 444px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="BR element">
  <span>See the Pen <a href="https://codepen.io/angeliquejw/pen/yLOvBGq">
  BR element</a> by Angelique (<a href="https://codepen.io/angeliquejw">@angeliquejw</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Just like other HTML elements, `br` is also meaningful; it should be used mainly for song lyrics, poems or street addresses; in each of these examples, the line breaks have a purpose. You should _not_ use a `br` element to control the width of text for aesthetic purposes; that should be handled solely through CSS.

{: .callout }
Using `br` for aesthetic line breaks is especially harmful when you consider how your design should adapt to different screen sizes. In this way, `br` offers very little flexibility and, as you'll see, CSS offers you a lot.

## Learn more
If you want more context or examples, check out MDN:

- [`br`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br){:target="_blank"}{% include optional.html %}
