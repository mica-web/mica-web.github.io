---
topic: Styling Lists
category: CSS
level: [ intro ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}
{% assign ip = '/learn/02_CSS/img/' %}

<style>
  .image-wrapper {
    justify-content: space-around;
  }
  figure {
    max-width: 45%;
  }
  .shrink {
    max-width: 220px;
  }
</style>


# {{ page.topic }}

The following videos describe how to use CSS to change the default styles and layout for an [HTML list]({{ lp | append: 'html/lists' }}).

## Step 1
Removing the default bullets/numbering and spacing from an HTML list.

{::options parse_block_html="true" /}
<div class="image-wrapper">
<figure class="shrink">
<figcaption class="text-center text-faded">
  Before
</figcaption>

![An unordered list with default styling, including bullets.]({{ ip | append: 'list1-before.png' }})

</figure>

<figure class="shrink">
<figcaption class="text-center text-faded">
  After
</figcaption>

![An unordered list without bullets.]({{ ip | append: 'list1-after1.png' }})

</figure>
</div>

<div class="loom-embed-wrapper" style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/dc510ba4ebef4a3499d8ab1f04123805" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Step 2
Making an HTML list display horizontally.

{::options parse_block_html="true" /}
<div class="image-wrapper">
<figure class="shrink">
<figcaption class="text-center text-faded">
  Before
</figcaption>

![An unordered list without bullets.]({{ ip | append: 'list1-after1.png' }})

</figure>

<figure>
<figcaption class="text-center text-faded">
  After
</figcaption>

![A horizontal list of items with dividers between them.]({{ ip | append: 'list1-after2.png' }})

</figure>
</div>

<div class="loom-embed-wrapper" style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/362ffa1ca8f34ce996e4540e8a413d0e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Step 3
Additional styles on a horizontal list, including hover effects for the following:
- border styles
- SVGs 

{::options parse_block_html="true" /}
<div class="image-wrapper">
<figure class="shrink">
<figcaption class="text-center text-faded">
  Before
</figcaption>

![An unordered list of links with default styling, including bullets.]({{ ip | append: 'list2-before.png' }})

</figure>

<figure>
<figcaption class="text-center text-faded">
  After
</figcaption>

![A list with background colors, icons and hover effects.]({{ ip | append: 'list2-after.gif' }})

</figure>
</div>

<div class="loom-embed-wrapper" style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/e1fdaa227d1a40038e07450f8cf8a04a" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
