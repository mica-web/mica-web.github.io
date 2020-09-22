---
topic: Fonts
category: CSS
level: [ intro, advanced ]
permalink: /:collection/css/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/' %}


# {{ page.topic }}

In [CSS Typography]({{ lp | append: 'css/typography' }}), you learned about some of the ways you can modify how text looks in the browser, but not how to change the actual font your text displays in. Let's dig into that now.

{: .text-center }
![Text says So excited for this and Kermit the frog waves his arms enthusiastically.](https://media.giphy.com/media/Lr3UeH9tYu3qJtsSUg/giphy.gif)

## CSS property
The property that changes the font is `font-family`. It is common practice to include multiple values for the font in order to provide a reasonable <b>fallback</b> if the font you've selected is not available to the user. The list of values provided for `font-family` is referred to as a <b>font stack</b>.

## Font stack values
Each font stack should end with a <b>generic family name</b>; these represent the fallback of last resort. Some valid options for the generic family name include:
- `serif`
- `sans-serif`
- `monospace`

You can view a full list of [generic family names](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#%3Cgeneric-name%3E){% include optional.html %} on MDN.

In addition to the generic family name, you can also provide one or more <b>family names</b> of specific fonts. Family names should always be in double quotes, like so: `"Helvetica Neue"`.

{: .callout }
The double quotes are important because, without them, font family names with spaces in them would be broken. While `"Helvetica"` doesn't need quotes for this reason, it's just better to be consistent and avoid this issue.

A complete font stack for Helvetica might then look something like this:

```css
body {
  font-family: "Helvetica Neue", sans-serif;
}
```

### Web-safe font stacks
Originally, CSS didn't allow you to use external fonts in a design, which meant you were limited to using the fonts available on a user's system -- which, of course, varied not only from operating system to operating system, but also from user to user. <span class="emoji">😱</span>

The site [CSS Font Stack](https://www.cssfontstack.com/){:target="_blank"} provides a list of fonts and how common they are on Windows and Mac OSes. Take our earlier example of [Helvetica](https://www.cssfontstack.com/Helvetica){:target="_blank"} -- while the font is available on 100% of Macs, it's only on 7% of Windows systems. This means the previous font stack is _not_ <b>web safe</b> because it doesn't provide a similar font for most users.

If you wanted to use Helvetica in your design, the site recommends a font stack that looks like this:

```css
body {
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
```

This is a much more comprehensive font stack because it provides two different family names for Helvetica and uses Arial -- which is on over 99% of Windows systems and nearly as many Macs -- as a replacement option.

Given the limitations of this method of declaring fonts, is there any reason to still do it? Absolutely! While, as designers it's frustrating to cede control to the limitations of a user's system, providing fonts in this way has a few benefits:

- **Your web pages will load faster.** Using web-safe font stacks means you don't ask the user to download any other font resources.
- **Your designs are less brittle.** You're not relying on any external resources that could break or be unavailable.

### Web fonts
You are not limited, however, to using only fonts on a user's system. It's possible to provide your own font files either that you host or provided by an external service, like:
- [Google Fonts](https://fonts.google.com/about){:target="_blank"} -- free
- [Adobe Fonts](https://fonts.adobe.com/about){:target="_blank"} -- subscription based
- [Fonts.com](https://www.fonts.com/web-fonts){:target="_blank"} -- purchase / subscription

In general, I recommend using a hosted service because they will have done some additional work to make sure their fonts are being delivered in the best way to optimize the font _and_ the performance of its delivery.

The following two-part video walks you through the process of adding [Google Fonts](https://fonts.google.com/) to your web project.

{: .callout }
Want to follow along with this video? You can remix my [Google Fonts Demo](https://glitch.com/edit/#!/google-fonts-demo).

<div class="loom-embed-wrapper" style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/78d4a2950d09467a9e638356c9c8fc27" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

<div class="loom-embed-wrapper" style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/6a90519a4a9342caa9e539b6249be163" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

<span class="emoji">💡</span> When using Google Fonts always remember the following:
- Only add the fonts you use in your project, otherwise you'll be asking your users to download unused resources
- Include the exact font weights you need
- Reference a single Google Fonts stylesheet, even when you're using multiple fonts
- Double check the generic font family provided and change it as you choose
