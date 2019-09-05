---
title: HL Baselining SL Requirements
sidebar: tools
breadcrumb: HL Baselining SL Requirements
---

# DRAFT

## Before You Begin
Requirements Authors groom and decompose High Level (HL) Feature Requirements into one or more System Level (SL) User Requirements which can then be groomed into one or more Detail Level (DL) Requirements.

After a SL Requirement is in “Approved” status, the Requirements Author can HL Baseline the SL Requirement. To HL Baseline the SL Requirement means to establish the high level design input baseline marker or milestone at a point in time. When the SL Requirement is in “HL Baselined” status, the SL Requirement becomes read-only. At this point, you can only update the SL Requirement with comments and any changes are made through the Watson Health Change Control process.

When all associated SL Requirements for a given HL Requirement are in “HL Baselined” status, the HL Requirement transitions to “HL Baselined” status. When the HL Requirement is in “HL Baselined” status, the HL Requirement becomes read-only.  At this point, you can only update the HL Requirement with comments and any changes are made through the Watson Health Change Control process.

When a SL Requirement and the HL Requirement are HL Baselined, the system produces a snapshot PDF of the baselined SL Requirement and its associated HL Requirement which can be used to obtain approval on the HL Baselined Requirements.

**Applicable Role(s):**  WH Requirements Author

## Procedure

1. The Requirements Author confirms the SL Requirement is in “Approved” status by viewing the Requirements Kanban board or viewing the detailed page for the SL Requirement.
1. From the approved SL Requirement, the Requirements Author clicks the **HL Baseline** button to baseline the SL Requirement.
<br>![DL Baseline button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/hl_baselining_hl_baseline_button.png "HL Baseline button")<br>
1. The SL Requirement is now in “HL Baselined” status.
<br>![HL Baselined status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/hl_baselining_hl_baselined_status.png "HL Baselined status")<br>
1. In the **Attachments** section of the “HL Baselined” SL Requirement, see the system generated HL Baseline Snapshot.  These system generated snapshot attachments cannot be deleted.
<br>![HL Baseline snapshot](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/hl_baselining_baseline_snapshot.png "HL Baseline snapshot")<br>
<br>The Baseline Snapshot is a PDF summary of the fields and their values for the SL Requirement; for example:
<br>![PDF summary of Baseline Snapshot](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/hl_baselining_baseline_pdf.png "PDF Summary of Baseline Snapshot")<br>
1. From the **Issue Links** section of the SL Requirement, we can see the associated HL Requirement is now in “HL Baselined” status.  For this example, there is only one SL Requirement associated with the HL Requirement.  If there were more than one SL Requirement associated with the HL Requirement, when all of the associated SL Requirements are in “HL Baselined” status, the HL Requirement transitions to “HL Baselined” status.
<br>![Associated HL Requirement showing HL Baselined status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/hl_baselining_hl_baselined.png "Associated HL Requirement showing HL Baselined status")

## What to do next
You can [add Detail Level (DL) Requirements to the SL Requirement](../jira_decomposing_sl_to_dl/).
