---
title: Coding Standards
breadcrumb: Coding Standards
sidebar: dev
---

To ensure quality and consistency throughout our source code, keep these in mind as you are working:
* **All tests must pass**
* All features or bug fixes **must be tested** by one or more unit tests.
* Added code should have close to 100% test coverage for statements, branches, functions, and lines. Some projects may use automated mechanisms to prevent commits with sufficient test coverage.
* Follow the project specific coding rules. These are often found in `CONTRIBUTING.md` for each repository
* Run a full build, including linters, unit tests and coverage reports, using the gulp command and verify that all tests pass.

# Style Guides
* Each language should have a general style guide and automated style checker. Do your best to adhere to these.
  - **Java** - follow the [Java Coding Style Guide](../java-coding-style-guide).
  - **Javascript** - there isn't an internal style _yet_. Please to try to be consistent with the rest of the code. [IBM Hackademy](https://pages.github.ibm.com/hackademy/resources/),  [FED@IBM](http://ibm.biz/fed-homeschool){:target="_blank"} and [Codestyle.co AngularJS Style Guide](http://www.codestyle.co/Guidelines/angularjs){:target="_blank"} are good references.
  - **Python** - attempt to follow [PEP8](https://www.python.org/dev/peps/pep-0008/){:target="_blank"} where practical. Where PEP8 is unclear, defer to the [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html){:target="_blank"}
  - **Scala** - follow the [Scala Coding Style Guide](scala-coding-style-guide).
  - **Go** - follow [Effective Go](https://golang.org/doc/effective_go.html){:target="_blank"} - run `gofmt` before checking in code.
* When in doubt, please ask a member of your Squad.
