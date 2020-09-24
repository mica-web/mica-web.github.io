---
topic: Borders
category: CSS
level: [ intro ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

# {{ page.topic }}
You can use CSS to apply a variety of border styles to your HTML elements. The most basic border declaration looks like this:

```css
div {
  border: 3px solid black;
}
```

Like `margin` and some other CSS you've now worked with, `border` is a <b>shorthand property</b> and it combines details of the border:

- width
- style
- color

The CSS ruleset above then results in something that looks like Example A below.

The next three examples (B-D) are achieved by altering the `border-style` (the middle value in the `border` shorthand).

```css
div {
  /* example B */
  border: 3px double black;
}
div {
  /* example C */
  border: 3px dotted black;
}
div {
  /* example D */
  border: 3px dashed black;
}
```

<div class="glitch-embed-wrap" style="height: 810px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/mica-css-borders?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="mica-css-borders on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

While examples A-D apply the same styles to each side of the element, you can also set a single border, as in examples E and F:

```css
div {
  /* example E */
  border-left: 3px solid black;
}
div {
  /* example F */
  border-top: 3px solid black;
}
```

And, if you wanted to go all out, you could apply unique border styles to each side of your element:

```css
div {
  /* example G */
  border-style: solid;
  border-width: 3px;
  border-top-color: red;
  border-right-color: pink;
  border-bottom-color: lime;
  border-left-color: purple;
}
```

Finally, by using the CSS property `border-radius` you can create rounded borders or even circles:

```css
div {
  /* Example H */
  border-radius: 6px;
}

div, img {
  /* Example I and image */
  border-radius: 50%;
}
```

A `border-radius` value of `50%` creates a circle from any square element. Rectangular elements will appear as ovals, so keep in mind that you may need to crop or reformat an image before this effect works as seen in this demo.

{: .callout }
Note in this example of the image, you can use the either `border` or `border-radius` directly on the `img` element -- no container `div` needed.
