---
title: Decomposing HL Requirements to SL Requirements
sidebar: tools
breadcrumb: Decomposing HL Requirements to SL Requirements
---

# DRAFT

## Before You Begin
Requirements Authors groom and decompose High Level (HL) Requirements into one or more System Level (SL) Requirements which can then be groomed into one or more Detail Level (DL) Requirements. SL Requirements and the associated DL Requirements are the requirements that define the work that is sent to Development for their development work. SL Requirements must be approved before baselining the requirement.

In Jira, for Watson Health (WH) Requirements projects:
- High Level (HL) Requirements are prefixed by HL: and are type = High Level Req
- System Level (SL) Requirements are prefixed by SL: and are type = System Level Req
- Detail Level (DL) Requirements are prefixed by DL: and are type = Detail Level Req

**Applicable Role(s):**  WH Requirements Author

## Procedure

1. The Requirements Author confirms the HL Requirement is in “Approved” status by viewing the Requirements Kanban board or viewing the detailed page for the HL Requirement.
1. From the approved HL Requirement, the Requirements Author clicks the **Add SL** button to create a System Level (SL) Requirement. Jira automatically handles the tracing and sets the relationship between the HL Requirement and SL Requirement.
<br>![Add Sl button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_hl2sl_addsl_button.png "Add SL button")<br>
1. Navigate to the newly created SL Requirement in one of the following ways:
- In the **Issue Links \> Satisfied By** section of the HL Requirement, click the issue hyperlink.
<br>![Issue hyperlink](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_hl2sl_issue_hyperlink.png "Issue hyperlink")<br>
- From the Kanban board, click the SL Requirement located in the **Draft** column of the  *System Level Req (SL)* swim lane.
<br>![SL Requirement](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_hl2sl_kanban_sl_req.png "SL Requirement")<br>
1. Click the **Edit** button on the SL detailed view screen.
<br>![Edit button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_hl2sl_edit_button.png "Edit button")<br>
1. In the edit window, at a minimum, populate the following required fields:
- Assignee
- Summary
- Acceptance Criteria
- Requirement Statement
- Description
1. When you are finished editing the fields, click **Update.**
1. Move the SL Requirement from “Draft” status to “In Review” status by either dragging it to the **In Review** column on the Kanban board, or by clicking the **Ready for Review** button on the detailed view screen.
<br>![Ready for Review button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_hl2sl_ready_review_button.png "Ready for Review button")<br>
>**Tip:** If you have multiple browser pages open, such as the Kanban view and the detailed view of the HL or other pages, be sure to refresh the individual browser pages so that the information you are viewing is the most current.
1. When ready to approve the SL Requirement, drag it to the **Approved** column on the Kanban board, or click the **Approve** button on the detailed view screen.
<br>![Approve button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_hl2sl_approve_button.png "Approve button")

## What to do next
You can [progress the SL Requirement to “HL Baselined” status](../jira_hl_baseline_sl_requirement/) or you can [add DL Requirement(s) to a SL Requirement](../jira_decomposing_sl_to_dl/).
