---
title: Generating Cucumber Test results in the Xray Environment
sidebar: tools
breadcrumb: Cucumber Test results
---

# DRAFT

Cucumber can be configured to produce test pass/fail log output in either HTML or JSON format.

## Generating Log Output in HTML format
In addition to running Cucumber tests individually from the command line or via .sh script, to enable Cucumber HTML output when running from the Eclipse client, ensure the following runtime option is added to your test runner code. In the context of this document, runTest.java contains the following:

```
package cucumberreport;

import org.junit.runner.RunWith;
import cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
//Set log output HTML format in your Eclipse project target/Destination folder
@Cucumber.Options(
		   format = {"pretty", "html:target/Destination"} )

public class runTest {

}
```

At the completion of your test, log output in HTML format will be generated in your projects target/Destination folder as follows:

```
/Users/lewiswhite/pythonscripts/cucumberReport/target/Destination
Lewiss-MacBook-Pro:Destination lewiswhite$ ls  index.html
index.html
```

Opening the file with a web browser (Chrome in this case) yields the following:

![Cucumber Log Output](https://pages.github.ibm.com/watson-health-playbook/resources/images/tools/xray/test_log_output.jpg)

## Generating Log Output in JSON format

To enable Cucumber JSON log output when running from the Eclipse client, ensure the following runtime option is added to your test runner code. In the context of this document, runTest.java contains the following:

```
package cucumberreport;

import org.junit.runner.RunWith;
import cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
//Set log output to JSON format and export to the projects target/Destination folder
@Cucumber.Options(
format = {"json:target/Destination/cucumber.json"} )
public class runTest {

}
```

At the completion of your test, log output in JSON format will be generated in the target/Destination folder of your project as follows:
> Note: The following JSON has been made human readable, normally it is returned as a single line of code.


```
[
  {
    "comments": [
      {
        "line": 1,
        "value": "#This is to check test result for Pass test case"
      },
      {
        "line": 2,
        "value": "#Feature:  Successful User Login"
      },
      {
        "line": 3,
        "value": "#Scenario: Login functionality exists"
      },
      {
        "line": 4,
        "value": "#    Given I have opened the browser"
      },
      {
        "line": 5,
        "value": "#   When I open Facebook website"
      },
      {
        "line": 6,
        "value": "#    Then Login button should exist"
      },
      {
        "line": 8,
        "value": "#This is to check test result for Failed test case"
      }
    ],
    "line": 9,
    "elements": [
      {
        "line": 10,
        "name": "Forgot password exists",
        "description": "",
        "id": "failed-user-login;forgot-password-exists",
        "type": "scenario",
        "keyword": "Scenario",
        "steps": [
          {
            "result": {
              "duration": 507398030,
              "error_message": "org.openqa.selenium.WebDriverException: Cannot find firefox binary in PATH. Make sure firefox is installed. OS appears to be: MAC\nBuild info: version: '2.47.1', revision: 'unknown', time: '2015-07-30 11:02:44'\nSystem info: host: 'Lewiss-MacBook-Pro.local', ip: '192.168.0.5', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.14', java.version: '1.8.0_151'\nDriver info: driver.version: FirefoxDriver\n\tat org.openqa.selenium.firefox.internal.Executable.<init>(Executable.java:74)\n\tat org.openqa.selenium.firefox.FirefoxBinary.<init>(FirefoxBinary.java:60)\n\tat org.openqa.selenium.firefox.FirefoxBinary.<init>(FirefoxBinary.java:56)\n\tat org.openqa.selenium.firefox.FirefoxDriver.<init>(FirefoxDriver.java:125)\n\tat cucumberreport.cucumberReport.openBrowser(cucumberReport.java:16)\n\tat ✽.Given I have open the browser(cucumberreport/cucumberReport.feature:11)\n",
              "status": "failed"
            },
            "line": 11,
            "name": "I have open the browser",
            "match": {
              "location": "cucumberReport.openBrowser()"
            },
            "keyword": "Given "
          },
          {
            "result": {
              "status": "skipped"
            },
            "line": 12,
            "name": "I open Facebook website",
            "match": {
              "location": "cucumberReport.goToFacebook()"
            },
            "keyword": "When "
          },
          {
            "result": {
              "status": "skipped"
            },
            "line": 13,
            "name": "Forgot password link should exist",
            "match": {
              "location": "cucumberReport.forgotPWD()"
            },
            "keyword": "Then "
          }
        ]
      }
    ],
    "name": "Failed User Login",
    "description": "",
    "id": "failed-user-login",
    "keyword": "Feature",
    "uri": "cucumberreport/cucumberReport.feature"
  }
]
```

References for Xray and Cucumber Reporting:

- <https://confluence.xpand-it.com/display/XRAY/Import+Execution+Results+-+REST#ImportExecutionResults-REST-ImportingExecutionResults>{:target="_blank"}
- <https://docs.cucumber.io/cucumber/reporting/>{:target="_blank"}
- <https://www.tutorialspoint.com/cucumber/cucumber_debugging.htm>{:target="_blank"}

## Cucumber JSON Test Reporting with Jenkins

To configure Cucumber JSON test reporting with Jenkins, the [Cucumber Test Result Plugin](https://wiki.jenkins.io/display/JENKINS/Cucumber+Test+Result+Plugin){:target="_blank"} for Jenkins is required.

### Running Xray Generic Automation Tests

From an Xray plugin perspective, tests written in a language other than Cucumber are viewed as _Generic_ tests.

For general Xray guidance, see <https://confluence.xpand-it.com/display/XRAY/Using+Generic+Tests+for+Automation>.

Good example showing how to reference your test script written in a language other than Cucumber to run in Travis CI, and send the result to Xray for reporting
- <https://github.com/softwaresaved/build_and_test_examples/blob/master/travis/HelloWorld.md>

### Recommended values when creating Tests

| **Tab**      | **Field**               | **Sample Value**                                |
|--------------|-------------------------|-------------------------------------------------|
| General      | Environment             | Chrome                                          |
|              | Labels                  | wh-\<offering\>-v1                              |
|              | Test Repository Path    |                                                 |
| Test Details | Test Type               | Manual Cucumber (automated) Generic (automated) |
|              | Generic Test Definition | \<tag\> or \<test name\>                        |

### Integrating Xray with Jenkins

Request Jenkins instance via [TAAS](https://pages.github.ibm.com/TAAS/tools_guide/introduction/taas-info.html){:target="_blank"}

Once provisioned, uninstall the following plugin:

-   GitHub Pull Requestor Plugin (known security issue)

If you are unfamiliar, review DSL pipeline scripting via “declarative pipelines”

Reference:
- <https://pages.github.ibm.com/TAAS/tools_guide/jenkins/job-types/creating-jenkinsfiles.html>{:target="_blank"}

Configure your Jenkins pipeline per [these instructions](https://github.ibm.com/Cloud-DevOps-Transformation-Services/demo-jenkins-pipeline/blob/master/README.md){:target="_blank"}.

<span style="color:red">_EDITORIAL_ **TODO:**</span>

<span style="color:red">_**Fully document Jira/Xray plugin integration with Jenkins once a hosted Jira environment is available.**_</span>

Jenkins plugins:
- <https://wiki.jenkins.io/display/JENKINS/JiraTestResultReporter-plugin>{:target="_blank"}
- <https://plugins.jenkins.io/JiraTestResultReporter>{:target="_blank"}

### Integrating Xray with Travis CI

In addition to Jenkins, the Xray plugin for Jira can also be used to integrate with Travis CI to automate testing jobs
#### Travis CI Workflow

_**Important:**_ Use only spaces (versus tabs) for indenting in the context of requirements.txt or .travis.yml files to ensure proper run-time interpretation and for editor portability

**Pre-requisites:**
Requirements.txt file, to track any test dependencies. Reference:
- <https://pip.pypa.io/en/stable/reference/pip_install/#requirements-file-format>{:target="_blank"}

Example requirements.txt content:

```
#Travis CI Selenium and Python test dependencies for Jira-Xray integration

#python3-pip
selenium
sauceclient
```

Example .travis.yml file to install any required dependencies and to call your automated
test.

Reference: <https://docs.travis-ci.com/user/tutorial/>{:target="_blank"}

Example content:

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
1. Configure Travis CI to scan your github.ibm.com repos and toggle on whichever one(s) you need to test with.
1. Once your test is done executing you can export your xml results back to your Xray test in Jira for reporting.
