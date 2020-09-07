---
title: Best practices checklist
course: gd-220
---

Best practices checklist
========================

<!-- ### General
- Git commits have clear, descriptive messages
- Sites are designed mobile first and responsive -->

### HTML
- HTML is indented to enhance readability
- HTML is lowercase (valid exceptions: filenames)
- Double quotes are used around attributes (e.g., `href="https://mica.edu"`, `class="class-name"`)
- Self-closing elements do _not_ include a closing slash (e.g., `img`)
- Markup makes use of semantic elements and avoids `div`-itis
- A proper HTML5 `doctype` is set
- The HTML head includes a proper `title`
- Heading tags are used semantically, not simply for presentation; see [the docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
- `img` elements have helpful `alt` text (or a blank `alt=""` for decorative elements)
- Markup content is not presented in ALLCAPS for presentational purposes; this is achieved via the `text-transform` CSS property instead
- HTML is error free

### CSS
- CSS is lowercase
- Declarations within each ruleset are ordered alphabetically by property name
- A semicolon ends each declaration
- Comments are used to break up sections and explain your code
- `box-sizing` is declared
- All floats are properly cleared
- Selectors are either bare elements or classnames (IDs are avoided)
- Classnames are helpful and written kebab-style (i.e., using hyphens)
- CSS does _not_ reiterate browser defaults
- CSS is not written in such a way that it is immediately overwritten by other declarations
- Color values are used logically and consistently (e.g., hex and hsl values aren't mixed)
- Units are used logically and consistently
- Zero measurements do _not_ include units
- CSS is error free
