---
topic: Background images
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
While you have already learned how to add [inline images]({{ lp | append: 'html/images' }}), it is also possible to apply an image as the background of an HTML element.

The CSS property used for this purpose is `background-image` and it accepts a value of a filename or link wrapped in `url()`:

```css
header {
  background-image: url("avocado.png");
}
```

This would result in the following in your web browser:

<div class="glitch-embed-wrap" style="height: 300px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-background-image-1?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-background-image-1 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

{: .callout }
<span class="emoji">💡</span> This example works because the `header` element has text and an `h1` inside of it. **If you put a background image on an otherwise empty `div`**, you will need to also use additional CSS (like `padding` or `height`) to create space within the `div` for the background image to show up.

## Further customization
In addition to setting an image via `background-image`, you also need to determine how this image should be positioned and behave within the element.

Firstly, do you want the image to repeat, like a background pattern? If so, you're in luck because that is the **default behavior** of all background images.

However, if you **don't** want that, you will also need to use the following CSS:

```css
header {
  background-repeat: no-repeat;
}
```

The `background-size` property also affects how your image will fill the element it is applied to. By default, the image does not resize or scale to its container, but may be cut off or cropped by it. For example, in the demo above, the `header` element is roughly 160 pixels tall, but the image is 440 pixels tall, so you do not see the whole image in the demo.

In addition to this default behavior, you can also scale a background image in two helpful ways:

- `contain` -- This will scale the image as large as possible _without_ cropping or stretching it.
- `cover` -- This will scale the image as large as possible and allow for the image to be cropped.

Finally, you can use a combination of `background-position-x` to alter the starting position of a background image in the horizontal direction, `background-position-y` to do the same vertically or the `background-position` <b>shorthand</b> to do both.

The following interactive allows you to modify the background CSS properties on a `div` to see the effects:

<div class="glitch-embed-wrap" style="height: 800px; width: 100%; min-width: 940px;">
   <iframe
    src="https://glitch.com/embed/#!/embed/css-bkgd-img-interactive?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-bkgd-img-interactive on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

## Important considerations
<span class="emoji">⚠️</span> 
Unlike inline images in your HTML which have [`alt` text]({{ lp | append: 'html/images#writing-good-alt-text' }}){% include optional.html %} to provide screen reader users with details about your images (because you add `alt` text to all relevant images, right?), background images have no such built-in feature. Which means **if an image is meaningful and important to the web content, it should be an inline image** (or be described using other means to those who use screen readers). CSS background image is appropriate for decorative images which do not provide special information or meaning.

If using background images, take the time to experiment with what your design looks like without them and consider if any significant information is being lost.

<div class="glitch-embed-wrap" style="height: 540px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/background-image-a11y?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="background-image-a11y on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

## More detail
While the examples and demo above use keyword values for each of the properties, it is also possible to use more specific values (including pixel values and percentages) for both `background-size` and `background-position`.

{: .callout }
<span class="emoji">👉🏻</span> I recommend sticking with the keyword values until you clearly understand how these properties work.

You can learn more about each of these properties by exploring the MDN docs:

- [`background-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image){% include optional.html %}
- [`background-repeat`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat){% include optional.html %}
- [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size){% include optional.html %}
- [`background-position-x`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-x){% include optional.html %}
- [`background-position-y`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-y){% include optional.html %}
- [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position){% include optional.html %}

