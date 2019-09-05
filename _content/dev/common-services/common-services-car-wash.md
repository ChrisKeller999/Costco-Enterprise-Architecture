---
title: WH Common Services Car Wash Program
sidebar: dev
breadcrumb: WH Car Wash Program
---

This architecture review program has been adapted from the [IBM Cloud Car Wash Program](https://github.ibm.com/ibmcloud/Platform-Architecture/wiki/Car-Wash-Program){:target="_blank"}. The purpose of the program is to drive detailed architecture reviews of IBM Watson Health Common Services. Every service whether launching in Beta or GA will be required to produce a standard set of information leading into a Car Wash architecture review to validate that the service is well-designed and implemented, and meets the base requirements of all Common Services.

**Note** The generic non-functional requirements for Watson Health Common Services are [here](non-functional-reqs).  These have been distilled from the [IBM Cloud System Architecture Guardrails](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/){:target="_blank"} page.  The reason for the customization is that IBM Cloud Services are true PaaS services, whereas (for the moment) Watson Health Common Services are based on an open source/shared library model.  It is intended that the IBM Cloud guardrails will become the defacto standard when Watson Health Common Services move to a PaaS model.

### _Service teams are required to address the following as soon as possible, but at least 6 weeks before launch to ensure sufficient time for your team **to address resulting action items**:_

## Car Wash Architecture Review requirements

### Steps:

1. Create your own service Car Wash Box folder here: **[Location TBD]**. Name/rename your Car Wash Box folder with your CRN service-name (unique short name).
2. Create a Box note in your folder to include the appropriate table format below, and complete each field/cell.
3. Post the requested artifact/material per Beta or GA Release Criteria - see the "Minimum Materials Required Leading into a Car Wash Review" tables below - in your respective Car Wash Box folder, together with the following information: **i) A brief description of your service (i.e., what is it / what is the purpose of the service) - e.g., post your Concept Car; ii) Your target launch date; iii) A link to your Service Onboarding Process (SOP) documentation [TBD Does this apply?] iv) A link to your architecture diagram; v) A link to your network topology diagram; vi) A link to, or evidence of, service availability metrics **
4. Ensure that the material you provide shows how you addressed / are compliant with the [Architecture Requirements](non-functional-reqs) for your service's current release.
5. Pull together a Car Wash summary Box note with your respective [release table template] [Box Location TBD]. In the table, indicate compliance or non-compliance per requirement. Where compliant, include pointers to supporting artifacts/material. Where non-compliant, highlight it in red in the table, and indicate the reason for non-compliance and when/how you plan to be compliant with that requirement.
6. [Process around adding your Service to the Review Roadmap - schedule on box, nominated contact point - TBD].
7. Ensure that the Architecture Council Review Team  have all been given access to any relevant private Github repos (e.g., to service backlog, code, etc.), Box folders, etc.  [TBD - specifically, who does the reviews?]
8. When your material is available for review, a target review completion date will be set based on the status of the service (if 'cleaner', then shorter review cycle required, etc.).
9. The Architecture Council Review Team will then review the material thoroughly either by phone or offline depending on the service. We will post any related notes and resulting action items directly in the Box folder for the service team to address, and will track and follow up with the team as needed.
10. All action items prioritized as urgent will need to be addressed before launch. All Car Wash-related action items / issues are tracked in the [TBD - IBM Watson Health CarWash Git Repo].
11. Your service team will need to assess and prioritize the Car Wash issues against your existing backlog (preferably stored in Github Enterprise) - add the issues to your own repo, and tag/label with **Watson Health Car Wash** to indicate Car Wash-related reliability/availability/resiliency issues. Then, copy and paste the link from your repo directly in the issue that we initially opened in our Platform Architecture git repo, so that we can cross-reference your link going forward.
12. When the above steps are completed, and the action items addressed accordingly, we will then sign off on the Car Wash architecture review.
13. Prescriptive guidance for the Watson and Cloud Platform is provided in the Watson Health Generic Non-functional Requirements wiki page.
14. Any questions? Join the [TBD: Watson Health Common Services Carwash Slack channel].

## Minimum materials required leading into a Car Wash Architecture Review for a _Beta_ release

Please copy and paste the tables below into your respective [Car Wash Box folder](https://ibm.box.com/v/CarWash){:target="_blank"}. Indicate compliance / non-compliance, and provide the supporting artifacts per release criteria / requirement. **Note: Some people have had problems copying and pasting tables from github into a Box note; you can also copy and paste the tables below from the [Car Wash Templates - Tables per Alpha/Experimental, Beta, GA, and Gen2 Box note](https://ibm.box.com/s/l6zgi5khgupphf3c96uo33wlyiveze3o){:target="_blank"}.**

**[Architecture Release Criteria](https://pages.github.ibm.com/ibmcloud/Service-Framework/11_architecturedesignrequirements.html){:target="_blank"} - Beta** | **Compliant (Y/N); if No, state why not** | **Link to supporting material/data showing compliance** | **Relevant notes**
--- | --- | --- | ---
Post the artifacts/material requested in this Alpha/Experimental release table in your respective Car Wash Box folder, together with the following information and other required artifacts: **i) A brief description of your service (i.e., what is it / what is the purpose of the service) - e.g., post your Concept Car; ii) Your target launch date; iii) SOP information [TBD: is this relevant?] iv) A link to your architecture diagram; v) A link to your network topology diagram; vi) A link to, or evidence of, your Service Availability metrics ** | | | Note: We also request an **architecture diagram** and **network topology diagram** to get a better understanding of how your service is built.
ARCH001a.1 Net new services must be designed as cloud native services according to the principles in the [Cloud Native Architecture standards](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/cloud-native.html){:target="_blank"}, including Armada (Kubernetes) Container Service as the primary choice of the infrastructure platform for hosting the service components. Alternative choices for infrastructure platforms for hosting the service components MUST be reviewed with the Architecture Guild and MAY be considered according to the guidelines in the [Cloud Native Architecture guidelines](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/cloud-native.html){:target="_blank"}. Non-net new services must present an analysis of how their as-is architecture will address all non-functional requirements, and cloud deployment.
|  | Talk through how you have addressed the principles [here](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/cloud-native.html){:target="_blank"} |
Service must define Cloud Resource Names (CRNs) according to the [Naming standards](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/naming.html){:target="_blank"} based on the [Cloud Resource Naming \(CRN\) specification](https://github.ibm.com/ibmcloud/builders-guide/blob/master/specifications/crn/CRN.md){:target="_blank"} |  | Provide your CRNs |
Service must integrate with Identity Access Manager (IAM) for user and services authentication and authorizations according to the [Authentication and Authorizations standards](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/security.html#auth){:target="_blank"} |  |  |
Service must expose a User Interface integrated into the IBM Cloud Console. Refer to the [IBM Cloud Developer's Guide Global Console](https://console.stage1.bluemix.net/docs/developing/console-sdk/global-console.html#bluemix-global-console-overview){:target="_blank"} documentation. |  |  |
Service must expose application programming interface (API) according to [API standards](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/service_interfaces.html){:target="_blank"}; 1) Service must publish public API and UI endpoints using the following rules for assigning DNS domain names [Domain names standards](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/DNS.html){:target="_blank"}; 2) APIs to be published in the [external API catalog](https://developer.ibm.com/api/list) with pre-release version identifier |  | Point to published APIs |
Service must be designed for high availability at regional level to be resilient in case of planned and unplanned infrastructure and services downtime and failures in one Zone in a Region [High Availability standards](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/availability.html){:target="_blank"} |  |  |
Service must be designed for data backup and restore and supporting Business Continuity / Disaster Recovery (BC/DR) to different Region in case of major disasters that impact a subset or a complete Region [Business Continuity and Disaster Recovery standards](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/business_continuity__disaster_recovery_targets.html){:target="_blank"}. All backup and restore procedure and Business Continuity / Disaster Recovery (BC/DR) plan must be documented and ready to be tested during the Beta phase. |  | Link to your test scenarios and results |
Service must be running for at least 30 days with 99.5% or better for both availability of the provisioning/ordering system and consumption/use of the service |  | Link to your [Doctor Scorecard](https://doctor.bluemix.net/#/scorecard){:target="_blank"} entry |
Ensure that [API Standards](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/service_interfaces.html){:target="_blank"} have been met - e.g., reference the API Standards requirements in the above Alpha/Experimental phase - with the final syntax and version identifier planned for GA |  |  |
Service must be integrated with the Business Support System (BSS) to publish resource plans in the service catalog, manage and track resource instances, collect resources usage metrics for billing according to [Business Support System standards](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/bss.html){:target="_blank"} |  |  |
[Monitoring](https://pages.github.ibm.com/CloudEngineering/system_architecture/service_directory/devops/Monitoring.html){:target="_blank"} of the resources and dependencies of the service - health checks - must be in place |  | Link to your operations dashboard |
Service must be tested for performance and scale scenarios according to [performance and scale standards](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/performance.html){:target="_blank"} to gather metrics about load boundaries and verify scale/capacity plans and procedures |  | Link to performance and load data |
Service must automate the deployment of new instance or updates to existing instances of the service. The upgrade must be at least weekly and be able to apply security or critical severity issue updates within 24 hours without impacting availability - [DevOps standards](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/devops.html){:target="_blank"}. |  | Link to CI/CD runbooks, documentation, Jenkins servers, etc. |

_Related track in our Service Framework onboarding guide: [Onboarding to Beta](https://pages.github.ibm.com/ibmcloud/Service-Framework/22_onboardingtobeta.html){:target="_blank"}_

## Minimum materials required leading into a Car Wash Architecture Review for a _GA_ release

Please copy and paste the tables below into your respective [Car Wash Box folder](https://ibm.box.com/v/CarWash){:target="_blank"}. Indicate compliance / non-compliance, and provide the supporting artifacts per release criteria / requirement. **Note: Some people have had problems copying and pasting tables from github into a Box note; you can also copy and paste the tables below from the [Car Wash Templates - Tables per Beta and GA,](https://ibm.box.com/s/l6zgi5khgupphf3c96uo33wlyiveze3o){:target="_blank"}.**

**[Architecture Release Criteria](https://pages.github.ibm.com/ibmcloud/Service-Framework/11_architecturedesignrequirements.html){:target="_blank"} - GA** | **Compliant (Y/N); if No, state why not** | **Link to supporting material/data showing compliance** | **Relevant notes**
--- | --- | --- | ---
All architecture design requirements for Alpha/Experimental and Beta per above are complete |  | Link to your previous Car Wash Alpha/Experimental and Beta Box folders |
Service is running in 3 or more Zones in a Region, or 3 or more Data Centers (if Zones are not yet available in the Region) |  | Link to your architecture diagram |
Service is running in all [public regions](https://pages.github.ibm.com/CloudEngineering/system_architecture/regions_zones.html){:target="_blank"} |  | Link to your [Doctor Scorecard](https://doctor.bluemix.net/#/scorecard){:target="_blank"} entry |
Beta service availability experienced by end users must exceed 99.9% for at least 30 consecutive days - a service cannot GA without the Beta phase |  | Link to your [Doctor Scorecard](https://doctor.bluemix.net/#/scorecard){:target="_blank"} entry |
Evidences that data backup and restore procedures and Business Continuity / Disaster Recovery (BC/DR) recovery plans were tested before GA launch. All the documentation required by BC/DR plan about the test were collected and ready for auditing. |  | Link to your test scenarios and results |
Evidence that scale-up procedures were tested and failure simulation tests were run on the beta environment |  | Link to your test scenarios and results |
Service must have zero downtime - release/maintenance automation is in place and was tested in Beta |  | Link to CI/CD plan/runbooks |
Service must have zero dependencies on Beta or Alpha/Experimental services (for third-party services, must have 24x7 support) |  | List all dependencies and Single Points of Failure (SPoFs) in the service design; architecture diagram could potentially be reused here |
24x7 operations plan - including escalations for sev 1 and 2 issues to the business segment owner if not resolved in SLA time |  | Link to ops. plan |
Services must have zero open [architecture/availability issues](https://github.ibm.com/ibmcloud/Platform-Architecture/labels/Car%20Wash){:target="_blank"} |  | Link to your service's Car Wash-related issues |

_Related track in Service Framework onboarding guide: [Transitioning from Beta to GA](https://pages.github.ibm.com/ibmcloud/Service-Framework/31_BetaToGA.html){:target="_blank"}_


---
## Descriptions of supporting artifacts listed above

* **Architecture diagram:** Include up-to-date implementation details, state management, scale, operations, API itself and user experience of your service. Post both the XML files and screen caps of the diagrams in the Box folder. Ensure that the boxes, flow, etc. are clearly labeled / easy to read.
* **Network topology diagram:** Post both the XML files and screen caps of the diagrams in the Box folder. For context, provide a description of the network connectivity of the service, including a full trace of components on the path from the internet into the service (both control plane and instances) and between key dependencies of the service.
* **Single Points of Failure (SPoFs):** Identify SPoFs within the service design and how dependency failures are handled gracefully (or not). Rank by blast radius (global impact, regional impact, pod/AZ impact, component impact).
* **Dependency chain or layering of the service implementation:** Include internal cross-service dependencies and external dependencies outside of IBM (e.g., Dyn, Akamai, etc.)
* **Data model for the service:** Include all storage technologies, databases, and data schema, and include links to data backup and restore procedure runbooks
* **Operations dashboard(s) for the service:** E.g., include direct links and/or a screen capture or PDF from each dashboard of week/month/YTD key metrics on service health, provisioning and consumption.
* **Tests executions results and plans:** Include failure/destructive testing, load, stress, performance testing, etc.
* **Capacity:** It is important to understand your service’s current capacity and future capacity projections. In your capacity planning, include your service’s current headroom and show how you will provide ongoing capacity metrics reporting.
* **Rate limiting:** Reference questions asked in the rate limiting survey
* **APIs:** Where applicable, provide links to externally published APIs, e.g., in the external API catalog (with pre-release version identifier); reference the APIs guidance


## Related links

If you need access to any of the links below, start [here](https://ibm.box.com/s/7ddr9ctgv8t61bl10bhf7o5qimnz06hb){:target="_blank"}.

* [Car Wash Box folder](https://ibm.box.com/v/CarWash){:target="_blank"}
* [Car Wash Templates - Tables per Alpha/Experimental, Beta, GA, and Gen2 Box note](https://ibm.box.com/s/l6zgi5khgupphf3c96uo33wlyiveze3o){:target="_blank"}
* [Car Wash Reviews Schedule - Gen1 2018](https://ibm.box.com/s/sa4j22iogvcsd9jye5ytivx83ch6qrh3){:target="_blank"}
* [Car Wash Reviews Schedule - Gen2](https://ibm.box.com/s/z65rk0msc2ja13uzrcqd8sb4yzyhu78p){:target="_blank"}
* [Action items resulting from Car Wash reviews - tracked through the Platform Architecture Github repo](https://github.ibm.com/ibmcloud/Platform-Architecture/labels/Car%20Wash){:target="_blank"}
* [Service Framework onboarding guide](https://pages.github.ibm.com/ibmcloud/Service-Framework/){:target="_blank"}
* [Service Framework onboarding guide - Architecture Design Requirements](https://pages.github.ibm.com/ibmcloud/Service-Framework/11_architecturedesignrequirements.html){:target="_blank"}
* [System Architecture Guide](https://pages.github.ibm.com/CloudEngineering/system_architecture/){:target="_blank"}
* [System Architecture Guide - Guardrails & Standards section](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/){:target="_blank"}
* [Cloud Security Review](https://pages.github.ibm.com/ibmcloud/Security/){:target="_blank"}
* [#architecture-carwash Slack channel](https://ibm-cloudplatform.slack.com/messages/architecture-carwash/){:target="_blank"}
