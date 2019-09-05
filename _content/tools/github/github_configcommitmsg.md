---
title: Configuring Git Commit Message Prompts
sidebar: tools
breadcrumb: Configuring Git Commit Message Prompts
---

# DRAFT

## Before You Begin
This topic describes options available for Costco IT and IS teams to configure local Git repository commit procedures. 

Options 1 and 2 are relevant when using the Git command line client and Option 3 is relevant when working exclusively in Eclipse. Option 1 is relevant for all development environments.

**Applicable Role:**  Developer

## Option 1:  Creating a local Git repository hook (_Recommended in all development environments_)

Option 1 describes how to implement a local Git repository hook. For each repository that a user loads locally to their workstation, they will install a `prepare-commit-msg` hook to programmatically enforce the following comment standard:

` <Jira-Issue-ID> "comment describing change" `

### Example:
`WOSD-23 change to implement new functionality`

### Dependencies
1. You must manually create a `prepare-commit-msg` hook in each local Git repository you are working with.
1. Private branch names must be named identically to the Jira issue you are working on; for example: `WHDD-40`.
1. You must complete your commits from the command line using the following syntax:

    `git commit -m "comment describing change"`

    Example:
    ```
    Lewiss-MacBook-Pro:test1 lewiswhite$ vi test1.md
    Lewiss-MacBook-Pro:test1 lewiswhite$ git add test1.md
    Lewiss-MacBook-Pro:test1 lewiswhite$ git commit -m "auto prepend branch name"
    [WHDD-40 a005078] WHDD-40 auto prepend branch name
     1 file changed, 1 insertion(+)
    ```
    <br>
    The resulting commit message which identifies the commit with the specified Jira Issue ID is as follows:<br>

    `[WHDD-40 a005078] WHDD-40 auto prepend branch name`

### Procedure
1. Manually create a `prepare-commit-msg` hook in each local Git repository you are working with.
2. For each local repository that you are working with, create a private branch named identical to the Jira Issue ID you are working on; for example: `WHDD-40`.
3. Create a file in your `hooks` directory named `prepare-commit-msg`.
    
4. Populate the file with the following hook script content:

    ```bash
    #!/bin/bash

    # This is how you can customize which branches should be
    # skipped when prepending a commit message.

    if [ -z "$BRANCHES_TO_SKIP" ]; then
      BRANCHES_TO_SKIP=(master develop test)
    fi

    BRANCH_NAME=$(git symbolic-ref --short HEAD)
    BRANCH_NAME="${BRANCH_NAME##*/}"

    BRANCH_EXCLUDED=$(printf "%s\n" "${BRANCHES_TO_SKIP[@]}" | grep -c "^$BRANCH_NAME$")
    BRANCH_IN_COMMIT=$(grep -c "\[$BRANCH_NAME\]" $1)

    if [ -n "$BRANCH_NAME" ] && ! [[ $BRANCH_EXCLUDED -eq 1 ]] && ! [[ $BRANCH_IN_COMMIT -ge 1 ]]; then
      sed -i.bak -e "1s/^/$BRANCH_NAME /" $1
    fi
    ```
    <br>
1. Now that the hook script is created, issue the following command from the command line to execute the hook:<br>

    `chmod u+x .git/hooks/prepare-commit-msg`.

1. To use the hook, perform your Git commits from the command line; for example:

    ```
    Lewiss-MacBook-Pro:test1 lewiswhite$ vi test1.md
    Lewiss-MacBook-Pro:test1 lewiswhite$ git add test1.md
    Lewiss-MacBook-Pro:test1 lewiswhite$ git commit -m "auto prepend branch name"
    [WHDD-40 a005078] WHDD-40 auto prepend branch name (resulting commit message)
     1 file changed, 1 insertion(+)
    ```

## Option 2: Creating custom commit messages for Command Line Commits

Use the Git `commit.template` custom commit template to provide a customized reminder of the proper format and style when creating a commit message.  Using this custom commit function provides a prompt when running the `git commit-m` command to use the proper format.

Complete the following client-side implementation to create the custom commit message.

### Procedure
1. Create a file named `.gitmessage.txt` and add the file to your user `home` directory.
1. Populate the gitmessage file with the following content:

    ```
    Development commit format:
    <Issue_ID> what changed in less than 50 characters
    Ex: "WHDD-40 app install path change"
    ```

1. Issue the following command from the command line to set the `commit.template` path to the location of the `.gitmessage.txt` file:<br>

    ```
    git config --global commit.template \~/.gitmessage.txt
    ```
    <br>
    Sample commit message prompt:

    ```
    WH Development commit format:
    <Issue_ID> what changed in less than 50 characters
    Ex: "WHDD-40 app install path change"
    ```
    <br>
    For additional information, reference: [Customizing Git - Git Configuration](<https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration){:target="_blank"}

## Option 3:  Creating local dictionary file for Git Commits from Eclipse

When using Eclipse for Git commits, use a local dictionary file to help ensure that your Git commits are associated with the correct Jira Issue ID.

### Procedure
1.  Create a local user dictionary text file, with the filename, `userdictionary.txt`,  and put this file in your user `home` directory.  This file acts as a spell-checker to ensure that the Issue ID associated with your Git commits via Eclipse are properly spelled.

    For example, the project keys for the project development and test areas are `WOSD` and `WOST`, respectively. By adding the project keys `WOSD` and `WOST` to your local user dictionary file, you will receive a prompt on your Git commit if you misspelled the Jira Issue ID.

    Once implemented, use `CNTRL +1` on Windows or `COMMAND +1` on the Mac which offers auto correct options, as depicted in the following illustration:<br>
    ![Example Auto correct options](https://chriskeller999.github.io/Costco-Enterprise-Architecture/resources/images/tools/github/git_exampleautocorrectoptions.png "Example Auto correct options")

1. Once your `userdictionary.txt` file is created in your `home` directory, from Eclipse, select **Eclipse > Preferences**. <br>
    ![Select Eclipse > Preferences]https://chriskeller999.github.io/Costco-Enterprise-Architecture/resources/images/tools/github/git_eclipsepreferences.png "Select Eclipse > Preferences")

1. Expand **General-\>Editors-\>Test Editors**, then select **Spelling**<br>
    ![Spelling Test Editor](https://chriskeller999.github.io/Costco-Enterprise-Architecture/images/tools/github/git_spellingtesteditor.png "Spelling Test Editor")

    a. In Spelling preferences, clear the selection of (deselect) the following:

    ```
    Ignore words with digits
    Ignore upper case words
    ```
    <br>
    b. Browse for and select your User defined dictionary.

    c. Click **Apply and Close**.<br>
        ![Change Spelling preferences](https://chriskeller999.github.io/Costco-Enterprise-Architecture/resources/images/tools/github/git_changespellingpreferences.png "Change Spelling preferences")
