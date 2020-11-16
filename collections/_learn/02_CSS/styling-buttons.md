---
topic: Styling Buttons
category: CSS
level: [ intro ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}
{% assign ip = '/learn/02_CSS/img/' %}

As originally discussed in exploring [browser default styles]({{ lp | append: 'css/browser-defaults' }}), the `button` element is heavily styled by browsers -- more so than text elements like `h2` or `p`, where only the element's font size, weight and spacing are styled.

In order to style buttons, I recommend a two-pronged approach:

1. Use a `button-reset` class to strip all button styles away and make your `button` element look like the rest of the text on your page.
1. Use a second class to apply specific styles, like a background color or borders.

You can see this process step-by-step in the following demo:

<div class="glitch-embed-wrap" style="height: 540px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/styling-buttons?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="styling-buttons on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>
