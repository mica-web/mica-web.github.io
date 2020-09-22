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

<span class="emoji">👉🏻</span> Please note that this will go most smoothly if you have an uninterrupted 30 minutes to work through these steps from start to finish.

## Step 1: Create a new repository

{: .callout }
<span class="emoji">👀</span> I have also created a [step-by-step video](https://www.loom.com/share/cca15d1dd0864e4dacb17790994cec04){:target="_blank"} <span class="text-faded">(2mins)</span> of this process.

Starting on [GitHub](https://github.com), log into your account, and then create a new repository following [these directions](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository).
- Name your repo <b>project1</b> with no spaces.
- Make your repo public.
- Don't check any of the extra checkboxes.

See this screenshot for a full view of the settings to create the new repo:
![Create repo settings on GitHub]({{ ip | append: 'new-repo-settings.png' }})

When you've correctly entered everything, click the <b>Create repository</b> button. You'll end up with a page full of instructions; leave this page open for now, and you'll come back to it later.

## Step 2: Remix a project on Glitch

{: .callout }
<span class="emoji">👀</span> I have also created a [step-by-step video](https://www.loom.com/share/b9dc8909b0414ab685bdad5ba30a8fe0){:target="_blank"} <span class="text-faded">(2mins)</span> of this process. The video does _not_ cover all the info in the text below, though, so you should still read through the instructions.

Next, open a new tab or browser and go to [Glitch](https://glitch.com) and log into your account. Open up my [starter project](https://glitch.com/edit/#!/mica-web-starter) and remix the project:

![Click the project name and choose "Remix Project"]({{ ip | append: 'glitch-remix.gif' }})

As you can see above, the original project is named <b>mica-web-starter</b> and then a copy is created with the dynamically generated name <b>south-shell-shoemaker</b>. In your remix, you can rename this project to something more relevant or keep the creative name Glitch has assigned.

{: .callout }
Both GitHub and Glitch have the concept of taking existing work and creating your own copy or version; on GitHub, this is called [<b>forking</b>](https://docs.github.com/en/github/getting-started-with-github/github-glossary#fork) {% include optional.html %}  and on Glitch it's called [<b>remixing</b>](https://glitch.happyfox.com/kb/article/23-what%E2%80%99s-remixing/).{% include optional.html %} As you can see in the above screen capture, you can copy your own work as well as other people's.

Now you have a project on Glitch and a repo on GitHub and are ready to connect them both.

Open up VS Code and access the Command Palette (<b>View > Command Palette</b>), then type "Glitch" and select <b>Glitch: Show Commands</b>. This will open up a new menu and you should select <b>Open Project</b>. Then select the project you just created; those files will now be visible and editable inside of VS Code.

## Step 3: Create SSH authentication

{: .callout }
<span class="emoji">👀</span> I have also created a [step-by-step video](https://www.loom.com/share/e4d7ced45dd443e9b232cb9fdd1ecc50){:target="_blank"} <span class="text-faded">(5mins)</span> of this process. **The video does _not_ cover all the info in the text below, though, so you should still read through the instructions.**

{: .callout }
The next steps will involve using the <b>command line</b>. If you haven't used the command line or console before, I've written a [short introduction to the command line]({{ lp | append: 'tools/command-line' }}) that you should review first.

Open up the Command Palette again and again type "Glitch." This time, select <b>Glitch: Console</b>. This will open up your console view in VS Code.

{: .callout }
In the rest of these directions, whenever I use the word "console," I specifically mean the Glitch console in VS Code.

In the console, type `ssh-keygen` and press <kbd>Enter</kbd>.

{: .callout }
Pressing <kbd>Enter</kbd> in the console is what runs a command. It's always a good idea to slow down and check what you've typed _before_ pressing <kbd>Enter</kbd>.

After you press <kbd>Enter</kbd>, you'll get a series of prompts in the console. You should press <kbd>Enter</kbd> through each of them and don't have to add any additional information.

This screenshot shows the prompts you should see and the beginning of the success message you'll see:

![After completing the ssh-keygen command, the success message says Your identification has been saved in /app/.ssh/id_rsa.]({{ ip | append: 'console-ssh-keygen.png' }})

You have just created an SSH key pair which will allow your Glitch project and your GitHub repo to pass information back and forth without passwords.

{: .callout }
If you're interested in more detail about this, you can read about [public key authentication](https://www.ssh.com/ssh/public-key-authentication).{% include optional.html %}

Now you want to take the info from your public key and share it with GitHub. To do this, type `cat .ssh/id_rsa.pub` in the console and press <kbd>Enter</kbd>.

{: .callout }
The `cat` command reads the file you name (in this case, the <b>id_rsa.pub</b> file in your newly created <b>.ssh</b> directory) and prints out the file contents to the console.

Highlight and copy the key that is displayed in the console; it should start with <b>ssh-rsa</b>.

Now, open a new browser window and go to your [GitHub settings](https://github.com/settings/keys).

{: .callout }
This link takes you directly to the page, but you can always get there yourself by clicking your profile photo in the upper-right corner of any page, then clicking <b>Settings</b>. Then, in the user settings sidebar, click <b>SSH and GPG keys</b>.

Click the button to add <b>New SSH key</b> and name the key "Push from Glitch demo". Paste in the public key code you copied from the console and then click <b>Add SSH key</b>. (You may be prompted to enter your GitHub password at this point.)

{: .callout }
Want to see detailed screenshots of the this process? [View this walkthrough from the GitHub docs](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).{% include optional.html %}

Because an SSH key is a form of access to your account, you will also receive an email from GitHub alerting you to this change to your settings.

Now you have a private and public key on Glitch and have added your public key to GitHub. Let's confirm with Glitch that all has gone according to plan.

Back in VS Code, type `ssh -T git@github.com` in the console and press <kbd>Enter</kbd>.

This attempts to open an SSH connection to GitHub. You may see a warning that the authenticity of the host can't be established followed by a prompt asking you if you still want to connect.

If the fingerprint is either:
- `SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8`
- `16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48`

Then you can type "yes" and press <kbd>Enter</kbd>. (You can see and verify this information in the [GitHub docs](https://docs.github.com/en/github/authenticating-to-github/testing-your-ssh-connection).)

At this point, you should see a message in the console with your username, like so:

{: .cli }
> Hi angeliquejw! You've successfully authenticated, but GitHub does not provide shell access.

{: .emoji.text-larger.text-center }
🎉

<span class="emoji">⚠️</span> If you see anything else at this point, please copy the full message from your console and send it to me via DM on Slack, and we'll troubleshoot. You will not be able to continue with these instructions until this is resolved.

## Step 4: Connect Glitch to GitHub

{: .callout }
<span class="emoji">👀</span> I have also created a [step-by-step video](https://www.loom.com/share/585f0336f8644affab2cbc014b69f8bc){:target="_blank"} <span class="text-faded">(5mins)</span> of this process. **The video does _not_ cover all the info in the text below, though, so you should still read through the instructions.**

So, we've now shown that GitHub and Glitch can talk to each other. Your Glitch project is already using git by default -- you didn't have to do anything extra to set this up --  and we can prove that by typing `git status` in the console.

You should see a response like so:

{: .cli }
> On branch master

{: .cli }
> nothing to commit, working directory clean

{: .callout }
`git status` is our way of asking git to tell us some of the information and detail known about our work.

Way back at the end of [step one](#step-1-create-a-new-repository), you created your GitHub repo and got a screen full of instructions. Now you actually need to revisit that page and use some of the info there.

Under the heading <b>Quick setup</b> is an address for your repo; it should start with `git@github.com` and end with `.git`. If it does not look like this, you may need to click the **small SSH button** to update the address. Once you see the correct address, copy this full address.

{: .callout }
For me, this address is `git@github.com:mica-web/mica-web-demo.git`, but your address will be different because the bit immediately after the colon (`:`) will be your GitHub username.

![Screen capture of the GitHub UI and the location of the SSH button.]({{ ip | append: 'git-address.gif' }})

Now, back in VS Code, type `git remote add gh your-address-here` in the console, replacing the <b>your-address-here</b> with the address you copied from GitHub. As an example, here's what the full command looks like for me:

{: .cli }
> git remote add gh git@github.com:mica-web/mica-web-demo.git

When you've got the full command right, press <kbd>Enter</kbd>.

{::options parse_block_html="true" /}
<div class="callout">
If you want to know more, I've broken this command down:
- <b>`git`</b> means this is a git command; all git commands start this way (remember `git status` from earlier?), so you'll be typing this a lot
- <b>`remote`</b> is the word git uses for a location where your code is stored
- <b>`add`</b> is the action; this means we're adding a new remote
- <b>`gh`</b> is the name we're giving the remote (short for GitHub in this case)
- the next bit is the address for the remote we're adding

`git remote add` is the bit that is always consistent; the next two bits are customized based on what you're adding. This is like creating an entry in an address book; we've added an entry named <b>gh</b> and told git where that entry is located.
</div>

To verify that your new remote is in place, type `git remote -v` in the console and press <kbd>Enter</kbd>.

You should see your address listed twice with the name <b>gh</b>.

![Screenshot of the console with the output from the git remote -v command.]({{ ip | append: 'git-remote-v.png' }})

{: .emoji.text-larger.text-center }
🎉

The two actions you see to the right in the parentheses of your address -- <b>fetch</b> and <b>push</b> -- reference the two main ways of sharing information in git.

{: .text-center }
![The pull command comes from GitHub to your computer and the push command goes in the opposite direction.]({{ ip | append: 'git-push-pull.png' }})

- <b>fetching</b> or <b>pulling</b> references bringing code from your repo into your working project
- <b>pushing</b> is going in the other direction -- moving code from your working project into your repo

{: .callout }
This was explained in more detail in [**Git and GitHub in Plain English**](https://blog.red-badger.com/2016/11/29/gitgithub-in-plain-english).

## Step 5: Push Glitch code to GitHub
Now the big finale, the thing we've been working toward all through these steps: Let's get your code from Glitch to GitHub.

In VS Code, type `git push -u gh master` in the console and press <kbd>Enter</kbd>.

Your console will display a bunch of info as it takes the files from Glitch and copies them over to GitHub.

![Example of console output from a git push command.]({{ ip | append: 'git-push.png' }})

If you go back to your browser at the GitHub tab, refresh the page and you should now see the files from Glitch.

{: .emoji.text-larger.text-center }
🎉

Back in VS Code, if you type `git status` in the console and press <kbd>Enter</kbd>, you should see some new information:

{: .cli }
> On branch master

{: .cli }
> Your branch is up-to-date with 'gh/master'.

{: .cli }
> nothing to commit, working directory clean

That second line is telling you that Glitch and GitHub are in sync -- which is exactly what we want to see.

## Step 6: Your first git commit
In VS Code with the demo project open, open the file named `README.md`.

At the top of that file, create a new line and add some text.

{: .callout }
This text can be anything, even just the word "testing." Just remember that we're going to push this change to GitHub, so it shouldn't be private or embarrassing. <span class="emoji">🙈</span>

Now, in the console, if you type `git status`, you'll see there are changes tracked by git:

![Output from git says there are changes not staged for commit and recommends the git add and git checkout commands.]({{ ip | append: 'git-changes.png' }})

Also, git is providing some helpful tips about the commands you can use going forward. What we want to do is stage the changes to the <b>README.md</b> file and commit them.

First, type `git add README.md` in the console and press <kbd>Enter</kbd>.

Then, type `git status` in the console again to see how this has changed things.

While a git commit can include multiple files, in this instance we're just changing one file so we don't need to `git add` anything else.

In the console, type `git commit -m "My first commit"` (make sure to include the quote marks) and press <kbd>Enter</kbd>.

{::options parse_block_html="true" /}
<div class="callout">
- <b>`git commit`</b> says you're making a commit
- the <b>`-m`</b> means you're including a message with your commit (which you always want to do)
- the bit in quotes is your commit message and can be customized
</div>

{: .callout }
Over the course of the semester, we'll talk more in depth about what makes a good commit message, but, for now, "My first commit" is good enough <span class="emoji">👍🏻</span>

Once more, type `git status` into the console. You should now see a notification:

{: .cli }
> Your branch is ahead of 'gh/master' by 1 commit.

Using the `git push` command in the console will then move those changes up to GitHub and another `git status` will show that things are back in sync. If you go to your project on Glitch and your repo on GitHub, both places should now show the changes you made to your `README.md` file.

{: .text-center }
![The title character from Unbreakable Kimmy Schmidt raises the roof in celebration.](https://media.giphy.com/media/18pjPEqqIt2k8/giphy.gif)

If it's helpful, you can also watch me go through the process of editing files in VS Code, committing my changes and pushing those changes up to GitHub.

<div class="loom-embed-wrapper" style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/6b0160e97dcf4aef984b076184729802" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

That's it! You'll be using this demo project and repo throughout the course to practice things, and you'll repeat this process to create new projects and repos for each of your graded projects. But those are tasks for future-you; right now, you should get up, stretch and take a break. <span class="emoji">😀</span>
