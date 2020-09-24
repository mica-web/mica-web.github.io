---
topic: Display
category: CSS
level: [ intro, advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}

In your initial reading about HTML, you learned about the difference between [block and inline elements]({{ lp | append: 'html/block-inline' }}). While each element has a default setting, this can be altered by using the CSS `display` property.

<div class="glitch-embed-wrap" style="height: 650px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-display-1?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="css-display-1 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

In the second example above, the following CSS was applied to change the default behavior:

```css
div {
  display: inline;
}
span {
  display: block;
}
```

This code is just for simple demonstration purposes; in general, you wouldn't often change a `div` to display inline; you could just change your markup to use a `span` instead. Similarly, you wouldn't usually set `display: block;` on a `div` since that's the default behavior. **Even though using CSS gives you more options, it's still important to understand the default behavior so you can save yourself some work.**

While you can swap a `span` for a `div` to get the behavior you want, there aren't similar easy choices to make with other HTML elements, like an `h1` or an `a`. In those cases, it makes perfect sense to use the `display` property.

## Limitations of the `inline` value
Inline elements have several limitations that can cause frustration when you try to style them; specifically, inline elements ignore

- height
- width
- top and bottom margins

Luckily, another value for `display` respects all those values _and_ lets you place elements in a row, much like inline elements, just <span class="emoji">✨</span> better. The following example, uses this CSS:

```css
div, span {
  display: inline-block;
}
```

<div class="glitch-embed-wrap" style="height: 400px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-display-2?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="css-display-2 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

So, if you're trying to get elements to show up on a row side-by-side, start by setting their `display` value to `inline-block`.
