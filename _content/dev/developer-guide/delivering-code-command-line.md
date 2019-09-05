---
title: GitHub Flow - fork+branch+commit+pull
breadcrumb: GitHub Flow
sidebar: dev
---
Most teams in Watson follow [GitHub Flow](https://guides.github.com/introduction/flow/){:target="_blank"} when delivering code. There are a great many sites on the internet that overcomplicate a model that really just has four main steps.
<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/github-flow.png">

This document attempts to describe the process used to build and develop software within the Watson Conversation team. It is largely based off [the Gitflow branching and merging strategy](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow){:target="_blank"} and large portions of this document have been lifted from the [wea-conversational-ui CONTRIBUTING.md document](https://github.ibm.com/watson-engagement-advisor/wea-conversational-ui/blob/develop/CONTRIBUTING.md){:target="_blank"} (restricted access, apologies).

## Overview

Watson Conversation endeavors to ship high quality reliable code frequently. This requires that all of the teams work together and that team members can easily move between different projects. A key mechanism to enable this is a high quality software development process. Our team has chosen a variation of Gitflow for our process.

There are numerous writeups out there that make Gitflow more complicated than it needs to be. We recommend checking out the [Gitflow tutorials from GitHub](https://guides.github.com/introduction/flow/) and [Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow){:target="_blank"} for common sense references. We have a couple of modifications that we've adopted to keep our options that we use to keep our code clean that will be discussed in this document.

## Development Basics

Development should be set up so project repositories have two long lived branches `master` and `develop`. We should endeavor at all times to have `master` represent code that is, or is currently on its way to, production. `develop` is where all changes except hot-fixes should originate. Over time, as we improve our ability for continuous delivery, the delta between `master` and `develop` will shrink.

Teams should use a fork/branch/code/rebase/squash/pull-request process for accepting contributions. In short this process has the following steps:

1. **Fork:** The developer first forks the repository that they wish contribute to by using the GitHub Fork function. This gives each developer their own space they can work in create test branches without polluting the main repository. In most cases this only needs to be done once.
2. **Branch:** Within that fork, the developer creates a branch off the `develop` branch of the code. This helps to keep the changes isolated within that branch of code.
3. **Code:** Fix that bug or build out your great new feature and test it out with unit tests.
4. **Rebase:** It is the responsibility of the developer writing the code to ensure that their code is up to date against the current `develop` branch of the upstream repository. When there are changes to the upstream `develop` branch the developer should run a `git rebase` command to place their changes at the end of the history.
5. **Squash:** In most cases, branches should be squashed down to a single commit using the `git rebase -i` command. There may be exceptions for very large branches, but those are exceptions.
6. **Pull Request:** After rebaseing, squashing, and pushing the code back to your fork, the developer should issue a pull request to have it merged into the `develop` branch of the upstream project.

> **ProTip:** [Install and configure GitHub Desktop](../tools/github/00-getting-started/) before you start...

## <a name="fork"></a> Step 1: Fork the Repository

We try to keep the main source tree for our projects clean. This means that all developers working on a project should fork a project before beginning work. You can do this by clicking on the fork button in the upper right of the project page.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/github-fork.png" width="77" height="24">

To make things we'll use the notation of the remote called `origin` to point to your fork and the remote called `upstream` to point to the canonical repository. After you've checked out your fork you can create the `upstream` remote using the following command:

  ```bash
  git remote add upstream git@github.ibm.com/watson-engagement-advisor/wea-conversational-ui.git
  ```

You can get the URL by clicking on the "Clone or Download Button"

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/github-clone.png" width="418" height="273">

In most writeups of Gitflow, you'll see that creating a branch is optional. If you've contributed to an open source project on GitHub, you likely had to create a branch because you didn't have repository write access. For consistency across all projects and just as a practice of keeping our repositories clean, we recommend that all developers work off their own fork.

## Step 2: Create a Branch

In most cases, unless it is a _truly_ trivial change, you should [create or select an issue in wea-backlog](https://github.ibm.com/watson-engagement-advisor/wea-backlog){:target="_blank"} before starting your work. This helps us to track and manage all of the work going on across the team.

Create a new git branch off of `develop`. For clarity across projects, we try to work with a [standard branch naming system](#-branch-naming-scheme) that helps us out when looking at pull requests, if you adhere to it you'll get brownie points.

  ```bash
  git checkout -b fix/ISSUENUMBER-short-description develop
  ```

## Step 3: Code!

* Make your changes, **including appropriate test cases**. Added code should have close to 100% test coverage for statements, branches, functions, and lines. Some projects may use automated mechanisms to prevent commits with sufficient test coverage.
* Follow the project specific coding rules. These are often found in `CONTRIBUTING.md`
* Run a full build, including linters, unit tests and coverage reports, using the `gulp` command and verify that all tests pass.
* Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit). Adherence to these conventions
  is necessary because release notes are automatically generated from these messages.

  ```bash
  git commit -a
  ```

  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

## Step 4: Rebase Your Code

Ensure that your branch is based on the latest from the base repository:

  ```bash
  git fetch upstream
  git rebase upstream/develop
  ```

  Note: the second command is only necessary if the first command retrieves an update on the `develop` branch.

Functionally what this does is it makes it so all of your commits appear sequentially in history in project history, which makes it easier to understand diffs and also to parse out the commit log.

## Step 5: Squash Your Code

If you have made multiple commits, squash your changes into one commit (unless it is important to separate the changes):

  ```bash
  git rebase -i HEAD~#
  ```

Note: Replace `#` with the number of commits on the branch. This will enter an interactive mode which will allow you to squash your commits into one. See [squashing][squashing] to learn more.

Functionally this operation compresses your set of commits into a single commit, which, unless your doing massive changes to the system, is exactly what you want. If you're doing many changes to the system, consider squashing sets of common changes together to make it easier to understand your commit history.

<a name="submit-pr"></a>

## Step 6: Submit a Pull Request (PR)

* Push your branch to GitHub:

  ```bash
  git push -u origin fix/ISSUENUMBER-short-description
  ```

  Note: the optional `-u` flag enables tracking of your local branch with the new remote branch.

* In GitHub, send a pull request to the upstream project's `develop` branch, for example, `wea-conversational-ui:develop`.

* If changes are suggested then:
  * Make the required updates and commit them.
  * Re-run the test suite to ensure tests are still passing.
  * Squash your commits into one and force push to your GitHub repository (this will update your Pull Request):

  ```bash
  git rebase -i HEAD~#
  git push -f
  ```

  Note: See above or [squashing][squashing] for more information on how to squash interactively.

* In most cases the person who is merging the code will want to use the `Squash and Merge` setting of GitHub. This avoids creating needless numbers of merge commits in the project history and generally simplifies the development process.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/github-squash.png" width=345, height=182>

## Branch Naming Scheme

The Watson Conversation team tries to adhere to a fairly standard branch naming
scheme. This scheme is general in the form of:

    BRANCHTYPE/ISSUENUMBER-short-description

The `BRANCHTYPE` can be one of the following, which mirror [the `type` field in
our commit message format][commit-format-type-field].

* **feat:** A new feature
* **fix:** A bug fix
* **docs:** Documentation only changes
* **style:** Changes that do not affect the meaning of the code (white-space,
  formatting, missing semi-colons, etc)
* **refactor:** A code change that neither fixes a bug nor adds a feature
* **perf:** A code change that improves performance
* **test:** Adding missing tests
* **chore:** Changes to the build process or auxiliary tools and libraries such
  as documentation generation

The `ISSUENUMBER` should be the issue number from [the DevEnv issues
archive][devenvissues].

The `short-description` should be the general topic of the branch broken up
into a few words and separated by dashes; preferably it is all lower case.

Here's a few example of branch names:

* A fix tied to issue 32 to correct to rotation of `bunyan.log` files:
  `fix/32-bunyan-log-rotation`
* A new feature tied to issue 93 to introduce RVM: `feat/93-add-rvm`
* A minor documentation change to correct typos in `CONTRIBUTING.md` without an
  issue: `docs/contributing-md-typos`

We're not super strict on this, but it does help us understand what branches we
have on our local system and, we believe, speeds up overall development.

## After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```bash
    git push origin --delete my-fix-branch
    ```

* Check out the `develop` branch:

    ```bash
    git checkout develop -f
    ```

* Delete the local branch:

    ```bash
    git branch -D my-fix-branch
    ```

* Update your `develop` with the latest upstream version:

    ```bash
    git pull --ff upstream develop
    ```

---

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


The goal of the commit message is to be human readable across a wide variety of devices and interfaces. Any line of the commit message cannot be longer 80 characters and [should preferably wrap at 72characters](http://stackoverflow.com/q/2290016/57626){:target="_blank"}.

Where possible try to keep the bulk of the first line of the commit under 50 characters, however we realize this can be hard with the `<type>(<scope>):` prefix. This allows the message to be easier to read onGitHub as well as in various git tools.

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

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**. If you're working on a larger issue that spans multiplecommits it's safe to refer to the issue in the footer, but you may want to squash the history before submitting your pull request.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in the [AngularJS Git Commit Message Conventions][commit-message-format], which we largely inherit.

## Developer Certificate of Origin

All contributions to IBM Watson&trade; Offerings must be accompanied by acknowledgment of, and agreement to, the [Developer Certificate of Origin](http://elinux.org/Developer_Certificate_Of_Origin){:target="_blank"}, reproducedbelow. Acknowledgment of and agreement to the Developer Certificate of Origin _must_ be included in the comment section of each contribution and _must_ take the form of:

``` bash
DCO 1.1 Signed-off-by: {Full Name} <{email address}>
```

Contributions without this acknowledgment will be required to add it before being accepted. If a contributor is unable or unwilling to agree to the Developer Certificate of Origin, their contribution will notbe included.

```bash
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

Add GitHub Flow to the Developer Guide using GitHub Desktop so that the flow is as easy to understand as possible for users that are new to GitHub. Incorporates content from the Conversation Team’s commandline GitHub Flow document.

Closes watson/transformation-tracker#273

DCO 1.1 Signed-off-by: George Champlin-Scharff <georgecs@us.ibm.com>
```

> **ProTip:** adding "closes" or "fixes" in a commit message followed by the org/repo#issue-number will automatically close the issue once the Pull Request has been merged.

### Frequently Asked Questions

**Q:** Why do I need to have the `DCO 1.1 Signed-off-by` line in my commit message? The project isn't open source.

**A:** You're correct, right now most of these projects aren't open source, but some may be in the future. When you put the line `DCO 1.1 Signed-off-by` in your commit you're making an assertion that you wrote the code. This make it easier for us to track down this information the future.

**Q:** Is there an easier way to remember the commit format?

**A:** Yes! You can [create your own `.gitmessage` template](https://robots.thoughtbot.com/better-commit-messages-with-a-gitmessage-template){:target="_blank"} that you can populate when you do a commit.

## Helpful links

- [commit-message-format](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#){:target="_blank"}
- [angularcontributing](https://github.com/angular/angular/blob/master/CONTRIBUTING.md){:target="_blank"}
- [fork](https://help.github.com/articles/fork-a-repo/){:target="_blank"}
- [squashing](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages){:target="_blank"}

## Credits

This document is based on one created for the Watson Conversation Team by Patrick Wagstrom (who based _that_ document on the contributing standards from [Angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md){:target="_blank"}). We are thankful for their work in setting up good standards and norms of software development.

The GitHub Flow image at the top of this page is a modified version of the one from [here](https://desktop.github.com){:target="_blank"}
