---
  title: Addressing Bug Issues opened by Test
  sidebar: tools
  breadcrumb: Addressing Bug Issues opened by Test
---
# DRAFT

## Before You Begin
After a Bug issue is created against development code as a result from an Xray Test, Development addresses the Bug issue.

**Applicable Roles:**  WH Developer, Xray Test Team Member, Xray Test Team Lead

**Pre-requisite:**  An Xray Test Team Member or Xray Test Team Lead has created a Bug issue in the appropriate Jira Development project area.

A WH Developer completes the following procedure to address the Bug issue.
## Procedure
1.  From the Jira Development project, open **Issues** and click the **My open issues** filter to view open issues assigned to you (the WH Developer).
![My open issues filter](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_myopenissues.png "My open issues filter")

1. From the Open Issues list, open the Bug issue. Upon opening the Bug, the Developer has the following options:
* **Assign** the Bug to a different Developer;
* **Start Working** on the Bug; or
* Return the Bug issue to the person who reported the Bug for more information and request **Info Needed**.
![Dev Assigns, Starts Work or Requests Info Needed](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_bugoptions_assignstartwkorneedinfo.png "Dev Assigns, Starts Work or Requests Info Needed")
1. To begin working on the Bug issue, click **Start Working**.  This action assigns the Bug to you and transitions the Bug to "In Progress" status.<br>
![Bug: "In Progress" status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_buginprogress.png "Bug: "In Progress" status")
1.  Once unit testing activities are performed and the fix is uploaded to GitHub, click **Verify** to transition the Bug to "In Test" status.<br>
![Bug: "In Test" status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_bugintest.png "Bug: "In Test" status")
1.  Once the Bug is in "In Test" status, specify an Assignee, add a comment such as "Ready to re-test", and click **Assign** to assign the Bug to an appropriate test team member to re-test.
![Assign Bug to retest](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_bugintest_retest.png "Assign Bug to retest")
1.  The Tester tests to check if the Bug is fixed.
* If the Tester finds the Bug is not fixed, the Tester clicks **Fail Verification** and reassigns the Bug to the original Developer.<br>
![Tester specifies Bug fix fails](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_bugfixresult_fail.png "Tester specifies Bug fix fails")
* If the Tester verifies the Bug is fixed, the Tester clicks **Testing Complete** to transition the Bug to "Verified" status.<br>
![Tester specifies Bug fix complete](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_bugfixresult_complete.png "Tester specifies Bug fix complete")
![Bug: "Verified" status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_bugfixresult_verified.png "Bug: "Verified" status")

## Next Steps
The Developer can check the status of Bug issues that they have performed work against in the **Issue Links** section of the parent Story.<br>
![Story:  Issue Links](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/jira/jira_story_issuelinks.png "Story:  Issue Links")
