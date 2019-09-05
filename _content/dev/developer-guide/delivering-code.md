---
title: GitHub Flow - fork+branch+commit+pull
breadcrumb: GitHub Flow
sidebar: dev
---
Most teams in Watson follow [GitHub Flow](https://guides.github.com/introduction/flow/){:target="_blank"} when delivering code. There are a great many sites on the internet that overcomplicate a model that really just has four main steps.
<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/github-flow.png">

Here's how it all works with the [GitHub Desktop](https://desktop.github.com) application (which automates many steps for you). If you prefer, there's a [command line version of this page](delivering-code-command-line).
> **ProTip:** [Install and configure GitHub Desktop](../tools/github/00-getting-started/) before you start...

___

## Fork & Clone

This will create a personal copy of the repository on github.ibm.com **and** download it to your laptop...
- In your web browser, go to a project's repository and click <img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/github-fork.png" width="77" height="24">
- You'll be asked where to fork the project (pick your username).
- Once the fork has been created, click the green "Clone or download" button, then click "Open in Desktop"
<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/github-clone.png" width="418" height="273">

As long as GitHub Desktop is set up properly you'll soon have a local copy of your fork. Shiny.

___

## Branch

This will create a branch of the repository that you can work in without making changes directly to your `develop` branch (or `master` branch if your team doesn't use a `develop` branch)
- Click the "Add a branch" button and enter a good name (most teams use the pattern: type/issue-number-plus-a-description-of-what-you-are-changing)

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/github-branch.png" width="384" height="229">

The branch is created locally on your laptop. Want to get it to your space on github.ibm.com? Click the "Sync" button in GitHub Desktop.

That's it. Now you can safely start making changes. Sweet.

___

## Commit

As you start to make changes to code on your laptop, you'll see your changed files automagically show up in the list view of the GitHub Desktop application.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/github-commit.png" width="446" height="566">

- To commit your changes, enter a Summary, a Description, then click "Commit to _your-branch-name_"

> **ProTip:** Make sure you follow the patterns used by your Squad. See the patterns section at the bottom of this page for details...



This commit has been done _locally_ on your laptop. To get it into your user space on github.ibm.com, click the "Sync" Button.

> **ProTip:** To automatically sync after committing, select Edit -> "Automatically Sync after Committing".

You can commit multiple times to the same branch.

> **ProTip:** Before you open a Pull Request, click that "Update from `develop`" button to make sure you are in sync with the rest of the project...

When you're done, you're just a button click away from getting your changes into the code review process. Nice.

___

## Pull Request

Creating a pull request starts the code review process and (eventually) ends with your code being merged into the project.

- Click the "Pull Request" button.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/github-pull-request.png" width="243" height="436">

> **ProTip:** If you see a nice big friendly green icon show up, your pull request can be automatically merged. Nice job keeping your branch up to date.

- Click the "Send Pull Request" button.

At this point, the collaborative code review process starts. As you get feedback, you'll probably need to make additional changes. When you do, just repeat the "Commit" steps, GitHub will automagically keep your commits funneling into the same Pull Request. Wonderful.

___

## Wrapping up...

Many teams like to "Squash" commits before merging, this keeps the history nice and tidy. This is easy to do in the GitHub web app.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/github-squash.png" width="345" height="182">

Finally, when you're change has been merged, you can delete your branch. This is also very easy to do in the GitHub web app.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/github-delete-branch.png" width="656" height="71">

**Automagic stuff**
There's a TON of automation here, so much so that many command line git users are deeply skeptical that the flow can be this basic. The truth is that it can be, _much of the time_, but you can still get into trouble with merge conflicts. GitHub Desktop tries to help you out as much as possible, but you may have to return to the command line from time to time.


___

### Patterns...

Most teams use a number of patterns when delivering to GitHub. Check with your Squad to see which of these you use...

## Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

``` bash
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.


The goal of the commit message is to be human readable across a wide variety of devices and interfaces. Any line of the commit message cannot be longer 80 characters and [should preferably wrap at 72 characters](http://stackoverflow.com/q/2290016/57626){:target="_blank"}.

Where possible try to keep the bulk of the first line of the commit under 50 characters, however we realize this can be hard with the `<type>(<scope>):` prefix. This allows the message to be easier to read on GitHub as well as in various git tools.

We allow a very minimal use of markdown within our commit messages. Primarily this relates to the
following elements:

* Bulleted lists. This should be obvious as the markdown version of such lists is very readable.
* Bold characters. Using `*` or `**` around a word for emphasis can helpful, although it should be done sparingly.
* Monospace characters. When embedded a identifier, such as a variable name, inside of prose, it may be more readable to use backticks ( ` ) around the identifier.


## Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit.
In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.


## Type

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

## Scope

The scope could be anything specifying place of the commit change. For example `Training`, `StatusPage`, etc.

## Subject

The subject contains succinct description of the change:

* Use the present tense ("Add server side CSV export" vs "Added server side CSV export")
* Use the imperative ("Add server side CSV export" vs "Add CSV export to server")
* Capitalize the first word in your commit after the <type>(<scope>): identifier
* A title is not a sentence – don't close it with a period
* Assume that your commit message will be rendered as plain text - don't use markdown

Where possible the subject should be under 50 characters. This isn't a hard and fast rule, but it's a general guideline that allows support for as many tools as possible.

## Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

## Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**. If you're working on a larger issue that spans multiple commits it's safe to refer to the issue in the footer, but you may want to squash the history before submitting your pull request.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in the [AngularJS Git Commit Message Conventions][commit-message-format], which we largely inherit.

## Developer Certificate of Origin

All contributions to IBM Watson&trade; Offerings must be accompanied by acknowledgment of, and agreement to, the [Developer Certificate of Origin](http://elinux.org/Developer_Certificate_Of_Origin){:target="_blank"}, reproduced below. Acknowledgment of and agreement to the Developer Certificate of Origin _must_ be included in the comment section of each contribution and _must_ take the form of:

``` bash
DCO 1.1 Signed-off-by: {Full Name} <{email address}>
```

Contributions without this acknowledgment will be required to add it before being accepted. If a contributor is unable or unwilling to agree to the Developer Certificate of Origin, their contribution will not be included.

``` bash
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.
660 York Street, Suite 102,
San Francisco, CA 94110 USA

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.

Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
```

### Example Commit Message

Here's a sample commit message that adheres to our commit message guidelines:

```bash
(doc): Add GitHub Flow to the Developer Guide

Add GitHub Flow to the Developer Guide using GitHub Desktop so that the flow is as easy to understand as possible for users that are new to GitHub. Incorporates content from the Conversation Team’s command line GitHub Flow document.

Closes watson/transformation-tracker#273

DCO 1.1 Signed-off-by: George Champlin-Scharff <georgecs@us.ibm.com>
```

> **ProTip:** adding "closes" or "fixes" in a commit message followed by the org/repo#issue-number will automatically close the issue once the Pull Request has been merged.

### Frequently Asked Questions

**Q:** Why do I need to have the `DCO 1.1 Signed-off-by` line in my commit message? The project isn't open source.<br>

**A:** You're correct, right now most of these projects aren't open source, but some may be in the future. When you put the line `DCO 1.1 Signed-off-by` in your commit you're making an assertion that you wrote the code. This make it easier for us to track down this information the future.<br>

**Q:** Is there an easier way to remember the commit format?<br>

**A:** Yes! You can [create your own `.gitmessage` template](https://robots.thoughtbot.com/better-commit-messages-with-a-gitmessage-template){:target="_blank"} that you can populate when you do a commit.<br>

## Helpful links

- [commit-message-format](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#){:target="_blank"}
- [angularcontributing](https://github.com/angular/angular/blob/master/CONTRIBUTING.md){:target="_blank"}
- [fork](https://help.github.com/articles/fork-a-repo/){:target="_blank"}
- [squashing](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages){:target="_blank"}

## Credits

This document is based on one created for the Watson Conversation Team by Patrick Wagstrom (who based _that_ document on the contributing standards from [Angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md){:target="_blank"}). We are thankful for their work in setting up good standards and norms of software development.

The GitHub Flow image at the top of this page is a modified version of the one from [here](https://desktop.github.com){:target="_blank"}
