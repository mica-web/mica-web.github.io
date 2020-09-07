---
topic: Best Practices
category: HTML
level: [ intro, advanced ]
permalink: /:collection/html/:name
code_example: true
quiz: false
issues: true
---

# {{ page.topic }}
The following list represents some best practices to use when writing your HTML. The examples of things _not_ to do, in some cases, may even be valid HTML, but still are not ideal.

* TOC
{:toc}

## Keep your code readable with line breaks and indenting nested elements
<span class="emoji">😺</span> Do this
```html
<h1>Page title</h1>
<p>Page content</p>
<ul>
  <li>List item</li>
  <li>Another item</li>
</ul>
```
<span class="emoji">❌</span> Not this
```html
<h1>Page title</h1><p>Page content</p>
<ul><li>List item</li><li>Another item</li></ul>
```

HTML ignores whitespace, but we write code for people not just robots and browsers, so we should also endeavor to write readable code.


## Write markup using lowercase
<span class="emoji">😺</span> Do this
```html
<h1>Page title</h1>
<p>Page content</p>
```
<span class="emoji">❌</span> Not this
```html
<H1>Page title</H1>
<P>Page content</P>
```

This also helps with the readability and consistency of your markup.

A valid exception to this is filenames (that is, when you're embedding an image or linking to another file). Some web servers are case sensitive and require you to write filenames exactly as they've been saved. **For this reason, I would also recommend renaming your files to be all lowercase, too, as you're able.**

{: .callout }
Some HTML generators capitalize the doctype as `!DOCTYPE html` and you don't need to stress about that being in all caps.

## Do not use ALL CAPS in your markup content for presentational purposes
<span class="emoji">😺</span> Do this
```html
<h1>Page title</h1>
<p>MICA</p>
```
<span class="emoji">❌</span> Not this
```html
<H1>PAGE TITLE</H1>
```

In the first example, it's appropriate to write MICA in all caps because it is an acronym. In the second example, the `h1` content being all caps is a design choice -- not specific to the words being used. This effect should be achieved via the CSS property [`text-transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) instead.



## Heading tags are used semantically, not simply for presentation
<span class="emoji">😺</span> Do this
```html
<h1>The title of my page</h1>
<h2>Introduction</h2>
<p>Some intro content...</p>
<h2>A section on the same level as the intro</h2>
<h3>A subheading</h3>
```
<span class="emoji">❌</span> Not this
```html
<h3>The title of my page</h3>
<h2>Introduction</h2>
<p>Some intro content...</p>
<h2>A section on the same level as the intro</h2>
<h4>A subheading</h4>
```

In the first examples, the heading tree begins with an `h1` and continues in a logical order. In comparison, the second example has three issues:
- It is missing an `h1`; in most cases, every page should have a single `h1` element.
- It does not begin with an `h1`; while the `h1` does _not_ need to be the first markup on your page, it should always be the first heading encountered.
- Headings are listed out of order and skipped (for example, there is no `h3` between the `h2` and `h4`).

In the second example, it is likely that the headings were selected based on appearance and not meaning, which is incorrect and creates issues with the document outline and specifically impacts the accessibility of your web content.

## Provide helpful `alt` text for your `img` elements
<span class="emoji">😺</span> Do this
```html
<img src="images/cat.jpg" alt="Zim, a tuxedo cat, lays in handknit basket.">
```
<span class="emoji">❌</span> Not this
```html
<img src="images/cat.jpg">
<img src="images/cat.jpg" alt="Image">
```

The first example provides a meaningful description of the image. In the second example where no `alt` text is provided, instead a user may:
- hear nothing
- see only a broken image icon
- or, in the worse case scenario, hear the filename

In my example, since the filename is also related to the image content, this isn't wholly terrible, but there are a lot of images on the web where the filename is generated automatically -- like Instagram -- and in those cases a screen reader may instead read out this blob:
`https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/28427940_442900622795637_6420743066889486336_n.jpg` <span class="emoji text-larger">🙀</span>

In the second example where the `alt` is just the word "Image," this issue is avoided, but no meaningful content has been added. Read [Alt-texts: The Ultimate Guide](https://axesslab.com/alt-texts/) for more detail about `alt` text and how to write better image descriptions.


## Wrap attribute values in double quotes
<span class="emoji">😺</span> Do this
```html
<a href="https://mica.edu" class="text-link">MICA</a>
```
<span class="emoji">❌</span> Not this
```html
<a href='https://mica.edu' class='text-link'>MICA</a>
```

Both are valid, but consistency is important. For the purposes of this course, we will default to double quotes.

## Include a proper `title` in your HTML `head`
<span class="emoji">❌</span> Not this
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
```

The `title` element, while not visible inside your web page, defines the document's title that is shown in a browser's title bar or a page's tab and is by search engines and search results.
