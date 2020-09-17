---
topic: Best Practices
category: CSS
level: [ intro, advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

# {{ page.topic }}
The following list represents some best practices to use when writing your CSS. The examples of things _not_ to do, in some cases, may even be valid CSS, but still are not ideal.

* TOC
{:toc}

## Write your CSS all lowercase
<span class="emoji">😺</span> Do this
```css
div {
  font-weight: bold;
}
```
<span class="emoji">❌</span> Not this
```css
DIV {
  font-weight: BOLD;
}
```

{: .callout }
An exception to this is when you are referring to font names; writing `font-family: 'Open Sans', sans-serif;` in your CSS is totally okay. <span class="emoji">👍🏻</span>

## End each CSS declaration with a semicolon
<span class="emoji">😺</span> Do this
```css
p {
  font-style: italic;
  font-weight: bold;
}
```
<span class="emoji">❌</span> Not this
```css
p {
  font-style: italic
  font-weight: bold
}
```

{: .callout }
Technically, leaving off the semicolon on your _last_ declaration is valid CSS, but it is not worth the headache of remembering to add it back in when you add new declarations.

## Order your declarations alphabetically by property name
<span class="emoji">😺</span> Do this
```css
p {
  color: thistle;
  font-style: italic;
  font-weight: bold;
  max-width: 500px;
}
```
<span class="emoji">❌</span> Not this
```css
p {
  max-width: 500px;
  color: thistle;
  font-weight: bold;
  font-style: italic;
}
```

This seems like a lot of extra fuss as you start writing CSS, but it saves you time in debugging because you are less likely to have a property duplicated in the same ruleset if you follow this practice.

## Declare `box-sizing` in all your stylesheets
<span class="emoji">😺</span> Do this at the top of every CSS file
```css
* {
  box-sizing: border-box;
}
```

The browser default for `box-sizing` is `content-box`, and it is generally rubbish and operates contrary to your expectations.

{: .callout }
See [this explanation of `content-box` and `border-box`](https://www.internetingishard.com/html-and-css/css-box-model/#content-boxes-and-border-boxes){:target="_blank"} for more detail.

## Don't reiterate browser defaults
<span class="emoji">😺</span> Do this
```css
h1 {
  font-weight: normal;
}
a {
  text-decoration: dotted underline;
}
```

<span class="emoji">❌</span> Not this
```css
h1 {
  font-weight: bold;
}
a {
  text-decoration: underline;
}
```

The code in the second example only restates the [browser defaults]({% link _learn/02_CSS/browser-defaults.md %}); you've essentially written six lines of useless CSS.


## Don't write CSS in such a way that you're immediately overwriting it
<span class="emoji">😺</span> Do this
```css
li {
  display: inline-block;
}
li + li {
  margin-left: 14px;
}
```

<span class="emoji">❌</span> Not this
```css
li {
  display: inline-block;
  margin-left: 14px;
}
li:first-of-type {
  margin-left: 0;
}
```

In the first example, `li + li` uses the [sibling selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) (the plus `+` sign) to select every `li` that is _immediately preceded_ by an `li` and adds a margin to space them out.

The second example adds the margin to _all_ `li` elements only to then remove it from the very first one (using the [`:first-of-type` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type)).

## Wrap all floated elements in another element with the `clearfix` class applied
<span class="emoji">😺</span> Do this
```html
<div class="clearfix">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```
```css
/* Clearfix utility class */
.clearfix::before, .clearfix::after {
  content: '';
  display: table;
}
.clearfix::after {
  clear: both;
}

/* Your floated element */
.box {
  float: left;
}
```

<span class="emoji">❌</span> Not this
```html
<!-- No wrapping element used :( -->
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
```
```css
/* Your floated element */
.box {
  float: left;
}
```

Not that it's not super crucial to fully understand the code for the clearfix above, but it is helpful to understand the problem it solves. See [this example](https://mica-css-floats.glitch.me/) for what it can look like when you don't clear your floated elements.

## Use color values logically and consistently
<span class="emoji">😺</span> Do this
```css
p {
  background-color: hsla(62, 81%, 70%, 0.25);
  border: 3px solid hsl(62, 81%, 70%);
  color: white;
}
```

<span class="emoji">❌</span> Not this
```css
p {
  background-color: hsla(62, 81%, 70%, 0.25);
  border: 3px solid #ecf26c;
  color: rgb(255, 255, 255);
}
```

In the first example, the CSS keyword is used for white and otherwise HSL(a) colors are used; this makes it clear that the background and border colors have a relationship.

In the second example, that relationship is no longer obvious because the border color is expressed as a hex value. Additionally, the text color is expressed as an rgb value, which would be fine if the other colors in this example were _also_ rgb(a), but instead it is just random and chaotic. <span class="emoji">😵</span>

{: .callout }
This example does _not_ mean that using HSL(a) values is a best practice, though I do find them to be easier to understand and modify than the other color values. It's fine to use hex values if you're not messing around with opacity of colors and either RGB(a) or HSL(a) if you are.

{: .callout }
In general, CSS keywords should be avoided except for `black` or `white`. You'll see that I use them often in demos because they're simple to use and easy to understand, but they are very limiting to use in real world projects.

## Avoid using units on measurements of zero
<span class="emoji">😺</span> Do this
```css
div {
  margin: 0;
  padding: 0;
  width: 0;
}
```

<span class="emoji">❌</span> Not this
```css
div {
  margin: 0px;
  padding: 0px;
  width: 0px;
}
```

There is no logical difference between `0` and `0px` or `0%`, so you can just skip using units on zero measurements.

<!-- - Selectors are either bare elements or classnames (IDs are avoided)
- Classnames are helpful and written kebab-style (i.e., using hyphens)
- Units are used logically and consistently

## Rule
<span class="emoji">😺</span> Do this
```css
```

<span class="emoji">❌</span> Not this
```css
``` -->
