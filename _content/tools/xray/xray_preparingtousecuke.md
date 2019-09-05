---
title: Preparing to use Cucumber for testing in the Xray Environment
sidebar: tools
breadcrumb: Using Cucumber
---

# DRAFT

## Standard Cucumber workflow
In this workflow, Tests are created and managed in Jira, thus Jira will be the master for the Cucumber scenarios.

![Cucumber Workflow](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/cucumber_workflow.jpg)

1.  Specify Cucumber tests using natural language, in Jira.
2.  Export Cucumber features from Jira to the CI environment, using the [REST API](https://confluence.xpand-it.com/pages/viewpage.action?pageId=21760334){:target="_blank"}.
3.  Implement tests in code and commit them to the source code versioning system.
4.  Execute tests in the CI environment.
5.  Report results to Xray, using the [REST API](https://confluence.xpand-it.com/display/XRAY/Import+Execution+Results+-+REST){:target="_blank"}.

## Prerequisites for Cucumber Development Environments

>   Reference the [Watson Health Tools Index](https://watsonvmsrv01.rch.stglabs.ibm.com/watson/tools_vnv/){:target="_blank"} for the latest approved Cucumber and Maven binaries and their associated OS-specific install and configuration instructions.

1.  JDK 1.8 (or the latest validated version)
2.  Eclipse Oxygen (or the latest validated version)
3.  Cucumber plugin for Eclipse. From the Eclipse UI
    1.  Select Help-\>Install new software
    2.  In the Available Software dialogue box, enter
        `http://cucumber.github.cucumber-eclipse/update-site` and complete the installation.

    ![Confirm Features](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/eclipse_plugin.jpg)

4.  Maven is an automation build tool installed by default with Eclipse. Creating your Cucumber testing as a Maven project enables you to manage dependencies via a pom.xml file, offering the benefit of centrally managed build dependencies. For example, if you need to upgrade the JAR files used in your project, you only have to edit the associated pom.xml JAR file dependency with the desired version. Once your pom.xml dependency has been updated, select `Project-\>Clean` in your Eclipse project and your environment will be ready to begin using the new JAR files.

## Naming Conventions for Tests types

To ensure consistent naming conventions across Watson Health test teams and to provide standard keywords for Jira queries, use the following naming conventions; for example:

| **Jira Requirement Type** | **Xray Test Type Label Prefix** | **Xray Test Label Name** | **Full Xray Test Label** | **Cucumber Feature**  **File Name** |
|---------------------------|---------------------------------|--------------------------|--------------------------|-------------------------------------|
| Functional                | FUN01, FUN02…                   | Login                    | FUN01_Login              | FUN01_Login.feature                 |
| Configuration             | CONF01, CONF02..                | Memory                   | CONF01_Memory            | CONF01_Memory.feature               |
| User Interface            | UI01, UI02…                     | RadioButton              | UI01_RadioButton         | UI01_RadioButton.feature            |
| Performance               | PERF01, PERF02…                 | ResponseTime             | PERF01_ResponseTime      | PERF01_ResponseTime.feature         |
| Security                  | SEC01, SEC02…                   | Access                   | SEC01_Access             | SEC01_Access.feature                |

## Best Practices for running Cucumber Tests
-   Continually strive to run a single test scenario, associated with a single requirement against a single feature.
-   Clearly comment your code to reduce ambiguity and ensure that the next person that needs to maintain your test cases understands your scenarios and how they exercise functionality that will bring business value to your stakeholders.
-   Collaboratively author feature files with OM, test and development stakeholders early in the development cycle.
-   Create feature-focused Cucumber Test Plans as part of your Xray Test Projects to track and report on test case executions.
-   Additional Best Practices links:
    - <https://cucumber.io/blog/2016/07/01/cucumber-antipatterns-part-one>
    - <https://cucumber.io/blog/2016/08/31/cucumber-anti-patterns-part-two>

## Best Practices for organizing Xray Tests

Working in Xray, all test assets will contain the prefix of the Test Plan associated by default, which can initially make it difficult to organize your test assets. As a best practice, organize your test early using *labels, priorities* and *components* to classify your tests.

Additionally, Xray offers a Test Repository feature, offering the ability to organize your tests in a hierarchical manner as depicted below. An important point to bear in mind is the Xray “Test Repository” feature *is not* a replacement for GitHub source code control for your test scripts; instead, it offers another method to group your tests in an organized manner.

![Xray Repository Organization](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/repository_org.jpg)

## Hierarchy of Cucumber Projects

Cucumber projects are written in either Ruby or Java. The following Cucumber project hierarchy examples assume that Watson Health test teams will be using Java as the primary programming language

Upon creating your Maven project, the project hierarchy will be similar to the following:

![Project Hierarchy](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/package_hierarchy.jpg)

## Cucumber, Java and Junit dependencies

When creating your Maven project, the following pom.xml example documents key Cucumber, Java and Junit dependencies. Be sure to update your specific dependency versions as required:

```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>cucumberReport</groupId>
  <artifactId>cucumberReport</artifactId>
  <version>0.0.1-SNAPSHOT</version>

  <dependencies>
  <!-- Required Selenium Java JAR files-->
   <dependency>
     <groupId>org.seleniumhq.selenium</groupId>
     <artifactId>selenium-java</artifactId>
     <version>2.47.1</version>
   </dependency>

   <!-- Required Java Cucumber files -->
   <dependency>
     <groupId>info.cukes</groupId>
     <artifactId>cucumber-java</artifactId>
     <version>1.0.2</version>
     <scope>test</scope>
   </dependency>

   <!-- Required Cucumber JUnit files -->
   <dependency>
     <groupId>info.cukes</groupId>
     <artifactId>cucumber-junit</artifactId>
     <version>1.0.2</version>
     <scope>test</scope>
   </dependency>

   <!-- Required JUnit files -->
   <dependency>
     <groupId>junit</groupId>
     <artifactId>junit</artifactId>
     <version>4.10</version>
     <scope>test</scope>
   </dependency>

 </dependencies>

</project>
```

In addition to pom.xml, additional files are required in order to execute Cucumber scenarios.  The files include feature files, step definition code and test runner code, which is managed in the context of a Java package. For example, the following screen shot shows a sample file hierarchy for a working project:

![Maven/Cucumber Project Hierarchy](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/maven-cucumber_project.jpg)
