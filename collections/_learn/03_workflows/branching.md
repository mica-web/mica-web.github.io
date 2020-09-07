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

When you create a new repo in git, a branch named <b>master</b> is created; you don't have to do anything to gain this, it is done automatically for you.

{: .callout }
You may have noticed this info when you ran `git status` commands; you usually receive some output back that tells you what branch you're currently working on.

When you've added commits so far, they've all gone to this master branch. While this is a fine way to use git for your solo work, it doesn't let you enjoy all the power of git and it makes it difficult for me to review your work.

Instead, when you collaborate with others, you want to create a copy of this master branch, make all your changes in that copy and then share your changes via GitHub in a pull request.

<span class="emoji">🤔</span> That was a lotta words and all of them may not yet make sense. Let's walk through the process step by step.

{: .callout }
<span class="emoji">💡</span> While there are references to specific commands in the following text, this is just informational at this point. You are _not_ meant to be following along and running these commands.

## Step 1
To create a copy of the master branch to work from, type `git checkout -b new-branch` in your Glitch Console and press <kbd>Enter</kbd>.

{: .text-center }
![]({{ ip | append: 'branching01.png' }})

This command does a couple of things:
1. It creates a copy of the <b>master</b> branch named <b>new-branch</b>. This copy includes all your commits to date.
1. It switches your working branch from <b>master</b> to <b>new-branch</b>.

{: .callout }
The name <b>new-branch</b> is for demonstration purposes only. Usually, you would want to name your branch something related to what changes you plan on making to your project. **Branch names should be all lowercase and cannot have spaces in them.**

You can view the effects of this by typing `git branch` in the console; the output will be a list of your current branches with an asterisk marking the branch you're currently working on.

{: .text-center }
![Output of git branch command. List is: master, *new-branch.]({{ ip | append: 'git-branch.png' }})

Additionally, if you type `git status`, you should now see that it says "On branch new-branch" instead of "On branch master."

Once you've created a new branch and switched to it, all your commits going forward will be added to this branch.

{: .text-center }
![]({{ ip | append: 'branching02.png' }})

Just like a commit is a group of changes to files that are related, a branch is a group of commits that are related.

### Why use branches?
If the only change you're making to a web project is updating a couple of sentences or fixing a broken link, this process likely feels like overkill.

However, if you had a single page site with very little content and were going to redo that site to have more content and multiple pages, it's unlikely you'd want to do all that work in a single commit. Also, it would be helpful to view _all the changes_ related to this update in one group. Using git branches gets you all that.

{: .text-center }
![Example of a single-page web page about my cat and an update to a more complex site.]({{ ip | append: 'example-project.png' }})

### Switching between branches
At any time, you can switch between your branches via the `checkout` command.

- `git checkout master` will switch you over to the master branch
- `git checkout new-branch` will switch you back to your working branch
- `git branch` will list all your current branches, if you're struggling with remembering a branch name
- `git branch` and `git status` will tell you which branch you're currently on

{: .callout }
It's not uncommon during my workday for me to be switching between multiple branches, both to add to my own work but also to review the work of my colleagues on their branches. For your work this semester, you will likely only need your current working branch and the master branch.

## Step 2
To date, there has been no pushing/pulling, so GitHub doesn't yet know about your new branch. At any point, you can push your new branch up to GitHub; you _do not_ need to wait until your project or work is complete.

To push your new branch up to GitHub, use the following command:

`git push gh new-branch`.

- `git push` is the command; just like you've done before
- `gh` is the name of your remote; we set this up back during week 01
- `new-branch` is the name of your branch

After you do this push, if you go to your repo page on GitHub, you should see a banner asking if you want to make a pull request.

![Screenshot of repo homepage and the new button that says Compare & Pull Request.]({{ ip | append: 'pull-request01.png' }})

Clicking that button will open a blank pull request template for you and, clicking one more green button -- this time: "Create pull request" -- will actually create the pull request.

![Screenshot of a new pull request on GitHub.com]({{ ip | append: 'pull-request02.png' }})

You can update your pull request info at any point _and_ it will continue to update with any new commits you make to your working branch, so it's absolutely fine to create the pull request when you start a new project.

## Step 3
When the changes on your working branch are all complete and have been tested and reviewed, git also has a simple process for taking all the commits you made on your working branch and reintroducing them back to master; this is called <b>merging</b>.

{: .text-center }
![]({{ ip | append: 'branching03.png' }})

To merge your work, you must:
1. Switch to the master branch via `git checkout master`.
1. Perform the merge via `git merge new-branch`.

Now all the changes you made as part of <b>new-branch</b> are part of <b>master</b>. <span class="emoji">🎉</span>

{: .callout }
For any of your graded projects this semester, you should never merge back to master until _after_ I have reviewed and graded your work. I will always specifically call out when you should do a merge.

It is also possible to merge your code via the GitHub UI, and we will walk through that process after you've completed Project 01.

## Summary of commands
- `git status` provides an output of information, including your current branch name and details about any changes you've made
- `git checkout -b new-branch` creates a new branch (with the name <b>new-branch</b> or whatever you write here) and switches to that branch immediately
- `git branch` displays a list of your branches and identifies your current branch with an asterisk
- `git push gh new-branch` pushes the named branch with all its current changes to a remote repo (in this case, a remote named <b>gh</b> for GitHub)
- `git checkout master` switches between branches (in this case, from your current branch to the master branch)
- `git merge new-branch` merges the changes from the named branch (in this case <b>new-branch</b>) to whichever branch you are currently on
