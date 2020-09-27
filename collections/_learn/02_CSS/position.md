---
topic: Position
category: CSS
level: [ intro, advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

# {{ page.topic }}

Position refers to how an element is laid out in an HTML document. The CSS  property `position` works in relationship the following CSS properties to determine an element's final position:

- `top`
- `right`
- `bottom`
- `left`
- `z-index`

There are five valid values for `position` and they are described and demonstrated below.

## Default value
The default value of the `position` property is `static`.

```css
div {
  position: static;
}
```

Since this is the browser default for all HTML elements, you would only write this CSS if you needed to override a previous custom setting.

Elements with static positioning **ignore** the effects of `top`, `right`, `bottom`, `left` and `z-index`. This means that, by default, these  properties have **no effect** when used on most HTML elements _unless_ their `position` value has been changed. As a result, it would be meaningless to write the following CSS:

<span class="emoji">❌</span> Don't do this
```css
div {
  top: 30px;
  z-index: 10;
}
```

{: .callout }
Any element that has a `position` value _other_ than `static` is referred to as a <b>positioned element</b>.

## Relative positioning
Using relative positioning allows you to position an element **relative to its original or starting position**. This is the simplest form of positioning to understand and does not effect the position of other elements.

<div class="glitch-embed-wrap" style="height: 380px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-position-1?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-position-1 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

The yellow box above has the following CSS applied to it, which causes it to be 20 pixels lower and to the right than the other boxes:

```css
div {
  position: relative;
  top: 20px;
  left: 20px;
}
```

You can compare the original position by clicking the toggle button in the Glitch demo.

{: .callout }
<span class="emoji">💡</span> You can remix any of the embedded Glitch projects if you want to update or experiment with the CSS.

## Absolute positioning
Using absolute positioning is far more dramatic than relative positioning because it removes an element from the normal flow of a document. Additionally, the space that element would take up is removed from the document.

<div class="glitch-embed-wrap" style="height: 570px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-position-2?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-position-2 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

The yellow box above has the following CSS applied to it:

```css
div {
  position: absolute;
  top: 0;
  right: 0;
}
```

In the first row, this CSS causes the box to be positioned in the top right corner of the HTML document because **none** of its parent elements are positioned (that is, they are the default of `position: static`).

In the second row, the `section` element (with the grey background) wraps around all the boxes and is itself a positioned element. It has the CSS `position: relative` added to it, and this causes any absolutely positioned children to be positioned relative to it.

Using the toggle button in this demo, you can also see how the space taken up by the box is lost when it is positioned absolutely. In both rows, the remaining green boxes are positioned as if the absolutely positioned box doesn't exist at all.

{: .callout }
<span class="emoji">🤔</span> Did you notice the little bit of white space on the right side of the absolutely positioned box? This is my stylesheet adds 12 pixels of margin to the left and right of each box. Those styles carry through, even when the element is absolutely positioned. There is no top margin on the box, so it appears flush with the `body` or `section` element it is positioned relative to.

## Fixed positioning

Fixed elements are positioned relative to the <b>viewport</b>, not the document, and do not scroll with the document.

{: .callout }
<b>Viewport</b> is used to describe the area of an HTML document that is currently visible. Take this page as an example: it has a lot of content and examples, so it requires scrolling to see everything. The space that you're currently able to see is the viewport.

<div class="glitch-embed-wrap" style="height: 600px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-position-3?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-position-3 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

In this example, the yellow box has the following CSS applied to it:

```css
div {
  position: fixed;
  bottom: 12px;
}
```

This takes the box out of the normal document flow and locks it in at 12 pixels from the bottom of the viewport.

If you've ever encountered an ad or video that stubbornly sticks to your web browser, even when you scroll, that element was likely created using `position: fixed`.

Fixed and absolutely positioned elements have a lot in common; both are:

- removed from the default layout
- leave no space behind in their original position
- positioned relative to another element

## Sticky positioning
Sticky elements change their behavior based on a user's scrolling behavior. They start out acting as if relatively positioned and then act more like a fixed element as its parent element leaves the viewport.

Scroll inside the following Glitch window to see a demonstration of this behavior:

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-position-4?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-position-4 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

In this example, the yellow box has the following CSS applied:

```css
div {
  position: sticky;
  top: 0;
}
```

As the containing `section` element (with the grey background) moves out of the viewport, the yellow box locks in at the top of the viewport.

## Layering elements
Positioned elements, in addition to respecting values of `top`, `right`, `bottom` and `left`, also can be layered, much like layers in a PhotoShop file. This is done via a property named `z-index`.

This property uses number values where higher/larger numbers get stacked on top of elements with lower or no numbers.


<div class="glitch-embed-wrap" style="height: 570px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-layers?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-layers on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Clicking the "make relative" button sets all the boxes to be `position: relative` and updates their `left` values to force them to overlap. By default, they stack so that the last element in the HTML is on top (so, in this case, the third box covers the second box).

The `z-index` buttons add a `z-index` value of `2` to the box of your choice, like so:

```css
div {
  z-index: 2;
}
```

If you reset this demo and then press "make relative" followed by "third box," you'll see that adding a `z-index` value to the final box doesn't initially do anything; it's stacked on top by default.

If you remix [this project](https://glitch.com/edit/#!/css-layers-demo){:target="_blank"}, you can experiment with using different `z-index` values on these boxes.

## Some final thoughts
CSS positioning is very powerful and has many uses, but it is also often over used by beginning developers. Keep the following in mind:

- If you are looking to create space between elements, use `margin` or `padding`, as these achieve consistent results without changing the default browser position of an element.
- Most layouts can be achieved without taking items out of the document flow (`absolute`, `fixed`, `sticky` positioning) or by only using those effects on a few elements. If you find yourself writing CSS where multiple elements are positioned absolutely, you're probably creating a layout that will require far too much code, be difficult to maintain and/or only work at very specific sizes.
- If and when you do absolutely position an element, remember to consider which element it should be positioned relative to and to make sure that element is `position: relative`.

This example shows how overusing the `position` property can break your layout. When you click the "make absolute" button, all the boxes are absolutely positioned. As before, the first row is positioned relative to the entire HTML document and the second is relative to the parent `section` element.

<div class="glitch-embed-wrap" style="height: 600px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-position-2b?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-position-2b on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

A couple of not great things happen here:

- Once all the elements are absolutely positioned, the `section` elements act as though they have no content -- because the elements within them have been removed from the normal document flow. This is why you no longer see the grey background and only the border on the `section` elements remains visible.
- All of the boxes stack up on themselves because they have the same `top` and `right` values. For a demo, this isn't tragic, but if those `div` elements contained content important to your web page, this would be very frustrating for your site's users.

Similarly, it's possible for an element with sticky or fixed positioning to cover up other content and make it difficult or impossible for users to complete actions on your site.

None of this means you can't or shouldn't absolutely position elements, but you should think through the potential consequences and not overuse these properties in your layout.
