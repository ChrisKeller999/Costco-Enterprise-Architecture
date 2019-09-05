---
title: Xray Test Artifacts
sidebar: tools
breadcrumb: Xray Test Artifacts
---
# DRAFT

## Hierarchy of Test Artifacts

| **Xray Artifact** | **Contains**                                     | **Purpose**                  |
|-------------------|--------------------------------------------------|------------------------------|
| Xray Project      | One, or more of all Xray artifacts               | Xray Projects are used to: <BR>- Maintain a definitive collection of all test assets associated with a specific offering  |
| Test Plan         | Project Versions Test Sets Tests Test Executions | Test Plans are used to: <BR>- Group related Xray Test Plans and Test Sets for tracking and reporting     |
| Test Set          | Tests Test Execution                             | Test Sets are used to: <BR>- Compartmentalize related Tests<BR>- Automate Test Execution of multiple Tests<BR>- Associate one or more requirements to a group of related Tests      |
| Test              | Test Execution Pre-Condition Requirement         | Tests are used to: <BR>- Test and map one-to one with a specific Jira Requirement (e.g., Story)          |
| Test Execution    | Project Version                                  | Test Executions are used to: <BR>- Track Test Executions associated with Test Plans, Test Sets, or Tests.<BR>- A Test Execution issue type is required in order to generate a Test result for a Test Plan, Test Set or Test |

## Hierarchy of Xray projects

![Xray Project Herarchy](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/hierarchy.jpg)

Referencing the previous diagram, there will be one Xray project per offering; for example: `Watson for Oncology Suite_Test`.

Each Xray Project will contain one, or more Test Plans. Test Plans are used to compartmentalize related Xray Tests to ease tracking and reporting tasks. For example, the following Test Plan naming convention could apply:
```
Clinical Decision Support Admin UI v2.0
Clinical Decision Support Data Services v2.0
Clinical Decision Support Common Services v2.0
```
Each Test Plan can consist of one, or more Tests or Test Sets. [Test Sets](https://www.getxray.app/blog/5-tips-for-using-test-sets/){:target="_blank"} consist of a flat list of Tests used to group Tests in some logical way. For example, you can create a Test Set to reference all Tests related to a functional area.

Creating a Test Set and associating Tests with this Test Set enables you to associate one or more requirements to a single Test Set and all of its associated Tests.

For example, the following Test Set naming convention could apply:
```
CDS User Admin UI
CDS Public Access Data Services
CDS Common Subscriber Services
```
One or more Tests can be run either independently, or as part of a Test Set in the context of a Test Plan.

Putting it all together, the following is an Xray project hierarchy that represents the described nomenclature:

- *Xray Project:* Watson For Oncology Suite_Test
    - *Xray Test Plan:* Clinical Decision Support Admin UI v2.0
        - *Xray Test Set:* CDS User Admin UI
            - *Xray Tests:* Test1, Test2, Test3…
        - *Xray Test Set:* CDS Access and Authorization
            - *Xray Tests:* Test1, Test2, Test3…
