---
topic: Git Cheatsheet
category: Tools
level: [ intro, advanced ]
permalink: /:collection/workflows/:name
code_example: true
quiz: false
issues: true
---

{% assign ip = '/learn/00_tools/img/' %}


# {{ page.topic }}

Looking for a quick assist on a git issue?

* TOC
{: toc }

## Just give me a quick rundown

- `git status` to get details about your work, including your current branch name and details about any changes you've made
- `git add example.html` stages the changes from a single file (replace `example.html` with the actual filename)
- `git commit -m "Your message here"` will commit all the staged changes with the message you add between the double quotes (replacing "Your message here")
- `git push` will send all the changes you've committed to to your GitHub repo <span class="emoji">🎉</span>

## What's going on with my project?
`git status`

This provides an output of information, including your current branch name and details about any changes you've made.

## I've created/added a new file, now what?
`git add example.html`

<span class="emoji">🙈</span> Remember to replace `example.html` with your actual filename

This stages the changes from a single file.

{: .callout }
This is only one step in the git workflow, you still need to make a commit and push for your changes to show up on GitHub.

## I've made changes in more than one file and want to stage them.
`git add .`

This stages the changes from **all** your modified files.

<span class="emoji">⚠️</span> You should not use this without first running `git status` to fully understand _which_ files git thinks have been modified. <span class="emoji">⚠️</span>

{: .callout }
This is only one step in the git workflow, you still need to make a commit and push for your changes to show up on GitHub.

## The console says I have "changes to be committed."
`git commit -m "Your message here"`

<span class="emoji">🙈</span> Remember to replace `Your message here` with your actual commit message

This will make a commit of _all_ the staged changes with the message you add between the double quotes.

## My changes aren't showing up on GitHub!!

**First**, if you are working on a branch _other_ than your `master` branch, remember that GitHub defaults to the `master` branch.

You must use the branch name dropdown on your repo homepage to view the code and commits from the branch you are currently working on.

![Animated screenshot of the branch selector dropdown on GitHub.]({{ ip | append: 'github-change-branch.gif' }})

If that doesn't show you what you expect to see, **next** open up VS Code and the Glitch Console and run our familiar friend: `git status`

<span class="emoji">👉🏻</span> Does it say your branch is ahead by any number of commits? If so: `git push` will send all the changes you've committed to to your GitHub repo.

{: .callout }
If you've attempted **both of these things** and you're still not seeing the same thing in Glitch _and_ GitHub, send me a DM via Slack, and we'll figure it out!
