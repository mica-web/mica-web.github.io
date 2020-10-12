---
topic: Animation
category: CSS
level: [ advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}

{: .callout }
**This entire section is optional.** If you are interested in learning the basics of CSS animation, feel free to dive in, but it is not required for this course or any of your projects.


## Basics
Using animation in CSS requires two steps:

1. First, you must apply a set of animation properties or the `animation` shorthand, including a name for your animation.
2. Then, you need to breakdown the animation sequence using CSS keyframes.

Let's look at a very basic example of a CSS animation.

<div class="glitch-embed-wrap" style="height: 260px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-animation-basics-1?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-animation-basics-1 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

The CSS for each step to create this animation is detailed below.

### Step one
```css
div {
  /* The basic styles for the element */
  background-color: #A2F1C1;
  height: 60px;
  /* Animation specific styles */
  animation: slideIn 4s linear infinite;
  transform-origin: left center;
}
```

The `animation` <b>shorthand property</b> here includes:
- the `animation-name` of `slideIn`; this is a custom name that you create
- the `animation-duration` -- in this case, 4 seconds
- the `animation-timing-function` of `linear`
- the `animation-iteration-count` of `infinite`; the default for animations is `1` unless you use this property or set this value in your shorthand

Additionally, since this animation uses CSS transformations, an origin for the transformation is set using the `transform-origin` property.

### Step two
The above code has no effect unless an `@keyframes` rule with a matching name exists. In this case, that code looks like this:

```css
@keyframes slideIn {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}
```

Two important things to note about `keyframes`:

- This code is written **without** a selector because the `slideIn` animation could be used by multiple HTML elements.
- Just like [media queries]({{ lp | append: 'css/media-queries' }}), you want to write valid CSS inside your `keyframes`.

## Accessibility and animations
Some individuals have vestibular disorders and may experience nausea or other signs of physical discomfort when web pages include animations. Users can specify in their operating system/device settings if they prefer to experience things with less/reduced motion and, since you don't want your designs to make someone physically ill, you should always write your CSS to respect those settings.

To do this, you can use a media query and the `prefers-reduced-motion` feature. For the demo above, it looks like this:

```css
@media (prefers-reduced-motion) {
  div {
    animation: none;
  }
}
```

{: .callout }
For roughly the last year, browsers have been supporting this media feature; see [Can I Use](https://caniuse.com/prefers-reduced-motion) for specific details.

## More resources
- Eka's [demo of a basic CSS animation](https://dev.to/ekafyi/blinking-dots-a-quick-look-at-css-animation-31gf)
- Flavio's [CSS Animations Tutorial](https://flaviocopes.com/css-animations/)
- [Animate.css](https://animate.style/) is a CSS library of specific animation styles
  - Note that if you want to use this in your projects, you should follow the instructions for using their CDN
- MDN docs on [using CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
