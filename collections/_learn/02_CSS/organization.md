---
topic: Writing and Organizing CSS
category: CSS
level: [ advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

# {{ page.topic }}

## Writing CSS

When writing CSS, you can include your styles in three different ways:
- inline
- internal styles
- external stylesheet

### Inline styles
Inline styles are written as part of your HTML document and use the `style` attribute.

```html
<h1 style="color: blue;">My heading</h1>
<p style="color: green; font-style: italic;">My content</p>
```

While this is valid CSS and HTML, it has many downsides:
- There is no way to reuse these styles. If you want every `p` element to be green and italicized, you must add the same `style` attribute to each `p` element.
- Because your CSS is _inside_ your HTML file, you don't gain any of the text editor benefits found in a stylesheet file, like autoformatting and autocompletion.

In general, one of the benefits of thinking of HTML and CSS as separate languages is that they each have separate concerns: HTML is all about the meaning of your content and CSS is about the appearance of your content.

For all of these reasons, this way of writing CSS should be **avoided**.

### Internal styles
You can also add CSS via a `style` block within your HTML document's `head`:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Internal styles demo</title>
  <style>
    h1 {
      color: blue;
    }
    p {
      color: green;
      font-style: italic;
    }
  </style>
</head>

<body>
  <h1>My heading</h1>
  <p>My content</p>
</body>

</html>
```

In comparison to inline styles, this allows for some separation between your CSS and HTML _and_ lets you reuse styles more easily, but these styles can only be applied to the HTML file they are inside of. If you have a site with multiple pages and you want _all_ the `p` elements across the site to be green and italicized, you must copy and paste this style block onto each page. This isn't terrible when your style block is as short as this example, but once it's a hundred lines long, it's a lot of effort to keep them all up to date.

Luckily, there's a better way. <span class="emoji">✨</span>

### External styles
Within the `head` of your HTML document, you can use the `link` element to point to an external stylesheet -- either within your project or even hosted elsewhere.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <link href="styles.css" rel="stylesheet">
  <title>External styles demo</title>
</head>

<body>
  <h1>My heading</h1>
  <p>My content</p>
</body>

</html>
```

Separate from your HTML document, you would also need to create a `styles.css` file and, within that, write your CSS:

```css
h1 {
  color: blue;
}
p {
  color: green;
  font-style: italic;
}
```

In the previous example, the stylesheet is in the same directory as the HTML document that references it. You can also update the `href` of your `link` element to point to a directory, for example if you are using multiple CSS files for your page:

```html
  <link href="styles/base.css" rel="stylesheet">
  <link href="styles/theme.css" rel="stylesheet">
```

{: .callout }
Unless you have a solid reason to do otherwise, you should default to writing your CSS in an external stylesheet and reference it in your HTML using the `link` element.

## Organizing CSS
It's helpful to start your stylesheet with some structure in mind, otherwise it's all too common to just write from top to bottom and provide no sense of organization. This more chaotic approach also makes it more difficult to troubleshoot and debug your CSS, as related styles may not be in the same location in your stylesheet and there may even be duplicate styles in the same sheet.

I recommend organizing your stylesheet using the following minimal structure:

- **base elements**: all classless HTML element styles (for example, `body`)
- **layout**: the main components of your site's layout
- **all other classnames**: any other class selectors in use

You can use CSS comments to break up your styles and make this structure apparent, as well as add other sections as needed. This example stylesheet shows what using this structure might look like in practice:

<div class="glitch-embed-wrap" style="height: 600px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/organizing-css?path=styles.css&previewSize=0&sidebarCollapsed=true"
    title="organizing-css on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Jeff Starr's post [Obsessive CSS Code Formatting](https://perishablepress.com/obsessive-css-code-formatting-organization-comments-and-signatures/){% include optional.html %} provides other strategies for using CSS comments and other styles of comment headings, too.
