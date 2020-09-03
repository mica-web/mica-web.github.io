---
topic: Git
category: Tools
level: [ intro, advanced ]
permalink: /:collection/tools/:name
code_example: false
quiz: false
issues: true
---

{% assign lp = '/learn/tools/' %}
{% assign ip = '/learn/00_tools/img/git/' %}


# {{ page.topic }} (draft in progress)

{: .wip-wrapper}
![This page is a work in progress](https://media.giphy.com/media/SwP1HunIXetehTvy43/giphy.gif)


{: .text-center }
![A meme about naming PhotoShop files.]({{ ip | append: 'wo_git.png' }}){: aria-describedby="wo-git"}

{: #wo-git .u-sr-only }
Headline: Every Designer In This World. Followed by a series of icons of PhotoShop files named New.psd, NewFinal.psd, NewFinalFinal.psd, NewFinalestFinal.psd, NewFinalestFinalForSure.psd, and ending with NewFinalestFuckThisShitFinal.psd. Image by Twitter user @AksharPathak.

While a familiar scenario, we can do better than this, and version control helps us do exactly that.

{: .callout }
The content on this page assumes you have already read [Git and GitHub in Plain English](https://blog.red-badger.com/2016/11/29/gitgithub-in-plain-english) and uses vocabulary defined in that reading.

## Git basics

Even very simple web projects are made up of a collection of files:

- an HTML document for each page of your content
- one or more CSS files for the styling of that content
- image files referenced in your HTML or CSS

{: .text-center }
![]({{ ip | append: 'git01.png' }})

There are even likely to be folders inside your project, for example, an "images" folder to organize all the image files.

Git allows you to track changes on these files -- their content as well as their names and organization.

Additionally, while saving a file only affects individual files, git introduces a concept called a **commit** which allows you to save a group of changes across files along with notes (called a **commit message**) about those changes.

In this way, when you add a new image file to your web project and then reference it in the HTML document, both changes can be tracked as a unit as a **commit**.

## Getting started with git

{: .callout }
<span class="emoji">💡</span> While there are references to specific commands in the following text, this is just informational at this point. You are **not** meant to be following along and running these commands.

In order to use git in a project, you first need to run a command to tell git to start paying attention to your project. Running the command `git init` inside your project folder on the command line **initializes** git in your project.

While nothing changes visually in your project folder after running this command, there are some git concepts that have now been added:

{: .text-center }
![]({{ ip | append: 'git02.png' }})

- the **working directory** is your project folder with all your current work
- the **staging area** is a holding cell for changes you're going to commit to your repo
- the **repository** is your current work, plus the entire git history of your commits and any alternate versions you may have created along the way

{: .callout }
Again, these are **not** ever visible in your project folder -- they're entirely conceptual. You need to use the command line or another tool (like VS Code or [GitHub Desktop](https://desktop.github.com/)) to be able to see these changes.

If it helps, imagine that the **repo** is a storage unit and the **working directory** is your house or apartment. The **staging area** is the boxes you put your stuff in to designate that you're going to take it off to the storage unit. You can move stuff in and out of those boxes as much as you like before **committing** (see what I did there?) to the storage unit.


