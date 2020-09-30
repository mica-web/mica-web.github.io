---
topic: Sass Variables
category: CSS
level: [ advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}
Variables are nicknames or shorthand used to refer to other elements in your code. In Sass, it's common to use variables in place of color names and font stacks.

## Step 1: Creating variables
A variable has two parts: the unique name you create for it and the value it stands in for. The name and the value are separated by a colon (`:`). You can name your variables any way that makes sense for you, so long as they follow these basic rules; all variable names:

- **must** begin with a dollar sign (`$`)
- **cannot** begin with a number:
  - <span class="emoji">✅</span> `$test1` is valid
  - <span class="emoji">❌</span> `$1test` is not
- **cannot** have spaces in their name:
  - <span class="emoji">✅</span> `$test-one` is valid
  - <span class="emoji">❌</span> `$test one` is not

Ideally, you should declare your variables at the top of your stylesheet so they can be easily reused throughout the rest of your Sass code.

### Example
The monospace font used on this site is called [Native](https://fortfoundry.com/pages/native){:target="_blank"}{% include optional.html %}. In CSS, whenever I want to use this font, I have to reference the entire font stack, like so:

```css
code {
  font-family: Native-Regular, "Andale Mono", AndaleMono, monospace;
}
```

On this page alone, there more than five elements using this font. That repetition is a chore and usually involves copying and pasting the entire `font-family` declaration from another spot in my stylesheet. But there's an easier way! <span class="emoji">🌈</span>

Instead, using Sass, I can define a variable to represent the entire font stack and reuse it any time I want to use this specific monospace font.

```scss
$font-mono: Native-Regular, "Andale Mono", AndaleMono, monospace;
```

## Step 2: Using variables

{: .callout }
<span class="emoji">⚠️</span> Remember that you **cannot** use a variable in your stylesheet without first creating it and assigning its value. Attempting to do so will cause an error in your Sass.

After I have named my variable (`$font-mono`) and assigned its value (the monospace font stack I'm using), I can now use it on any element where I want to use my monospace font:

```scss
code {
  font-family: $font-mono;
}
```

And when the Sass compiles to CSS, it will look exactly like the first code example on this page. <span class="emoji">🎉</span>

## Why use variables
Because you control the naming of your variables, they provide an easy way to replace hard-to-remember bits of CSS with something you've chosen the name for instead. `$font-mono` is significantly easier for me to remember than the entirety of my monospace font stack.

This is why variable names are great for replacing colors, too. On this site, I use specific shades of green and yellow as accent colors. Because I use Sass variables, I don't have to remember the exact color values or even remember which is which. Is `#A2F1C1` green or yellow? <span class="emoji">🤷🏻‍♀️</span> I don't know and I don't have to care because I use variables instead. When I want green, I say exactly that:

```scss
div {
  background-color: $color-mint;
}
```

Variables are also a useful tool to maintain consistency. For example, on this site, instead of creating unique values everywhere for my margins and paddings, I mostly limit myself to five values, and I've named a T-shirt sized variable for each:

```scss
// SPACING
$spacing-xs: 8px;
$spacing-sm: 12px;
$spacing-md: 16px;
$spacing-lg: 40px;
$spacing-xl: 64px;
```

It's more typing to add `$spacing-xl` than the actual value, but using variables helps keep my spacing consistent, even as I adapt the site styles from mobile to desktop.

## When to use variables
There is definitely a sweet spot with variables -- too many and they be hard to remember or differentiate. Questions to ask yourself before creating a variable:

- Is this value **used in more than one place**? If not, hold off. For example, if I used my monospace font stack on the `body` element and then never changed the font, I wouldn't create a variable for that.
- Am I likely to want to **change or tweak this value**? If so, creating a variable makes sense because it means I only have to make the change in one place, not all over my stylesheets.
- Is the value **meaningful**? This one is harder to explain simply, but it prevents creating variables just because you can. For example, I _can_ create a variable for the value of 3 pixels, like so:

```scss
$pixels-3: 3px;
```

And then I can use that in all sorts of places in my styles:

```scss
h1 {
  margin-top: $pixels-3;
}
main {
  border: $pixels-3 solid green;
  padding: $pixels-3;
}
```

This is _totally_ valid Sass, but it's not really helpful. The margin on my `h1` and the border on my `main` element don't really have anything in common; if I want to change the margin on the `h1`, that's unlikely to affect my thinking about my border styles. 

## Try it

1. Remix [this project on Glitch](https://glitch.com/edit/?utm_content=project_sass-variables&utm_source=remix_this&utm_medium=button&utm_campaign=glitchButton#!/remix/sass-variables). <a href="https://glitch.com/edit/?utm_content=project_sass-variables&utm_source=remix_this&utm_medium=button&utm_campaign=glitchButton#!/remix/sass-variables" class="u-link-reset glitch-remix-button">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="Remix my Glitch Project">
</a>
  - This uses the same markup and styles from the lesson on [organizing your CSS]({{ lp | append: 'css/organization' }})
  - This link will automatically remix the project for you;  <span class="emoji">👍🏻</span> no need to remix yourself.
1. **Do not edit the `styles.css` file.** This gets automatically generated/updated when you make changes to the Sass file.
1. Open and look at the `sass/styles.scss` file.
  - Other than updating the format of some of the comments, this file is unchanged from the earlier lesson. I just copied and pasted the whole original CSS file.
  - This is the file you should be editing.
1. In the `sass/styles.scss` file, change the color palette (lines 5-9) into Sass variables.
1. Use the variables in place of the HSL values in the remainder of the stylesheet.
  - If you attempt to use a variable that you haven't created, Glitch will show an error, like so:

```bash
Error: Undefined variable
   |
91 | background-color: $color;
   |                   ^^^^^^
sass/styles.scss 91:21 root stylesheet
```

This error tells me:
- I'm attempting to use a variable before I've created it (`undefined variable`)
- What the invalid variable name is (`$color`)
- What file it's in (`sass/styles.scss`)
- What line it's on (line 91)

Which should be all the info you need to fix the issue. Thanks, Glitch! <span class="emoji">😄</span>

For the purposes of this demo, you should not need to make changes to the HTML document.

{: .text-push--top }
[&#x21b5; back to Sass intro]({{ lp | append: 'sass#variables' }})
