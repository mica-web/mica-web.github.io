---
title: Naming CSS Classes
course: gd-220
---

Guidelines for writing CSS classes
==================================

- Classnames should be lowercase
- If helpful for readability, classnames can also be broken up by a hyphen

<span class="text-larger emoji">👍</span>

```css
.class { }
.class-name { }
```

<span class="text-larger emoji">👎</span>

```css
.CLASS { }
.Class { }
.ClassName { }
.className { }
.class_name
```

---

- Choose classnames based on **function** not appearance or location

<span class="text-larger emoji">👍</span>

```css
.site-header { }
.heading { }
.article-aside { }
```

<span class="text-larger emoji">👎</span>

```css
.black-banner { }
.text-blue { }
.right-column { }
```

---

- Keep classnames readable and avoid abbreviations unless well-known

<span class="text-larger emoji">👍</span>

```css
.mica-header { }
```

<span class="text-larger emoji">👎</span>

```css
.mhdr { }
```

<!--

- [BEM key concepts](https://en.bem.info/methodology/key-concepts/)
- An [intro to other CSS naming structures](https://codepen.io/hidanielle/post/css-methodologies-naming-conventions-and-file-structures)
- [Sass basics](https://sass-lang.com/guide)
- All my [CodePen examples](https://codepen.io/collection/AaWBNz/) to date

-->
