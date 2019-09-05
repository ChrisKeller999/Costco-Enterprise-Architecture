---
title: Development Tools
---

This page focuses on tools specific to development. For a more general overview of accepted tools for Watson Health, please see the [Tools page on the Watson Health Playbook](../tools/index/).

## Tool integration big picture

![Watson Health Development Tool Integration](https://pages.github.ibm.com/watson-health-playbook/resources/images/agileplaybook/aha-jira-github-reqflow.jpg)

## Requirements and Development Process Tooling
- [Aha!](../tools/aha/)
    - Aha! is used by Offering Management to capture and groom the initial high-level requirements and kick of and track an Offering. Aha! integrates with Jira, which is where the [Build and Deliver](build-and-deliver/index/) workflows for development will be realized and managed.
- [Jira](https://www.atlassian.com/software/jira?aceid=&adposition=1t1&adgroup=56999361780&campaign=1439934479&creative=294517870063&device=c&keyword=jira&matchtype=e&network=g&placement=&ds_kids=p34164036185&ds_e=GOOGLE&ds_eid=700000001558501&ds_e1=GOOGLE&gclid=Cj0KCQjw9NbdBRCwARIsAPLsnFYqbet-7YkAlEDEOykErTo6-G3SouCtfqFlhNCFHkC9eC5x6BkmktUaAsMFEALw_wcB&gclsrc=aw.ds){:target="_blank"}
    - Jira is the primary requirements and work tracking tool for Watson Health Development. Jira integrates with Aha! and GitHub.
- [GitHub](../tools/github/)
    - Watson Health uses GitHub for source control and build management. GitHub integrates with Jira.
- [Confluence](https://www.atlassian.com/software/confluence){:target="_blank"}
    - Confluence integrates with Aha!, Jira and our testing tool XRay. Confluence is the primary document control repository for Watson Health.
- [XRay](https://marketplace.atlassian.com/apps/1211769/xray-test-management-for-jira?hosting=cloud&tab=overview){:target="_blank"}
    - Xray integrates with Jira for test management and traceability.
