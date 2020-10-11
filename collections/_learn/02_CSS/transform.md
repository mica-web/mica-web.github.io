---
topic: Transform
category: CSS
level: [ advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}

CSS transformations allow you to rotate, scale, skew, or translate an element.

Experiment with MDN's CSS `transform` demo to see some of these effects:

<iframe class="interactive" src="https://interactive-examples.mdn.mozilla.net/pages/css/transform.html" title="MDN Web Docs Interactive Example" width="100%" height="390" frameborder="0"></iframe>

{: .callout }
<span class="emoji">💡</span> CSS transformations work great alongside the [`transition` properties]({{ lp | append: 'css/transition' }}) you've already learned about, since they make the transformations smoother. The following demos will make use of `transform` and `transition` together.

While there are obviously a world of possibilities here, I want to focus on a handful of common use cases.

* TOC
{:toc}

## Create a speech bubble
<div class="glitch-embed-wrap" style="height: 520px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-transform-rotate-1?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-transform-rotate-1 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

<span class="emoji">💡</span> You can also use `rotate()` to rotate an element on hover.

## "Flip" a card
<div class="glitch-embed-wrap" style="height: 620px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-transform-rotate-2?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-transform-rotate-2 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

## Reveal more information
<div class="glitch-embed-wrap" style="height: 580px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-transform-translatey-1?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-transform-translatey-1 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

<span class="emoji">💡</span> You can also use `translateY()` to make it look like a button is bouncing when a user hovers over it.

## Debugging transformations
Not all elements can be affected by CSS transformations. In general, inline elements (or those with `display: inline` applied to them), will not be affected by CSS transformations.


## Learn more
- MDN's [description of the transform functions](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function){% include optional.html %}
- MDN's [tutorial on CSS `transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms){% include optional.html %}
- [Intro to CSS 3D transforms](https://3dtransforms.desandro.com/){% include optional.html %}
