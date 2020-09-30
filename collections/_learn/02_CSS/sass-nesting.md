---
topic: Nesting in Sass
category: CSS
level: [ advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}
You're already familiar with the concept of <b>nesting</b> from writing HTML. When you write a list in HTML, the `li` element is _nested_ inside of another HTML element (either `ul` or `ol`):

```html
<ul> <!-- parent element -->
  <li>List item</li> <!-- nested child element -->
</ul>
```

With Sass, you can do something similar with selectors and certain CSS properties.

## Nesting selectors
Nesting selectors in Sass has the same logic as the HTML above. The following is valid Sass:

```scss
ul {
  li {
    background-color: silver;
  }
}
```

When compiled to CSS, the resulting code will look like this:

```css
ul li {
  background-color: silver;
}
```

This is helpful, as it lets you write less code, but it definitely can be taken to an extreme. **It is _not_ necessary or helpful for your Sass to mirror your exact HTML structure.**

For example, if you had the following HTML:

```html
<header class="container site-header">
  <a href="#" class="site-name">Site name</a>
</header>
<nav class="container site-nav">
  <ul>
    <li><a href="#">About</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

And you wanted to modify the `text-decoration` property on the `a` element inside that list, you should _not_ do this:

<span class="emoji">❌</span> Don't do this
```scss
nav.site-nav {
  ul {
    li {
      a {
        text-decoration: none;
      }
    }
  }
}
```
Writing your Sass like that would result in the following CSS:

```css
nav.site-nav ul li a {
  text-decoration: none;
}
```

This is an _overly_ specific selector, which was warned against in the reading you did on [the cascade in CSS]({{ lp | append: 'css/cascade#selectors-have-specificity' }}).

{: .callout }
Since the Sass you write results in CSS, the same rules and best practices should still be kept in mind.

Instead, write your Sass like so:

```scss
.site-nav {
  a {
    text-decoration: none;
  }
}
```

Which will result in this much more reasonable selector in your CSS: `.site-nav a`

{: .text-center.text-push--top }
![](https://media.giphy.com/media/aImJnc9F8Omzu/giphy.gif)

In the movie Inception, there's a stated rule about how deep into layered dreams is safe to go...and you should have similar guidelines for your Sass.

When nesting, stick to 2 layers, 3 at the max. Otherwise, things get unweildy.

{: .embed-wrapper }
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KgqHKk-yriI?start=57" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

OK, maybe a _slight_ exaggeration, but [the rule](http://thesassway.com/beginner/the-inception-rule){% include optional.html %} still stands. <span class="emoji">😹</span>

## Nesting properties
In addition to selectors, you can also nest certain CSS properties. If properties share a <b>prefix</b>, they can be nested. For example, `font-size` and `font-weight` share the same prefix and can be nested like so:

```scss
p {
  font: {
    size: 24px;
    weight: bold;
  }
}
```

This would compile to the following CSS:

```css
p {
  font-size: 24px;
  font-weight: bold;
}
```

You can do the same thing with properties that begin with:
- `margin-`
- `padding-`
- `text-`
- and many others.

Like nesting selectors, this can save you time typing and keep your properties tightly organized.

## Parent selector
In Sass, the ampersand (`&`) is called the <b>parent selector</b> and can be used when nesting your code to reference the outer selector.

A demonstration using the parent selector with pseudoclasses will help make this clearer; if you write the following Sass:

```scss
a {
  color: orange;
  &:hover, &:focus {
    color: red;
  }
}
```

It will result in the following CSS:

```css
a {
  color: orange;
}
a:hover, a:focus {
  color: red;
}
```

Here, you can see that the ampersand gets replaced by the `a` element, completing the hover and focus effect styles on the link.

Like other nesting rules, the parent selector is powerful, but can get convoluted. Using it for hover and focus effects is recommended because it allows you to nest those effects within the parent selector, but you don't have to invent additional clever ways of using this, especially as you're starting out with Sass.

{: .text-center }
![](https://media.giphy.com/media/xTiN0pn9UrktJMnThu/giphy.gif)

## Nesting demonstration

This stylesheet refactors the code from the lessons on [organizing your CSS]({{ lp | append: 'css/organization' }}) and [Sass variables]({{ lp | append: 'css/sass-variables' }}). Taking just the header and navigation elements styles, I've updated them to use Sass nesting. I've commented out the original CSS so you can still see what and how I modified the code. Look for changes specifically starting on line 58:

<div class="glitch-embed-wrap" style="height: 600px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/sass-nesting?path=sass/styles.scss&previewSize=0&sidebarCollapsed=true"
    title="sass-nesting on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

This refactor includes examples of each type of nesting:
- nested selectors (line 141)
- nested properties (line 178)
- nested parent selector (line 157)

{: .text-push--top }
[&#x21b5; back to Sass intro]({{ lp | append: 'sass#nesting' }})
