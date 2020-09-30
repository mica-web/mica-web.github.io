---
topic: Intro to Sass
category: CSS
level: [ advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}

Sass is a stylesheet language that is informed by the CSS you already know how to write and is compiled into CSS for use in your projects and for browsers to interpret.

{: .callout }
<b>Compiled</b> is just a tech way of saying converted. So, in this case, your Sass file is converted into a CSS file.

Writing Sass gives you access to a wide variety of features and benefits that are not possible writing standard CSS. The tagline on the [Sass homepage](https://sass-lang.com){% include optional.html %} is "CSS with superpowers" and that's exactly what Sass delivers. <span class="emoji">💥</span>

{: .text-center }
![A young girl has a lotta sass and the other members of her dance troupe cannot keep up.](https://media.giphy.com/media/sTagKs58YUj1S/giphy.gif)

## Superpowers
What are some specific superpowers you gain by writing Sass?

### Variables
Using Sass, you can create <b>variables</b> to use throughout your stylesheets.

{: .callout }
Variables are a common feature in most programming languages (though they may _look_ different from language to language) and help you writer simpler, more consistent code.

{: .text-push--bottom }
<span class="emoji">👉🏻</span> [Learn how to create and use variables]({{ lp | append: 'css/sass-variables' }})

### Functions
Sass includes several built-in functions for modifying colors, including lightening, darkening, mixing, inverting.

{: .text-push--bottom }
<span class="emoji">👉🏻</span> [Explore Sass functions]({{ lp | append: 'css/sass-functions' }})

### Nesting
Writing Sass allows you to write less code, since you can nest your selectors inside of each other.

{: .text-push--bottom }
<span class="emoji">👉🏻</span> [Learn how to nest your selectors]({{ lp | append: 'css/sass-nesting' }})

## Syntax
Sass has two different syntaxes -- two different ways of writing your Sass -- and they are differentiated by their file extensions:

- `example.scss` -- This looks _almost_ exactly like CSS and, in fact, any existing CSS can be imported into a `.scss` file and just work. <span class="emoji">🎉</span>

- `example.sass` -- This was the original syntax and doesn't look much like the CSS you're used to, since it doesn't use curly brackets (`{}`) or semicolons (`;`). This syntax has strict rules about whitespace and indentation.

**All of the Sass shared as examples in this class will use the `.scss` syntax, and this is also the syntax you should use for your projects.**

{: .callout }
Even though we're using just the one syntax, it's important to know that the other one exists when you're looking at other folks' Sass examples. You cannot import a `.sass` example into your `.scss` file and have it work.

### Sass comments
There are also two ways of writing comments in Sass. If you write standard CSS comments, they will appear as expected in your compiled CSS file. Alternately, you can write Sass comments that will _not_ be compiled. Here's an example of both comment types in a Sass file:

```scss
/* This is a typical CSS comment you're used to */

// This is a new Sass-style comment
```

And this is how it would output as CSS:

```css
/* This is a typical CSS comment you're used to */
```

The second style of comment would _not_ appear in your final CSS document, only in the Sass files.

In general, it's fine to use either style of comments. Using CSS-style comments **will** result in a larger CSS file, but it is unlikely that you will be writing so many comments for this to have a measurable impact.

## Preprocessors
As noted at the start of this page, Sass _isn't_ CSS, but your Sass file gets compiled into CSS for use in your projects. This makes Sass an extension of CSS and this type of extension is known as a <b>preprocessor</b>.

The processing of Sass into CSS will happen automatically with the [Sass project template](https://glitch.com/~mica-sass-starter) you'll be remixing on Glitch, but it's worth noting that this is hiding away some of the complexity of using Sass.

{: .callout }
The following is **not needed** for your projects this semester, but is provided as additional context if you want to use Sass in other, future projects.

If you want to use Sass on a project that is _not_ using Glitch, you'll have to do some additional reading about [installing and using Sass](https://sass-lang.com/install){% include optional.html %}. You can do this via the command line or by using an application ([Prepros](https://prepros.io/){% include optional.html %} works on all operating systems and is one I used in the past).
