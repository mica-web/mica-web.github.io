---
topic: Pseudoclasses
category: CSS
level: [ intro ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

# {{ page.topic }}

CSS <b>pseudoclasses</b> refer to an existing selector's state, including:
- a _hovered_ link or button
- a _checked_ checkbox
- an _invalid_ form input

You use them by combining your selector with a colon (`:`) and the appropriate pseudoclass:

```css
a {
  color: red;
}
a:hover {
  color: fuchsia;
}
```

In the above example, the link text will be red until it is hovered, in which case it turns fuchsia.

In most cases where you have a `:hover` effect, you also want to add `:focus` -- this uses your same hover styles for users navigating your site via the keyboard instead of the mouse/trackpad. So, the example above would be:

```css
a:hover, a:focus {
  color: fuchsia;
}
```

## Styling pseudoclasses
Any CSS can be updated within your pseudoclass selector, however you should consider whether your updated CSS will affect the layout of your page.

{: .callout }
For example, adjusting the font size or adding borders will affect your layout.

The following demo shows some examples of this and the alternate CSS to avoid the issue.

<div class="glitch-embed-wrap" style="height: 520px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-pseudoclass-1?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-pseudoclass-1 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>
