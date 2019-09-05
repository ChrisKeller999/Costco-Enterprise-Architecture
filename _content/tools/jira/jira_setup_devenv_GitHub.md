---
title: Setting up your Development work environment
breadcrumb: Setting up your Development work environment
sidebar: tools
---

# DRAFT

# Setting up your Development work environment
#### Applicable Jira role:  WH Developer

### Adding the GitHub repository to Eclipse or GitHub on your local machine
Before you begin to working with source code, you need to setup your development work environment with GitHub by adding the GitHub repository (where you will do your coding work) to either your Eclipse or GitHub desktop environment.
1. Clone the associated Git repository.
![Clone the appropriate Git repository](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_task_clonegitrepos.png "Clone the appropriate Git repository")

- Enter the required repository information and then click **Next**.
![Enter location of source repository](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_task_clonegitlocation.png "Enter location of source repository")

- Select the branch associated with your coding **Point of Divergence (POD)** to clone and then click **Next**.
![Select branches to clone](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_task_clonebranch.png "Select branches to clone")

- Specify the location of your local directory for the clone and then click **Finish**.
![Specify your local working directory for the clone](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_task_clonelocal.png "Specify your local working directory for the clone")

### Creating a private development branch for your work
Once your local storage for the remote repository is created, developers will work on private branches to isolate their individual Task work from a given development, release, integration or master branch in GitHub prior to it being stable for integration. To create your private development branch:

1. Locate the parent POD stream.  Right-click on the parent POD stream and select **Create Branch**.
![Create private branch](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_task_privatebranch.png "Create private branch")

- The branch name will take the format: \<_username_\>-\<_Jira Issue ID_\>. In the following example, the branch name is `whitel-WHDD-41`. Click **Finish**.
![Private branch name](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_task_privatebranchname.png "Private branch name")

- Verify that your private branch was created using the Eclipse UI and confirm that you are working on your private branch via the Git client.
![Verify private branch](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_task_verifyprivatebranch.png "Verify private branch")

Now, you can work in the context of the Git command line client,  Eclipse, or the GitHub Desktop environment to create and modify code assets associated with your associated Task.

### Example:  Creating and modifying a directory and file from the Git command line client

```
Lewiss-MacBook-Pro:ras-test-repo1 lewiswhite\$ ls
README.md
Lewiss-MacBook-Pro:ras-test-repo1 lewiswhite\$ mkdir test1
Lewiss-MacBook-Pro:ras-test-repo1 lewiswhite\$ cd test1
Lewiss-MacBook-Pro:test1 lewiswhite\$ vi test1.md
Lewiss-MacBook-Pro:test1 lewiswhite\$ git add test1.md
Lewiss-MacBook-Pro:test1 lewiswhite\$
```
Now, you can view the changes in your private branch.
![View changes in your private branch](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_task_viewchangesprivatebranch.png "View changes in your private branch")

Prior to checking in any code, or requesting a pull request to the branch acting as your POD, merge any changes from your POD, (or _master_ in this case) to verify that your code is working as expected.
![Merge changes from POD](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_task_mergechangesfrompod.png "Merge changes from POD")

Select the branch to merge from and then click **Merge**.
![Select branch to merge](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_task_selectbranchtomerge.png "Select branch to merge")
