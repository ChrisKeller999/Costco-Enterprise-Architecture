---
title: Watson Health CI/CD Guidelines
breadcrumb: CI-CD Guidelines
sidebar: dev
---

Our products help healthcare professionals save lives.  In turn, medical outcomes of their patients depend to an extent on the reliability of our systems.  The adoption of DevOps principles has helped us to maintain software development agility without sacrificing quality, reliability, and regulatory compliance.  We strive to practice continuous integration and delivery.

**Continuous Integration** is a practice by which developers frequently integrate their code into version control, triggering an automated build and test process.  This provides near real-time feedback for developers regarding how their changes will interact with those of their teammates.

**Continuous Delivery** is a practice by which automated builds and tests validate your software so that it can be automatically released into production.  By deploying to production more frequently and in an automated fashion, the risk of introducing breaking changes with any given deployment is greatly reduced.  When breaking changes do occur, the automation process allows easy rollback to a previous known-good version.

The diagram below illustrates the standard template for a Watson Health CI/CD pipeline, agnostic of project-specific tooling and technologies.  Each phase of the pipeline will be described in more detail later.  Note that this is merely a template.  Individual projects may require more or fewer phases based on the level of regulation and acceptable risk.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/continuous-delivery/ci-pipeline.png"><br>
<br>

Due to the high level of tooling and automation required to achieve this, IBM and Watson Health provide a [common set of tools](../../tools/index/) and implementation patterns to assist project teams on the path to CI/CD.  The goal is for all development teams within WH to use these same tools and patterns.  However, the DevOps transformation process can take time, especially for more mature legacy applications.  Teams managing such software should work with their offering manager to plan incremental improvements.

### Local Development
Developers iterate on their work locally until ready for integration testing.  Teams should have guidance around which tools (IDE, unit testing framework, linters, etc.) should be used based on the programming stack.  Developers are responsible for unit testing their own code and ensuring adherence to the team’s [coding guidelines](../../developer-guide/coding-standards-basics/).  Once the new code has been unit tested and checked for style, the developer pushes the local branch to a central repository (i.e. [GitHub](../../tools/github/00-getting-started/)).

### Integration
The integration environment is ideally a sandbox containing all the external components that the software-under-test will interact with.  Integration tests execute against the components in the sandbox to ensure that the software interoperates as designed.  In addition, security/vulnerability scans and performance tests may be executed based on project requirements.  The sandbox may not exactly replicate the production environment setting, it need only host the services to be integrated in isolation.  See the [Data Fabric API Devops Case Study](../case-studies/data-fabric-api/) for a reference implementation of integration sandboxes using Kubernetes namespaces.

The advantage of the automated integration sandbox is that developers can work on their branches and receive quick feedback after pushing changes about integration-related regressions.  If the sandbox environments are not feasible due to project-specific constraints, a single integration environment should be constructed for testing branches one at a time prior to merging to master.

### Acceptance
The acceptance environment runs the latest build of the master branch, and provides a target for both manual and automated acceptance testing.  This environment should be as close to production as possible, though likely will not include production data artifacts.

In addition to acceptance tests, security/vulnerability scans and performance tests may be executed based on project requirements.

### Staging
The staging, pre-production, or release candidate environment is a near-perfect clone of the production environment.  Its purpose is to provide final validation that the software deployment process will run smoothly on the production environment, tests execute successfully, and performance and security match expectations.  For some projects, the staging environment may be alternated with production in a prod/off-prod or blue/green deployment strategy.  For projects complying with Watson Health QMS standards, functional verification tests and user need validation tests must be performed prior to release and must each trace back to functional requirements.

### Production
The production environment serves the product to the customer.  Deployment to production should be automated to the greatest extent possible to eliminate human error and inconsistencies.  After a successful deployment, a subset of “production-safe” integration tests or “smoke tests” should be executed to ensure operation.  These tests should be executed periodically, and failures should alert an on-call operator.  If integration or smoke testing fails, the last known good state is deployed to production, staging, and acceptance.  This ensures all three environments remain in sync.

Highly regulated products likely cannot achieve this level of automation through to production.  However, full automation up to production still provides many of the same benefits.  Teams can still achieve continuous integration during development, and continuous delivery should proceed to the latest possible environment, stopping short of production.  While a manual change control process may be required to trigger the deployment to production, the deployment process itself should be automated and identical to that used for deployment to Staging.
