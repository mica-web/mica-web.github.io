---
topic: Selectors
category: CSS
level: [ intro, advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}
In your [initial lesson]({{ lp | append: 'css/basics' }}) about CSS, you learned that the element your ruleset targets is called a <b>selector</b>. So, in the following CSS, the `p` element is the selector:

```css
p {
  color: purple;
}
```

While writing CSS this way has worked for the very basic examples thus far, what are your options if you don't want _every_ `p` element to be purple, but only one or a few?

In this case, you can add custom class names to your HTML elements and reference them in your CSS. You write class names like so:

```html
<p class="my-class-name">Content</p>
```

You use this class name in your CSS by repeating the name and starting it off with a period:

```css
.my-class-name {
  color: purple;
}
```

The period differentiates this as a class selector (vs a base element selector, which is what you've been writing to date).

Your class names may be single words or use hyphens/dashes to connect multiple words, as in this example. Class names **cannot** have spaces in them. Spaces, as in the following example, are read as separate class names:

```html
<p class="class1 class2">Content</p>
```

Use the "View Source" button on the Glitch project below to explore how a combination of base and class name selectors are used to create this final design:

<div class="glitch-embed-wrap" style="height: 650px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/mica-css-selectors?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="mica-css-selectors on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Take note of the following:

- Class names (like `columns`) can be shared by multiple elements. In this way, you can use classes to create consistency throughout your project.
- It's totally valid for a single HTML element to have multiple class names, as the `p` elements do here.
- The stylesheet starts with base elements at the top, followed by class names. This reinforces the idea that your stylesheet starts with generic defaults and gets more custom further down.
