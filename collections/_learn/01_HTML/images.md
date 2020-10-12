---
topic: Images
category: HTML
level: [ intro ]
permalink: /:collection/html/:name
code_example: true
quiz: true
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}

You can embed an image into a document by using the `img` element. This element uses two important attributes:

- `src`, which is **required** and contains the location and filename of the image you want to embed
- `alt`, which allows you to add a text description of the image and its meaning

## Example

```html
<img
  src="heart.png"
  alt="Pink heart in an 8-bit style."
>
```

The `src` attribute uses all the same logic you learned about creating [absolute and relative links]({{ lp | append: 'html/links' }}).

The `alt` attribute should **be present on all inline images** and generally includes a description that could replace the image and should be informed by the context and meaning of the image, as you can see in these examples:

<div class="glitch-embed-wrap" style="height: 520px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/img-basics?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="img-basics on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

## Writing good `alt` text
It is an important responsibility of front-end developers to understand when to write `alt` text and how to write good `alt` descriptions. To that end, I'd like you to read [Alt-texts: The Ultimate Guide](https://axesslab.com/alt-texts/){% include estimate.html time=11 %}, which was written by a [screen reader]({{ lp | append: 'tools/screen-readers' }}) user and has a wealth of examples.

<!-- Alt text 1 -->
{% include quiz.html
  title="Share What You've Learned"
  quizId="5RYDJXV"
%}

### Additional `alt` text resources
- WebAIM's [guide to alternative text](https://webaim.org/techniques/alttext/){% include optional.html %} provides information and a series of examples to test your understanding.
- A [simple decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/){% include optional.html %} to determine if you need `alt` text.
- The [Poet Training Tool](https://poet.diagramcenter.org/how.html){% include optional.html %} is a web-based image description resource that helps people learn when and how to describe various types of images. Originally created for people writing educational content, the examples and exercises are still useful when thinking about images in articles, news stories, etc.
