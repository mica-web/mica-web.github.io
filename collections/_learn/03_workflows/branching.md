---
topic: Git Branches
category: Workflows
level: [ intro, advanced ]
permalink: /:collection/workflows/:name
code_example: false
quiz: false
issues: true
---

{% assign ip = '/learn/03_workflows/img/' %}


# {{ page.topic }}

{: .wip-wrapper}
![This page is a work in progress](https://media.giphy.com/media/SwP1HunIXetehTvy43/giphy.gif)

When you create a new repo in git, a branch named **master** is created; you don't have to do anything to gain this, it is done automatically for you.

{: .callout }
You may have noticed this info when you ran `git status` commands; you usually receive some output back that tells you what branch you're currently working on.

When you've added commits so far, they've all gone to this master branch. While this is a fine way to use git for your solo work, it doesn't let you enjoy all the power of git and it makes it difficult for me to review your work.

Instead, when you collaborate with others, you want to create a copy of this master branch, make all your changes in that copy and then share your changes via GitHub in a pull request.

<span class="emoji">🤔</span> That was a lotta words and all of them may not yet make sense. Let's walk through the process step by step.

## Step 1
To create a copy of the master branch to work from, type `git checkout -b new-branch` in your Glitch Console and press **Enter**.

{: .text-center }
![]({{ ip | append: 'branching01.png' }})

This command does a couple of things:
1. It creates a copy of the **master** branch named **new-branch**. This copy includes all your commits to date.
1. It switches your working branch from **master** to **new-branch**.

You can view the effects of this by typing `git branch` in the console; the output will be a list of your current branches with an asterisk marking the branch you're currently working on.

{: .text-center }
![]({{ ip | append: 'git-branch.png' }})



