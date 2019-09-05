---
title: Creating Xray Test Artifacts
sidebar: tools
breadcrumb: Xray Test Artifacts
---
# DRAFT
## Creating an Xray Test Plan or Component
Create one or more Xray Test Plans and Components with a focus on various features or functional areas to be tested.

![Xray Test Plans](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/issue_flow_1.jpg)

![Xray Components](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/issue_flow_2.jpg)
## Creating an Xray Test Repository to mirror the Component hierarchy
Create an Xray Test Repository hierarchy that mirrors your Component hierarchy to organize your Test artifacts.

![Create Xray Test Repository](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/issue_flow_3.jpg)

## Creating Xray Test Sets
Create Xray Test Set(s) with a meaningful label, referencing their Component, to logically group related Tests, mirroring your Component and Test Repository hierarchy.

From the associated Jira Development project, reference the Epic and Story Kanban board, or query:

```
Project = "Watson for Oncology Suite_Test" ORDER BY issuetype ASC
```
## Creating Xray Test from Story
Create Xray Tests from Story issue types, associating them with their requisite Test Set and Test Plan.

As required, use the ‘Import’ function of Xray to import test steps previously created via a CSV file.

## Associating Test Sets to Test Plans

1. Verify content on the **Xray Test Plan Board**, to include building out a folder structure mimicking your Component and Test Repository folders and assigning your Tests as appropriate.

1. Create Xray Test Pre-Conditions as required and associate them with the appropriate Xray Tests.

1. Create Xray Test Executions for individual Tests or all Tests associated with an Xray Test Set.
