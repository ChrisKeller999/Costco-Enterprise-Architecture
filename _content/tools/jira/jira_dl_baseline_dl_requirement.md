---
title: DL Baselining DL Requirements
sidebar: tools
breadcrumb: DL Baselining DL Requirements
---

# DRAFT

## Before You Begin
Requirements Authors groom and decompose High Level (HL) Requirements into one or more System Level (SL) Requirements for final decomposition into Detail Level (DL) Requirements. DL requirements will take the form of user Stories to guide developers coding efforts, ensuring that the software they are developing addresses user needs.

After a SL Requirement is in “Approved” status, the Requirements Author can add DL Requirements to the SL Requirement. DL requirements can also be added to a SL Requirement when the SL Requirement is in “HL Baselined” status.

The DL Requirement(s) can be DL Baselined, which means to establish the detailed level design input baseline marker or milestone at a point in time. When a DL Requirement is in “DL Baselined” status, the DL Requirement becomes read-only. At this point, you can only update the DL Requirement with comments and any changes are made through the Watson Health Change Control process.

When all associated DL Requirements for a given SL Requirement are in “DL Baselined” status, the SL Requirement transitions to “DL Baselined” status. When the SL Requirement is in “DL Baselined” status, the system checks the associated HL Requirement to see if there are other SL Requirements (associated with that HL Requirement) that are not yet in “DL Baselined” status.  When all SL Requirements associated with the HL are in “DL Baselined” status, the HL Requirement transitions to “DL Baselined” status.

When the HL Requirement transitions to “DL Baselined” status, the HL Requirement and all of its child SL and DL requirements (including their originating Epic managed in Aha!) become read-only and and changes can only be made through Watson Health Change Control process. The SL and its associated DL Requirements are now ready to be pushed to Development for development work.

**Applicable Role(s):**  WH Requirements Author

## Procedure

1. The Requirements Author confirms the DL Requirement is in “Approved” status by viewing the Requirements Kanban board or viewing the detailed page for the SL Requirement.
1. From the approved DL Requirement, the Requirements Author clicks the **DL Baseline** button to baseline the DL Requirement.
<br>![DL Baseline button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/dl_baselining_dl_baseline_button.png "DL Baseline button")<br>
1. The DL Requirement is now in “DL Baselined” status.
<br>![DL Baselined status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/dl_baselining_dl_baselined_status.png "DL Baselined status")<br>
1. In the **Attachments** section of the “DL Baselined” DL Requirement, see the system generated DL Baseline Snapshot. These system generated snapshot attachments cannot be deleted.
<br>![DL Baseline snapshot](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/dl_baselining_baseline_snapshot.png "DL Baseline snapshot")<br>
<br>The Baseline Snapshot is a PDF summary of the fields and their values for the DL Requirement; for example:
<br>![PDF summary of Baseline Snapshot](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/dl_baselining_baseline_pdf.png "PDF Summary of Baseline Snapshot")<br><br>
1. From the Issue Links section of the DL Requirement, we can see the associated SL Requirement is now in “DL Baselined” status. For this example, there is only one DL Requirement associated with the SL Requirement. If there were more than one DL Requirement associated with the SL Requirement, when all the associated DL Requirements are in “DL Baselined” status, the SL Requirement transitions to “DL Baselined” status.
<br>![Associated SL Requirement showing DL Baselined status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/dl_baselining_sl_baselined.png "Associated SL Requirement showing DL Baselined status")<br>
From the **Issue Links** section of the SL Requirement, we can see the associated HL Requirement is now in “DL Baselined” status.   For this example, there is only one DL Requirement associated with the SL Requirement and there is only one SL associated with the HL.  If there were more than one SL Requirement associated with the HL Requirement, when all of the associated SL Requirements are in “DL Baselined” status, the HL Requirement transitions to “DL Baselined” status.
<br>![Associated HL Requirement showing DL Baselined status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/dl_baselining_hl_baselined.png "Associated HL Requirement showing DL Baselined status")

## What to do next
When the SL Requirement is in “DL Baselined” status, the Requirements Author can [push the set of SL Requirements and its associated DL Requirements to Development](../jira_push_sldlreqs_todev/).
