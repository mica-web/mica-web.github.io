---
topic: Text
category: HTML
level: [ intro ]
permalink: /:collection/html/:name
code_example: false
quiz: true
issues: true
---

# {{ page.topic }}

There are a variety of HTML elements used to convey the meaning of words, phrases or blocks of text in your web content. To date, you've been introduced to a few of them:

- headings (e.g., `h1`, `h2`)
- the paragraph element (`p`)
- the anchor element (`a`), more commonly known as a link
- the `strong` element

<!-- HTML Text 1 -->
{% include quiz.html
  title="Share What You Know"
  quizId="5K5FSRH"
%}

Like you learned with [HTML headings]({% link _learn/01_HTML/headings.md %}), it's important to think of the meaning of an HTML element separate from what it may look like in the browser. By default, the `em` and `i` elements are displayed as italicized text and the `strong` and `b` elements appear as bold text -- but that does not provide any clue into the meaning/purpose of these elements and those stylistic choices can be overridden by CSS.

Before using any of these elements, you should first consider _why_ you are drawing attention to this word or phrase:

- to identify technical terms or foreign phrases, use `i`
- to identify a keyword or product name, use `b`
- to convey emphasis ("Do <em class="text-italic">not</em> open that door!"), use `em`
- to convey importance or urgency, use `strong`

If a word or phrase does _not_ have one of these meanings or purposes and you just want it to be in bold or italics for aesthetic reasons, you should _not_ use any of these elements to achieve that. Instead, you'll use CSS to change the styling (more on this later).

## Learn more
If you want more context or examples for the HTML elements you've learned so far, check out the following links:

- [`h1`-`h6`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements){:target="_blank"}{% include optional.html %}
- [`p`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p){:target="_blank"}{% include optional.html %}
- [`a`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a){:target="_blank"}{% include optional.html %}
- [`strong`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong){:target="_blank"}{% include optional.html %}
- [`em`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em){:target="_blank"}{% include optional.html %}
- [`b`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b){:target="_blank"}{% include optional.html %}
- [`i`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i){:target="_blank"}{% include optional.html %}
