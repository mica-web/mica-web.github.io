---
topic: CSS Basics
category: CSS
level: [ intro, advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: true
issues: true
---

{% assign lp = '/learn/' %}
{% assign ip = '/learn/02_css/img/' %}


# {{ page.topic }}

<b>CSS</b> stands for <b>Cascading StyleSheets</b> and is used to modify the appearance of a web page, including fonts used, text size, colors, spacing and layout. It is a  **distinct language from HTML** -- which means it's written in a different style and has different rules -- yet has a close relationship with HTML because it affects and changes HTML elements.

That pretty much sums up the <b>stylesheet</b> part of the name -- it's a file that outlines the stylistic rules for another document -- but what about **cascading**? That is a pretty poetic and evocative word for a computer language, no? The short answer is this: the cascade refers to the order and importance of your style rules. Once you've practiced some basic CSS, we'll revisit the cascade and you'll explore some examples of why it's important.

## Writing CSS
There are three key decisions in writing CSS:
- Which element do I want to affect?
- What about it do I want to change?
- How do I want it to change?

The element you are affecting is called a <b>selector</b> and the code you write to affect the selector are known as <b>declarations</b>. A declaration is made up of two parts: the area of your affect is a <b>CSS property</b> and the way you want it to change is the <b>value</b>. Combined, all of these things make a CSS ruleset.

{: .text-center }
![]({{ ip | append: 'css-ruleset.png' }}){: aria-describedby="css-ruleset"}

{: #css-ruleset .u-sr-only }
{% highlight css %}
p {
  color: purple;
  font-size: 18px;
}
{% endhighlight %}

<!-- CSS 1 -->
{% include quiz.html
  title="Share What You Think"
  quizId="2LPZSSL"
%}

CSS is a fairly readable language, which is why you may have gotten that question correct, even if this is the first time you're looking at CSS code.

In this example, the `p` element is the selector and the declarations change the color of the text inside the `p` element to be 18 pixels in size and purple in color.

Multiple selectors can receive the same rules if they are separated by commas, like so:

{% highlight css %}
h1, h2, h3 {
  color: green;
}
{% endhighlight %}

And a styesheet is made up of multiple rulesets, like so:
{% highlight css %}
h1, h2, h3 {
  color: green;
}
h4, h5, h6 {
  color: orange;
}
p {
  color: purple;
  font-size: 18px;
}
{% endhighlight %}

Looking through these examples, you may have noticed some basic expectations of CSS, specifically:

- selectors are separated with commas (`,`)
- declarations are wrapped in curly brackets (`{}`)
- properties may be hyphenated (but never include a space, so `font-size` is correct and `font size` is invalid)
- properties and values are separated with a colon (`:`)
- every rule ends with a semicolon (`;`)

## Connecting your HTML and CSS
In order to use the CSS you write in a specific HTML document, you must first link the two files -- and there's an HTML element named `link` that does exactly this.

{: .callout }
Note that the `link` HTML element is used to link to an external resource that is used within your HTML; it is entirely separate from the `a` element that creates hyperlinks in your HTML document.

A `link` element goes into the `head` section of your HTML. In  [HTML Basics]({{ lp | append: 'html/basics' }}) you reviewed <cite>MDN's [Anatomy of an HTML document](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Anatomy_of_an_HTML_document)</cite>, which explained the `head` element like so:

> This element acts as a container for everything you want to include on the HTML page, that isn't the content the page will show to viewers. This includes keywords and a page description that would appear in search results, CSS to style content, character set declarations, and more.

For the purposes of your stylesheet, the `link` element has two important attributes:
- `rel`, which is short for <b>relationship</b>, and explains the relationship between the documents being linked
- `href`, which stands for <b>hyperlink reference</b> and points to the document being linked; this is the same attribute used on anchor (`a`) elements

A properly formatted `link` element looks like this:

{% highlight html %}
  <link rel="stylesheet" href="style.css">
{% endhighlight %}

The `link` element can be added anywhere in the `head` element of your HTML file.

### Practicing CSS
Remix my [CSS Basics](https://glitch.com/edit/#!/mica-css-basics){:target="_blank"} project and update the `index.html` by linking to the `style.css` file that also exists in that project, using the format above.

If your link works, you should see the paragraph text update to be red, like in this screenshot:

{: .text-center }
![Screenshot of the Glitch project where the paragraph text is red and all other text is black.]({{ ip | append: 'css-link-works.png' }})

{: .callout }
As you work through the following CSS lessons, keep using this project to test out what you're learning.

### `link` shortcut
If you are using VS Code and are working in an already saved HTML file (that is, a document with the `.html` extension), you can type `link` and then press the <kbd>Tab</kbd> key, which should result in a blank `link` statement for you, like this: `<link rel="stylesheet" href="">`. Note that you still need to update the `href` value.
