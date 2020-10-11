---
topic: Transition
category: CSS
level: [ intro, advanced ]
permalink: /:collection/css/:name
code_example: false
quiz: false
issues: true
---

# {{ page.topic }}

CSS transition properties control the transition period between two states and are commonly used to improve hover states on elements.

## Basics
`transition` is a CSS <b>shorthand property</b> and, in its simplest form, lets you set which CSS properties will be affected by the transition (`transition-property`) and how long the transition should last (`transition-duration`).

In the example below, Example 2 has the following CSS applied:

```css
.box {
  transition: all 1s;
}
.box:hover {
  background-color: #F6F930;
  height: 90px;
  width: 90px;
}
```

The second ruleset outlines what should change when the element (in this case, a `div` with the class name "box") is hovered on. The first ruleset says that **all** of those changes should transition and the transition should last for one second.

If you hover over the boxes in the demo below, you can see the difference with and without CSS transitions:

<div id="demo" class="glitch-embed-wrap" style="height: 740px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-transition-1?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-transition-1 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Example 3 swaps out the `all` keyword and replaces it with a specific CSS property: `background-color`. In that example, _only_ the `background-color` value transitions; the `height` and `width` behaves normally, resulting in the box size jumping again.

It's also possible to target multiple CSS properties with different transitions:

```
.box {
  transition: background-color 3s, height 1s, width 1s;
}
```

This CSS would cause the box to transition in size (`height`, `width`) like Example 2, but the duration of the color change would be three times as long.

{: .callout }
<span class="emoji">⏲️</span> 
You can provide `transition-duration` values in seconds, as above, or milliseconds (`1000ms`).

You can explore the effect of `transition-duration` by clicking the <b>Duration</b> link in the [demo above](#demo).

## Timings
The `transition` shorthand can _also_ modify the style or format of the transition. In the examples above, all the transitions used the default of `ease`, but other transition formats are also available, such as:
- `ease-in`
- `ease-out`
- `ease-in-out`
- `linear`

You can see examples of each of these by clicking the <b>Timings</b> link in the [demo above](#demo).

## Delay
Finally, you can also add `transition-delay` to your `transition` shorthand to determine when should transition start _relative to_ the trigger (which, in all examples so far has been hovering). The default for this property is zero.

You can see examples of the effect of `transition-delay` by clicking the <b>Delay</b> link in the [demo above](#demo).

## `transition` shorthand
As noted initially, this shorthand, in its simplest form, combines the `transition-property` and `transition-duration` and looks like this:

```css
.box {
  transition: color 1s;
}
```

If you also want to specify the `transition-timing-function` and/or `transition-delay`, your CSS would look like this:


```css
.box {
  transition: color 300ms ease-in 1s;
}
```

Let's break that down, bit by bit; the order of properties in the shorthand is as follows:

1. `transition-property` -- required
1. `transition-duration` -- required
1. `transition-timing-function` -- this property is optional
1. `transition-delay` -- this property is optional

Put another way, you could get the same effect by writing this:

```css
.box {
  transition-property: color;
  transition-duration: 300ms;
  transition-timining-function: ease-in;
  transition-delay: 1s;
}
```

## Writing transitions
First off, use the shorthand property if it's helpful to you or feel free to use the individual properties. Both are valid!

Also, if you are copying or using someone else's code as a starting point for your transitions, you may run into some properties with <b>vendor prefixes</b> that look like this:

```css
.box {
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
}
```

This is an **outdated** way of writing CSS transitions and is no longer necessary in [modern browsers](https://caniuse.com/css-transitions){% include optional.html %}. You can and should delete any transition rules with browser prefixes (`-webkit-`, `-moz-`, `-o-`) and just use the standard CSS properties.

## Debugging transitions
Transitions _only work_ if you have a state change (like hover) and have applied CSS to that state. `transition: background-color 1s;` has no effect if the `background-color` value does not change.

Additionally, **not all CSS properties and values can be animated.** MDN provides a [list of animatable properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties){% include optional.html %} which may help you out if your transitions are not working as expected.

<!-- CSS Transition 1 -->
{% include quiz.html
  title="Share What You've Learned"
  quizId="KWNGQ3Z"
%}

## Further resources
- [`transition` shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition){% include optional.html %}
- [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property){% include optional.html %}
- [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration){% include optional.html %}
- [`transition-timining-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function){% include optional.html %}
- [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay){% include optional.html %}
