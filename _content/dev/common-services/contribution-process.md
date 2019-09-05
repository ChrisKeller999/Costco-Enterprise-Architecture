---
title: WH Common Services Contribution Phase
sidebar: dev
breadcrumb: WH CS Contribution Phase
---

# Introduction

The Contribution Process describes the process of building a common service and making it available to other teams once it is complete. This covers the distribution of the documentation as well as the service itself, along with the other elements that need to be complete before the service is made available.

It is assumed that any candidate service has completed the [Common Service Definition Process](../../../dev/common-services/definition-process) prior to being considered for this process. This included the assumption that all the documentation/artifacts needed to exit the definition process are available.
![Common Service Lifecycle](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/image1.jpg)

There are three main phases to the process:
* Pre-Development
* Development
* Making the Service Available

[**Section I Pre-Development**](#section-i-pre-development) aims to describe the activities that need to be completed prior to starting development

**Development** of the service is documented separately in the [Watson Health Playbook](https://pages.github.ibm.com/watson-health-playbook/), and hence is not covered here.

Finally, [**Section II Making the Service Available**](#section-ii-making-the-service-available) aims to describe the activities that need to be completed to make the common service available to other teams.

There is an additional section [**Common Services and Code Contribution**](#common-services-and-code-contribution) which discusses the process for another team to contribute features (or defect fixes) to a common service.

Note that it is not enough to assume a 'Common Service' can be made common after it has been released - they need to have been designed, developed and implemented to specific common service standards (as discussed below).

# Section I Pre-Development

This section covers the key activities that are specific to common service contribution, that need to be completed prior to development starting. This covers:
1. [Architecture Council Review](#architecture-council-review)
2. [Consideration of Generic Non-Functional Requirements](#consideration-of-generic-non-functional-requirements)

## Architecture Council Review

The review(s) during the Common Service Contribution Process aim to ensure the development process and elaborated designs continue to address the functional & non-functional requirements for the service. There are two points in the Common Service development process where reviews are required:
* At the end of the **[Common Service Definition Process](../../../dev/common-services/definition-process)**, and
* As soon as practical in the **development** phase

The specifics of the Watson Health Common Services Car Wash Program is documented [here](../../../dev/common-services/common-services-car-wash).

Where a service that has been previously developed is being contributed as a Common Service, the questions/concerns raised by the review process (as defined above) will still need to be addressed. However, it may well be the case that some items can be deferred to later releases on the basis that the service 'as is' is sufficient in the first instance for the use case(s) being proposed.

This will ensure that we define a single review processes, that covers the requirements at Common Services level, Watson Health level and IBM Cloud level, and ensure there is no redundancy/overlap. The artifacts required for the review process should also be synchronized with those required for compliance.

## Consideration of Generic Non-functional Requirements

In addition to the functional requirements for the specific service there are generic non-functional that all Watson Health common services need to meet.  Regardless of the service distribution model chosen for common services, development teams will both have to test for and prove their adherence to a range of base requirements prior to the service being released.

Where these requirements are 'passed through' to consumers of the service, or there are specific constraints passed on to consumers in order to meet these requirements, these need to be included in the documentation.

For more details on these see [Generic Non-Functional Requirements](../../../dev/common-services/non-functional-reqs)

# Section II Making the Service Available

This section covers the activities required to make a service available once it has been developed.  The default approach is Source Distribution. There are two other possible models that can be applied to this step, which are documented later in this document:
* [Platform As A Service](#alternative-distribution-model-platform-as-a-service)
* [Binary Distribution](#alternative-distribution-model-container-distribution)

It is important to note that there are a number of key concerns when proceeding with Source Distribution, these are documented as [Source Distribution Considerations](#source-distribution-considerations). Not withstanding the fact that Source Distribution is the default approach any common service using Source Distribution **must address these concerns**.

## Source Distribution
The distribution of the common services as 'source' artifacts.  In this model, common services are developed to a particular standard, based on a set of common requirements subject to Watson health-wide governance, and subject to architecture council design reviews.  They will then be made available as source to consumers via appropriate repositories, with the consuming team having complete responsibility for deploying and hosting the service.

If this distribution method is used, it's important that decisions are made in advance about how source modification by consumers is handled (be that forks, a contribution model, etc).

Not withstanding the availability of 'source' artifacts, it is assumed that for deployment a [Binary Distribution](#alternative-distribution-model-container-distribution) will also be made available to allow the consumers of the common service to leverage the value of using a know version of the common service.

### Source Distribution Considerations
There are a number of aspects to this distribution method which need to be borne in mind by development teams:
* Common Services development squads will need to support multiple versions of these services - the support strategy for these will need to be decided and documented here.
* Common Services versions will need to be backward compatible by design.  A non-breaking API evolution strategy will need to be defined and employed.  This is to lay the groundwork for a future PaaS model for such services.
* Where Common Services persist data, and representations of such data change over versions, automation to upgrade such data between versions has to be provided by the common service
* If a 'shared' instance of a common service is required for two or more solutions, that the solutions will need to manage the 'sharing' of the common service themselves.  This will create a higher cost for the consumers of the common services and leaves open questions on how upgrades can be managed, what happens when out of date versions remain in use... However, it makes it substantially cheaper for the developers of the service.
* Consideration will need to be given to large-scale changes and their potential impact on down-stream customers from an upgrade perspective
* Consideration will need to be given to the release cadence of the common service, and the impact this decision has on customer uptake, upgrade effort, and minimizing the likelihood of customers just cloning the code without upgrading in the future.
* This model lends itself to Code Contribution (see below) but this needs careful planning within a regulated environment, and also to maintain common service quality.
* Note: we should mandate [IBM Cloud DevOps Guardrails](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/devops.html) - whereas these are DevOps mandates which strictly speaking apply to Hosted services (rather than binary distributed services), they are a sensible mandate if we are ever going to evolve to a PaaS environment.

## Service Publication

This section will document and mandate the following aspects of common service distribution

* The process for contributing a Common Service to a catalog:
    * Source/Binary distributed Services should be documented in the [Watson Health Services Catalog](https://watsonpow01.rch.stglabs.ibm.com/services/cognitive_catalog/catalog/){:target="_blank"} - The documentation requirements are described in [Common Service Documentation](#common-service-documentation) below
  * The process for [Onboarding WH PaaS Services to IBM Cloud](../../../dev/common-services/consumption-process#3onboarding-wh-paas-services-to-ibm-cloud) is documented as part of the [Common Service Consumption Process](../../../dev/common-services/consumption-process)
* Note that initially, common services will be for internal Watson Health use only. However, teams must document any decisions that could limit common service usage by external parties.
* Life-cycle for Watson Health Common Services:
    * [The IBM Cloud Service Framework](https://pages.github.ibm.com/ibmcloud/Service-Framework/11_architecturedesignrequirements.html){:target="_blank"} defines four stages in the service life-cycle: Alpha, Beta, GA, and Gen-2
    * At least initially, two of these directly apply to Watson Health Common Services:
        * Beta: A service which can be made available to Watson Health consumers for development or testing purposes, but which is not yet appropriate for use by customers in a production environment
        * GA: A service which is available to internal customers, and which can be used and deployed in customer solutions in production
    * In future Alpha may be used to 'advertise' that a common service is being worked on.
* Decide whether consumers need to 'sign up' for the service and mechanism for doing this
    * Would help track usage, adoption, etc.

## Common Service Documentation

The documentation of the service needs to cover the functionality provided by the service, how to consume the service and how to operate the service. In particular:
* Service Name
* Description
* Use Case(s)
* Basic Service Flow
* Images of provisioned service
* Code examples (service equivalent of _Hello World_)
* Author, Published date, Service, Location
  * If distributed as source or container, link to GitHub project
* Pricing Plans (Placeholder - no charging currently)
* API Reference/Swagger documentation
* Further Documentation, if needed
  * Training
  * Getting Started Tutorial
  * Video/ Demo
  * Detailed Documentation
* If possible, API instance demo (on demand).
* Help/Release Notes

## Service Support

Squads who own Common Services will need to define:
* Service Level Agreements (should there be a standard one for all common services)?
* Common service release cadence
* Responsiveness of support
* Version support strategy - number of versions/time/etc.
* Tooling for Enhancement, Defect Tracking, Reporting, etc.

## Alternative Distribution Model: Platform as a Service
In a true Platform as a Service Watson Health environment, common services would be developed and run centrally.  Consumers would interact with such services via well-defined APIs, and to agreed SLAs.  Consumers would not have to know anything about the implementation, hosting, scaling of these services, nor a range of other non-functional concerns.  Business applications consuming such services could concentrate on doing what they do best - business functionality - rather than have to worry about the non-functionals of their component services.  They also would seamlessly use whatever version the common services teams roll out, confident in the knowledge that the upgrades will be non-impactful.

**Note:** The publication of a service in IBM Cloud requires the implementation of bss interfaces for provisioning and metering. These interfaces have been implemented as  services in WH API- Platform and are detailed as follows:
* The [Watson Health Transformation Wiki - Lift and Shift](https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/Wa0a1d43ca7a0_4fff_87ff_04006c762969/page/LIFT%20%26%20SHIFT){:target="_blank"} instructs on how to use the WH API-Platform to enable WH Services APIs for publication to IBM CLoud (Bluemix) catalog from a classic VM based architecture.
* The [Watson Health Transformation Wiki - Cloud Native](https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/Wa0a1d43ca7a0_4fff_87ff_04006c762969/page/CLOUD-NATIVE){:target="_blank"} details how to use the WH API-Platform to enable WH Services APIs for publication to IBM Cloud (Bluemix) catalog from a cloud native Kubernetes based architecture.

## Alternative Distribution Model: Container Distribution
The distribution of the common services as 'binary' artifacts.  In this model, common services are developed to a particular standard, based on a set of common requirements subject to Watson health-wide governance, and subject to architecture council design reviews.  They will then be made available in Binary format to consumers via appropriate repositories, in a manner suitable for hosting.

The technical form of the 'binary' artifacts will vary based on the technologies - it can include compiled artifacts such as `jar` and `lib` files, or text files in a 'release' form such as minified `js` files or a packed application such as an `ear` file.

# Common Services and Code Contribution

This is a model for the evolution of the common service rather than it's distribution, however, it makes sense to describe this in the context of the service distribution as both are interrelated.

This is the process for another team to contribute features (or defect fixes) to a common service. (Effectively a governance model - as described [by OSS Watch](http://oss-watch.ac.uk/resources/governancemodels){:target="_blank"})

Each service (component) must have an assigned architect & OM (could be one person) who effectively controls the backlog (in whatever tooling - generally visible) and anyone looking to contribute, can do so based on a backlog item (enhancement or defect) - but you can’t contribute something that isn’t on the backlog, but you can work with the service architect/OM to get your requirements on the backlog and prioritised.

If you have requirements that the service architect/OM won't consider, then you're left with two possible routes forward:
1. Develop your requirements locally as part of your own project.
2. Approach the Architecture Council to accept your requirements as the basis for a new common service.

While the general WH contribution model will be defined in the playbook. It is reasonable to assume that the teams owning common services may decide to implement more restrictive processes, e.g. Review Then Commit (RTC). [_Open source software peer review practices: A case study of the Apache Server_](http://se.inf.ethz.ch/old/teaching/2010-S/0276/slides/baenziger.pdf){:target="_blank"} gives an overview of both and some comparison across projects

There is an expectation that the requirements for those making code contribution will differ based the service distribution method selected for the service.
