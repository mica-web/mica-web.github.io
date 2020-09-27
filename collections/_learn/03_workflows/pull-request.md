---
topic: Pull request
category: Workflows
level: [ intro, advanced ]
permalink: /:collection/workflows/:name
code_example: false
quiz: false
issues: true
---

{% assign ip = '/learn/03_workflows/img/' %}


# {{ page.topic }}

## Introduction
A <b>pull request</b> (PR) on GitHub is a process of

- comparing the work on your branch against another branch (often the master branch)
- evaluating if the code _can_ be merged into that branch

These two steps are handled entirely by automation provided by the combination of git and GitHub. No user intervention needed (thanks, helpful robots <span class="emoji">🤖</span>).

When everything is golden, GitHub will include a clear notification that your work can be merged.

![This branch has no conflicts with the base branch.]({{ ip | append: 'pr-merge.png' }})

However, a PR is also an opportunity for a discussion and review of the code that is being submitted. In this way, when you create a PR and share it with me, I can then see the changes you've made, file-by-file and line-by-line, and provide comments and suggestions about that code.

For this reason, **your project PRs should never be merged until after you have received a grade.**

## Creating your pull request
Usually, after you push to GitHub a new branch with some changes, you will see a notification on your repo homepage.

![Test (branch name) had recent pushes less than a minute ago. Followed by a button action to compare and pull request.]({{ ip | append: 'pr-create1.png' }})

If you do not see that option, you can use the branch select dropdown to switch to your branch and then select "Pull Request" to create your PR.

![This branch is 1 commit ahead of master. Followed by links for: pull request, compare.]({{ ip | append: 'pr-create2.png' }})

The PR form has two elements:

1. A title: What is your summary description of these changes?
2. A description: More detail about your project. I will provide you with prompts to aid the writing of your PR description.

![]({{ ip | append: 'pr-template.png' }})

{: .callout }
You may create a PR any time after you have pushed your first changes to your branch. The PR will update with all future commits to the branch and be an accurate portrayal of all your work on the branch, regardless of when the PR itself is created.

You can edit the PR form at any time by:

- using the Edit button to update the title
- using the menu icon (represented by three dots) and selecting Edit to update the PR description

![]({{ ip | append: 'pr-edit.gif' }})
