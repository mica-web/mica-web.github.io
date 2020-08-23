---
topic: Glitch + GitHub
category: Workflows
level: [ intro, advanced ]
permalink: /:collection/workflows/:name
code_example: false
quiz: false
issues: true
---

{% assign lp = '/learn/' %}
{% assign ip = '/learn/03_workflows/img/' %}


# {{ page.topic }}

If you're tackling this content in order, you should have already read the introduction to [Glitch]({{ lp | append: 'tools/glitch' }}) and [GitHub]({{ lp | append: 'tools/github' }}) and created accounts for both.

Now, you'll learn how to create projects on Glitch and connect them with GitHub. Doing this is helpful for a few reasons:

- It creates another copy of your code on GitHub (think of it as a backup of what's on Glitch).
- It provides you with experience using git commands and GitHub, both of which are commonly used in modern web development.

{: .callout }
Note that it's entirely possible to use Glitch without GitHub and to add non-Glitch projects to GitHub; they're not necessary for each other, but they are complimentary. As part of this course, you may create Glitch projects just for your own experimentation and those will not need to be shared with GitHub. However, **every graded project will be on both Glitch and GitHub** so I can easily review and comment on your code.

Starting on [GitHub](https://github.com), log into your account, and then create a new repository following [these directions](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository).
- Name your repo **mica-web-demo**.
- Make your repo public.
- Don't check the box for "Initialize this repository with a README".

See this screenshot for a full view of the settings to create the new repo:
![Create repo settings on GitHub]({{ ip | append: 'new-repo-settings.png' }})

When you've correctly entered everything, click the "Create Repository" button. You'll end up with a page full of instructions; leave this page open for now, and you'll come back to it later.

Next, open a new tab or browser and go to [Glitch](https://glitch.com) and log into your account. Open up my [starter project](https://glitch.com/edit/#!/mica-web-starter) and remix the project:

![Click the project name and choose "Remix Project"]({{ ip | append: 'glitch-remix.gif' }})

As you can see above, the original project is named **mica-web-starter** and then a copy is created with the dynamically generated name **south-shell-shoemaker**.

{: .callout }
Both GitHub and Glitch have the concept of taking existing work and creating your own copy or version; on GitHub, this is called [**forking**](https://docs.github.com/en/github/getting-started-with-github/github-glossary#fork) and on Glitch it's called [**remixing**](https://glitch.happyfox.com/kb/article/23-what%E2%80%99s-remixing/). As you can see in the above screen capture, you can copy your own work as well as other people's.

Now you have a project on Glitch and a repo on GitHub and are ready to connect them both.

{: .callout }
The next steps will involve using the **command line**. If you haven't used the command line or terminal before, I've written a [short introduction to the command line]({{ lp | append: 'tools/command-line' }}) that you should review.

---


1. Connect Glitch to GitHub
1. In Glitch, Tools -> Terminal
1. In Glitch project terminal:
  - `ssh-keygen`
  - Just press <Enter> to accept all the questions.
  - This process creates a new hidden file: `.ssh/id_rsa.pub`
  - Read the contents of that file by: `cat .ssh/id_rsa.pub`
  - Copy the key
1. On GitHub: Settings -> SSH & GPG Keys -> New SSH key
1. Name "Push from Glitch," paste key
1. Back in Glitch project terminal:
  - `ssh -T git@github.com`
  - May say "Are you sure you want to continue connecting (yes/no)?" If so, type "yes"
  - Should see: "Hi [your GH username]! You've successfully authenticated, but GitHub does not provide shell access."
1. Now GitHub knows about you, but doesn't know about your project. We can prove this by typing:
  - `git remote -v`
1. No remotes.
1. Go back to repo page on GitHub and scroll down to "…or push an existing repository from the command line" heading
1. Copy the address that begins with "git@", e.g. `git@github.com:mica-web/glitch-example.git`
1. `git remote add gh [address here]`
1. `git remote -v` should now show your GH address twice
1. `git branch` -- lists branches; only one: "master"
1. `git push -u gh master` : push this current branch to my GH repo
1. Verify that you now see your files on GitHub 🎉
1. Back in Glitch: `git status`
1. `git checkout -b learning-branches`
1. `git branch`
  - See two branches: master and learning-branches
  - The one with the asterisk is your active branch, where you are currently working
1. Add a new file `project1/index.html`
  - This creates the folder and the file
1. In Terminal:
  - `git status`
  - `git add project1/index.html`
  - `git status`
1. Repeat for 2 more projects; add the files first:
  - `project2/index.html`
  - `project3/indext.html`
1. In Terminal:
  - `git status`
  - `git add .`
    - This adds all the new and/or changed files to your 
  - `git status`
  - `git commit -m "Set up project folders"`
  - `git status`
  - `git push -u gh learning-branches`
💡 Need to explain commits and staging now
1. Verify on GitHub
  - Should see banner with "Compare and pull request" button
  - Should NOT see folders or new files in your repo 🤯
  - Dropdown to switch branches, change to "learning-branches"
  - Now you should see the additions!
💡 Need to explain branch workflow now

1. Create PR on GitHub
  - DO NOT MERGE AT THIS POINT
  - Files changed tab
  - Note that you may see some commits made by Glitch itself as it autosaves things

1. Pull request will stay in sync with your branch. Back to Glitch:
  1. Add another folder: `project4/index.html`
  1. Stage this change (still on the learning-branches branch)
  1. Make a new commit for this file and folder
  1. Push to GitHub
(include these instructions and a "show me how" reveal for more info)
1. On GitHub, should see "new changes since your last visit" on pull request
1. Merge pull request, delete branch.
1. Now your changes are integrated into the master branch 🎉

1. Back on Glitch in the Terminal, `git checkout master && refresh`
  - `refresh` is a Glitch-specific command to make sure what you see in the text editor is in sync with what you expect from the terminal
1. Your project folders aren't there any more, what gives!
1. Your master branch on Glitch is still the old version and not in sync with what's on GitHub. Let's get the latest changes from GitHub.
1. `git fetch` to peek at the changes, but not update
1. `git status` will now tell you you're behind gh/master by a certain number of commits
1. `git pull` pulls those changes from GitHub into Glitch
  - `git pull && refresh` will update the text editor all in one go 🎉
