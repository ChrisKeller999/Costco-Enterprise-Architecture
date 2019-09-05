---
title: Creating Cucumber Test Cases in the Xray Environment
sidebar: tools
breadcrumb: Cucumber Test Cases
---

# DRAFT

Gherkin is plain language parser used to construct [Behavior-Driven Development](https://en.wikipedia.org/wiki/Behavior-driven_development){:target="_blank"} (BDD) test scenarios documented via a “.feature” file that is referenced by Cucumber at test run-time. Gherkin test cases are collaboratively authored by offering management, test and development focals. Following a “Given, When, Then” requirement authoring construct, scenario authors can reasonably expect that the resulting automated tests accurately reflect stakeholder requirements. See [Gherkin syntax](https://docs.cucumber.io/gherkin/reference/){:target="_blank"}

## Given, When, Then definitions

- *Given*: A system in a known state before a user or external system begins interacting with the system.
- *When*: Used to describe the key action the user or external system performs on the system.
- *Then*: Observe the resulting outcome, which should be related to the business value or benefit associated with your feature description.

Cucumber supports Ruby and Java development languages, requiring knowledge of those languages to author the backend code to support automated test execution for the Cucumber feature files.

Step code, (also referred to as “glue code”), follows a regular expression syntax, with all rules written in Cucumber templates or class files broken into two pieces: Cucumber rule + data point. As long as you match the Cucumber rule and provide the correct expected data points, tests will successfully run. When utilizing Cucumber templates, if rules are referenced during execution that are not currently implemented, a “No step found” exception will result making it necessary to coordinate with the relevant stakeholder and create a new rule and write the underlying back end code to support the rule.

Additional References:

- <https://examples.javacodegeeks.com/core-java/junit/junit-cucumber-example/>{:target="_blank"}
- <http://www.writemoretests.com/2011/12/torturing-your-code-until-it-gives-up.html>{:target="_blank"}
- Watson Health “AMIGO” Test Generator Code Repository (Cucumber/Gerkhin .feature template artifacts for potential re-use):
  - <https://git.watson.sby.dst.ibm.com/whc-devops/amigo-core>{:target="_blank"}
  - <https://git.watson.sby.dst.ibm.com/whc-devops/amigo-test-artifacts>{:target="_blank"}
