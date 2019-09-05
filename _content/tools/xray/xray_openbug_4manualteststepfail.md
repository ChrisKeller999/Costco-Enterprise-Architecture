---
title: Creating Bug Issues when running Xray Manual Tests
sidebar: tools
breadcrumb: Creating Bug Issues
---
# DRAFT

## Before You Begin
An Xray Test Team Member or Xray Test Team Lead identifies a defect when running a manual test in Xray, requiring them to open an issue against a development code change.

**Applicable Role:**  Xray Test Team Member or Xray Test Team Lead

**Pre-requisite:**  An Xray Test Team Member or Xray Test Team Lead has created an Xray Test that is linked to an associated Story in a Watson Health Jira Development project.

## Procedure
1.  During manual test execution, the Xray Test Team Member identifies a failing test step.
![Tester identifies failing test step](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_testeridentifies_manualteststepfail.png "Tester identifies failing test step")

2. The Tester selects the Add icon ![Add icon](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_add_icon.png "Add icon") for defects to create a Bug issue type in the appropriate Watson Health Jira Development project.
![Add defect icon to create Defect Issue](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_createbug_adddefect.png "Add defect icon to create Defect Issue")

3. To create the defect, select the **Create Defect** option:
![Select Create Defect](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_createbug_createdefect.png "Select Create Defect")

4. Enter the required information to create the Bug Issue.  Required fields include Project, Issue Type, Summary and Reporter.<BR>
![Enter required fields to create Issue](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_createbug_requiredfields.png "Enter required fields to create Issue")
5. Complete the remaining fields to provide good information to assist the development team in their root cause analysis. Be sure to link the Bug Issue to the associated Development Story in the **Linked Issues** section.

  **Important:**  Be sure the **Linked Issues** drop-down list contains the **Impacts** link type as illustrated in the following image.

  Once information for these fields is completed, click **Create** to create the Bug Issue.
![Add Linked Issues and other Bug information](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_createbug_linkedissues_otherfields.png "Add Linked Issues and other Bug information")
