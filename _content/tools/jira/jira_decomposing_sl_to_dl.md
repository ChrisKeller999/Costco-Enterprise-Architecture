---
title: Decomposing SL Requirements to DL Requirements
sidebar: tools
breadcrumb: Decomposing SL Requirements to DL Requirements
---

# DRAFT

## Before You Begin
Requirements Authors groom and decompose High Level (HL) Requirements into one or more System Level (SL) Requirements which can then be groomed into one or more Detail Level (DL) Requirements.

After a SL Requirement is in “Approved” status, the Requirements Author can decompose the SL Requirement into DL Requirements. When the SL Requirement is in “HL Baselined” status, the Requirements Author can also add DL Requirements to the SL Requirement.

SL Requirements and the associated DL Requirements are the requirements that define the work that is sent to Development for their development work.

In Jira, for Watson Health (WH) Requirements projects:
- System Level (SL) Requirements are prefixed by SL: and are type = System Level Req.
- Detail Level (DL) Requirements are prefixed by DL: and are type = Detail Level Req.

**Applicable Role(s):**  WH Requirements Author

## Procedure

1. The Requirements Author confirms the SL Requirement is in “Approved” status or in “HL Baselined” status by viewing the Requirements Kanban board or viewing the detailed page for the SL Requirement.
1. From the SL Requirement, the Requirements Author clicks the **Add DL** button to add a DL Requirement.
<br>![Add DL button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_sl_add_dl.png "Add DL button")<br>
1. Navigate to the newly created DL Requirement in one of the following ways:
- In the **Issue Links \> Satisfied By** section of the HL Requirement, click the issue hyperlink.
<br>![Issue hyperlink](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_sl_issue_hyperlink.png "Issue hyperlink")<br>
- From the Kanban board, click the SL Requirement located in the **Draft** column of the *System Level Req (SL)* swim lane.<br>
<br>![SL Requirement](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_sl_kanban_sl_req.png "SL Requirement")<br>
1. Click the **Edit** button on the DL detailed view screen.
<br>![Edit button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_sl_edit_button.png "Edit button")<br>
1. In the edit window, at a minimum, populate the following required fields:
- Assignee
- Summary
- Acceptance Criteria
- Requirement Statement
- Description
    <br>The system automatically copies the following values from the SL Requirement to the DL Requirement:
       - Component
       - Acceptance criteria
       - User Need
       - Non-functional Category
       - Label Category

1. When you are finished editing the fields, click **Update.**


1. Move the DL Requirement from “Draft” status to “In Review” status by either dragging it to the **In Review** column on the Kanban board, or by clicking the **Ready for Review** button on the detailed view screen.
<br>![Ready for Review button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_sl_ready_review_btn.png "Ready for Review button")<br>
>**Tip:** If you have multiple browser pages open, such as the Kanban view and the detailed view of the HL or other pages, be sure to refresh the individual browser pages so that the information you are viewing is the most current.
1. When ready to approve the DL Requirement, drag it to the **Approved** column on the Kanban board, or click the **Approve** button on the detailed view screen.
<br>![Approve button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decomposing_sl_approve_btn.png "Approve button")<br>
1. The DL Requirement is now approved. In the **Issue Links** section of the DL Requirement, you can view the relationship of the DL to its associated SL Requirement.
<br>![DL/SL relationship](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/decompsing_sl_relationship.png "DL/SL relationship")

## What to do next
You can [progress the DL Requirement to “DL Baselined” status](../jira_dl_baseline_dl_requirement/).
