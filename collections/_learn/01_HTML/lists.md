---
topic: Lists
category: HTML
level: [ intro ]
permalink: /:collection/html/:name
code_example: true
quiz: true
issues: true
---

<style>
  #nested-list {border: 4px solid transparent; }
  #nested-list:target { border-color: #F6F930; }
</style>

# {{ page.topic }}

In HTML, you can create two different types of lists: ordered lists and unordered lists. The list is created by nesting list elements (`li`) inside a <b>parent element</b> that identifies the type of list relevant for your content.

An <b>ordered list</b> should be used for a list of items where the order of elements is _meaningful_, like the steps of a recipe; in an ordered list, the list elements (`li`) are wrapped in an `ol` element:

```html
<ol>
  <li>Mix sponge ingredients to a method of your choice.</li>
  <li>Divide between two tins.</li>
  <li>Bake for 25 minutes at 180° C.</li>
  <li>Add jam in between the layers and assemble.</li>
</ol>
```

This would result in Example 1 below:
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/html-lists?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="html-lists on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Any list where the order is _not_ relevant should be wrapped in an <b>unordered list</b> (`ul`), like Example 2 above:

```html
<ul>
  <li>4 eggs</li>
  <li>225g butter</li>
  <li>225g caster sugar</li>
  <li>225g self-raising flour</li>
  <li>2tsp baking powder</li>
  <li>450g raspberry jam</li>
</ul>
```

As you can see, the markup is essentially the same; you only need to change the parent element to switch between an ordered (`ol`) or unordered (`ul`) list.

In general, unordered lists are more common, but it is helpful to known and understand when an ordered list might be relevant. Common places where lists are used in web design include:

{: #nested-list }
- site navigation
  - including breadcrumbs, like the navigation at the top of this page
- lists of social media accounts
- lists in your content, like this <span class="emoji">☑️</span>

{: .callout }
The actual look of either type of list -- including what the list markers are -- can be modified by using CSS. As a result, you should _always_ use the semantically appropriate list type, even if you don't want the final result to have numbers or bullets in your design.

Both `ul` and `li` are block level elements unless otherwise modified using CSS.

## Important notes
It is **totally valid** and appropriate for `li` elements to contain other nested CSS, such as links, paragraphs, images, headings, etc.

Their parent `ul` or `ol` elements, however, should _only_ contain `li` elements as direct children.

<span class="emoji">😺</span> Do this
```html
<ul>
  <li><a href="#">A valid link in a list item!</a></li>
  <li><img src="#" alt="A valid image in a list item!"></li>
</ul>
```

<span class="emoji">❌</span> Not this
```html
<ul>
  <img src="#" alt="This is invalid!">
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
```

This example is **invalid** because the `img` element is a direct child of the `ul` and **not** nested inside an `li` element.

You can even nest lists _inside of lists_, which is exactly what I did above when I made [a list of all the ways lists can be used](#nested-list). The HTML for that looks like this:

```html
<ul>
  <li>site navigation
    <ul>
      <li>including breadcrumbs, like the navigation at the top of this page</li>
    </ul>
  </li>
  <li>lists of social media accounts</li>
  <li>lists in your content, like this</li>
</ul>
```

Note that the `li` for "site navigation" wraps _entirely around_ that text _and_ the following list.

<!-- HTML Lists 1 -->
{% include quiz.html
  title="Share What You've Learned"
  quizId="27KP57L"
%}
