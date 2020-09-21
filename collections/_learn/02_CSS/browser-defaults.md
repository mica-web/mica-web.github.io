---
topic: Browser Defaults
category: CSS
level: [ intro, advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign ip = '/learn/02_CSS/img/' %}


# {{ page.topic }}

The following document is only HTML, no CSS at all. But even without a single line of custom CSS, there are clearly style choices made; what gives?

<div class="glitch-embed-wrap" style="height: 600px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/html5-kitchen-sink?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="html5-kitchen-sink on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

All web browsers apply a certain amount of default styling to HTML documents and, as a result, `h1` elements are larger than `h3`s, links are usually blue and underlined (until a user clicks on them, in which case they turn purple). Some elements, such as `button` are heavily styled with colors, borders and shadows to varying degrees depending on which browser you're using.

{: .text-center }
![Default buttons in Chrome are grey and have dark grey borders.]({{ ip | append: 'buttons-chrome.png' }}){:title="Default buttons in Google Chrome."}
![Default buttons in Firefox are thin, light grey and have light grey borders.]({{ ip | append: 'buttons-firefox.png' }}){:title="Default buttons in Mozilla Firefox."}
![Default buttons in Safari are almost white with light grey borders and very rounded corners.]({{ ip | append: 'buttons-safari.png' }}){:title="Default buttons in Apple Safari."}

{: .citation }
These photos were all taken in macOS and will look different based on your OS, too. Hover over each image to see which browser each screenshot was taken in.

These browser defaults **do not go away** when you add your custom stylesheet to a web page. Any styles you write will only add on to what is already done by the default browser styles. **This makes it extra useful to know what the browser defaults are.**

This doesn't mean you need to memorize the exact styles; a rough idea is helpful enough. You don't need to know the size of margins added to headings by browser defaults -- but should instead simply know that each heading (`h1`-`h6`) has a default top and bottom margin added to it by default.

This [searchable directory of browser default styles](https://browserdefaultstyles.com/) is a great resource for investigating default styles.

{: .text-center }
[![Screenshot of BrowserDefaultStyles.com showing the default styles applied to the H2 element.]({{ ip | append: 'browser-default-styles.png' }})](https://browserdefaultstyles.com/){: .u-link-reset }

This screenshot shows that browsers go about it a variety of different ways, but all add some margin to the top and bottom of the `h2` element. To undo this, you'd need to apply your own styles, like so:

```css
h2 {
  margin-top: 0;
  margin-bottom: 0;
}
```

Where you use `0` to remove all the top and bottom margins or replace `0` with a number of your choosing.

You can also explore browser default styles by using your developer tools; this screen capture shows you how to do that using Firefox:

{: .text-center }
[![]({{ ip | append: 'moz-dev-tools.gif' }}){:title="Click to view this image in a new tab."}]({{ ip | append: 'moz-dev-tools.gif' }}){:target="_blank"}{: .u-link-reset }


<!-- @TODO: Replace this with a quick screencast  -->
