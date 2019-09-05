---
title: (3-Tier) Decomposing HL Feature Requirements to SL User Requirements
sidebar: tools
breadcrumb: (3-Tier) Decomposing HL Feature Requirements to SL User Requirements
---

# DRAFT

## Before You Begin
For Watson Health (WH) Offerings that are following a 3-Tier model for requirements, Requirements Authors work with and decompose High Level (HL) Feature Requirements into one or more System Level (SL) User Requirements, which can then be groomed into one or more Detail Level (DL) Requirements. The HL Feature Requirement is functionally equivalent to the Epic in Aha! such that there is a one-to-one (1-to-1) mapping between the HL Feature and the Epic. SL User Requirements and the associated DL Requirements are the requirements that define the work that is sent to Development for their development work. SL User Requirements must be approved before baselining the requirement.

The Watson Health Application Lifecycle Management (ALM) Solution automatically sets the relationship between the HL Feature Requirement and SL User Requirement and handles the tracing between the requirements. Review the [Traceability Metamodel](../../index#traceability-metamodel) which illustrates the relationships between an Epic in Jira, a Design Change Request (DCR) and requirements.

For WH Requirements projects in the WH ALM Solution:
- High Level (HL) Feature Requirements are prefixed by HL: and are type = High Level Feature
- System Level (SL) User Requirements are prefixed by UR: and are type = System Level Requirement
- Detail Level (DL) Requirements are prefixed by DL: and are type = Detail Level Requirement

**Applicable Role(s):**  WH Requirements Author

## Procedure

1. The Requirements Author confirms the HL Feature Requirement is in “Approved” status by viewing the Requirements Kanban board or viewing the detailed page for the HL Feature Requirement.
1. From the approved HL Feature Requirement, the Requirements Author clicks the **Add SL** button to create a System Level (SL) User Requirement.

   ![Add Sl button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_decompose_hl_sl_addsl_button.png "Add SL button")<br>
1. Navigate to the newly created SL User Requirement in one of the following ways:
- In the **Issue Links \> Satisfied By** section of the HL Feature Requirement detailed view, click the issue hyperlink.

     ![Issue hyperlink](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_decompose_hl_sl_issue_link.png "Issue hyperlink")

    - From the Kanban board, click the SL User Requirement located in the **Draft** column of the  *System Level Req (SL)* (1) and then click the SL User Requirement link in the preview pane (2).

      ![SL User Requirement](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_decompose_hl_sl_kanban_sl_req.png "SL User Requirement")

1. Click the **Edit** button on the SL User Requirement detailed view screen.
<br>![Edit button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_decompose_hl_sl_edit_btn.png "Edit button")<br>
1. In the edit window, at a minimum, populate the following required fields:
- Assignee
- Summary
- Acceptance Criteria
- Requirement Statement
- Requirement Type Classification
- Description (optional field that can be used to provide additional information about the Requirement Statement)
1. When you are finished editing the fields, click **Update.**
>**Tip:** You might receive a Workflow Error message if you did not complete a required field. Just edit the SL User Requirement to add the required information and click **Update**.

1. Move the SL User Requirement from “Draft” status to “In Review” status by either dragging it to the **In Review** column on the Kanban board, or by clicking the **Ready for Review** button on the detailed view screen. The Review is an informal review for Requirements Authors to use within their teams and it is not tracked with electronic signature.

   ![Ready for Review button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_decompose_hl_sl_ready_review_btn.png "Ready for Review button")<br>
>**Tip:** If you have multiple browser pages open, such as the Kanban view and the detailed view of the HL or other pages, be sure to refresh the individual browser pages so that the information you are viewing is the most current.
The SL User Requirement is now “In Review” status.

1. When ready to approve the SL User Requirement, drag it to the **Approved** column on the Kanban board, or click the **Approve** button on the detailed view screen. The Approval is an informal approval for Requirements Authors to use within their teams and approval is not tracked with electronic signature.

   ![Approve button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_decompose_hl_sl_approve_btn.png "Approve button")

## What to do next
Now that the SL User Requirement is approved, the Requirements Author can now [progress the SL User Requirement to “HL Baselined” status](../jira_3tier_hl_baseline_sl_requirement/).
