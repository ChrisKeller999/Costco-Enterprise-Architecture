---
title: Assigning "In Progress" Test Executions Among Test Team Members
sidebar: tools
breadcrumb: Assigning "In Progress" Test Executions
---
# DRAFT

## Before You Begin
Sometimes, a Test Team Member might need to hand off a Test Execution associated with a manual test that is "In Progress" status to a different Test Team Member for completion. This topic describes how to reassign a Test Execution for a manual test that is "In Progress" to a different Test Team Member without losing the "In Progress" status of the Test Execution.

**Applicable Role:**  Test Team Member

**Known limitations:**
* Test Executions that are "In Progress" can be reassigned to another Tester and remain "In Progress" status as long as the associated Test Steps completed to that point in time are in a status other than "Fail" or "Aborted".

* Attempting to reassign an "In Progress" Test Execution to another Tester when any test step has a status of "FAIL" or "ABORTED" will result in the Test Execution transitioning to a "FAIL" or "ABORTED" status. A new Test Execution will need to be created and started from the beginning.

* If any of the associated Test Steps of an "In Progress" Test Execution are in a "Fail" or "Aborted" status and the Tester either logs out of Jira or terminates the browser session where the test execution is taking place, then the Test Execution will transition to "Closed" status.  A new Test Execution must be created and started from the beginning.

* When more than one Tester is used to complete a Test Execution, the Tester that originally started the Test Execution must manually transition the Test Execution to "Closed" status to preserve the Test Execution result.

## Procedure

1. Tester1 starts the Test Execution. In the following example, WHDT-60 is the Jira issue associated with the Test Execution.
![Tester1 starts Test Execution](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_test_execution.png "Tester1 starts Test Execution")

2. Tester1 completes one or more steps of the Test. When Tester1 is ready to reassign the Test to a different Tester, Tester1 clicks **Return to Test Execution**.
![Return to test execution](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_return_to_test_execution.png "Return to test execution")

3. Tester1 reassigns the Test Execution to Tester2.
![Tester1 reassigns Test Execution to Tester2](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_reassign_to_tester2.png "Tester1 reassigns Test Execution to Tester2")

4. Tester2 opens the Test Execution. The status of the Test Execution is "In Progress".
![Tester2 opens Test Execution](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_tester2_open.png "Tester2 opens Test Execution")

5. Tester2 continues the Test Execution.
![Tester2 continues Test Execution](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_tester2_continue_test.png "Tester2 continues Test Execution")

6. Tester2 completes the remaining steps of the Test Execution.
![Tester2 completes remaining steps of Test Execution](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_complete_remaining_steps.png "Tester2 completes remaining steps of Test Execution")

7. Tester2 verifies the Test Execution reflects a completed status by opening the parent Xray Test. In the following example, WHDT-40 is the parent Xray Test.
![Tester2 verifies completed status from parent Xray Test](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_verify_completed_status.png "Tester2 verifies completed status from parent Xray Test")

8. Tester1 checks to see if the Test Execution reflects a "Closed" status.  If the Test Execution is not in "Closed" status, click **Close** to close the Test Execution.
![Tester1 checks to see if Test Execution is in Closed status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_status_inprogress_click_close.png "Tester1 checks to see if Test Execution is in Closed status")

9. The Test Execution reflects **Closed** status.
![Test Execution in Closed status](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/xray_test_execution_closed.png "Test Execution in Closed status")
