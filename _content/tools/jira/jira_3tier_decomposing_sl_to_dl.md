---
title: (3-Tier ) Decomposing SL User Requirements to DL Requirements
sidebar: tools
breadcrumb: (3-Tier ) Decomposing SL User Requirements to DL Requirements
---

# DRAFT

## Before You Begin
For Watson Health (WH) Offerings that are following a 3-Tier model for requirements, Requirements Authors work with and decompose High Level (HL) Feature Requirements into one or more System Level (SL) User Requirements which can then be groomed into one or more Detail Level (DL) Requirements.

Once the SL User Requirement and its associated HL Feature Requirement is in “HL Baselined” status, and the required Design Change Request (DCR) Release documentation artifacts are added to the DCR for the release, the Requirements Author can decompose a SL User Requirement  into one or more DL Requirements.

SL User Requirements and the associated DL Requirements are the requirements that define the work that is sent to Development for their development work.

The Watson Health Application Lifecycle Management (ALM) Solution automatically sets the relationship between the HL Feature Requirement and associated SL User Requirement(s) and DL Requirement(s), and handles the tracing between the requirements. Review the Traceability Metamodel [Traceability Metamodel](../../index#traceability-metamodel) which illustrates the relationships between an Epic in Jira, a Design Change Request (DCR) and requirements.

For WH Requirements projects in the WH ALM Solution:
- High Level (HL) Feature Requirements are prefixed by HL: and are type = High Level Req
- System Level (SL) User Requirements are prefixed by UR: and are type = System Level Req
- Detail Level (DL) Requirements are prefixed by DL: and are type = Detail Level Req


**Applicable Role(s):**  WH Requirements Author

## Procedure

1. The Requirements Author confirms the SL User Requirement  is in “HL Baselined” status by viewing the Requirements Kanban board or viewing the detailed page for the SL User Requirement . The Requirements Author also checks that the required DCR Release documentation artifacts have been added to the DCR by viewing the DCR. When these conditions are true, a SL User Requirement can be decomposed into one or more DL Requirements by the Requirements Author.
1. From the SL User Requirement, the Requirements Author clicks the **Add DL** button to add a DL Requirement.
<br>![Add DL button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_decomp_sldl_adddl_btn.png "Add DL button")<br>
1. Navigate to the newly created DL Requirement in one of the following ways:
- In the **Issue Links \> Satisfied By** section of the SL User Requirement , click the issue hyperlink.
<br>![Issue hyperlink](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_decomp_sldl_issuelink.png "Issue hyperlink")<br>
- From the Kanban board, click the DL Requirement located in the **Draft** column of the *Detail Level Req (SL)* swim lane. Then click the DL Requirement link in the preview pane to open the detailed view of the DL Requirement.

     ![SL User Requirement ](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_decomp_sldl_kanban.png "SL User Requirement ")<br>
1. Click the **Edit** button on the DL detailed view screen.
<br>![Edit button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_decomp_sldl_edit_btn.png "Edit button")<br>
1. In the edit window, at a minimum, populate the following required fields:
- Assignee
- Summary
- Requirement Statement
- Requirement Type Classification
- Description

   **Note:** The system automatically copies the following values from the SL User Requirement  to the DL Requirement; however, these values can be updated in the edit issue page.

     - Component
     - Acceptance criteria
     - User Need
     - Non-functional Category
     - Label Category

1. When you are finished editing the fields, click **Update.**

1. Move the DL Requirement from “Draft” status to “In Review” status by either dragging it to the **In Review** column on the Kanban board, or by clicking the **Ready for Review** button on the detailed view page.

   ![Ready for Review button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_decomp_sldl_rdy_review_btn.png "Ready for Review button")

   >**Tip:** If you have multiple browser pages open, such as the Kanban view and the detailed view of the HL or other pages, be sure to refresh the individual browser pages so that the information you are viewing is the most current.

1. When ready to approve the DL Requirement, drag it to the **Approved** column on the Kanban board, or click the **Approve** button on the detailed view page.

   ![Approve button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_decomp_sldl_approve_btn.png "Approve button")

1. The DL Requirement is now in “Dev Backlog” status and the system automatically generates a Development Story issue in the Offering’s Development project.  The Development Story is in “Dev Backlog” status. There is a 1-1 mapping between the Development Story to the DL Requirement.

   From the **Issue Links** section of the DL Requirement, you can view the relationship of the DL to its associated SL User Requirement  and the generated Development Story.

   ![DL/SL relationship](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_decomp_sldl_relationship.png "DL/SL relationship")

## What to do next
Development can work with and assess the generated Development Epic and Development Story for implementation.
