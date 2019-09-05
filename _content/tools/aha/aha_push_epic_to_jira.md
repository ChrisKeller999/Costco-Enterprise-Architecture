---
title: Pushing an Approved Epic in Aha! to Jira
sidebar: tools
breadcrumb: Pushing an Approved Epic in Aha! to Jira
---

# DRAFT

## Before You Begin
Aha! is the home for everything related to business strategy, user personas, and product roadmaps. The Watson Health Application Lifecycle Management (ALM) Solution integrates Aha! with Jira to enable full traceability for an Offering’s lifecycle across key elements including requirements, development stories, and test cases.

Once the Commitment/Pitch/Playback of an Epic has been approved, an Offering Manager can push the Epic in Aha! to Jira. The Epic in Aha! is cloned as a non-modifiable Epic in Jira and the Epic in Jira is automatically associated to the Design Change Release (DCR) for the Offering’s release.

- **If the Offering is following a 2 Tier requirements model:** When the Epic in Jira is created, the system automatically creates a High Level Feature Requirement (non-modifiable) and a System Level (SL) User Requirement. The SL User Requirement has a one-to-one mapping to the Epic in Jira.
- **If the Offering is following a 3 Tier requirements model:** When the Epic in Jira is created, the system automatically creates a High Level (HL) Feature Requirement. This HL Feature requirement has a one-to-one mapping to the Epic in Jira.

**Applicable Role(s):**  Offering Manager or any person with an Aha! Contributor role

## Procedure

1. From the **Epic/feature** window of the approved Aha! Epic, scroll to the **Integrations** section and click the **Send** link.
<br>![Integrations section - Send link](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/aha/aha_push_jira_send_link.png "Integrations section - Send link")
1. Select **Send to Jira**.
<br>![Integrations section - Send to Jira](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/aha/aha_push_jira_send_jira.png "Integrations section - Send to Jira")
1. A link to the Jira Epic is created in the **Integrations** section of the Aha! **Epic/feature** window.
<br>![Integrations section - Integration link to Jira Epic](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/aha/aha_push_jira_integration_link.png "Integrations section - Integration link to Jira Epic")
<br><br>The Aha! Epic with the link to the Jira Epic can also be viewed from the Kanban board in Aha!
<br>![Epic displayed on Kanban board with integration link to Jira](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/aha/aha_push_jira_epic_link.png "Epic displayed on Kanban board with integration link to Jira")

## What to do next
Learn about working with [requirements in Jira](../../jira/jira_reqs_overview/) and working with DCRs in Jira. <<link to DCR topic>>
