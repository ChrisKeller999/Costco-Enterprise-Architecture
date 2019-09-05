---
title: Working with Development Tasks in Jira
breadcrumb: Working with Development Tasks in Jira
sidebar: tools
---

# DRAFT

## Before You Begin
Development Tasks are decomposed from Development Stories.

In Jira for Watson Health (WH) Development projects:
- Development Stories are prefixed by DL: and are issue type = story.
- Development Tasks are prefixed by DT: and are issue type = task.

**Applicable Role:**  WH Developer

This task describes how to begin working on a Development Task and transition the Task into "In Progress" status.

Before you begin this task, be sure to [setup your Development work environment](../jira_setup_devenv_GitHub) in GitHub before working with source code.

## Procedure

1. From a Development project, open a Story that is in **In Development** state.
![Story In Development state](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_story_in_devstate.png "Story In Development state")
1. In the Story, locate the Sub-Tasks section and click the Task that you want to work on. Opening the Task in a new tab enables you to keep the original Story open for reference while working on the associated Task.
![Open Task from Sub-Tasks section](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_story_opentask_fromstory.png "Open Task from Sub-Tasks section")
1. In the Task, click **Start Working**.<br>
![Start Working on Task](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_task_startworking.png "Start Working on Task")<br>
The Task changes to **In Progress** state.<br>
![Task In Progress state](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/scm_task_inprogress.png "Task In Progress state")
1. Identify the Task ID associated with your Jira Task Issue.  From the previous step, the example Task ID is `WHDD-41`.  You will need the Task ID to track your work in GitHub as you ensure the branches, comments, and code changes associated with your work are tracked at the Jira Task level and are traceable to the associated Story.
