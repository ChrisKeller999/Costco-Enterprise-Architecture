---
title: Pushing SL and DL Requirements to Development
sidebar: tools
breadcrumb: Pushing SL and DL Requirements to Development
---

# DRAFT

## Before You Begin
Requirements Authors groom and decompose High Level (HL) Requirements into one or more System Level (SL) Requirements which can then be groomed into one or more Detail Level (DL) Requirements.

After a SL Requirement is in “DL Baselined” status, the Requirements Author can push the SL and its associated DL Requirements to Development for development work.

From the SL Requirement, the Requirements Author can either **Push Release** or **Push Feature** to Development.

- **Push Release** -- Use Push Release if you are using a software development lifecycle that requires that all requirements for the release be baselined and approved before Development can begin working on the requirements; for example, a waterfall development model. The system checks that the SL Requirement and all its associated DL Requirements for a specific Fix Version are in “DL Baselined” status before pushing to Development.  This push occurs on a release by release basis.
- **Push Feature** -- Use Push Feature if you are using a software development lifecycle that does not require all requirements for the release be baselined and approved before Development can begin working on the requirements; for example, an agile development model.  A Requirements Author can push a set of SL Requirements and its associated DL Requirements for a single HL Requirement to Development. This push occurs on a feature by feature basis.

For each SL Requirement in “DL Baselined” status that is pushed to Development (either by Feature or Release), the system automatically creates a Development Epic in the Jira Development project.  The Development Epic is not modifiable in the Development project. For each DL Requirement in “DL Baselined” status that is pushed for the release, the system automatically creates a Development Story in the Jira Development project. The system automatically sets the trace relationship horizontally between the Requirements and the Development Epic/Story.

**Applicable Role(s):**  WH Requirements Author

The following illustration depicts the relationship between decomposed SL and DL Requirements that are pushed to the Jira Development project for development work.
<br>![Relationship between Requirements pushed to Development](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_overv_reqs_todev.png "Relationship between Requirements pushed to Development")<br>

## Procedure

1. The Requirements Author confirms the SL Requirements and its associated DL Requirements are in "DL Baselined" status.  Refer to [DL Baselining SL and DL Requirements](../jira_dl_baseline_dl_requirement/).

1. From the SL Requirement, the Requirements Author clicks the **Push Feature** button to push the Feature to Development.
<br>![Push Feature button](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_slpushfeature.png "Add DL button")<br>
1. The status of the associated HL, SL and DL Requirements is changed to "Dev Backlog" status.
<br>![HL/SL/DL in Dev Backlog status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_hlsldl_devbacklog.png "HL/SL/DL in Dev Backlog status")<br>

1. As a result of the push of the SL Requirement, a non-modifiable Epic is created in the Jira Development project. The Development Epic is in "Dev Backlog" status.
<br>![SL Req to Dev Epic](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_slreq_to_devepic.png "SL Req to Dev Epic")<br>

1. As a result of the push of the associated HL Requirement, a Development Story is created in the Jira Development project. The Development Story is in "Dev Backlog" status.
<br>![DL Req to Dev Story](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_dlreq_to_devstory.png "DL Req to Dev Story")<br>
1. Navigate to the Development project to view the newly created Development Story from either the Kanban board or from the Dev Story detailed page view.

> **Tip:** If you have multiple browser pages open, such as the Kanban view and the detailed view of the HL or other pages, be sure to refresh the individual browser pages so that the information you are viewing is the most current.
<br>

## What to do next
Development can begin evaluating the backlog for sprint assignment.
