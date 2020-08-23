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
{% assign ip = '/learn/00_tools/img/' %}

# {{ page.topic }}

## Introduction

![]({{ ip | append: 'gui.webp' }})

To date, most of your computer experience has been using **graphic user interfaces** (GUI, pronounced like "gooey"). This is a visually intuitive way to interact with your computer using your mouse, trackpad and/or keyboard.

In fact, GUIs are so common, you may wonder: are there other user interfaces for computers? If you've ever spoken to your computer, phone or other device -- saying, "Hey, Google" or "Hey, Siri" -- then you've used a **voice user interface**.

![]({{ ip | append: 'hey-siri.gif' }})

Graphic and voice user interfaces are both new additions, however. The original computer interfaces were wholly text based -- the prompts provided by the computer were in text and user input was entirely typed commands.

While GUIs have largely replaced text-based computer interfaces, they are still used and useful.

## Why use the CLI 
![]({{ ip | append: 'cli-hacking.webp' }})

Images of the **command line interface** (or CLI) in popular media are often tied to hacking -- like in The Matrix or Mr. Robot -- but there are common legit reasons to use the command line, too.

While GUIs are far more intuitive, the command line can be faster and allow for greater customization and automation.

Many developer tutorials expect some degree of familiarity with the command line. So, while it may be a bit intimidating to start with, it's worth tackling. This course won't provide an in-depth overview of the CLI, but you will use it for interacting with git and [GitHub]({{ lp | append: 'tools/github' }}).

Both [VS Code]({{ lp | append: 'tools/vs-code' }}) and [Glitch]({{ lp | append: 'tools/glitch' }}) have an integrated command line, which is called **Terminal**.

{: .callout }
While there are some technical differences between a terminal and the command line, they're not important to get into at this point. Going forward, the class documents will always refer to terminal, since that's the name used in both VS Code and Glitch. <span class="emoji">👍🏻</span>

Learn more about the:
- [VS Code Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)
- [Glitch Terminal](https://glitch.happyfox.com/kb/article/48-i-ve-got-mad-skillz-i-need-a-terminal-command-line-console/)

You open the Terminal in VS Code using the **Terminal** menu; this screen capture shows how to do that and what the terminal looks like when it's open:
![]({{ ip | append: 'vscode-terminal.gif' }})

Your terminal may look slightly different than mine -- both the colors and the information provided. Don't stress about that. <span class="emoji">😀</span>

{: .callout }
It is worth noting that not all terminal commands work across all operating systems or in all environments. If you ever come across a command that doesn't work as expected, it may be for this reason and you should let me know via Slack ASAP.
