---
topic: Semantics
category: HTML
level: [ intro, advanced ]
permalink: /:collection/html/:name
code_example: false
quiz: false
issues: true
---

{% assign ip = '/learn/01_html/img/' %}


# {{ page.topic }}

You may have encountered the word <b>semantics</b> in some other contexts, like in linguistic or media studies.

{::options parse_block_html="false" /}
<dl class="definition-quote">
  <dt>Semantics</dt>
  <dd>1. A branch of linguistics studying the meaning of words.</dd>
  <dd>2. The study of the relationship between words and their meanings.</dd>
  <dd>3. The individual meanings of words, as opposed to the overall meaning of a passage.</dd>
  <dd>4. The meaning of computer language constructs, in contrast to their form or syntax.</dd>
</dl>

{: .citation }
Definition of [semantics](https://en.wiktionary.org/wiki/semantics) from <cite>Wiktionary</cite>.

In the context of HTML, we use <b>Semantic HTML</b> to describe the idea that the code you write should reinforce and describe the meaning of your content.

When writing HTML, you should always be thinking about the function or purpose of your content and how it relates to other bits on the page. Doing so:

- reduces ambiguity in your code
- increases the accessibility of your web pages
- improves the usefulness of your web content, making it understood by search engines, RSS readers and other apps

As a specific example, if you wanted to add some song lyrics to a web page, you wouldn't use the `img` element because that's not meant for text. **This tells you that HTML elements have meaning and impart that meaning to your code and content.**

The only two HTML elements without meaning are:
- `div` -- the generic container for block-level content
- `span` -- the generic container for inline content

While these elements are useful in HTML, they should not be the ones you reach for immediately; it is always best to first consider if a more meaningful, or _semantic_, option exists.

Without semantic HTML, you can easily end up with an HTML document that looks like this: containers everywhere, but no sense of their purpose.

{: .text-center }
![Diagram of HTML code that is just a series of div elements, sometimes nested one inside the other.]({{ ip | append: 'semantics1.png' }})

Compare that diagram to this, where semantic HTML elements provide important information about the structure and content of the web page:

{: .text-center }
![Same diagram as above, but this one uses semantic HTML.]({{ ip | append: 'semantics2.png' }}){: aria-describedby="w-semantic-html"}

{: #w-semantic-html .u-sr-only }
Across the top of the page is a nav element inside a header element. This is followed by a section element with a header element inside, followed by two article elements and a footer. To the right side is an aside element with a form inside of it. Spanning the bottom of the page is a footer element.

Each of the areas in the second example is a legitimate HTML element. Read this [guide to semantic HTML](https://www.pluralsight.com/guides/semantic-html){% include estimate.html time=12 %} to get a more in-depth description and examples of how to use the following elements:
- `nav`
- `main`, `section`, `article`
- `aside`
- `figure`

The <cite>[HTML5 Doctor](http://html5doctor.com/)</cite>{% include optional.html %} HTML Element Flowchart is also a great guide when you're struggling with which element is right for your use case:

{: .text-center }
![HTML5 Sectioning Flowchart.]({{ ip | append: 'h5d-flowchart.png' }})

{: .citation }
You can also view a [PDF version (102 KB) of this chart]({% link _learn/01_HTML/h5d-flowchart.pdf %}){:target="_blank"}
