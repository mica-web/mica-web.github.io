---
topic: Spacing
category: CSS
level: [ intro ]
permalink: /:collection/css/:name
code_example: true
quiz: true
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}

## Understanding the difference between margin and padding

Previously, when describing [block and inline elements]({{ lp | append: 'html/block-inline' }}), I wrote:

> In general, you can think of HTML elements as some type of box around some type of content. 

If you visualize that box, then it's easier to understand the difference between <b>margin</b> and <b>padding</b> in CSS:

- <b>margin</b> affects the space outside of and between HTML elements
- <b>padding</b> affects the space inside an HTML element

<div class="glitch-embed-wrap" style="height: 650px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-spacing-1?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-spacing-1 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

In the second example, `margin` pushes the `div` away from the left side of the browser and the paragraph above and `padding` moves the text inside the `div` away from its edges and makes the whole `div` larger. The CSS to create this affect looks like this:

```css
div {
  margin: 50px;
  padding: 50px;
}
```

## Shorthand variations
Both `margin` and `padding` are <b>shorthand properties</b>.

{: .callout }
If this term sounds familiar, it's because you first heard about it when learning about [styling text with CSS]({{ lp | append: 'css/typography#text-decoration' }}). `text-decoration` is also a shorthand property.

This means that they are a simpler way of combining multiple CSS properties; in the case of `margin`, it allows you to use the following CSS properties with one declaration:

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

So, when you write `margin: 50px` you're applying 50 pixels of margin to each side of an element. If, instead, you wrote `margin-top: 50px` and no other margin rules, only the top of the element would get 50 pixels of margin and the other three sides would get the browser defaults for that element.

The same is true for `padding`; it combines:

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

There are a total of **four ways** to write the shorthand values for `margin` and `padding`. The following examples are going to use `margin`, but the same formats can be used for `padding`.

### Single value
The first you've already seen. This format takes one value (in this case, 10 pixels) and applies it to all sides of the element.

```css
div {
  margin: 10px;
}
```

This is the same as writing out all the individual properties:

```css
div {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
```

### Two values
This format applies the first value to the top and bottom of the element and the second to the sides.

```css
div {
  margin: 5px 10px;
  /* top&bottom left&right */
}
```

This is the same as writing out all the individual properties:

```css
div {
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
}
```

### Three values
Use this format when you want to apply a shared value to the sides (middle value), but a different value to the top (first value) and bottom (last value).

```css
div {
  margin: 10px 20px 30px;
  /* top left&right bottom */
}
```

This is the same as writing out all the individual properties:

```css
div {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 20px;
}
```

### Four values
You can also use the shorthand to apply margins to each side individually:

```css
div {
  margin: 5px 10px 15px 20px;
  /* top right bottom left */
}
```

In this case, the values would be applied starting at the top of the element and then going clockwise. 
This is the same as writing out all the individual properties:

```css
div {
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  margin-left: 20px;
}
```

<!-- CSS Spacing 1 -->
{% include quiz.html
  title="Share What You've Learned"
  quizId="PQWZ9GT"
%}

## Negative values
While negative values are ignored by the `padding` property, they do work and can be useful when applying margins.

<div class="glitch-embed-wrap" style="height: 540px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-spacing-2?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="css-spacing-2 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Here's a real-world example of when and why you might need to apply negative margins:

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-spacing-3?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-spacing-3 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

This is a simplified version of the CSS used in the demo above:

```css
body {
  padding: 24px 36px;
}
section {
  background-color: #A2F1C1;
  margin-right: -36px;
  margin-left: -36px;
  padding: 12px 36px;
}
```
