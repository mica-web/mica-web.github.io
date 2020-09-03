---
topic: Command Line
category: Tools
level: [ intro, advanced ]
permalink: /:collection/tools/:name
code_example: false
quiz: false
issues: true
---

{% assign lp = '/learn/' %}
{% assign ip = '/learn/00_tools/img/cli/' %}


# {{ page.topic }}

## Introduction

![A cat is mesmerized by a moving cursor on a computer screen.]({{ ip | append: 'gui.webp' }})

To date, most of your computer experience has been using **graphic user interfaces** (GUI, pronounced like "gooey"). This is a visually intuitive way to interact with your computer using your mouse, trackpad and/or keyboard.

In fact, GUIs are so common, you may wonder: are there other user interfaces for computers? If you've ever spoken to your computer, phone or other device -- saying, "Hey, Google" or "Hey, Siri" -- then you've used a **voice user interface**.

![The pulsing animation that displays when users say Hey Siri.]({{ ip | append: 'hey-siri.gif' }})

Graphic and voice user interfaces are both new additions, however. The original computer interfaces were wholly text based -- the prompts provided by the computer were in text and user input was entirely typed commands.

While GUIs have largely replaced text-based computer interfaces, they are still used and useful.

## Why use the CLI 
![A woman, who is blonde and white, mimics typing on a keyboard, then speaks into her smart watch, saying We're in.]({{ ip | append: 'cli-hacking.webp' }})

Images of the **command line interface** (or CLI) in popular media are often tied to hacking -- like in The Matrix or Mr. Robot -- but there are common legit reasons to use the command line, too.

While GUIs are far more intuitive, the command line can be faster and allow for greater customization and automation.

Many developer tutorials expect some degree of familiarity with the command line. So, while it may be a bit intimidating to start with, it's worth tackling. This course won't provide an in-depth overview of the CLI, but you will use it for interacting with git and [GitHub]({{ lp | append: 'tools/github' }}).

Both [VS Code]({{ lp | append: 'tools/vs-code' }}) and [Glitch]({{ lp | append: 'tools/glitch' }}) have an integrated command line, which is called **Terminal** or sometimes **Console**.

{: .callout }
While there are some technical differences between a terminal, a console, and the command line, they're not important to get into at this point. Going forward, the class documents will always refer to console, since that's the name used in for the Glitch terminal _inside of_ VS Code. <span class="emoji">👍🏻</span>

Learn more about the:
- [VS Code Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal){% include optional.html %} 
- [Glitch Terminal](https://glitch.happyfox.com/kb/article/48-i-ve-got-mad-skillz-i-need-a-terminal-command-line-console/){% include optional.html %} 
