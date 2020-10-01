---
topic: Dimensions
category: CSS
level: [ intro ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

# {{ page.topic }}

So far, you've learned about block elements that take up the full width of the browser window and inline elements that are exactly the width of their content. CSS gives you the option to modify both the height and width of HTML elements.

You can modify the size of an element using the `height` and `width` properties:

```css
div {
  height: 200px;
  width: 200px;
}
```

This CSS would result in a square `div`, like you see  in the first example here:

<div class="glitch-embed-wrap" style="height: 630px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-dimensions-1?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="css-dimensions-1 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Values for `height` and `width` can also be set in percents, like so:
```css
div {
  height: 50%;
  width: 50%;
}
```

As you can see in the second example above, the `height` property does not work as expected when set as a percentage. This is because the percentage value is calculated based on a <b>parent element</b> -- and if that doesn't have a specified height, the height of the `div` reverts back to its default behavior.

{: .callout }
The <b>parent element</b> is the element wraps around the HTML element you're targeting. For a link (`a`) inside a paragraph (`p`), the `p` is the parent of the `a` element. The parent can even be the same type of HTML element, like in the case of nested `div`s.

Example three below shows the effect of `height: 50%` when the parent has a set height.

<div class="glitch-embed-wrap" style="height: 920px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-dimensions-2?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-dimensions-2 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Finally, while I've been saying that a `div` (or other block element) takes up the width of the browser by default, it's also true that block elements can be constrained by their parent elements, as in example four above.
