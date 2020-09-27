---
topic: The Cascade
category: CSS
level: [ intro ]
permalink: /:collection/css/:name
code_example: true
quiz: true
issues: true
---

{% assign lp = '/learn/' %}
{% assign ip = '/learn/02_CSS/img/' %}


# {{ page.topic }}

In your [initial lesson]({{ lp | append: 'css/basics' }}) about CSS, you learned that CSS stands for Cascading StyleSheets and that

> ...the cascade refers to the order and importance of your style rules. Once you’ve practiced some basic CSS, we’ll revisit the cascade and you’ll explore some examples of why it’s important.

This poetic word -- the cascade -- encompasses all the logic that determines how the styles you write are applied in the browser. 

This intro to the cascade will not cover all its details, but it is helpful to understand some basics about the cascade in order to debug any CSS conflicts you may encounter. In this lesson, you'll learn a bit about the cascade, including the weight and specificity of CSS selectors.

## Order matters
The most basic thing to know about CSS is that the order in which you write your stylesheet has an impact on what happens in the browser.

The following CSS has conflicts because the `color` property is repeated for both the `h1` and the `h2` elements:

```css
h1 {
  color: blue;
  color: purple;
}
h2 {
  color: purple;
}
h2 {
  color: red;
}
```

In the following demo, you can see how things get resolved:

<div class="glitch-embed-wrap" style="height: 180px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-cascade-1?path=index.html&previewSize=100&sidebarCollapsed=true"
    title="css-cascade-1 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Since a CSS file is read from top to bottom, in general, later declarations overwrite earlier ones; simply stated: **what's last, wins.**

<span class="emoji text-larger">💡</span> You can hopefully avoid this issue by:
- Organizing your CSS properties alphabetically within each ruleset.
- Organizing your CSS selectors with a logical structure.

## Selectors have weight
In the previous example, all the [CSS selectors]({{ lp | append: 'css/selectors' }}) were base HTML elements. This, however, is only one way you can select elements. For example, you can also select an element based on an ID or class selector:

```html
<p id="special" class="demo">Lorem ipsum...</p>
```

The following demo uses the HTML above and this CSS:

```css
#special {
  background-color: silver;
}

.demo {
  background-color: red;
}

p {
  background-color: purple;
  color: white;
}
```

<div class="glitch-embed-wrap" style="height: 160px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-cascade-2?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-cascade-2 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Despite the fact that the last `background-color` declaration has a value of `purple`, it still doesn't win? <span class="emoji">🤷🏻‍♀️</span> What gives?

Here, the issue is that the selectors used have a different weight; the cascade considers how generic a selector is as part of its calculations.

- a base element, like `p`, selects all elements of that type in the document and is _very_ generic
- a class name (`.demo`) only selects elements with a matching class and is _less_ generic
- an ID (`#special`) should be _unique_ and, therefore, can only apply to one element on a page

Because of its uniqueness, the ID selector wins out against these other selectors, _regardless_ of its location in the stylesheet.

<span class="emoji text-larger">💡</span> You can hopefully avoid this issue by:
- Organizing your stylesheet so all your base element selectors are first, followed by your class selectors
- Avoiding using ID selectors

## Conflicts overwrite
When there are CSS conflicts, it's important to note that the "losing" declarations are overwritten, _not_ ignored.

You can see this in your browser developer tools. In the example below, you will see in the bottom right corner that all three `background-color` declarations are visible, and the losing declarations are grey and crossed out.

![Screenshot of the Glitch project above with developer tools visible and the CSS conflicts highlighted.]({{ ip | append: 'css-conflicts.png' }})

Also, note that conflicts are resolved on a declaration-by-declaration basis. Just because the `background-color` declaration on the `p` selector is overwritten does **not** mean the `color` declaration within the same ruleset also gets overwritten; since there are no conflicts with the `color` declaration, it is applied as written.

This is a pretty cool thing about writing CSS. Instead of treating such conflicts as errors that break stylesheets, they are accounted for in the browser logic.

{: .callout }
This also extends to CSS that is actually broken or invalid, not just conflicts. It's rare to write CSS that totally breaks your stylesheet; instead, it's often just a single declaration that fails.

## Selectors have specificity
You've already learned that CSS files are read top to bottom, but you should also know that selectors are read from right to left.

This means the selector `header h1 a` applies to:
- any `a` element
- that is inside an `h1` element
- that is inside a `header` element

Referring to multiple elements or class names increases the specificity of the selector. Given the following CSS:

```css
header h1 a {
  color: red;
}
a {
  color: green;
}
```

Any `a` element inside a `h1` that is inside a `header` will be red, even though the `color: green` declaration is later in the stylesheet; you can see this result in the following demo:

<div class="glitch-embed-wrap" style="height: 180px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/css-cascade-3?path=styles.css&previewSize=100&sidebarCollapsed=true"
    title="css-cascade-3 on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

<span class="emoji text-larger">💡</span> You can hopefully avoid this issue by:
- Not writing your CSS selectors to reflect your nested HTML structure and instead using classnames
- In general, avoiding using more than two selectors for a single ruleset

<!-- CSS Cascade 1 -->
{% include quiz.html
  title="Share What You've Learned"
  quizId="VW88NCZ"
%}
