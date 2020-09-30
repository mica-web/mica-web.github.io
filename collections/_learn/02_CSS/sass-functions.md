---
topic: Sass Functions
category: CSS
level: [ advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}
Sass has built-in color functions that let you manipulate one or more colors.

In the following example, a base color (`#AAFF00`) is used to create a variable and then modified to create lightened and darkened versions. The percentage at the end of the lighten and darken functions determines how much lighter/darker the new color is than the base color.

```scss
// Variables
$color-lime: #AAFF00;

// Lime swatch
.base {
  background-color: $color-lime;
}
.lighten {
  background-color: lighten($color-lime, 10%);
}
.darken {
  background-color: darken($color-lime, 10%);
}
```

This results in the following CSS and requires no additional effort on your part to determine these values:

```css
.base {
  background-color: #AAFF00;
}
.lighten {
  background-color: #BBFF33;
}
.darken {
  background-color: #88CC00;
}
```

This demo shows what this looks like in the browser and uses a total of six different base colors (including the `$color-lime` example above).

<div class="glitch-embed-wrap" style="height: 620px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/sass-color-functions-simple?path=sass/styles.scss&previewSize=100&sidebarCollapsed=true"
    title="sass-color-functions-simple on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

This is a helpful strategy when creating colors for hover effects or shadows, for example.

Lighten and darken are just the beginning, however, and Sass has a huge variety of functions to modify colors, which you can see in the following demo. This demo uses a base color (`#AA00FF` to begin with), applies it to the document's background color and then modifies it in a collection of `div`s: darkening, lightening, inverting, etc.

If you want to experiment with modifying this page, [remix this project](https://glitch.com/edit/?utm_content=project_sass-color-functions&utm_source=remix_this&utm_medium=button&utm_campaign=glitchButton#!/remix/sass-color-functions){:target="_blank"} and change the value on line 13. You can use the existing color variables or a totally new color.

<div class="glitch-embed-wrap" style="height: 1260px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/sass-color-functions?path=sass/styles.scss&previewSize=100&sidebarCollapsed=true"
    title="sass-color-functions on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

{: .text-push--top }
[&#x21b5; back to Sass intro]({{% lp | append: 'sass#functions' %}})
