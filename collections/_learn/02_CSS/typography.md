---
topic: Typography
category: CSS
level: [ intro ]
permalink: /:collection/css/:name
code_example: false
quiz: false
issues: true
---

{% assign lp = '/learn/' %}
{% assign ip = '/learn/02_CSS/img/' %}


# {{ page.topic }}

{: .callout }
This page makes continued use of the Glitch project you remixed as part of [CSS Basics]({{ lp | append: 'css/basics#practicing-css' }}). **You should follow along and experiment with each of the CSS properties described on this page.**

There are two main categories of CSS properties that affect text styles:
- font styles that affect the size and look of the font
- text layout styles that affect the spacing and layout of the text within its containing element

{: .callout }
<span class="emoji">🤔</span> Nothing on this page will teach you how to change the font that text is displayed in. That's totally possible in CSS, but will be covered after you are introduced to some more basic text styling.

## Font styles
The following CSS properties work on almost all text elements (like headings, paragraphs, anchor elements).

### `font-size`
In [CSS Basics]({{ lp | append: 'css/basics#writing-css' }}), `font-size` was one of the first CSS properties you encountered. A `font-size` value is made up of two parts: a number and a unit of measurement.

From print design, you may be used to setting text size in <b>points</b> or <b>picas</b>; while those units _do_ exist in CSS, it makes more sense for web design to use measurements that exist on screens. Given that, to start with, you'll be setting font sizes in <b>pixels</b> (just like the earlier example).

{: .callout }
<span class="emoji">👉🏻</span> It's worth noting here that the size of text in design programs, such as Sketch or the Adobe Suite, does not perfectly match the size of text in web browsers -- even when you use the same unit in each. This is a consistent pain point in web design and, unfortunately, I can only tell you to be aware of it; there's no solid fix.

The default `font-size` in most browsers is 16 pixels for paragraph text, but users can easily override this number. You should definitely keep 16-18 pixels in mind as a baseline for readability (though this is also impacted by screen size, as well as your choice of font, its color contrast and other factors).

Experiment in your Glitch project with setting the `font-size` property on different HTML elements.

{% highlight css %}
h1 {
  font-size: 52px;
}
p {
  font-size: 18px;
}
{% endhighlight %}

{: .callout }
<span class="emoji">⚠️</span> When you write the value for your `font-size`, make sure there's no space between the number and the unit (in this case, `px`). `font-size: 18px;` is correct and `font-size: 18 px;` is invalid.

### `font-style`
This CSS property controls if text is italicized or not. A value of `normal` removes the italics from text, as seen in this example.

{% highlight css %}
p {
  font-style: italic;
}
b {
  font-style: normal;
}
{% endhighlight %}

{: .callout }
<span class="emoji">⚠️</span> Do not set `font-style: normal;` on text that would otherwise _not_ be italicized. So, in the above example, the `font-style` declaration on the `b` element _only_ makes sense because of the earlier rule. If the rule on the `p` element was deleted, then the `font-style` rule on the `b` element could also be deleted, since it would only be reiterating a browser default.

### `font-weight`
This property controls how heavy or light the text is. The value for `font-weight` can be a keyword (like `bold` or `normal`):

{% highlight css %}
h1 {
  font-weight: normal;
}
p {
  font-weight: bold;
}
{% endhighlight %}

Headings (`h1`-`h6`) are set to bold by default, so the `font-weight` rule above is overriding that browser default and not reiterating it (which a `font-weight: bold;` rule on `h1` would be doing).

`font-weight` can also be numeric; the only valid numbers are values of hundreds from 100-900; so, `font-weight: 200;` is valid but `font-weight: 199;` is not.

{: .callout }
<span class="emoji">👉🏻</span> Until you're using web fonts, using keyword values for `font-weight` is usually fine.

### `text-transform`
This property adjusts the capitalization rules for your text; there are four common values:
- <b>`uppercase`</b> transforms your text to ALL CAPS
- <b>`lowercase`</b> transforms your text to lower case
- <b>`capitalize`</b> transforms your text to be Title Case, where the first letter of each word is capitalized
- <b>`none`</b> prevents text transformation and the text will use whatever capitalization exists in the HTML document

{% highlight css %}
h1 {
  text-transform: lowercase;
}
h2 {
  text-transform: uppercase;
}
{% endhighlight %}

### `text-decoration`
This property is mainly used for making changes to the default underline on links, but it does offer some other stylistic effects.

{% highlight css %}
a {
  text-decoration: underline dotted;
}
{% endhighlight %}

`text-decoration` is the first example of a <b>shorthand CSS property</b>; it combines four related CSS properties into a single declaration:
- `text-decoration-color` 
- `text-decoration-line` 
- `text-decoration-style` 
- `text-decoration-thickness`

You can learn more about the `text-decoration` options and these other properties by reading the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration){% include optional.html %}. That page also includes a CSS Demo that allows you to experiment with other `text-decoration` rules.

{: .callout }
<span class="emoji">⚠️</span> It's important to be thoughtful about how you use the `text-decoration: underline;` rule. It's a general user expectation that web links are underlined so removing the underline from links or using the underline for other purposes can create unnecessary user confusion.

## Text layout styles
The following CSS properties affect the layout of text.

### `text-align`
This property sets the alignment of any block-level element. It uses the following keyword values: `center`, `right`, `left`, `justify`.

{% highlight css %}
h1 {
  text-align: center;
}
p {
  text-align: justify;
}
{% endhighlight %}

{: .callout }
<span class="emoji">⚠️</span> Note that the specification of block-level elements in this description. Setting `text-align` on an inline element, like `b` or `a`, has no effect if the layout of that element has not been changed from its default.

### `line-height`
This property controls the height of a line of text and can be used to configure the spacing between lines. The value of `line-height` should be a number and will work even without a measurement, like so:

{% highlight css %}
p {
  line-height: 1.5;
}
{% endhighlight %}

{: .callout }
<span class="emoji">👉🏻</span> When the value of `line-height` is unitless, like in the example above, it is based on the element's font size. So, if the `font-size` value of that `p` element is 18 pixels, the calculated `line-height` value would be 27 pixels (18 &times; 1.5 = 27).

**Because unitless `line-height` values offer relative sizing, they are usually preferred.** When you use `line-height` values with units, it's possible for them to get out of sync with your `font-size` declarations and result in unreadable text:

<div class="glitch-embed-wrap" style="height: 260px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-lineheight?path=style.css&previewSize=100&sidebarCollapsed=true"
    title="css-lineheight on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

The above example uses this CSS:

{% highlight css %}
p {
  font-size: 22px;
  line-height: 12px;
}
{% endhighlight %}

Because the `line-height` value is set in pixels and less than the `font-size` value, the text overlaps.

### `letter-spacing`
This property controls the horizontal space between letters. The value of `letter-spacing` should be a number with a unit and negative numbers are valid.

{% highlight css %}
h1 {
  letter-spacing: -1px;
}
h2 {
  letter-spacing: 1px;
}
{% endhighlight %}

{: .callout }
<span class="emoji">👉🏻</span> Note that it is _much less_ refined than the kerning offered in software for print design. A [`font-kerning` property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning){% include optional.html %} also exists, but only applies kerning info stored in a font file and does not allow you to further modify that.

### `word-spacing`
As with `letter-spacing`, but this property allows you to configure the spacing between words.

{% highlight css %}
h1 {
  word-spacing: 20px;
}
{% endhighlight %}

## Glitch example

This copy of the [CSS Basics](https://glitch.com/edit/#!/mica-css-basics){:target="_blank"} project shows the browser output from all the CSS changes documented above; click the <b>View Source</b> button to see the changes to the `style.css` file.

<div class="glitch-embed-wrap" style="height: 760px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/mica-css-basics-example?path=style.css&previewSize=100&sidebarCollapsed=true"
    title="mica-css-basics-example on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Don't stress if your remix doesn't look like this -- in fact, I hope it doesn't because you experimented with other values for these properties. <span class="emoji">✨👩🏻‍🎨</span>

You should, however, look over my `style.css` file here and review yours; note that I've combined all the rules for the `p` element in one ruleset. That's important and helpful, as it can lead to confusion if you have multiple copies of the same selector in your stylesheet.

## Learn more
If you want more context or examples for the CSS properties you've learned so far, check out the following links:

- [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size){:target="_blank"}{% include optional.html %}
- [`font-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style){:target="_blank"}{% include optional.html %}
- [`font-weight`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight){:target="_blank"}{% include optional.html %}
- [`text-transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform){:target="_blank"}{% include optional.html %}
- [`text-decoration`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration){:target="_blank"}{% include optional.html %}
- [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align){:target="_blank"}{% include optional.html %}
- [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height){:target="_blank"}{% include optional.html %}
- [`letter-spacing`](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing){:target="_blank"}{% include optional.html %}
- [`word-spacing`](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing){:target="_blank"}{% include optional.html %}
