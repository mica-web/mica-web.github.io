---
topic: Floats
category: CSS
level: [ intro, advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}

## Introduction
You've already learned how to place items side-by-side using the CSS [`display` property]({{ lp | append: 'css/display' }}).

In Example 1 below, two `div` elements are styles to look like boxes and use `display: inline-block` to update their styles to make them appear side-by-side.

By default, the paragraph text after the `div`s does not also appear on the same line. The `p` element is a block element and takes up the full width of space allotted to it, regardless of the behavior or width of any `inline-block` elements before or after it.

Even changing the styles on that paragraph to be `inline-block` would **not** force it to be next to the `div`s because the text is so long. You would need to set a fixed width on the `p` element to get this effect -- and _even then_ it wouldn't wrap around the `div`s, it would just appear like another block next to them (see Example 2; if you mouse/hover over the paragraph in this example, its border will display so you can better visualize things).

<div class="glitch-embed-wrap" style="height: 860px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/mica-css-floats-1?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="mica-css-floats-1 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

When you want text to play nicely with other inline elements, CSS like this may not be your best bet. There is a property separate from `display` that will change the layout properties of an element in such a way that text and other elements will _wrap_ around it. This is a common technique in magazine articles, for example.

## Using `float`
To get this effect, you use the `float` property. In Example 1 below, the `div` elements have the following CSS added to them:

```css
div {
  float: right;
}
```

<div class="glitch-embed-wrap" style="height: 720px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/mica-css-floats-2?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="mica-css-floats-2 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

As a result of the `float` property, _both_ `div` elements are side by side and now the text actually wraps around the `div`s.

In Example 2 above, another `div` has been added around the boxes and _that_ `div` is floated to the left with the following CSS:

```css
div {
  float: left;
  text-align: center;
  width: 20%;
  min-width: 152px;
}
```

In this way, `float` allows you to do things with elements that are not possible with other CSS properties (like `display` or `text-align`).

## Impact of floated elements on your layout
It is important to know that `float` makes some significant changes to your page layout and can definitely have unintended consequences.

In Example 1 below, the image is floated to the left and because it is taller than its parent element and the text next to it, the image "escapes" from the parent element (which has a blue background and blue border to make it easy to identify).

<div class="glitch-embed-wrap" style="height: 860px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/mica-css-clearfix?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="mica-css-clearfix on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

This "escape" is only possible because the image is floated and is no longer part of the normal document flow. In order to guard against this, it is necessary to "clear" your floats. There is a separate CSS property named `clear` that is intended for this purpose but is generally inadequate. <span class="emoji">👎🏻</span>

Instead, front end developers rely on a <b>hack</b> known as <b>clearfix</b>; consider it the new and improved version of `clear`.

The code for <b>clearfix</b> looks like this:

```css
/* Corrects the layout around floated elements */
.clearfix::before,
.clearfix::after {
  content: " ";
  display: table;
}
.clearfix::after {
  clear: both;
}
```

{: .callout }
<span class="emoji">🤔</span> It's not critical to understand exactly how this code works at this point; it's more important to understand the effect in the browser.

To use this code, this CSS must be in your stylesheet and the `clearfix` class must be applied to the parent element of the floated element; in this case, that's the `section` element that wraps around the heading, image and paragraphs:

```html
<section class="clearfix">
  <h3>Sunflowers</h3>
  <img
    src="sunflower.png"
    alt="A large sunflower in a field of sunflowers under a bright blue sky."
  />
  <p>Some content here...</p>
</section>
```

{: .callout }
<span class="emoji">💡</span> Remember that you can always investigate the code of any Glitch embeds by clicking "View Source" or remixing them to experiment with the code.

## Review
`float` is awesome and effective -- but it has a very limited use case.

- If you want things to be side-by-side, you should use the `display` property.
- If you want text to wrap around something, you should use `float` _and_ remember that you must use the clearfix hack on the parent element of all floated elements.
- The three values of `float` are:
  - `left` or `right` (demonstrated above)
  - `none` (to cancel out a previously set `float`)
  - <span class="emoji">❌</span> There is **no** `float: center;`

Because floated elements can have such a wacky effect on your layout, it is important to use them in a considerate way and **not** to solve all your layout issues.
