---
title: Testing with Xray Generic Automation
sidebar: tools
breadcrumb: Xray Generic Automation
---

# DRAFT

From an Xray plugin perspective, tests written in a language other than Cucumber are viewed as _Generic_ tests.

For general Xray guidance, see <https://confluence.xpand-it.com/display/XRAY/Using+Generic+Tests+for+Automation>{:target="_blank"}.

For an example showing how to reference your test script written in a language other than Cucumber to run in Travis CI, and send the result to Xray for reporting, see [HelloWorld with Travis CI](<https://github.com/softwaresaved/build_and_test_examples/blob/master/travis/HelloWorld.md){:target="_blank"}.

### Recommended Xray Automation Test Values

| **Tab**      | **Field**               | **Sample Value**                                |
|--------------|-------------------------|-------------------------------------------------|
| General      | Environment             | Chrome                                          |
|              | Labels                  | wh-\<offering\>-v1                              |
|              | Test Repository Path    |                                                 |
| Test Details | Test Type               | Manual Cucumber (automated) Generic (automated) |
|              | Generic Test Definition | \<tag\> or \<test name\>                        |

## Integrating Xray with Jenkins

1. Request a Jenkins instance via [TAAS](https://pages.github.ibm.com/TAAS/tools_guide/introduction/taas-info.html){:target="_blank"}.

1. Once provisioned, uninstall the following plugin:
 -   GitHub Pull Requestor Plugin (known security issue)

	If you are unfamiliar, review DSL pipeline scripting via “declarative pipelines”.

	Reference:  <https://pages.github.ibm.com/TAAS/tools_guide/jenkins/job-types/creating-jenkinsfiles.html>{:target="_blank"}

1. Configure your Jenkins pipeline per [these instructions](https://github.ibm.com/Cloud-DevOps-Transformation-Services/demo-jenkins-pipeline/blob/master/README.md){:target="_blank"}.

<span style="color:red">_EDITORIAL_ **TODO:**</span>

<span style="color:red">_**Fully document Jira/Xray plugin integration with Jenkins once a hosted Jira environment is available.**_</span>

Jenkins plugins:
- <https://wiki.jenkins.io/display/JENKINS/JiraTestResultReporter-plugin>{:target="_blank"}
- <https://plugins.jenkins.io/JiraTestResultReporter>{:target="_blank"}

## Integrating Xray with Travis CI

In addition to Jenkins, the Xray plugin for Jira can also be used to integrate with Travis CI to automate testing jobs.

### Travis CI Workflow

_**Important:**_ Use only spaces (versus tabs) for indenting in the context of `requirements.txt` or `.travis.yml` files to ensure proper run-time interpretation and for editor portability.

#### Prerequisites:

Requirements `.txt file` to track any test dependencies.

Reference: <https://pip.pypa.io/en/stable/reference/pip_install/#requirements-file-format>{:target="_blank"}

Example `requirements.txt` content:

```
#Travis CI Selenium and Python test dependencies for Jira-Xray integration

#python3-pip
selenium
sauceclient
```

Example `.travis.yml` file to install any required dependencies and to call your automated
test.

Reference: <https://docs.travis-ci.com/user/tutorial/>{:target="_blank"}

Example `.travis.yml` content:

```
language: python
python:
    - "2.7"
install:
    - pip install -r requirements.txt
script:
    - python jira/jira-xray/uitests/GitHubNavigation.py
```

With your test script and prerequisites in place:

1. Create Xray automated test type associated with its requisite Jira requirement.
1. Manage your Xray tests to its associated Xray test plan repository to keep them organized.
1. Manage your test case source code in github.ibm.com.
1. Configure Travis CI to scan your github.ibm.com repositories and toggle on whichever one(s) you need to test with.
1. Once your test is finished running, you can export your xml results back to your Xray test in Jira for reporting.
