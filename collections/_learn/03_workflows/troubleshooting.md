---
topic: Troubleshooting tips
category: Workflows
level: [ intro, advanced ]
permalink: /:collection/workflows/:name
code_example: false
quiz: false
issues: true
---

# {{ page.topic }}

If you're reading this page because something in your current exercise or project is broken, first and foremost:

{: .text-center }
![Cartoon person is sitting in a yoga pose, eyes closed and breathing calmly. Text says Take A Deep Breath.](https://media.giphy.com/media/U5aefu6Sbf8Cg1lisU/giphy.gif)

Remember:  Troubleshooting is a **normal** part of the coding process. Here are some tips to help you to identify where issues are in your code and for solving those issues:

## <span class="text-larger emoji">🧹</span> Clean up/organize your code

  - Make sure you have proper indentation; this makes it easier to find missing closing tags in HTML or closing brackets in CSS.
  - Alphabetize your CSS properties; this makes it easier to spot if you have written a rule that is overriding another.

## <span class="text-larger emoji">🔍</span> Review your code for:

  - misspelled properties, elements or classnames
  - mismatched classnames (e.g., the classname in your HTML and CSS don't match)
  - missing brackets or semicolons
  - spaces between numbers and units (e.g., `width: 20 px;`)
  - missing hyphens in properties or classnames

## <span class="text-larger emoji"> 🕵🏻‍♂️</span> In your browser, use dev tools to explore the problem

  - Does the HTML structure look wonky? You may be missing a closing tag somewhere.
  - In the CSS explorer, is a declaration unexpectedly marked out? This means the code is either broken or is being overwritten by another declaration.

## <span class="text-larger emoji">🔲</span> Isolate the problem by commenting out code that you think is unrelated

## <span class="text-larger emoji">◻️</span> Start fresh; create a new Glitch and retype the code you think is creating the problem.

  - Don't copy and paste, as that would negate the purpose. This is a fine way to catch misspellings or missed elements, like a unit or bracket.

## <span class="text-larger emoji">👀</span> Ask someone else to look at your code (ideally, either on GitHub or isolated in a Glitch so they can muck around a bit)

  - Their fresh set of eyes may catch something you've glanced over.
  - Your colleague may understand a specific bit of code better than you do (e.g., they may know that a value is invalid for the property you're using).

## <span class="text-larger emoji">💡</span> Take a break

  - Exhaustion and mounting frustration do not make for clearheaded troubleshooting. Even walking away for 5-10 minutes can help you reset.
  - I know this is hard to accept when it's an hour before something is due, so try to give yourself plenty of time to complete assignments.

## <span class="text-larger emoji">💾</span> Catch mistakes earlier by saving early, saving often and verifying your changes in the browser
