---
topic: Opacity
category: CSS
level: [ intro ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}

In [CSS Colors]({{ lp | append: 'css/colors' }}), you learned about the different color values used in CSS to set solid colors for text or backgrounds. It is also possible to control the opacity or transparency of colors via CSS. One way of doing this is via the `opacity` property which takes a number value as either a decimal or percentage. As a result, even though this code uses different values, both the `h1` and `h2` would have the same opacity effect:

```css
h1 {
  opacity: 0.3;
}
h2 {
  opacity: 30%;
}
```

A solid color is represented by an opacity value of `100%` or `1`. Unless the element's opacity has been previously modified, you usually don't need to set these values.

Using an opacity value of `0` would render the element invisible. It would still take up space in the browser, but would be invisible, as you can see in this example:

<div class="glitch-embed-wrap" style="height: 600px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-opacity-1?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="css-opacity-1 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

It's important to realize that opacity applies to the entire element and not just its background color. In the following demo, you can see the effect of opacity:

<div class="glitch-embed-wrap" style="height: 550px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-opacity-2?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-opacity on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

As this is rarely the result you want in your designs, you should instead use `rgba` or `hsla` color values when you want a transparent effect to your colors. These values are formatted exactly like the `rgb` and `hsl` values earlier with two changes:

- the name changes from `rgb` to `rgba` or from `hsl` to `hsla`
- another color value is added to the list inside the parentheses to represent the degree of opacity

In this example, the `h1` would have a solid background color and the `h2` would have the same color, but at 30% opacity:

```css
h1 {
  background-color: hsl(338, 66%, 34%);
}
h2 {
  backgaround-color: hsla(338, 66%, 34%, 30%);
}
```

The following demo shows the difference between opacity and an HSLA color value; in both cases, an opacity of 30% is used:

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-alpha?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-alpha on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>
