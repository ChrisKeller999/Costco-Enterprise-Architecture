---
title: (3-Tier) HL Baselining SL User Requirements
sidebar: tools
breadcrumb: (3-Tier) HL Baselining SL User Requirements
---

# DRAFT

## Before You Begin
For Watson Health (WH) Offerings that are following a 3-Tier model for requirements, Requirements Authors work with and decompose High Level (HL) Feature Requirements into one or more System Level (SL) User Requirements which can then be groomed into one or more Detail Level (DL) Requirements. SL User Requirements and the associated DL Requirements are the requirements that define the work that is sent to Development for their development work. SL User Requirements must be approved before baselining the requirement.

Once the following conditions are true, a Requirements Author can _HL Baseline_ the SL User Requirement(s).
- The SL User Requirement that is associated with the HL Feature Requirement is in “Approved” status;
- The DCR for the release (the _Fix Version_ of the HL Feature Requirement) is in “Approved” status

To _HL Baseline_ the SL User Requirement means to establish the high level design input baseline marker or milestone at a point in time. When the SL User Requirement is in _“HL Baselined”_ status, the SL User Requirement becomes read-only. At this point, a Requirements Author can only update the SL User Requirement with comments and any changes to the SL User Requirement are made through the Watson Health Change Control process.

When all associated SL User Requirements for a given HL Feature Requirement are in _“HL Baselined”_ status, the HL Feature Requirement itself transitions to _“HL Baselined”_ status. When the HL Requirement is in _“HL Baselined”_ status, the HL Feature Requirement becomes read-only. At this point, a Requirements Author can only update the HL Feature Requirement with comments and any changes are made through the Watson Health Change Control process.

When a SL User Requirement and the HL Feature Requirement are both in _“HL Baselined”_ status, the system creates an Epic in the Offering’s Development project area of Jira in the WH Application Lifecycle Management (ALM) Solution. The Epic in the Development project is a clone of the approved SL User Requirement. 

**Applicable Role(s):**  WH Requirements Author

## Procedure

1. The Requirements Author confirms the SL User Requirement is in “Approved” status by viewing the Requirements Kanban board or viewing the detailed page for the SL User Requirement.
1. From the approved SL User Requirement, the Requirements Author clicks the **HL Baseline** button to baseline the SL Requirement.

   ![HL Baseline button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_hl_baseline_sl_hlbaseline_btn.png "HL Baseline button")<br>
1. The SL Requirement is now in “HL Baselined” status.
<br>![HL Baselined status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_hl_baseline_sl_hlbaselined_status.png "HL Baselined status")<br>
1. The Requirements Author completes the required Design release documentation.  For 3-Tier Requirements projects, use the Design Input Specification template WH_QMS_TPL_0021.  Follow applicable Standard Operating Procedures and procedures for this manual step.
1. When the appropriate design documentation is approved, the Requirements Author works with the DCR Author to add the approved document information to the DCR for the release. The DCR Author clicks **Add Approval**.

   ![Add Approval button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_hl_baseline_sl_add_appv_btn.png "Add Approval button")

1. The Add Approval page opens.  Select the **Document Generation Type** from the drop-down menu and compete the required fields following the help text instructions.  Click **Add Approval** to complete this page.

   ![The Add Approval page](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_hl_baseline_sl_add_appv_pg.png "The Add Approval page")

1. From the DCR, the approved document is added to the **Release Documentation** tab.

   ![Release Documentation tab details](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_hl_baseline_sl_doc_tab.png "Release Documentation tab details")
1. Now that HL Baselining activities are completed, the Requirements Author navigates to the SL User Requirement, which is in “HL Baselined” status, and clicks **Add DL** to add a Detail Level Requirement to the SL User Requirement.

   ![Add DL button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_hl_baseline_sl_add_dl_btn.png "Add DL button")
1. From the **Issue Links** section of the SL User Requirement, see the traceability of the SL User Requirement to the associated HL Requirement by the Satisfies relationship and that the associated HL Feature Requirement is also in “HL Baselined” status.


   For this example, there is only one SL User Requirement associated with the HL Feature Requirement. If there were more than one SL User Requirement associated with the HL Feature Requirement, when all the associated SL User Requirements are in “HL Baselined” status, the HL Requirement transitions to “HL Baselined” status.

   ![Traceability of the SL User Requirement to the associated HL Requirement](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_3t_hl_baseline_sl_satisfies_relation.png "Traceability of the SL User Requirement to the associated HL Requirement")
1. When the SL User Requirement is in “HL Baselined” status, the system automatically generates a Development Epic in the Development project. The Development Epic is in “Dev Backlog” status. There is a 1-1 mapping between Development Epics to SL User Requirements.

## What to do next
Once the SL User Requirement is in “HL Baselined” status and the DCR for the release has been updated to include required Release Documentation, the Requirements Author can then [add Detail Level (DL) Requirements to the SL User Requirement](../jira_3tier_decomposing_sl_to_dl/).
