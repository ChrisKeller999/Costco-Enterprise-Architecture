---
title: Technical Operations Center
sidebar: dev
---

## What is TOC?

The Technical Operations Center (TOC) is an org within the Cloud CTO office. The mission of the TOC is to provide:
* Best in class Incident Management
* Availability and problem management with a focus on reducing MTTR (Mean Time to Recover)
* Continuity of services along with a clear internal communications channel for all Cloud offerings

The TOC has engineers and Availability Managers 24*7 to provide:
* Timely alert and incident resolution
* Data capture
* Communications with the goal of improving short and longer term availability.


## What are the services available from TOC?

* 24*7 Alert monitoring
    * Periodic Alert analytics providing insight into inconsistencies and false positives
* Runbook Execution (if TOC is enabled)
* 24*7 Availability Management driving incidents (CIEs) to closure
    * Tiered internal Communications providing messaging clarity to execs and dependent offerings
    * RCA co-ordination
* Triage outage escalations to Cloud from internal teams


## TOC Services - 24*7 Alert Monitoring

### Value:

* TOC can address any of your alerts that tribes are being paged out for today. This saves valuable developer/devOps time.
* Trained staff monitoring alerts via the shared console with 24*7 coverage. Monitor for alert action. Act if action not taken.
* Engage Availability Managers during incidents and assist in incident resolution and cross coordination with other services during major outages.
* Periodic alert analytics are performed. At a service/offering family level, deeper insights on alerts to highlight inconsistencies, repeat alerts, false positives etc to enable service teams to reduce noise and get to true actionable alerts.
* Know offering dependencies in cloud (dependency tree buildup is WIP). This will enable notification to services if a dependency is down and save developer time.

### What is needed from services?

* Integrate your service with [Technical Integration Point (TIP)](https://github.ibm.com/cloud-sre/world-of-tip/blob/master/README.md){:target="_blank"} to send alert data from your service monitoring to ServiceNow and the TOC.
* Complete [onboarding to the TOC](TOC-Onboarding#how-do-i-onboard-my-service-to-the-toc) so my service is considered TOC enabled as required by the [Service Framework](https://pages.github.ibm.com/ibmcloud/Service-Framework/){:target="_blank"}.


## TOC Services - Runbook Execution

### Value:

* Services identify alerts for which TOC engineers are enabled to be first responder 24*7. This saves valuable developer/DevOps time.
* If tribes/services would like TOC to take action on clearing alerts, runbooks are required to be provided to the TOC.
* Services can start with enabling the TOC with clearing basic alerts and can add alerts that require deeper system level access over time, thus increasing the alert addressing rate by TOC and freeing up more of your DevOps time.
* Can offload DevOps members from performing routine daily operations, where automation is not available/possible.

### What is needed from services?

* Complete [runbook enablement](TOC-Onboarding#what-is-required-for-runbook-enablement) as required by the [Service Framework](https://pages.github.ibm.com/ibmcloud/Service-Framework/){:target="_blank"}.


## TOC Services - Availability Management

### Who is an AVM?

The Availability Manager is a skilled resource whose primary role is to be engaged during customer impacting incidents and drive the incidents to closure, ensuring the right skilled resources are engaged in mitigating/resolving the incident.

### Value:

* TOC has a central pool of Availability Managers with a 24*7 global presence.
* During major widespread outages, the AVMs will perform cross platform co-ordination.
* Individual service teams need not staff availability managers, allowing offerings to put more resources into dev/devOps instead of incident management
    * Some tribes may continue to have AVMs/ERMs who have deeper tribe level expertise to drive root cause and improvements
* Tiered (Tier 1 and Tier 2) Incident communications to dependent offerings and execs providing message clarity on impact.
* AVMs will drive and co-ordinate RCAs. Work with DevOps and other appropriate teams to drive a full and thorough investigation in to an incident.
* Provide management visibility into aging RCAs

### What is needed from services?

* Complete [AVM enablement](TOC-Onboarding#what-is-required-for-avm-enablement) as required by the [Service Framework](https://pages.github.ibm.com/ibmcloud/Service-Framework/){:target="_blank"}.
