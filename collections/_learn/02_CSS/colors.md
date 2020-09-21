---
topic: Colors
category: CSS
level: [ intro ]
permalink: /:collection/css/:name
code_example: false
quiz: false
issues: false
---

{% assign ip = '/learn/02_CSS/img/' %}


# {{ page.topic }}

Using CSS, you can apply color to text, backgrounds and borders.

{: .callout }
We'll learn more about CSS borders later, so here you'll focus on text and background colors.

## CSS properties related to color
To change or apply a color to the background of a an HTML document or element, you use the property `background-color`. The property `color` is used to do the same, but affects only text.

```css
p {
  background-color: purple;
  color: white;
}
```

As a result of this code, every `p` element would have a purple background and the text would be in white.

## Color values
Color values can be expressed in multiple formats, including color keywords (like the example above), RGB and HSL.

{: .callout }
<span class="emoji">👩🏻‍🎨</span> You may notice that there is no CMYK format for CSS color values. While CMYK is appropriate for print design, where ink is layered to achieve colors using subtractive color mixing, in web design you are creating for screens. Our monitors and phone displays use light to make colors, and this depends upon the additive RGB color mode. If you're interested, you can explore more about the [differences between additive and subtractive colors](http://www.differencebetween.net/science/difference-between-additive-colors-and-subtractive-colors/){:target="_blank"}{% include optional.html %}, but for this course you mainly need to know that RGB is the way to go for screens.

### Keyword values
There are more than [130 valid color keywords](https://www.w3.org/wiki/CSS3/Color/Extended_color_keywords){% include optional.html %}, ranging from `black` to `papayawhip`. These color values are text-based and have no spaces or hyphens in their names.

<div class="glitch-embed-wrap" style="height: 720px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-color-keywords?path=sass/styles.scss&previewSize=100&sidebarCollapsed=true"
    title="css-color-keywords on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

While these color keywords are easy to use when doing practice exercises, they often are limiting when attempting to match brand colors or color palettes of your own devising. In general, it's fine to use `black` or `white` in your stylesheets, but for most other colors you'll want a higher degree of control than color keywords offer.

### RGB values

There are two ways of representing an RGB color in CSS:

<b>Hexadecimal string notation</b> uses a combination of six letters and/or numbers to represent an RGB color. This format is also referred to as a <b>hex code</b> and always begins with a `#` symbol.

While there is a logic that breaks down how the color black becomes `#000000`, it's not really necessary to learn.

In comparison, the <b>RGB functional notation</b> is a much simpler format to understand. This format only uses numbers and maps its values to the color picker you may already be familiar with in programs like Adobe Illustrator. 

{: .text-center }
![Adobe Color Picker with RGB area highlighted.]({{ ip | append: 'adobe-color-picker-rgb.png' }})

To represent this same color in CSS as functional RGB, begin with `rgb` followed by a set of parentheses `()`; inside the parentheses, list the values for red, green and blue, each separated by a comma, like so:

```css
h1 {
  background-color: rgb(168, 255, 0);
}
```

### HSL values
The final way you can represent color in CSS is according to a color's hue, saturation and lightness. This is a readable format that's easy to adapt when adjusting colors for hover effects or creating color palettes.

<span class="emoji">⚠️</span> Unfortunately, the CSS HSL value _does not_ map to the HSB or HSV values displayed in most color pickers:

{: .text-center }
![Adobe Color Picker with HSB area highlighted.]({{ ip | append: 'adobe-color-picker-hsb.png' }})

While the value for the hue is correct, you will need to use a color picker that outputs HSL values or use an online converter, like [ColorDesigner.io](https://colordesigner.io/convert/hsvtohsl){:target="_blank"} or [ConvertAColor.com](https://convertacolor.com/){:target="_blank"} to get the other two values.

HSL values use a similar format to RGB functional notation and begin with `hsl` followed by a set of parentheses `()`; inside the parentheses, list the values for hue, saturation and lightness, each separated by a comma and with the last two values represented as percentages, like so:

```css
h1 {
  background-color: hsl(80, 100%, 50%);
}
```

While it may be more fuss to get to the values for an HSL color, they are very friendly and powerful once you're working in CSS.

<div class="glitch-embed-wrap" style="height: 730px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-hsl?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="css-hsl on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>


## Which value format should you use?

The following table shows the original 16 basic CSS color keywords expressed in hexadecimal, functional RGB and HSL.

<div class="glitch-embed-wrap" style="height: 700px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-color-values?path=sass/styles.scss&previewSize=100&sidebarCollapsed=true"
    title="css-color-values on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

If it's possible to refer to a single color in more than three ways -- how do you know which color format to use?

As stated in the beginning, color keywords are usually too limiting to achieve specific palettes, but it's still fine to use them where helpful (for example, `black` and `white` are easier to remember than `#000000` and `#FFFFFF`).

Hex codes are commonly used because they were available in CSS before the functional RGB and HSL formats, but these newer formats are both easier to understand and offer more flexibility. For these reasons, I would recommend either the functional RGB or HSL formats, but **the most important thing as you're writing CSS is to be consistent with which color value format you use**.

Writing consistent color formats is a gift to your future self. Imagine that, after having written 700 lines of CSS for a project, you want to modify the color palette. If you've used one color format consistently, it's easy enough to search for `rgb(131, 0, 135)` and replace it with the new shade. If you've also used the keyword `purple` and sometimes `#810082`, all you've done is make life harder for yourself because now you must search out additional terms to make sure you change the color in all the places.
