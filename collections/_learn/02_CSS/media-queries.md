---
topic: Media queries
category: CSS
level: [ intro, advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign ip = '/learn/02_CSS/img/' %}


# {{ page.topic }}

This page covers the core concepts that will allow you to create responsive web sites -- that is, web sites that look good on all devices, regardless of size or form factor.

## Understanding viewports

The <b>viewport</b> is the area within a web browser that is being viewed. Currently, as you're looking at this very page, the area that the site content takes up -- the bits of this actual site, not the browser's address bar, toolbars, menu bar, etc -- is the viewport.

Even if your laptop or computer screen is huge, if you've set your browser to only take up a fraction of that display, the viewport is the space the browser's content actually uses -- _not_ the space available to it. So, if you have a 17" laptop that is roughly 1920 pixels wide, but your browser is only taking up 50% of the width of the screen, the viewport is less than 960 pixels.

If you look back at your previous project's HTML, you'll note that you've already been writing code targeting viewports; you should see a `meta` element in your HTML `head` that looks like this:

`<meta content="width=device-width, initial-scale=1.0" name="viewport">`

This code tells the browser to use the width of the browser or device as the viewport width (compared to some other specific number or a default value) and to set the page's initial zoom level to be 100% (neither zoomed in nor zoomed out).

Understanding what a viewport is and how it impacts your layout is key to <b>responsive web design</b>.

## What is responsive design?

A web page is considered <b>responsive</b> when its content adjusts to a variety of viewport sizes.

This term was introduced in 2010 by Ethan Marcotte, and the header illustration for his article is still a fun example of what it means to be responsive:

{::options parse_block_html="true" /}
<figure>
![Animated screen capture of the following link, which features an illustration of a soccer team in various positions to properly make use of the browser's width.]({{ ip | append: 'rwd-ala.gif' }})
<figcaption>See <a href="https://alistapart.com/article/responsive-web-design/" target="_blank">this page</a> for yourself.
</figcaption>
</figure>

It's important to note here that HTML, with no CSS applied, is already responsive. You may remember [this example](https://html5-kitchen-sink.glitch.me/){:target="_blank"} from the reading on [Browser Defaults]({{ lp | append: 'css/browser-defaults' }}){% include optional.html %} -- 99% of the elements on that page just work, with no additional CSS, regardless of the size of your browser or device.

Of course, we _are_ going to add CSS to our HTML, modifying the defaults in all sorts of ways. And, since HTML with no CSS is responsive, we owe it to our users to make the CSS we write _also_ responsive.

Put another way: The styles you write shouldn't make things worse than they were before you added CSS. 

## Responsive CSS

{: .callout }
Since responsive demos require being able to adjust the viewport width directly, the examples that follow will **not** be embedded in the page; instead, be on the lookout for links to Glitch projects that demonstrate the following CSS. Glitch demos are identified by <span class="emoji">🐠</span> symbol.

To create responsive designs, you will need to write <b>media queries</b> inside of your CSS. Media queries are a way of targeting specific viewport sizes.

If, for example, you wanted the background color of your site to be different for anyone with a viewport 800 pixels or larger, you could write the following CSS:

```css
@media (min-width: 800px) {
  body {
    background-color: gold;
  }
}
```

<span class="emoji">🐠</span> See an example on [Glitch](https://mq-1.glitch.me/){:target="_blank"} <span class="emoji">🐠</span>

- `@media` identifies that your code is a media query; **all of your media queries will begin this way.**
- The content inside the parentheses `()` is a rule; this rule must be **matched** by the viewport conditions in order for the CSS inside the media query to be applied
- `min-width` means the viewport must be _at least_ this large and requires a value (in this case, 800 pixels) to match against
- everything inside the curly brackets `{}` is **standard CSS**: at least one selector, followed by another set of curly brackets, and one or more CSS declarations

{: .callout }
<span class="emoji">🤔</span> This is worth repeating: The only thing that's new here is the media query. **Everything that happens inside your media query is standard CSS, just like you've been writing.**

If you went back to your last project and put the media query above around _all the CSS you wrote_, it would mean your HTML would have **no styling** at any viewport size up to and including 799 pixels and then, <span class="emoji">💥</span> _whammo!_ <span class="emoji">💥</span> at 800 pixels, your styles would be applied.

You can also write a media query that is the reverse of the above example; you can target viewports that are less than 800 pixels by using `max-width` instead of `min-width`:

```css
@media (max-width: 799px) {
  body {
    background-color: silver;
  }
}
```

<span class="emoji">🐠</span> See an example on [Glitch](https://mq-2.glitch.me/){:target="_blank"} <span class="emoji">🐠</span>

In this example, the background color would be silver for any viewport _smaller than_ 800 pixels.

These targeted values where your site's styles change based on the viewport are known as <b>breakpoints</b>. So, for both of the examples above, the layout would be said to have a breakpoint of 800 pixels.

You may include _multiple_ breakpoints in your stylesheet.

In addition to height and width, you can also target viewports more generically by orientation.

```css
@media (orientation: landscape) {
  body {
    background-color: gold;
  }
}
@media (orientation: portrait) {
  body {
    background-color: silver;
  }
}
```

<span class="emoji">🐠</span> See an example on [Glitch](https://mq-3.glitch.me/){:target="_blank"} <span class="emoji">🐠</span>

In this example, when the browser is wider than it is tall (landscape mode), the background will be gold, and otherwise it will be silver.

### Best practices when writing media queries
- **Start with no media queries.** Establish the smallest viewport you're coding for (in your responsive projects, I will tell you this info), set your browser to that size and write CSS normally without media queries. This is called writing **mobile-first styles** as your stylesheet treats the smallest viewport size as the default.
- _After_ you have written your mobile styles (again, _without_ media queries), begin to expand your viewport. At some point, things will look not great: There will be too much whitespace, text lines will be too long, images too huge, _something_. **This is your first media query.**
- **Do not look to set breakpoints by specific devices.** This is, in fact, the _opposite_ of what I just suggested you do. At one point in the history of mobile devices, there were few enough types that people wrote break points specifically for the first and second generation of iPhones, for the first iPad, etc. We are so beyond those times that it's comical.

![]({{ ip | append: 'screen-sizes.png' }})

This image (originally from an [Open Signal](https://www.opensignal.com/) report) shows the variety of screen sizes of Android devices...and it's from 2015. **Design for the content you're working with, not for a specific device.**

- Media queries are _not_ just for changing layout. You can also use them to adjust spacing, font sizes, etc.

## Example
The following demo shows how to write mobile-first styles, followed by three media queries to achieve a very basic photo gallery layout.

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/mq-4?path=styles.css&previewSize=0&sidebarCollapsed=true"
    title="mq-4 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Click the Remix button to make your own changes to this CSS.

## Additional reading {% include optional.html %}
The following links are **entirely optional** but provide more context, examples and opportunities to write media queries, if any of those things would be helpful to you.

- [Using Media Queries For Responsive Design In 2018](https://www.smashingmagazine.com/2018/02/media-queries-responsive-design-2018/) {% include estimate.html time=15 %} -- Even though this article by Rachel Andrew is 2 years old, it's still a great read and a thorough look into how to create responsive designs.
- [Beginner's guide to media queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries) {% include estimate.html time=20 %} -- This tutorial includes more details about breakpoints and an active learning exercise where you add media queries to some existing HTML.
