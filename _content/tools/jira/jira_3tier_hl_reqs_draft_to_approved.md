---
title: (3-Tier) Progressing High Level Feature Requirements from Draft to Approved
sidebar: tools
breadcrumb: (3-Tier) Progressing HL Feature Requirements from Draft to Approved
---

# DRAFT

## Before You Begin
After Offering Management approves an Epic in Aha! and pushes the Epic into a Jira Requirements project, the Epic comes into Jira as a non-modifiable Epic.

If the Watson Health (WH) Offering is following a 3-Tier model for Requirements, which models IBM Design Thinking Hill-Epic-Story approach, the WH Application Lifecycle Management (ALM) Solution automatically creates the following in the Jira Requirements project:
- a non-modifiable *Epic* in Jira which links back to the Aha! Epic;
- a *Design Change Request (DCR)* in Jira for the Release (if it doesn’t already exist) and links the DCR for the release to the Epic; and
- a *High Level Feature Requirement (HL)*. The HL Feature Requirement is functionally equivalent to the Epic in Aha! such that there is a one-to-one (1-to-1) mapping between the HL Feature and the Epic. Requirements Authors can work with and decompose HL Feature Requirements into one or more System Level (SL) User Requirements and further decompose SL User Requirements into one or more Detail Level (DL) Requirements to send to development teams.

A WH Offering establishes whether it follows a 2-Tier model for Requirements or a 3 Tier Model for Requirements in the Offering’s request to be onboarded to the WH Jira Solution. The established requirements model is set for the life of the WH Offering in the WH ALM Solution cannot be changed. See [Onboarding a Project Offering to the WH Application Lifecycle Management (ALM) Solution](../../onboarding/request_onboarding_project_offering/) for more information.

The following illustration depicts the relationship between an Epic that is pushed from Aha! to the non-modifiable Epic and the generated HL Feature Requirement in the Jira Requirement project.
<br> ![Relationship between Aha! Epics and HL Feature Requirements](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_overv_ahaepic_toreqs.png "Relationship between Aha! Epic and HL Feature Requirements")

**Applicable Role(s):**  WH Requirements Author

## Procedure

1. Navigate to and open the HL Feature Requirement in your Offering’s Requirement project.

    A. Locate the HL Feature Requirement in your Offering’s Requirements project on the Kanban board.

    B. Preview the HL Feature Requirement by clicking on the HL Feature Requirement.

    C. Open the detailed view of the HL Feature Requirement by clicking the link to the HL Feature Requirement from the preview.
<br>![Kanban board view of HL Feature Requirement](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_progresshl_kanban_view.png "Kanban board view of HL Feature Requirement")

1. The HL Feature Requirement detailed view is open.  The HL Feature Requirement is in “Draft” status.<br>
![HL Feature Requirement detailed view](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_progresshl_detail_view.png "HL Feature Requirement detailed view")

1. Confirm that the **Requirement Statement** field is populated as this is a required field before you can begin decomposing the HL Feature Requirement.

1. To begin working on the HL Feature Requirement, assign the HL Feature Requirement.  You can assign it to yourself by clicking the **Assign to me** link or by clicking the "**i**" key on your keyboard. To assign it to someone else, click the **Assignee** field and enter a name.

   ![Assign an owner](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_progresshl_assign.png "Assign an owner")
> **Tip:** Because of the mapping of the HL Feature Requirement to the Epic in Jira, you cannot change the **Name**, **Summary**, or **Requirements Statement** fields of the HL Feature Requirement.
1. Move the HL Feature Requirement from “Draft” status to “In Review” status by either dragging it to the **In Review** column on the Kanban board, or by clicking the **Ready for Review** button on the detailed view screen. The Review is an informal review for Requirements Authors to use within their teams and it is not tracked with electronic signature.

   ![HL Ready for Review button and HL Kanban board view](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_progresshl_ready_review_btn.png "HL Ready for Review button and HL Kanban board view")
<br>The HL Feature Requirement is now in “In Review” status.
<br>![HL with a status of In Review](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_progresshl_in_review_status.png "HL with a status of In Review")
> **Tip:** If you have multiple browser pages open, such as the Kanban view and the detailed view of the HL or other pages, be sure to refresh the individual browser pages so that the information you are viewing is the most current.
1. When ready to approve the HL Feature Requirement, drag it to the **Approved** column on the Kanban board, or click the **Approve** button on the detailed view screen. The Approval is an informal approval for Requirements Authors to use within their teams and approval is not tracked with electronic signature.

   ![HL Approve button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_progresshl_approve_btn.png "HL Approve button")
1. When the HL Feature Requirement is in “Approved” status, you can:
- Click **Add SL** - to add a System Level (SL) User Requirement that is associated with the HL Feature Requirement;
- Click **Change** – to change the HL back to “Draft” status; or
- Click **Retire** – to retire or obsolete the requirement.
<br>![Add SL, Change, and Retire buttons](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_progresshl_approved_status.png "Add SL, Change, and Retire buttons")


## What to do next
To continue working with the HL Feature Requirement, [add a System Level User Requirement](../jira_3tier_decomposing_hl_to_sl/).
