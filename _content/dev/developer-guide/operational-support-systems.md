---
title: OSS
breadcrumb: OSS
sidebar: dev
---
Operational Support System's (OSS) mission is to ensure that all Watson and Cloud platform services adopt the OSS platform to provide a consistent experience for our customers by utilizing a common integrated Service Management toolset.  The OSS scope includes defining technology, workflows and tooling for the various modules that comprise of a Service Management platform. The modules are [Case Management](#case-management), [Incident Management](#incident-management), [Problem Management](#problem-management), and [Change Management](#change-management).

## Case management

All services are required to use the application **ServiceNow** as the case management tool. The Bluemix console will be updated to invoke ServiceNow APIs to get tickets created in the ServiceNow repository. The global support team will work case tickets in ServiceNow and if they need additional assistance, support will initiate a sync to GitHub to engage development/L3. This is a bi-directional sync.

## Incident Management

ServiceNow is the platform to be used for Incident Management. ServiceNow will have integrations in place with the Event Management System (Netcool) critical for managing incidents. With the integration between Netcool and ServiceNow, incident records will be automatically created for correlated events in Netcool.
Any actions taken by the TOC/GRE/SRE/Tribes will have to be recorded in the incident record. ServiceNow will also be integrated with PagerDuty so that escalations or notifications can occur from the incident record.

## Problem Management

Problem management workflow resides in ServiceNow. Upon closure of an incident, a problem record will be created and assigned to the service / [Root Cause Analysis](https://en.m.wikipedia.org.wiki/Root_cause_analysis){:target="_blank"} (RCA) owner. The RCA owner will perform the RCA (coordinated by an Availibility Manager (aka AVM)). Problem tasks (action items) are listed as part of the problem record. See the [RCA Policy](https://ibm.box.com/s/lv8h6ks1c58d86g48qelfxxee6pkxzg4){:target="_blank"} and [RCA Process and Guidance](https://ibm.box.com/s/m7y1xrohb6mzlsro7gysqu9dbepc494z){:target="_blank"} for more details. These tasks are sync’d up with GitHub so that developers can take action (without having to get a ServiceNow license).

## Change Management

RTC or ServiceNow are the only platforms to be used for Change Management. Change Requests created in either of these tools will be displayed on the Global Change Calendar that is accessed through ServiceNow. ServiceNow gets the RTC Change Calendar information by way of BlueMix Doctor and inherently from ServiceNow. The Change Calendars from both tools are then aggregated to the ServiceNow Global Change Calendar.  See [Change Management Details](operational-support-systems/Change-Management-Details) for more information.

## OSS Core Services

OSS provides the following core services:
* The [Technical Integration Point (TIP)](https://github.ibm.com/cloud-sre/world-of-tip/blob/master/README.md){:target="_blank"} is the integration point that specifies the interface that allows your services to interact with the OSS Platform.

* [ServiceNow](operational-support-systems/ServiceNow) is the integrated IT service management tool for Watson and Cloud Platform.

* The [Technical Operations Center (TOC)](operational-support-systems/Technical-Operations-Center) provides incident, problem, and availability management for Watson and Cloud Platform.

## OSS Onboarding

To take advantage of the OSS services, your service must complete OSS onboarding.  The key activities are

* Enroll your service in [ServiceNow](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W72236921778c_44ea_b5ac_6d8bad99ac4e/page/Enrolling%20A%20Service%20for%20Ticket%20Management){:target="_blank"}. The [cheat sheet for enrolling services](https://ibm.ent.box.com/notes/244045701906?s=rellzkqseom4i63tyzki5w2ci50aumcd
){:target="_blank"} may be helpful.

* Integrate your service with the [Technical Integration Point (TIP)](https://github.ibm.com/cloud-sre/world-of-tip/blob/master/README.md){:target="_blank"}{:target="_blank"} to send alert data from your service monitoring to ServiceNow and the TOC.

* Review the [Service Framework](https://pages.github.ibm.com/ibmcloud/Service-Framework/){:target="_blank"} and adhere to the [Transitions in Production](https://pages.github.ibm.com/ibmcloud/Service-Framework/30_productionchanges.html){:target="_blank"} requirements.
    * The Service Framwork requires your service is **TOC enabled**.  See [onboarding to the TOC](operational-support-systems/TOC-Onboarding) for more details.

* To assist in monitoring your service you can leverage New Relic.  See [New Relic User Guide](https://pages.github.ibm.com/newrelic/newrelic-guide/){:target="_blank"} for details. If you are using Prometheus, collectd, fluentd or Graphite to collect metrics, your metrics could also be consolidated to New Relic for alerting and dashboarding. Here is the [metric integration architecture](https://pages.github.ibm.com/newrelic/newrelic-guide/integration/Metricss-integration-5.5.html){:target="_blank"}

## Service Contract

IBM Watson and Cloud Platform is prioritizing stability and reliability within its Service catalog. To assist Services in
the journey of improving availability, the Service Engineering Foundation has been created to provide a roadmap of
increasing maturity for Services to follow.  See Service Engineering Foundation [Service Contract](https://pages.github.ibm.com/CloudEngineering/service_contract/) for more details

## EU Cloud

The OSS team is committed to supporting IBM's European Cloud initiatives as discussed in the recent [EU Cloud Announcement](https://www.ibm.com/blogs/cloud-computing/2017/11/ibm-cloud-europe-control-data/){:target="_blank"}.  In this announcement it was outlined that clients will have the ability to review and approve all non-EU access requests to their content if an instance requires support or access from a non-EU based employee.  Details of the EU exception are outlined in the [EU Exception Process Requirements](operational-support-systems/EU-Cloud-Exception-Process-Requirements)

## ELK

ELK is the OSS implementation of ELK (Elasticsearch, Logstash, and Kibana).  In real-time ELK is loaded with all alert data processed through the OSS Netcool instance to ServiceNow.  The instance is open to tribes so they can see both real-time and historical alert data processed by OSS.  The link below is the OSS Git repository where you can learn more about ELK, ask questions or raise an issue.

[The ELK Project](https://github.ibm.com/sosat/elk-help){:target="_blank"}
