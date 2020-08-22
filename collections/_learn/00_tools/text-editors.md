---
topic: Text Editors
category: Tools
level: [ intro, advanced ]
permalink: /:collection/tools/:name
code_example: true
quiz: false
issues: true
---

{% assign lp = '/learn/tools/' %}
{% assign ip = '/learn/00_tools/img/' %}


# {{ page.topic }}

## Introduction
A text editor is a program that help you write and edit code.

Since code is made up of words, you might think a text editor is similar to a word processing program (like Microsoft Word or Google Docs), but they differ in some pretty important ways. Word processing programs create **rich text**, which includes a lot of information about how the text is formatted: Is it bold? What color is it? What font is used? When I save a document in a word processor and share it with another person, I expect this formatting information to be shared with them, too. So, if my report uses the font Arial, I expect anyone else who opens the report to also see it in Arial. 

Text editors create **plain text**; they essentially just save the characters you see on your screen with no formatting information. While that sounds pretty boring, text editors have some powerful features that make writing code faster and easier.

## Text editor benefits

### File and folder organization
While a report in Microsoft Word or Google Docs might be complete all on its own, web projects rely on many different files to create a web page or site:
- HTML for the layout
- CSS for the style of the document
- image files for any photos or illustrations included

Text editors have a concept of project folders -- so you can access and view not only the file you're working on right now, but also any related files. As a point of reference, as of the time when I'm writing this, the site for this course has more than 400 files -- being able to navigate through those when working on any given page while staying in the same program where I'm working is a huge time saver.

### Find and replace
Text editors provide the capability to search in individual documents or within whole folders for a word or phrase and, additionally, to replace the search term(s) with another word or phrase. So, if MICA changed the course number of GD 431, it would be a pretty simple exercise to replace all existing mentions of GD 431 on this site with the new number using my text editor.

If you've used this feature in word processing or other software, you likely know what to expect here.

### Syntax highlighting
Remember how text editors create plain text? That doesn't mean that fonts and colors _aren't_ used in the editor -- it just means those fonts and colors are part of your editor's settings and not saved or shared when you save the file.

As a result, color can be automatically applied to your document to highlight specific bits of code, like in this HTML example: 

{% highlight html %}
<a href="https://www.instagram.com/">
  <img src="/images/icon-insta.png" alt="See my photos on Instagram.">
</a>
{% endhighlight %}

In the example above:
- HTML elements (`a` and `img`) are in purple,
- attribute names (`href`, `src`, `alt`) are in green and
- the values for the above-mentioned attributes are in red.

Even if you can't read this code example, you might start to understand that similarly colored bits of text have something in common. And making those similarities easily visible is the point of syntax highlighting.

### Automatic formatting
Because writing code involves **nesting** code -- that is, placing chunks of code inside other bits of code -- the layout or formatting of your code files can help with understanding the structure of your code and even spotting bits of broken code.

There's no need for you to handle this formatting yourself, though, as most text editors can automatically format your code when you save your files or when you run a command to format the file. 

In the previous HTML example, there was a tiny bit of nesting -- the `a` element wraps around the `img`.  In this GIF, you can see the formatting applied as a I save the file, making the nested code on line 2 more evident.

![Animated screen capture of autoformatting in VS Code.]({{ ip | append: 'autoformat.gif' }})

{: .callout }
You may have noticed that the syntax highlighting in this example is different. That's because I'm using a different highlighting theme on this site (first example) compared to inside my text editor (this GIF). You'll be able to choose your own theme when working inside your text editor.

### Line numbers
In the previous example, I was able to refer to a specific section of code by its line number. Most text editors display line numbers on the left side of the code (see the 1, 2, 3, 4 above?), making it easier for folks to discuss code. With  line numbers, I don't have to describe the context of the image ("The fourth image in your site header...") and hope you understand, but can instead be very specific ("The image on line 2.").

### Automatic text completion
Because text editors are mainly for writing and editing code, they can also be very smart about the code you're writing and help you avoid mistakes by suggesting bits of code, like this example of CSS autocompletion:

![Animated screen capture of autocompletion in VS Code.]({{ ip | append: 'autocomplete.gif' }})

In the above example, as I'm typing, my text editor is making recommendations along the way, both for properties and possible values. Pressing `tab` or `enter` allows me to accept the recommendation, or I can use the arrow keys to scroll through other options, like I do when selecting `blueviolet` from the color list.

## Your text editor
Now that we've talked about text editors generally, let's get you started with the text editor you'll be using for this course: [Visual Studio Code]({{ lp | append: 'vs-code' }})
