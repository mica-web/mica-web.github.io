---
title: Best practices checklist
course: gd-431
---

Best practices checklist
========================

{::options parse_block_html="true" /}
<div class="content-wrapper checklist">

### General
- [ ] Git commits have clear, descriptive messages
- [ ] Project is available online (either via CodePen, GitHub Pages, etc.)
- [ ] Site has a consistent, accessible design
- [ ] Sites are designed mobile first and responsive
- [ ] Sites provide similar experiences in the latest versions of Chrome, Edge, Firefox and Safari
- [ ] No framework is used (e.g., Bootstrap)
- [ ] Assets are minified
- [ ] Images are compressed
- [ ] Site does not include extraneous requests

### HTML
- [ ] HTML is written according to best practices:
  - [ ] HTML is indented to enhance readability
  - [ ] HTML is lowercase (valid exceptions: filenames)
  - [ ] Double quotes are used around attributes
  - [ ] Self-closing elements do **not** include a closing slash
  - [ ] Boolean attributes do **not** include values
- [ ] A proper HTML5 `doctype` is set
- [ ] The `head` includes the following:
  - [ ] `charset`
  - [ ] `name="viewport"`
  - [ ] `title`  
- [ ] Markup makes use of semantic elements and avoids `div`itis
  - [ ] Heading tags are used semantically, not simply for presentation; see [the docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
  - [ ] `input` types are appropriate
  - [ ] `<br>` elements are avoided (valid exceptions: addresses, song lyrics and poems); see [the docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)
  - [ ] `<hr>` elements are only used according to [the docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)
- [ ] `img` elements have helpful `alt` text
  - [ ] Decorative `img` elements have blank `alt` text
- [ ] Markup content is not presented in ALLCAPS for presentational purposes; this is achieved via CSS instead

### CSS
- [ ] CSS is written according to best practices:
  - [ ] CSS is lowercase
  - [ ] Declarations within each ruleset are ordered alphabetically by property name
  - [ ] A semicolon ends each declaration
  - [ ] Comments are used to break up sections and explain your code
  - [ ] `!important` is avoided overall and, when used, is justified via a comment
- [ ] Box sizing is declared
- [ ] All floats are properly cleared
- [ ] Elements are mainly styled by using classnames on selectors (IDs are avoided, styled bare elements are minimal)
  - [ ] Classnames are written kebab-style and according to [BEM guidelines](https://en.bem.info/methodology/key-concepts/)
  - [ ] Selectors are not overly specific and avoid making assumptions about the markup
- [ ] Empty `div`s are avoided for presentation
- [ ] CSS does **not** reiterate browser defaults
- [ ] CSS is not written in such a way that it is immediately overwritten by other declarations
  - [ ] Including misusing shorthand properties
- [ ] Units are used logically and consistently
  - [ ] Zero measurements do **not** include units


</div>
