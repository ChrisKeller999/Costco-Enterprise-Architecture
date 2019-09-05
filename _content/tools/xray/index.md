---
title: Xray Test Management
sidebar: tools
---

# DRAFT

# Getting Started with the Xray plugin

Xray Test Management tool for Jira that supports test planning, test design, test execution and test reporting. The following diagram describes the relationship of various Xray entities.

![Xray Entity Relationship Diagram](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_er.jpg)

### Known Xray plugin limitations

-   Unable to associate Jira requirement type issues down to the test step level for manual tests.
-   Need to clone test assets to associate them with a new release.
-   Unable to track change history for Test versions.
-   Unable to run the same Test with different variables required for more than one Test Plan. If there is a requirement to run the same Test with different variables in another Test Plan, the tester will need to duplicate the Test(s) for use at the appropriate time in another Test Plan.
-   A unique Xray Test Execution Issue must be created for each Test run.

### Xray Test Management topics
#### General Information
-  [About Xray Test Artifacts](../xray_testartifacts/)
-  [Xray Test Roles](../xray_testroles/)
-  [Xray Test Workflows](../xray_workflows/)
-  [Creating Xray Test Artifacts](../xray_create_testartifacts/)

#### Automated Testing
-  [Preparing to use Cucumber for testing in the Xray Environment](../xray_preparingtousecuke/)
-  [Creating Cucumber Test Cases in the Xray Environment](../xray_cuke_createtestcases/)
-  [Generating Cucumber Test results in the Xray Environment](../xray_cuke_testresults/)
-  [Testing with Xray Generic Automation](../xray_genericautomation/)

#### Manual Testing
-  [Creating Bug Issues when running Xray Manual Tests](../xray_openbug_4manualteststepfail/)
-  [Assigning "In Progress" Test Executions Among Test Team Members](../xray_workwith_inprogress_testexecutions/)
