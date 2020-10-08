---
topic: Links
category: HTML
level: [ intro ]
permalink: /:collection/html/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}

In [HTML Basics]({{ lp | append: 'html/basics' }}), you wrote your first hyperlink using the anchor (`a`) element. As a reminder, a link looks like this:

```html
<a href="https://mica.edu">MICA</a>
```

`href` stands for <b>hyperlink reference</b> and the value for this attribute should be the web site you're linking to.

{: .callout }
The `href` attribute is _also_ used when you connect your HTML and CSS via the `link` element (see [CSS Basics]({{ lp | append: 'css/basics#connecting-your-html-and-css' }})).

## Absolute vs. Relative URLs
The example above uses what's called an <b>absolute URL</b> because it provides all the information to get to that web site from anywhere else on the internet.

An absolute URL _always_ begins with `http://` or `https://`.

Any time you are linking to information on a <b>domain name</b> other than your own, you **must** use absolute URLs.

{: .callout }
The <b>domain name</b> is the primary address of a web site (in this case, `mica.edu` is the domain name).

When you are linking to content on your site, you have the additional option of using a <b>relative URL</b>, which is an address that is _relative_ to either the domain name or the current page.

This is better explained with a demo; the following project has four HTML files:
- `index.html` and `test.html`, which are in the project's root directory
- `relative.html` and `absolute.html`, which are in a folder named `demo` in the root directory

<div class="glitch-embed-wrap" style="height: 460px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/relative-absolute-urls?path=demo/relative.html&previewSize=100&sidebarCollapsed=true"
    title="relative-absolute-urls on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

### Gotchas when making links

**1. Relative to _what_?**
Relative URLs can be relative to the current document (the default) or, if they begin with a forward slash (`/`), they will be relative to the root directory/domain.

You can see this in effect in the demo above. Because `absolute.html` and `relative.html` are **both** in the `demo` folder, a relative link to `absolute.html` could be written two ways:

- `/demo/absolute.html`
- `absolute.html`

But the link to `test.html` **must** begin with the slash because it is not in the same folder, but is in the site's root directory.

**2. Absolute URLs being parsed as relative.**
At the start of this section, I called out that absolute URLs must always begin with either the `http://` or `https://` protocol; without this information, the browser will parse the URL as a relative URL. 

<span class="emoji">❌</span> Don't do this

```html
<a href="google.com">Invalid!</a>
<a href="www.google.com">Also doesn't work!</a>
```

<div class="embed-wrapper" style="height: 320px; width: 100%;">
  <iframe
    src="https://relative-absolute-urls.glitch.me/invalid.html"
    title="relative-absolute-urls on Glitch"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Without a protocol, these URLs are parsed as relative to their current page, like so:
- `https://relative-absolute-urls.glitch.me/google.com`
- `https://relative-absolute-urls.glitch.me/www.google.com`

**3. Link text.**
All the advice and rules so far have been about actually forming valid link elements. In general, you can include whatever you want in the actual text you're linking; the text does not need to mirror the URL in any way, but it is considered good UX for the link text to be understandable to your users and to lead them to expected places.

<span class="emoji">❌</span> Don't do this

```html
<a href="https://gmail.com">Go to Hotmail</a>
<a href="https://gmail.com">Click here!</a>
```

The first example above is just misdirection and will lead your users not to trust your site. The second example is unhelpfully vague; in general, link text should be more specific than "click here."

## Other types of links

In addition to linking to other web pages or HTML pages on your site, you can also create links to:

{: .text-push--bottom }
- [email addresses and telephone numbers](#email-addresses-and-telephone-numbers)
- [images and other file types](#images-and-other-files)
- [specific elements on a page](#specific-elements)

### Email addresses and telephone numbers

These links look just like web links, but begin with a keyword that identifies their content as something other than a web link:

```html
<a href="mailto:info@mica.edu">info (at) mica (dot) edu</a>
<a href="tel:4106699200">410-669-9200</a>
```

For the most reliable results, avoid adding any spaces in either of these formats.

- `mailto` links will open in the user's default mail program
- `tel` links will dial the number (if clicked on a phone) or attempt to make the call with another suitable program (like FaceTime or Skype)

### Images and other files
Everything you just learned about absolute and relative URLs also applies to anything else you might link to from a web site, with an anchor (`a`) element or also:
- `img`
- `link`
- other media formats

In this example, I'm displaying an inline image using the `img` element and also wrapping it in a link (`a`) so that it can be viewed full size. Both the `img` `src` attribute and my link's `href` use absolute URLs.

```html
<a href="https://placekitten.com/g/920/920" target="_blank">
  <img src="https://placekitten.com/g/920/920" alt="An adorable kitten placeholder image.">
</a>
```

<figure class="text-center">
  <a href="https://placekitten.com/g/920/920" target="_blank" class="u-link-reset">
    <img src="https://placekitten.com/g/920/920" alt="An adorable kitten placeholder image." style="height:auto;width:200px;">
  </a>
  <figcaption class="text-faded">Clicking this photo will open it at a larger size in a new window.</figcaption>
</figure>

You can do the same thing to link any manner of documents or media files.

{: .callout }
<span class="emoji">⚠️</span> Everything stated previously about giving users info about _what_ they're clicking is **even more true** if the link is opening or downloading something other than an HTML file.

### Specific elements
It is also possible to link to specific areas of content on the page you're already viewing. On this page, you can see that in both:
- the [back to top](#top) link
- the links listed under the [Other types of links heading](#other-types-of-links)
- each of the links above <span class="emoji">🤓</span>

You can create a "back to top" style link on any page by adding either of the following to any web page:

```html
<a href="#">top</a>
<a href="#top">top</a>
```

That just works, no extra markup.

However, if you want to link to a specific part of the page, this requires two steps:

1. Add an `id` attribute and a unique value to the element you want to be able to scroll to.
1. Use that `id` value _preceded by_ the number symbol/hashtag (`#`) for your `href` value.


In practice, that looks like this:

First, the `section` elements have unique `id` attributes.

```html
<section id="retsuko">
  <h2>Retsuko</h2>
</section>
```

Then, those `id`s are used in the links like this:

```html
<ul>
  <li><a href="#retsuko">Retsuko</a></li>
</ul>
```

<div class="glitch-embed-wrap" style="height: 740px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/in-page-links?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="in-page-links on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

**A few notes about creating `id` values:**

- Each `id` value on your page **must** be unique (for example, it is _not valid_ to have two `id`s with the value of `retsuko`).
  - The `href` values do **not** need to be unique, however.
- The `id` values do **not** need to match text on the page. While in most cases in this demo the `id`, link text and `h2` all match (see Retsuko, for example), also note that the same is not true for the character Migi.
