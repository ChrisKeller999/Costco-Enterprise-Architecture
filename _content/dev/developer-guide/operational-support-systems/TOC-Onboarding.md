---
title: TOC Onboarding
sidebar: dev
---

## How do I onboard my service to the TOC?

Any tribe that wants to utilize [TOC services](r#what-are-the-services-available-from-toc) must **TOC enable** their service. Services become TOC enabled when they complete onboarding to the TOC:

1. Enroll your service in [ServiceNow](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W72236921778c_44ea_b5ac_6d8bad99ac4e/page/Enrolling%20A%20Service%20for%20Ticket%20Management){:target="_blank"}. The [cheat sheet for enrolling services](https://ibm.ent.box.com/notes/244045701906?s=rellzkqseom4i63tyzki5w2ci50aumcd
){:target="_blank"} may be helpful.

1. Integrate your service with [TIP](https://github.ibm.com/cloud-sre/world-of-tip/blob/master/README.md){:target="_blank"} to send alert data from your service monitoring to ServiceNow and the TOC.
    * See [TIP integration considerations](#tip-integration-considerations-for-toc) to understand what data values determine whether your alert flows to the TOC for processing.

1. Complete the [Service Contract](https://pages.github.ibm.com/CloudEngineering/service_contract/){:target="_blank"} Production Readiness Criteria (PRC)
     * PRC includes and requires your service is **TOC enabled**
     * TOC enablement consists of [**AVM enablement**](#what-is-required-for-avm-enablement) and [**Runbook enablement**](#what-is-required-for-runbook-enablement)
     * TOC enablement is tracked for each service in the [scorecard](https://pages.github.ibm.com/cloud-sre/ToolsPlatform/scorecard-docs/scorecard_overview/){:target="_blank"}
     * [Click here](https://github.ibm.com/global-toc/TOC-Cloud-Onboarding/issues/new){:target="_blank"} to start the onboarding process. Include the name of your service as listed in [doctor scorecard](https://doctor.bluemix.net/\#/scorecard){:target="_blank"} and a contact to help complete the required enablement activities
     * If you have questions or need help, visit us in the [#toc-global](https://ibm-cloudplatform.slack.com/messages/C4BJ6N6SV){:target="_blank"} channel in the Watson Cloud Platform slack workspace.


## What is required for AVM enablement?

### Pre-requisites:

* Completed ServiceNow enrollment

### Process:

* Service team completes a one-page enablement document, including a brief description of the service, key dependencies, slack channels, and key contacts
* AVM team reviews the service team’s ServiceNow enrollment and AVM enablement document
* AVM and service teams complete a “Mock CIE” (end-to-end test)
* AVM team assigns the service team an RCA coach
* AVM team provides Incident Management and Problem Management training

### Completion:

* Accepted AVM enablement document
* TOC update of AVM enablement service status in doctor scorecard

Note: If a service uses ServiceNow for Incident Management, TOC AVMs will be engaged for a CIE regardless of the AVM enablement status.


## What is required for Runbook enablement?

### Pre-requisites:

* Completed ServiceNow enrollment

### Process:

* Service team completes a one-page enablement document, including
    * Brief description of alert handling, key dependencies, slack channels, and key contacts
    * List of runbooks to delegate to the TOC engineers.  This may be none, some, or all of a service’s runbooks.

* TOC team reviews service team’s ServiceNow enrollment and runbook enablement document
* For delegated runbooks, TOC and service teams establish plan that includes
    * **Runbook review/revision**.  TOC team provides comments and service team makes mutually agreed to changes.  See the [TOC Runbook Requirements](https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W856c27876ff7_4ca0_889b_a3e778df0231/page/TOC%20Runbooks){:target="_blank"} for reference.
    * **Service-specific enablement**.  TOC team completes service-provided access requests and training.
    * **Alert flow configuration**.  Service team delegates agreed to alerts to TOC.

### Completion:

* Accepted runbook enablement document
* Accepted plan for any delegated runbooks (optional)
* TOC update of runbook enablement service status in doctor scorecard


## TIP Integration Considerations for TOC

Your service may use a common service like Bluemix's Marmot or a webhook to New Relic to facilitate integration with TIP.  Or your service may code directly to TIP using the [TIP API documentation](https://github.ibm.com/cloud-sre/tip-api){:target="_blank"}. Both ways work to complete integration with the TIP and to send alert data from your service monitoring solution to ServiceNow and the TOC.

Services submit their alert message using a common message format called a **concern**.  Assuming your service is [TOC enabled](#how-do-i-onboard-my-service-to-the-toc), the values of the following fields determine whether or not your alert flows to the TOC for handling:

* _**console**_ - 'toc' indicates the alert may be processed by the TOC based on the value of other TIP concern fields
* _**runbook&#95;url**_ - URL to a UI that will show the runbook for this alert
* _**runbook&#95;toc&#95;enabled**_ - 'true' indicates the specified runbook will be handled by TOC as a first responder

The values of the following fields enable functionality of the TOC console:

* _**alert&#95;ui&#95;url**_ - a URL to a UI that will show this alert
