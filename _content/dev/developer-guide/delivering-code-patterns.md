---
title: Commit Patterns
breadcrumb: Commit Patterns
sidebar: dev
---
## Patterns...
Most teams use a number of patterns when delivering to GitHub. Check with your Squad to see which of these you use...

# Commit Message Format
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

# Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.
In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.


# Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

# Scope
The scope could be anything specifying place of the commit change. For example `Training`, `StatusPage`, etc.

# Subject
The subject contains succinct description of the change:

* Use the present tense ("Add server side CSV export" vs "Added server side CSV export")
* Use the imperative ("Add server side CSV export" vs "Add CSV export to server")
* Capitalize the first word in your commit after the <type>(<scope>): identifier
* A title is not a sentence – don't close it with a period
* Assume that your commit message will be rendered as plain text - don't use markdown

Where possible the subject should be under 50 characters. This isn't a hard and fast rule, but it's a general guideline that allows support for as many tools as possible.

# Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#  Footer
The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**. If you're working on a larger issue that spans multiple commits it's safe to refer to the issue in the footer, but you may want to squash the history before submitting your pull request.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in the [AngularJS Git Commit Message Conventions][commit-message-format], which we largely inherit.

# Developer Certificate of Origin

All contributions to IBM Watson&trade; Offerings must be accompanied by acknowledgment of, and agreement to, the [Developer Certificate of Origin](http://elinux.org/Developer_Certificate_Of_Origin){:target="_blank"}, reproduced below. Acknowledgment of and agreement to the Developer Certificate of Origin _must_ be included in the comment section of each contribution and _must_ take the form of:
``` bash
DCO 1.1 Signed-off-by: {Full Name} <{email address}>
```

Contributions without this acknowledgment will be required to add it before being accepted. If a contributor is unable or unwilling to agree to the Developer Certificate of Origin, their contribution will not be included.

```
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

```
(doc): Add GitHub Flow to the Developer Guide

Add GitHub Flow to the Developer Guide using GitHub Desktop so that the flow is as easy to understand as possible for users that are new to GitHub. Incorporates content from the Conversation Team’s command line GitHub Flow document.

Closes watson/transformation-tracker#273

DCO 1.1 Signed-off-by: George Champlin-Scharff <georgecs@us.ibm.com>
```

> **ProTip:** adding "closes" or "fixes" in a commit message followed by the org/repo#issue-number will automatically close the issue once the Pull Request has been merged.

## Frequently Asked Questions

**Q:** Why do I need to have the `DCO 1.1 Signed-off-by` line in my commit message? The project isn't open source.
**A:** You're correct, right now most of these projects aren't open source, but some may be in the future. When you put the line `DCO 1.1 Signed-off-by` in your commit you're making an assertion that you wrote the code. This make it easier for us to track down this information the future.

**Q:** Is there an easier way to remember the commit format?
**A:** Yes! You can [create your own `.gitmessage` template](https://robots.thoughtbot.com/better-commit-messages-with-a-gitmessage-template){:target="_blank"} that you can populate when you do a commit.

# Helpful links
[commit-message-format](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#){:target="_blank"}
[angularcontributing](https://github.com/angular/angular/blob/master/CONTRIBUTING.md){:target="_blank"}
[fork](https://help.github.com/articles/fork-a-repo/){:target="_blank"}
[squashing](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages){:target="_blank"}

# Credits
This document is based off the contributing standards from [Angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md){:target="_blank"}. We are thankful for their work in setting up good standards and norms of software development.

The GitHub Flow image at the top of this page is a modified version of the one from [here](https://desktop.github.com){:target="_blank"}
