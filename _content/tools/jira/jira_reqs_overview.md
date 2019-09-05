---
title: Overview - Working in WH Jira Requirements Projects
sidebar: tools
breadcrumb: Working in WH Jira Requirements Projects
---

# DRAFT

## Before You Begin
Offering Managers create releases and specify Epics (or features) in Aha! for a release based on assessments for value to markets served by Watson Health. After Offering Management approves an Epic in Aha! and pushes the Epic into a Jira, the system automatically creates a clone of the Epic from Aha! in the Offering’s Jira Requirements project as a non-modifiable Epic.

When an Epic comes into the Jira portion of the WH Application Lifecycle Management (ALM) Solution, the system maps the Epic from Aha! to the Epic in Jira. It is most important that the author of the Epic in Aha! correctly sets values for required fields prior to pushing the Epic from Aha! to Jira. This is especially important for fields that specify the versioning of the Epic in Aha! relative to the current release and/or next release, as Aha! does not perform checks for required fields. For information
about Epics in Aha!, see [Creating an Epic in Aha!](../../aha/aha_create_epic/)

The values set for the Epic in Aha! are used by the system to determine if the
Epic is:

-   *A new requirement*

    -   If the new requirement is for the “current” or “active” release, the system sets the status of the cloned Epic in Jira to “Approved” status and automatically creates associated High Level (HL) Feature requirements depending on whether the Offering is using a 2-Tier or 3-Tier model for requirements.

    -   If the new requirement is for the “next” release, the system sets the status of the cloned Epic in Jira to “In Queue” status and automatically creates associated requirements depending on whether the Offering is using a 2-Tier or 3-Tier model for requirements.

-   *Being persisted from a prior release*
    -    This represents a feature that is being persisted from a prior release and is being queued up for the next release.
    -    The system sets appropriate fields to indicate the prior release. The system will set the prior release as the current release, only if all associated WH Jira requirements are complete on the prior release.

-   *A duplicate*
    -   If the feature is determined to be a duplicate, the cloned Epic in the WH ALM Solution is set to “Duplicate” status.

If the WH Offering is following a *<b>2-Tier model</b>* for Requirements, the WH ALM Solution automatically creates the following in the Jira Requirements project:
-  a non-modifiable Epic in Jira which links back to the Aha! Epic.
- a Design Change Request (DCR) issue in Jira for the Release (if it doesn’t already exist) and links the DCR for the release to the Epic in Jira.
- a High Level (HL) Feature Requirement. For offerings using the 2-Tier model, the HL Feature Requirement is generated; however, no actions are required on the HL Feature Requirement as it is not really used in the 2-Tier model.
- a System Level (SL) User Requirement. The SL User Requirement is functionally equivalent to the Epic in Aha! such that there is a one-to-one (1-to-1) mapping between the SL User Requirement and the Epic. There is only one SL User Requirement for the Release. Requirements Authors can work with and decompose the SL User Requirement into one or more Detail Level (DL) Requirements to send to Development.

If the WH Offering is following a *<b>3-Tier model</b>* for Requirements, which models the IBM Design Thinking Hill-Epic-Story approach, the WH ALM Solution automatically creates the following in the Jira Requirements project:
-  a non-modifiable Epic in Jira which links back to the Aha! Epic.
- a Design Change Request (DCR) issue in Jira for the Release (if it doesn’t already exist) and links the DCR for the release to the Epic in Jira.
- a High Level (HL) Feature Requirement. The HL Feature Requirement is functionally equivalent to the Epic in Aha! such that there is a 1-to-1 mapping between the HL Feature and the Epic. Requirements Authors can work with and decompose HL Feature Requirements into one or more System Level (SL) User Requirements and further decompose SL User Requirements into one or more Detail Level (DL) Requirements to send to Development.

A WH Offering establishes whether it follows a 2-Tier or 3-Tier Model for Requirements in the Offering’s request to be onboarded to the WH ALM Solution. The established requirements model is set for the life of the WH Offering in the WH ALM Solution cannot be changed. See **add link to Offering Onboarding topic**.

A DCR in a Jira Requirements project defines the scope of a release of an Offering. For each Offering, there is 1 DCR per release in the WH ALM Solution and the DCR specifies the associated features or Epics in the release. An Epic in Jira for a specific Offering release is associated with the DCR for that Offering release for traceability purposes. The DCR for an Offering release has the trace relationships to an Epic and any Configuration Change Requests (CCRs) against those Epics. CCRs are used to manage changes to a requirement, design, development, or test artifacts.

The following illustration depicts the relationship between an Epic that is pushed from Aha! to the non-modifiable Epic and the generated HL Feature
Requirement in the Jira Requirements project.
<br> ![Relationship between Aha! Epics and requirements in Jira](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_overv_ahaepic_toreqs.png "Relationship between Aha! Epics and requirements in Jira")

Review the Traceability Metamodel [Traceability Metamodel](../../index#traceability-metamodel) which illustrates the relationship between a DCR and an Epic in Jira.

**Applicable Role(s):**

-   Requirements User: Has view access to an Offering’s Requirements project in Jira.

-   WH Requirements Author: Works with requirements in WH ALM Solution with edit abilities. Can view DCR but does not have access to author or approve a DCR.

-   DCR Author and DCR Approver: Both roles work with the release DCRs in the WH ALM Solution. DCR Authors have edit capabilities and DCR Authors can approve DCRs.

## Procedure

1. **To view an Epic in Jira** (which was pushed from Aha! to Jira), the Requirements User completes the following:

   a.  Navigate to the Offering’s WH Jira Requirements project, locate the Kanban board in the left pane, and locate the “Epics from Aha!” section.

    ![Locate Epics from Aha! on Kanban](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_reqs_epicfromkanban.png "Locate Epics from Aha! on Kanban")

    b. Click the Epic to open the Epic. You can also open the Epic by clicking the Epic Issue link (which is the Issue number). <br>
      ![Preview pane for Epic](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_reqs_epicpreview.png "Preview pane for Epic")

    -   View information about the Epic.
      ![Detailed view of Epic](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_reqs_epicdetailview.png "Detailed view of Epic")

    -   View the traceability information for the Epic in the **Issue Links** section.

        -   **Realized By** relationship – Shows the HL Feature Requirement that is realized by the associated Epic.
        -   **Released By** relationship - Shows the DCR that is associated to the Epic.
        ![Issue links of Epic](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_reqs_epicdetailview_issuelinks.png "Issue links of Epic")

1. To view traceability of the DCR to the Epic in an Offering’s WH Jira Requirements project, the Requirements User completes the following:

   a. Locate and open the desired Epic in the “Epics from Aha!” section of the Offering’s WH Jira Requirements project from the Kanban board (see step 1).

   b. Navigate to the **Issue Links** section of the Epic. The **Released By** section indicates the DCR that is associated with the Epic in Jira. The **Realized By** section indicates the HL Feature Requirement that is associated with the Epic in Jira.

      ![Issue links of Epic](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_reqs_epicdetailview_issuelinks.png "Issue links of Epic")

    c. Click the link for the DCR issue in the **Released By** section to open the DCR issue.
      ![Detailed view of DCR](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_reqs_dcrdetailview.png "Detailed view of DCR")

    d. Navigate to the **Issue Links** section of the DCR. The **Releases** section indicates the Epics in Jira that are associated with the DCR.

      ![Issue links of DCR](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_reqs_dcrdetailview_issuelinks.png "Issue links of DCR")

3. For Offerings following the *<u>2-Tier model</u>* for requirements, to **view the SL User Requirement** that was generated from the cloned Epic in Aha!, the Requirements User completes the following:

   a. Locate and open the desired Epic in the “Epics from Aha!” section of the Offering’s WH Jira Requirements project from the Kanban board (see step 1).

   b. Navigate to the **Issue Links** section of the Epic. The **Realized By** section indicates the HL Feature Requirement that is associated with the Epic in Jira. The **Released By** section indicates the DCR that is associated with the Epic in Jira.

    ![(2-Tier) Issue links of Epic](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_reqs_2t_epicdetailview_issuelinks.png "(2-Tier) Issue links of Epic")

    c. Click the link for the HL Feature Requirement in the **Realized By** section to open the HL Feature Requirement issue. The HL Feature Requirement is automatically created when the Epic in Aha! is pushed to Jira. In the 2-Tier model, the HL Feature Requirement is generated; however, no actions are required on the HL Feature Requirement as it is not really used in the 2-Tier model.

      ![(2-Tier) Detailed view of HL Feature Requirement](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_reqs_2t_hldetailview.png "(2-Tier) Detailed view of HL Feature Requirement")

      In the **Issue Links** section of the HL Feature Requirement illustrates the following:
      - The **Realized By** section indicates the SL User Requirement that is associated with the Epic in Jira.
      - The **Released By** section indicates the DCR that is associated with the Epic in Jira.

      <br>
    d. Click the link for the SL User Requirement in the **Realized By** section of the HL Feature Requirement to open the SL User Requirement. In the 2-Tier model, the system automatically generates one SL User Requirement that is associated with HL Feature Requirement and its associated Epic. There is a 1-to-1 mapping between the SL User Requirement and the Epic.

    ![(2-Tier) Detailed view of SL User Requirement](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_reqs_2t_sldetailview.png "(2-Tier)  Detailed view of SL User Requirement")

    In the **Issue Links** section of the SL User Requirement, the **Satisfies** section shows that the SL User Requirement satisfies the associated HL Feature Requirement.
    > **Tip:**
    - In the 2-Tier model, the HL Feature Requirement exists, but is not used. The SL User Requirement has a 1-to-1 mapping to the Epic.
    - When one or more Detail Level (DL) Requirements exist that are associated with a SL User Requirement, the **Satisfied By** section shows the SL User Requirement is satisfied by one or more DL Requirements.


4. For Offerings following a *<u>3-Tier model</u>* for requirements, to view the HL Feature Requirement that was generated from the cloned Epic in Aha!, the Requirements User completes the following:

    a. Locate and open the desired Epic in the “Epics from Aha!” section of the Offering’s WH Jira Requirements project from the Kanban board (see step 1).

    b. Navigate to the **Issue Links** section of the Epic. The **Realized By** section indicates the HL Feature Requirement that is associated with the Epic in Jira. The **Released By** section indicates the DCR that is associated with the Epic in Jira.

      ![(3-Tier) Issue links of Epic](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_reqs_epicdetailview_issuelinks.png "(3-Tier) Issue links of Epic")

    c. Click the link for the HL Feature Requirement in the **Realized By** section to open the HL Feature Requirement issue. The HL Feature Requirement is    automatically created when the Epic in Aha! is pushed to Jira. The initial status of the HL Feature Requirement is “Draft” status.

    ![(3-Tier) Detailed view of HL Feature Requirement](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_reqs_3t_hldetailview.png "(3-Tier) Detailed view of HL Feature Requirement")

    In the **Issue Links** section of the HL Feature Requirement, the **Realized By** section indicates the HL Feature Requirement that is associated with the Epic in Jira. The **Released By** section indicates the DCR that is associated with the Epic in Jira.

    d.  When one or more SL User Requirements exist that are associated with the HL Feature Requirement, the SL User Requirements are shown in the **Issue Links** section of the HL Feature Requirement. The **Satisfied By** section shows one or more SL User Requirements which satisfy the associated HL Feature Requirement.

    > **Tip:** When one or more DL Requirements exist that are associated with a SL User Requirement, the DL User Requirements are shown in the **Issue Links** section of the SL User Requirement.

## What to do next

If your Offering is following the 2-Tier model, see Decomposing SL User Requirements (add link topic link).

If your Offering is following the 3-Tier model, see Decomposing HL Feature Requirements (add link topic link).
