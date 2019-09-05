---
title: WH Common Services Definition Process
sidebar: dev
breadcrumb: WH CS Definition Phase
---

Service and their health industry considerations
------------------------------------------------

Services fall into two categories: "Common" or "Application Specific"

Common services are high-value services, providing an integrated capability that is usable by many other applications or services (e.g. a Master Patient Index Service). There are many considerations that surround these services that will impact their general usefulness or complexity, but a few of the bigger ones are:

-   Does the service need/supply PII/PHI?

-   Does the service integrate with medical devices? Or is used by applications that do?

    -   Is this Service part of a regulated platform?

-   Will this Service be used outside of the United States?

A service which requires PII/PHI is subject to HIPAA regulations, and therefore there are security and privacy regulations that must be considered when integrating with such a service.

A service which integrates with regulated medical devices, or is part of a system that does, will be subject to QMS controls.

A service which will be used across national borders will need to support whatever data regulations required in the country which uses the service (e.g. GDPR for the European Union).

Application Specific services will still need to consider all the same things as common services do, but usually they are specific to a solution, and may not need to accommodate all the above restrictions.

### How do we define and identify a common service?

A **Common Service** can be defined as a service which has functionality that is **developed once** but expected to be **reused by multiple solutions** inside and outside of Watson Health to reduce the cost of redeveloping the functionality. Any \'common service\' should be consumable by any component with minimal time and effort.

-   A key consideration for common services must also be it is multi-tenant or allow creation of multiple dedicated instances of such service.

-   A service may / may not be an offering - could be internal for use into solutions.

-   Every common service must have accompanying documentation stating the operation of the service and accessible APIs.

-   Solutions who want to deviate are required to obtain approval from the **[Architecture Council](#architecture-council) (AC)**

-   If there are multiple \'common services\' serving the same purpose today, they must be reconciled by the respective architects to form a single consumable

    -   OM to provide coordination of evaluation criterion with architects. Helps with selection of the service to be promoted to the common service and plan to address functionality deltas with other similar services.

    -   Convergence process for bringing together these multiple services (modeled under the Cognitive Services one, currently being piloted)

    -   Architectural committee provides the final sign off

### Common Services Identification, Concept and MVP Process Flow

The following diagram identifies a set of parallel flows to act as guide through the effort of conceptualizing a common service, identifying common services that may already exist, normalizing duplication efforts, governance, and final promotion/adoption.

![Common Service Lifecycle](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/image1.jpg)

In the above diagram, shapes are color-coded to match their phase of the process:

-   Green: Common Service Definition Process steps

-   Blue: Common Service Contribution Process steps

-   Orange: Common Service Consumption Process steps

Step 1: Identify

-   Leadership teams flag priority services based on "Anchor Offerings"

-   New Common Services Proposal

-   Inventory of Current Technology (Common Services Catalog)

    -   Watson Health services and code

    -   IBM Cloud services

Step 2: Evaluate

-   [Common Services Definition Squad](#common-services-definition-squads) evaluates proposals and creates Definition Package

    -   Evaluates requirements and inventory.

    -   Evaluates [architecture](#high-level-architecture) available

    -   For new proposals, creates [Definition Package](#definition-package-content)

    -   For existing services, works with development team to create/evaluate [Definition Package](#definition-package-content)

-   [Requirement Gathering](#requirements-identification-and-specification)

    -   Survey teams that need the capability (consumers)

-   [Define Service Squad Alignment on MVP](#assumptions-for-common-service-identification-and-evaluation)

    -   Alignment with Strategic Imperatives

    -   Best use of Skill, Talent and organization

    -   Roadmap pragmatics

    -   Evaluation methodology

Step 3: Propose and Review

-   [Architecture Council](#architecture-council) Definition and Contribution Part 1 package reviews

-   Platform MMT Review (Business Review)

-   [Architecture Council](#architecture-council) Contribution Part 2 package review

Step 4: Develop

-   [Contribution Process Package Part 1: Architecture](../../../dev/common-services/contribution-process)

-   [Pre-Development](../../../dev/common-services/contribution-process#section-i-pre-development)

-   Develop & Document Common Service (Using [Watson Health Playbook](../../../dev/planning-and-tracking-work/release-planning/))

-   [Complete Contribution Package Part 2](../../../dev/common-services/contribution-process)

Step 5: Disposition

-   Rejection

    -   Rejection could be for many reasons, but usually it will be because the service business proposal isn't well defined, or the technical architecture needs work.

    -   A complete rejection will be decided if the service does not meet a high-value, cross-pillar business or technical need.

-   [Approve Service and Make Available](../../../dev/common-services/contribution-process#section-ii-making-the-service-available)

    -   AC assigns teams based on recommendation

    -   AC approves exemptions

    -   Service is promoted in Service Catalog as a common service across pillars.

Step 6: Consume

-   [Service Discovery and Use](../../../dev/common-services/consumption-process)

Step 7: Support

-   [Operations and Maintenance](../../../dev/common-services/consumption-process#5-operational-services-support-oss-of-the-wh-ibm-cloud-and-sl-accounts)

The following diagram shows the Rejection/Update/re-submit path

![Rejection and Feedback Flows](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/image2.jpg)

### Vetting Common Services and Requirements with Pillar teams

To accommodate cross-market visibility and identification of services, there are two teams that will work together to identify and recommend common services:

#### Architecture Council

The Architecture Council is made up of key architecture and development leaders who have the skills and background to assess recommendations for common services and are ultimately the responsible for the final disposition of whether a service should be made into a common service.

Team members are comprised of executive leadership from the different offerings, compliance, security and delivery. At the technical level, each of the development functional organizations have a representative on the AC.

#### Common Services Definition Squads

Supporting the AC, are a series of squads that are divided by functional area, for example:

-   Customer and Data Onboarding

-   Developer Experience

-   Cognitive

-   Analytics and BI

-   Health Data Platform

-   Security and Data Governance

-   Foundation Services

-   Operational Resilience and PSIRT

-   Infrastructure

Each squad has membership from each of the Pillars and Functional Leadership (e.g. Platform, Imaging, Life Sciences, Oncology, VBC, etc\...)

The primary purpose of these Common Services Definition Squads is to evaluate existing services that are candidates to become common services, examine proposed requirements for new common services, and ultimately propose a common service for approval by the AC.

Proposals are made through the creation of a **Definition Package**, which will contain all the content needed by the MMT to make business decisions about the common service proposal.

By distributing the evaluation of common services in this fashion, the AC will be able to focus on the business decisions related to approving a new common services effort or promoting a service.

##### Definition Package Content

The "Definition Package" is a checklist of input documentation, requirements and other artifacts needed by the Common Services Definition Process as part of the minimum set of information needed to successfully complete a review of the viability and business need of a service.

To begin the process of Definition Package evaluation, please follow the "[Submitting a Common Service Proposal for Evaluation](https://watsonhealth.aha.io/products/WHXSEG/pages/WHXSEG-N-1){:target="_blank"}" process. This will show you how to create an "idea" in Aha! and attach your Definition Package to it and initiate the evaluation process.

#### Assumptions for common service identification and evaluation

**Given That:**

-   All Services across WH are in a 'Watson Health Services Catalog', visible to all Markets (Pillars)

-   Common services identification is an integral part of the main grooming of all services

-   There exists a [Common Services Definition Squad](#common-services-definition-squads) per functional area responsible for evaluating services and providing a recommendation to the AC for promotion.

-   There exists a [Architecture Council](#architecture-council) responsible for final approval and promoting them to Common Services

**Then if a common service is identified:**

1.  A Squad will be assigned - this can be a new or existing Squad (for example, a service has an existing squad, it may be preferable to have the same squad continue development of the common service).

2.  Service gets flagged in the catalog and metadata includes all solutions using it, etc.

3.  MVP is socialized and vetted with the [Architecture Council](#architecture-council)

    a.  MVP must be driven by the 'Must Have' of Market using the Common Service

    b.  The solution must be sufficiently inter-operable (does it become part of a Platform offering?)

Based on outcome of the investigation with IBM Cloud and WH teams, the answer will be:

-   **Yes** -- Feature exists in the service

    -   Update MVP to show work to integrate with IBM Cloud service

-   **No** -- Feature does not exist in the service

-   **Future** -- Feature is committed in the service roadmap

-   **Partial** - Feature is partially implemented in the service but improvements are still needed

-   Also notate if feature already exists in another service (i.e. composite service)

Requirements Identification and Specification
---------------------------------------------

To keep requirements consistent between Unregulated and Regulated projects, the same traceability metamodel should be utilized when defining functional and nonfunctional requirements:

![Metamodel](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/image3.jpg)

### Requirements Definition Assumptions

There are two workflows that govern how requirements and design are captured and documented. These are Regulated and Unregulated.

To prevent future issues with an unregulated service becoming regulated, or integrating with regulated projects, it is required that the same quality-based approaches should be used for both. The main difference between the two workflow approaches is that in an Unregulated project, it is not required to formally approve and sign the requirements before development can begin. As requirements for a service become approved and assigned to releases and given points, Work Packages can immediately be created for tracking and development can begin. This means that a more iterative and agile based approach can be taken to requirements gathering, definition and implementation.

Requirements can also evolve without the need for formal change history approvals. Making use of a requirement management tool that can track the change history of requirements directly or using change records, will greatly help in documenting the running history of all changes can be maintained.

The Watson Health Playbook provides guidance on requirements definition for [planning and tracking work for ongoing delivery](../../../dev/planning-and-tracking-work/ongoing-delivery/).

In general, Hills, Epics and Stories can be defined as:

-   Hill: The big goal. Contains a who, what, and wow factor.

-   Epic: A collection of customer value centered on a common theme.

-   Story: A chunk of customer, or team, value that can be completed in a single sprint.

### Capturing Requirements (Functional and Non-Functional)

Incorporate [Common Requirements for Common Services](../../../dev/common-services/non-functional-reqs) into your requirements plan.

Gather requirements / un-prioritized

-   Talk to internal and external clients

-   Collect initial solution validation criterion

-   Identify WH assets, if any, that could be leveraged

-   Include any cross-service dependency

#### Requirements Review and Communication

The Watson Health Playbook provides general guidance around [holding regular grooming sessions](../../../dev/planning-and-tracking-work/ongoing-delivery/) as well as the [general process for defining and reviewing requirements](../../../dev/planning-and-tracking-work/ongoing-delivery/), however the following reinforces the key considerations for these reviews along with additional actions for common services.

Communicating and reviewing candidate requirements shall be handled through the Offering Management Operational Model:

-   Socialize MVP with stakeholders

    -   internal teams / OT

-   Make sure the **Architecture Council** has approved

-   Each user story must be reviewed and accepted by majority stakeholders. If applicable, sponsor user validation needs to be part of this stage.

-   Majority stakeholders include:

    -   Offering management

    -   Development management

    -   Component lead

    -   Architect

    -   Security

    -   Compliance

    -   IT/Comm Ops

    -   Design (if applicable)

    -   Sales (if applicable)

    -   Consulting (if applicable

-   Approved requirements are included in the next \"release train\". Number of requirements included is based on each team\'s velocity.

-   PB0 / Commitment Pitch at OT/MMT - requires:

    -   Sizing of MVP from development (dev / test / ID / build / deploy / etc)

    -   Dev team\'s velocity - to determine iteration / \"release train\"

    -   Identification of how many iterations are needed to do a \"release train\"

-   MMT approval -\> move to Build and Deliver phase

#### Requirements Management Tooling

The Watson Health Playbook also sets the [required tooling to be used for non-regulated projects](../../../dev/planning-and-tracking-work/getting-organized/), however there is ongoing work that needs to be finalized around the regulated project tooling. Regulated projects have validated tooling that will continue to be used until a documented path in the playbook can be solidified for regulated projects and offerings.

The single most important requirement for our tooling is that they support our regulatory and non-regulatory requirements definition and development processes. Therefore, care must be taken with tooling since there are considerations that need to be made with respect to GxP projects that are already underway. Validation of tooling is also a requirement for tools that participate in QMS projects. Nevertheless, common tooling for backlog grooming by Offering Management, with an eye on the future of validated tooling, is possible.

**In general:**

-   Aha! Will be used to collect, refine, publish and track requirements prior to development.

    -   These requirements may be for a non-regulated, GxP or may become GxP since there is no notion of the technology or design.

    -   Like we currently do with RDNG, a corresponding RTC work item will be created for development to work on at the beginning of a development iteration.

-   In Aha! We need to track:

    -   Requirement

    -   Requester: Customer/Pillar/Solution (helps identify Common Services)

    -   Prioritization score.

    -   Validation Criterion

    -   Business Justification - Revenue, Customer Satisfaction, Service dependency, Security / Compliance

    -   RTC\# (work item to be created after MMT approval of Commitment Pitch)

    -   Does it exist in another solution or is one under construction?

#### The Requirements Refinement Lifecycle

For non-regulated offerings, refer to the [Watson Health Playbook for requirement refinement on Hills, Epics and Stories](../../../dev/planning-and-tracking-work/getting-organized/). It is important that we maintain the traceability outlined in "Requirements Identification and Specification" section of this page.

For regulated offerings, please see [Regulatory Considerations](../../../compliance/regulatory-considerations/)

As changes are made to requirements, change history should be documented through Change Requests, or other change tracking mechanisms should be maintained for historical purposes.

Offering Management and Architecture should work together to define meaningful business level Hills and Epics whereas Development, Architecture and OM should work together to decompose Epics into meaningful Stories and Acceptance Criteria that are testable and unambiguous.

Release Planning
----------------

Please refer to the [Release Planning](../../../dev/planning-and-tracking-work/release-planning/) section of the Watson Health Playbook for general details, however the following section outlines key considerations for release planning on common services as well as regulated common services.

Offering Management will have a prioritized list of requirements, a subset of which will make up the MVP. Each of the squads will know what their velocity for each iteration is. Each team will need to determine which of the MVP requirements apply to them and which ones can be completed in each iteration based on historical velocity.

The velocity will determine how many iterations are needed to complete the MVP. Each iteration should be considered a potential shipping release for non-GxP. The total number of iterations which are needed to complete MVP should be considered as a release train for GxP. Once teams have reached the last iteration of the release train, that release train is forked and enters V&V for GxP while development continues on the next iteration for the next release train/non-GxP iteration.

High Level Architecture
-----------------------

Please review how to create an [Initial High-Level Architecture](../../define-and-prove/initial-hl-architecture) for the [Watson Health Development Process](../../../dev/index).
