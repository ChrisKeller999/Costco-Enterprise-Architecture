---
title: Working with Development Stories in Jira
sidebar: tools
breadcrumb: Working with Development Stories in Jira
---

# DRAFT

## Before You Begin
Stories in a Development project in Jira are created from Detail Level (DL) Requirements in the Requirements project.  Story creation occurs when the Detail Level (DL) Requirements in “DL Baselined” status are pushed to the Development project.

When DL Requirements are pushed to the Development project from the Requirements project, Jira creates a non-modifiable Development Epic clone for each DL Requirement that originated in the Requirements project.   For each DL Requirement cloned to a Development project Epic, back-end automation generates  a Development Story. Automated processes also set a trace relationship from the DL Requirement in the Requirements project to Development Epics and Development Stories in the Development project. This relationship is reflected in the **Issue Links** section of the associated artifacts. A Development Story represents work to be performed by the development team.  A Development Story can then be further decomposed into Development Tasks by development team members.

In Jira for Watson Health (WH) Development projects:
- Development Epics are prefixed by SL: and are issue type = epic.
- Development Stories are prefixed by DL: and are issue type = story.
- Development Tasks are prefixed by DT: and are issue type = task.


**Applicable Role:**  WH Developer (_to groom Development Stories_)

When Development Stories are created, they are in “Dev Backlog” status. This topic describes how a Developer works with a Development Story in “Dev Backlog” status and progresses the Story through “Ready for Sprint” status, which includes decomposing the Story into Development Tasks.

## Procedure

1. Developer navigates to the Development Backlog board and locates a Story in "Dev Backlog" status.  The Story is ready to be groomed. <br>
![Backlog board](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_backlog_board.png "Backlog board")
2. Open a Story in "Dev Backlog" status and click **Edit**. <br>
![Edit Backlog Story](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_edit_backlog_story.png "Edit Backlog Story")
3. Add a Sprint and estimated Story point information to the Story, then click **Update**. <br>
![Update with Sprint and Story point information](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_update_sprint_storypoint.png "Update with Sprint and Story point information")
4.  Assign a developer to the Story. <br>
![Assign a developer to the Story](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_assign_dev_tostory.png "Assign a developer to the Story")
5.  Add a Development Task to the Story by clicking **Workflow-\>Add Dev Task**. A minimum of one Development Task is required to be assigned to a Development Story prior to an assigned Developer being able to begin working on the Story. <br>
![Add a development task](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_add_devtask.png "Add a development task")
6. Select the appropriate Task from the Story issue. This opens the Task. <br>
![Select Task from the Story Issue](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_select_task_fromstory_issue.png "Select Task from the Story Issue")
7. Click **Edit** to edit the Task. <br>
![Edit the Task](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_edit_task.png "Edit the Task")
8. Enter a Summary, select a Dev Task Type, then click **Update**. The Task associated with the Story is created. <br>
![Enter a Summary, Dev Task Type](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_enter_summary_devtasktype.png "Enter a Summary, Dev Task Type")
9. Now that the Story has at least one associated Task and the Story is in "Dev Backlog" status, you can move the Story into "Ready for Sprint" status, meaning it is ready to be added to a Sprint.  Click **Sprint Ready** on the Story. <br>
![Associate Story with desired Sprint](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_associate_sprint_tostory.png "Associate Story with desired Sprint")
10. Confirm that the Story is associated with the desired Sprint. <br>
![Confirm Story is associated with Sprint](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_verify_story_withsprint.png "Confirm Story is associated with Sprint")
11. From the Story, click **Planned** to transition the Story to "In Sprint" status. <br>
![Click Planned](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_transition_story_to_insprint_a.png "Click Planned")
![Transition Story to 'In Sprint' status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_transition_story_to_insprint_b.png "Transition Story to 'In Sprint' status")
12. From either the Story or from the Kanban board for the development project,  confirm the Story is in "In Sprint" status. <br>
![Confirm Story status from Kanban board](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_confirm_story_status_from_kanban.png "Confirm Story status from Kanban board")
13.  Now that the Story is "In Sprint" status, the developer assigned to the development Story clicks  **Start Progress**, which transitions the Story to "In Development" status.
#### Detail View
![Start Progress transitions Story to In Development status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_startprogress_transitions_to_indevelopment.png "Start Progress transitions Story to In Development status")
![Story shows In Development status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_story_indevelopment_status.png "Story shows In Development status")
#### Kanban view
![Story shows In Development status from Kanban](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/devtask_story_indevelopment_status_from_kanban.png "Story shows In Development status from Kanban")

## Next Steps
Add additional Development Tasks to the Story as needed.

Development can begin [Working with Development Tasks](../jira_workingwithdevtasks/).
