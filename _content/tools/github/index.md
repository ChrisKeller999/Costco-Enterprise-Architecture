---
title: GitHub Enterprise
sidebar: tools
breadcrumb: GitHub Enterprise
---
GitHub Enterprise (GitHub, or GHE) is a web-based [Git](http://git-scm.com){:target="_blank"} repository hosting service offered by the [CIO's office](https://whitewater.ibm.com/){:target="_blank"} and lives within the IBM Firewall. It offers distributed revision control, source code management, project issue tracking, and access control in support of a [collaborative](https://whitewater.ibm.com/field-guide/practices/social-coding){:target="_blank"} development workflow.

## Getting Access

- GitHub is automatically available to all IBMers (including contractors). Log in with your w3ID here: [http://github.ibm.com](http://github.ibm.com){:target="_blank"}

  **IMPORTANT:**  IBMers and contractors requiring access to git repositories associated with Watson Health must first complete [HIPAA Training](https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W6a642739bb36_44d9_90cd_f2ec86efebbe/page/HIPAA%20Training){:target="_blank"}.

## Social Coding

GitHub is designed as a [Social Coding](https://whitewater.ibm.com/field-guide/practices/social-coding){:target="_blank"} platform, and as such source code is expected to be _publicly available_ (available only to IBMers inside the IBM Firewall). GHE, and especially Social Coding on it, are [approved for Proprietary Source Code development](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W591f471daa37_4d0e_b162_c3a4c07e0f9e/page/Source%20Code%20Asset%20Protection%20Guidelines){:target="_blank"}.
- Jewel Code is allowed if [specific policies are followed](https://whitewater.ibm.com/field-guide/policies/repository-visibility){:target="_blank"}.
- Special Watson Group Projects that complete with a client retaining the IP (as opposed to IBM) _can now be allowed_ on GHE as long as [specific policies are followed](../../client-owned-ip/).

## Terminology

- term: Organization
  definition: >
    A top-level repository owner designed to simplify [management and permissions](https://github.com/blog/2020-improved-organization-permissions){:target="_blank"} of group-owned repositories, including the ability to divide a group up in to teams with specific repository access and permissions.
- term: Team
  definition: >
    An collection of users in an organization that can be granted specific permissions to specific organization-owned repositories and can be notified by `@mentioning` the team name.
- term: Repository
  definition: >
    Source code with included issues and optional wiki. This is the home for a project and cross-discipline team communication and collaboration about that project.

## Tracking Jira Issues with Git
1. [Configuring Git commit messages to aid local Git repository commit procedures](../github_configcommitmsg)
