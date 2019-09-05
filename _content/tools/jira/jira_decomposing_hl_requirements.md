---
title: Decomposing High Level Requirements
sidebar: tools
breadcrumb: Decomposing High Level Requirements
---

# DRAFT

## Before You Begin
After Offering Management approves an Epic in Aha! and pushes the Epic into a Jira Requirements project, the Epic comes into Jira as a non-modifiable Epic. Jira automatically creates an associated High Level (HL) Requirement in the Requirements project. Requirements Authors can groom and decompose HL Requirements into System Level (SL) Requirements and further decompose SL Requirements into Detail Level (DL) Requirements to send to Development.

The following illustration depicts the relationship between an Epic that is pushed for Aha! to the non-modifiable Epic and the generated HL Requirement in the Jira Requirement project.
<br> ![Relationship between Aha! Epics and HL Requirements](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_overv_ahaepic_toreqs.png "Relationship between Aha! Epic and HL Requirement")

In Jira, for Watson Health (WH) Requirements projects:
- High Level (HL) Requirements are prefixed by HL: and are type = High Level Req
- System Level (SL) Requirements are prefixed by SL: and are type = System Level Req
- Detail Level (DL) Requirements are prefixed by DL: and are type = Detail Level Req


**Applicable Role(s):**  WH Requirements Author

**Prerequisite(s):** Confirm that the Requirement Statement is pre-populated in the HL Requirement.

## Procedure

1. Locate the HL Requirement in the Requirements project.  Confirm that the **Requirement Statement** field is populated with a Requirement Statement as this is a required field before you can begin decomposing the HL Requirement.
<br>![Kanban board view of HL Requirement](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_kanban_hl_indraft.png "Kanban board view of HL Requirement")

1. To begin working on the HL Requirement, assign it to yourself by clicking the **Assign to me** link, or to someone else by clicking the **Assignee** field and entering a name.<br>
![Assign an owner](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_hl_assign.png "Assign an owner")

1. Move the HL Requirement from "Draft" status to "In Review" status by either dragging it to the **In Review** column on the Kanban board, or by clicking the **Ready for Review** button on the detailed view screen. The Review is an informal review and is not tracked with electronic signature.<br>
![Ready for Review button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_hl_ready_for_review.png "Ready for Review button")
> **Tip:** If you have multiple browser pages open, such as the Kanban view and the detailed view of the HL or other pages, be sure to refresh the individual browser pages so that the information you are viewing is the most current.
<br>
1. When ready to approve the HL Requirement, drag it to the **Approved** column on the Kanban board, or click the **Approve** button on the detailed view screen. The Approval is an informal approval and is not tracked with electronic signature.<br>
![Approve button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_hl_approve.png "Approve button")

1. When the HL Requirement is in “Approved” status, you can:
 - Click **Add SL** -  to add a System Level (SL) Requirement that is associated with the HL Requirement
 - Click **Change** – to change the HL back to “Draft” status; or
 - Click **Retire** – to retire or obsolete the requirement.<br>
![Add SL, Change, and Retire buttons](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_hl_add_sl.png "Add SL, Change, and Retire buttons")

## Next Steps
To continue grooming the HL Requirement, [add a SL Requirement](../jira_decomposing_hl_to_sl/).
