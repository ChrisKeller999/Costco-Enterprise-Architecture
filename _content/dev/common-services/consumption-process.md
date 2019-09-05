---
title: WH Common Services Consumption Phase
sidebar: dev
breadcrumb: WH CS Consumption Phase
---

# WH Common Service Process: Consumption
The Consumption Process describes the process of enabling a common service from IBM Cloud or WH to be used in WH solutions, applications and other services. This covers (a) the publication and discovery of the service in a catalog together with its documentation, use cases, application starter kits or any the other elements that are needed to efficiently consume the service; (b) the subscription to and billing of the service together with the business artifacts (e.g., price and agreements) and steps to access the service and retrieve the usage; (c) the operation support for a consistent and integrated user experience of the Service Management toolset.

##  Table of Contents

**[1. Consumption of IBM Cloud Services](#1-consumption-of-ibm-cloud-services)**

 [1.1.	Review of an IBM Cloud Service to meet WH MVP Requirements](#11review-of-an-ibm-cloud-service-to-meet-wh-mvp-requirements)

 [1.2.	WH Process in case of IBM Cloud Service not Meeting the WH MVP Requirements](#12wh-process-in-case-of-ibm-cloud-service-not-meeting-the-wh-mvp-requirements)

    1.2.1.	Allow alternative service/solution

    1.2.2.	Escalate to IBM Cloud

    1.2.3.	Provide guardrails for using partially ready IBM Cloud services in a safe/useful way for WH

 [1.3.	WH Process in case of IBM Cloud Service Matching the WH MVP Requirements](#13wh-process-in-case-of-ibm-cloud-service-matching-the-wh-mvp-requirements)

    1.3.1.	Establish Business Terms with Selected IBM Cloud Services

    1.3.2.	Design Patterns and Best Practice for using IBM Cloud Services in WH Applications and Services

    1.3.3	List the Approved IBM Cloud Service for WH Consumption

    1.3.4.	Discover the IBM Cloud Services approved for WH

    1.3.5.	On-board to WH IBM Cloud Accounts and Access the IBM Cloud Services

    1.3.6.	Subscribe to IBM Cloud Services from WH IBM Cloud Account

    1.3.7.	Migrate from Current WH Service to IBM Cloud Service

    1.3.8.	Billing / Charge Back for IBM Cloud Service Usage by WH Solutions

**[2.	Consumption of WH Services](#2consumption-of-wh-services)**

    2.1.	Source Distribution

    2.2 	Platform As A Service

    2.3.	IBM Cloud Developer and Data Scientist Experience


**[3.	Onboarding WH PaaS Services to IBM Cloud](#3onboarding-wh-paas-services-to-ibm-cloud)**

**[4.	Enabling WH SaaS applications for e-Commerce](#4enabling-wh-saas-applications-for-e-commerce)**

**[5. Operational Services Support (OSS) of the WH IBM Cloud and SL Accounts](#5-operational-services-support-oss-of-the-wh-ibm-cloud-and-sl-accounts)**

    5.1.	Case management

    5.2 	Incident Management

    5.3 	Problem Management

    5.4 	Change Management

    5.5.	Capacity and Quota Management

# 1. Consumption of IBM Cloud Services approved for WH

The overall flow of the IBM Cloud consumption process (illustrated below as Workstream 3 or WS3) within WH and the interlock with the definition process (illustrated as Workstream 1 or WS1) is depicted below:

![](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/WH-ServiceConsumption_IBM%20Cloud%20Svcs.jpg)

## 1.1.	Review of an IBM Cloud Service to meet WH MVP Requirements](#11review-of-an-ibm-cloud-service-to-meet-wh-mvp-requirements)

The nomination of IBM Cloud services as WH Common Services and their approval for consumption in a WH solution application or another service is governed by the [Common Service Definition Process processes](../../../dev/common-services/definition-process).

## 1.2.	WH Process in case of IBM Cloud Service not Meeting the WH MVP Requirements

In case of IBM Cloud Services not meeting WH MVP Requirements, WH Offering Management will evaluate the following options to provide WH with the required functionality.

### 1.2.1.	Allow alternative service/solution

WH Offering Management will contact the WH Reference Architecture Council to approve an exception to use an alternative services or solutions until the IBM Cloud Service will GA the required functionality. For example for IDaaS, until AppID GAs the WH MVP requirements, WH could leverage CIS or UMS services.

### 1.2.2.	Escalate to IBM Cloud

WH Offering Management will escalate at executive level the acceleration of a particular set of WH requirements to be prioritized by the IBM Cloud Services. For example, DSX compliance may the subject of an escalation to accelerate its regulation for meeting WH solutions customer deadlines.

### 1.2.3.	Provide guardrails for using partially ready IBM Cloud services in a safe/limited way for WH

WH Offering Management will contact the WH Development team to provide guidance in form of guardrails for using a partially ready IBM Cloud service. For instance the guide can detail how to use DSX with no PHI data.

Artifacts: [http://ibm.biz/wh-IBMC-guide](http://ibm.biz/wh-IBMC-guide){:target="_blank"} contains examples of guides for WP4H on how to use the IBM Cloud Foundational Services.
 
## 1.3.	WH Process in case of IBM Cloud Service Matching the WH MVP Requirements

### 1.3.1.	Establish Business Terms with Approved IBM Cloud Services

WH Offering Management, upon approval by the WH Reference Architecture Board of an IBM Cloud Service, will proceed with reviewing any updates to the Business Terms with the IBM Cloud.

The current agreement is that Watson Health can leverage IBM Cloud IaaS and PaaS services in our solutions and offerings at internal discount rates as follows:

|Service | BSS Details|
|--|--|
|**IBM Cloud Catalog Internal Costs for WH Offerings and Solutions**  <br /> No DOUs required  | [https://console.bluemix.net/pricing/](https://console.bluemix.net/pricing/){:target="_blank"} <br /> 	1. Log into the IBM cloud catalog <br /> 	2. Configure the solution using the Total Cost of Ownership tool. <br /> 	3. Apply 50% internal discount for PaaS, 55% for IaaS |
|**Watson APIs** <br />  DOU and Internal Costs for Watson Health Offerings and Solutions  | [https://tinyurl.com/y9zbswky](https://tinyurl.com/y9zbswky){:target="_blank"} <br />  	Discounts range from 40% - 70% off SRP|
|**PaaS internal IBM dev/test accounts** |	[https://tinyurl.com/ycmrrcor](https://tinyurl.com/ycmrrcor){:target="_blank"} |


### 1.3.2.	Design Patterns and Best Practice for using IBM Cloud Services in WH Applications and Services

The WH Reference Architecture Counsel in collaboration with the Development Squad shepherding will provide patterns and best practices for integrating the WH services and solutions with the IBM Cloud service.

Artifacts: [http://ibm.biz/wh-IBMC-guide](http://ibm.biz/wh-IBMC-guide){:target="_blank"} contains examples of guides for WP4H on how to use the IBM Cloud Foundational Services in their various offerings, e.g., Public, Dedicated Next, or Reserved.

### 1.3.3.	List the Approved IBM Cloud Service for WH Consumption

The IBM Cloud Catalog contains today only services non-complaint for the health industry. Until the IBM Cloud Catalog will include health compliant services, the services approved for consumption in WH will be listed by the shepherding WH Development Squad in the the [Watson Health Services Catalog](https://watsonpow01.rch.stglabs.ibm.com/services/cognitive_catalog/catalog/){:target="_blank"} as a pointer to the actual IBM Cloud Services in the IBM Cloud Catalog. Together with the IBM Cloud Services approved for WH, the Watson Health Services Catalog will also list the WH Common Services which we will introduce in Section [2. Consumption of WH Services](#2consumption-of-wh-services).

The Watson Health Cognitive Catalog enables the sharing, convergence, and enablement of Watson Health Common Service by allowing teams to (a) publish their own assets, (b) discover assets from other teams to collaborate and re-use, and (c) identify the supported services that can be incorporated into production-level solutions (full offerings or built for a client by implementations).

The following diagram describes the structure and the flow the of the [Watson Health Services Catalog site](https://watsonpow01.rch.stglabs.ibm.com/services/cognitive_catalog/catalog/){:target="_blank"}.
![](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/WH-ServiceConsumption_WHCognitiveCatalog%201.jpg)


### 1.3.4.	Discover the IBM Cloud Services approved for WH

WH developers can discover the WH approved IBM Cloud Service by browsing the [Watson Health Services Catalog](https://watsonpow01.rch.stglabs.ibm.com/services/cognitive_catalog/catalog/){:target="_blank"}.
The current view of the filter with WH Services available in Production lists the WH GxP Services, the WH Cognitive Services and the WH Standard Platform Services as illustrated in the figure below. Once approved by the WH Reference Architecture Counsel, the IBM Cloud Services will be displayed as well.

![](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/WH-ServiceConsumption_WHCognitiveCatalog%202.jpg)


### 1.3.5.	On-board to WH IBM Cloud Accounts and Access the IBM Cloud Services

**A.	1Q2018 TACTICAL PROCESS for the WH IBM Cloud Account (SDT only)**

Solution teams and IBM PaaS users already on-boarded to [WH BPM Process Portal](https://sbybz221073.cloud.dst.ibm.com:9443/ProcessPortal/login.jsp){:target="_blank"} can proceed with on-boarding to WH SDT IBM Cloud Account via ticket in the [RTC SDT triage](https://nsjazz.raleigh.ibm.com:8050/ccm/web/projects/Watson%20Health%20Cloud%20(Development)#action=com.ibm.team.dashboard.viewDashboard&team=WHC%20CommOps/WHC%20SDT-PDT-QDT%20Triage&tab=_2){:target="_blank"}.
To open a ticket:
* Select as area "IBM Cloud"
* Select issue as "access"
* Use the following template in the ticket body:

“ACCESS REQUEST TO IBM CLOUD in SDT:

[_One time only for Solution Team request_] The solution team _solutionTeamName_as_in_BPM_ requests to be on-boarded to the IBM Cloud account in SDT under the org OrgSDT__pillarName_. (e.g., OrgSDT_GHHS, OrgSDT_VBC, OrgSDT_Imaging, OrgSDT_Oncology, OrgSDT_WP4H etc).

Solution Team needs individual charge back, select one: oYES   o NO



[_For each user request_] The team members below need the following access to the Space SpaceSDT__solutionTeamName_as_in_BPM_


|User Name	| User Role 	| Role Description | Need user NameSpace in the Solution Team container cluster <br /> (Y or N) |
| ------------- | ------------- |--------------| ------------- |
|Name1@ibm.com	|Organization manager	|The tasks that an organization manager is responsible for includes creating spaces, distributing the quota between the spaces, inviting team members and optionally granting them specific roles, and defining custom domains.|                   |
|Name2@ibm.com	|Organization auditor	|The organization Auditor role can monitor the quota, the resource usage, and the team members for all of the spaces in an organization. The auditors can then report on the organization efficiency and highlight any potential problems. <br />• When you adopt a multi-organization architecture, you might want to grant the auditor role to the same team members for every organization that is part of the account. Then, these team members can monitor the quota across all of the organizations in your cloud environment and obtain a global view of the account. <br />• When you adopt a single-organization architecture, grant the auditor role to the team members with the responsibility for monitoring the quota usage and overall efficiency of the organization.|          |
|Name3@ibm.com	|Organization billing manager	|The team members with the Billing Manager role can monitor the costs of an organization. <br />• When you adopt a multi-organization architecture, you might want to grant the billing role to the same set of team members for every organization that is part of the account. Then, these team members can then monitor the cost of each organization and obtain a global view of the account. <br />• In a single-organization architecture, identify the users that are responsible for monitoring the cost.<br /> This role is appointed by recommendation from the WH Offering Management.
|Name4@ibm.com	|Space manager	|The space Manager is responsible for any work that is done within the space that they manage and control. The space manager can perform the following tasks: <br />   - Monitoring the quota that is allocated to the space. <br />   - Requesting additional resources to the organization manager. <br />   - Notifying the organization manager of resources that are not required. <br />   - Addind team members to the space with the Developer role. <br />   - Optionally, assigning the space Manager role to a team member to act as a deputy space manager in their absence.| |
|Name5@ibm.com	|Space developer	|A space developer can do the following tasks: <br />   - Manage Cloud Foundry applications. <br />   - Provision and configure IBM Cloud services. <br />   - Associate domains to applications.| |
|Name6@ibm.com	|Space auditor	|For every space, you might want to grant the space Auditor role to the same team members with the organization Auditor role. In your enterprise, this role might have to be granted to a specific set of users.|

The team members below need the following access to the IAM-managed resources (e.g., containers):

|User Name	| User Role 	| Role Description | Need user NameSpace in the Solution Team container cluster<br /> (Y or N) |
| ------------- | ------------- |--------------| ------------- |
|Name7@ibm.com	|Administrator	|As an administrator, you can perform all platform actions based on the resource this role is being assigned, including assigning access policies to other users.| |
|Name8@ibm.com	|Editor	|As an editor, you can perform all platform actions except for managing the account and assigning access policies.| |
|Name9@ibm.com	|Operator | As an operator, you can perform platform actions required to configure and operate service instances, such as viewing a service's dashboard. | |
|Name10@ibm.com	|Viewer |  As a viewer, you can view service instances, but you can't modify them.| |

Thank you “

**Ted Bauer and the SDT operational team** upon receiving the RTC request will create for the WH pillars and solution teams under the corresponding (SDT) IBM Cloud Account IBM Cloud orgs, spaces, clusters and name spaces as follows:
-	Each WH pillar will own a separate org: OrgSDT_GHHS, OrgSDT_VBC, OrgSDT_Imaging, OrgSDT_Oncology, OrgSDT_WP4H etc
-	Each WH solution team (representing an offering or a client) belonging to a pillar will own a separate space under that pillar org: SpaceSDT_WHC, SpaceSDT_WHCS, SpaceSDT_RWE, SpaceSDT_AnalyticsCore, SpaceSDT_Medtronic, SpaceSDT_Explorys, etc
-	Each WH solution team requesting individual charge back will own a separate container cluster
-	WH solution teams charged back collectively at org level will own a namespace in the shared  container cluster of the organization.
     ◦ For personal namespace we will generate the name like user-notesID, eg, user-ghagi

     ◦ For team namespace we will generate the name like ns_SoluitonTeamName, eg, ns-WHC, ns-WHCS, ns-RWE
-	For IBM Cloud Dedicated, you request a set of resources from IBM, and then you can distribute them between the different organizations in your IBM Cloud Dedicated environment. You can request additional resources from IBM.
-	Managing and monitoring quota - You manage and monitor the quota of an account by space and by infrastructure. Any resource that is provisioned in a space and is then used by the deployed application consumes a portion of the quota available to the organization.

     o	For more information about how to view and manage the quota of an organization in IBM Cloud Public, see [Managing quota](https://console.bluemix.net/docs/account/manageorg.html#managequota){:target="_blank"}.

     o	For more information about how to view and manage the quota of an organization in IBM Cloud Dedicated or Bluemix Local, see [Viewing usage and reports](https://console.bluemix.net/docs/hybrid/index.html#oc_resource){:target="_blank"}.


**B.	STRATEGIC PROCESS for the WH IBM Cloud Accounts**

The solution teams and users will on-boarded to WH IBM Cloud Accounts via the WH BPM Process Portal. The on-barding via BPM will automatically create the corresponding orgs, spaces and add users with the selected role(s).

### 1.3.6.	Subscription to IBM Cloud Services from WH IBM Cloud Account

**A.	1Q2018 TACTICAL PROCESS for the WH IBM Cloud Account (SDT only)**

Once the solution team got access via the on-boarding process in section 1.1 to the IBM Cloud Catalog, the users given Space Developer role can provision the selected services (pending vetting from WH Reference Architecture) indicated in the [WH IBM Cloud Guide wiki](http://ibm.biz/wh-IBMC-guide){:target="_blank"}.

The wiki page details the subscription process and WH best practices for each IBM Cloud Service. Additional network configurations may be required to allow the communication between the WH SL Account and the IBM Cloud Service instance. If the end point is marked “per instance” in the wiki page, the developer must request network access to be open via ticket in the [RTC SDT triage](https://nsjazz.raleigh.ibm.com:8050/ccm/web/projects/Watson%20Health%20Cloud%20(Development)#action=com.ibm.team.dashboard.viewDashboard&team=WHC%20CommOps/WHC%20SDT-PDT-QDT%20Triage&tab=_2){:target="_blank"}.

To open a ticket:

* Select as area "IBM Cloud"
* Select issue as "access"
* Use the following template in the ticket body:

“REQUEST for NETWORK ACCESS TO the IBM Cloud _Service_Name_ in WH _SL Account_Name_ (e.g., SDT)

Please open access for _Service_Name_

FROM SOURCE IP:

TO DESTINATION IP/PORT:

PROTOCOL:

Thank you! “

Each IBM Cloud service WH wiki page allows the users to enter new requirements for the respective IBM Cloud Service. Follow the process indicated in the wiki page to follow up on the requirement request.

**B.	STRATEGIC PROCESS for the WH IBM Cloud Accounts**

The subscription process in a Dedicated =Next environment.

### 1.3.7.	Migrate from Current WH Service to IBM Cloud Service

Each WH service which is to be migrated to an equivalent IBM Cloud Service will have guidance for teams on the best approach to migrate content and configuration where applicable. The requirements will be gathered in consultation with the solution/service teams who use the service. The level of detail will depend on the service to be migrated and the effort required to migrate, so services that have minimal requirements such as stateless services where the connection details and some basic configuration will be effected will have less migration support than statefull services where the solution team doesn't have access to the data store which may require migration tooling as well as documentation. This will be documented on the [WH Developer Guide to IBM Cloud services wiki pages](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wa82025236eb9_4217_a434_ca40a0820057/page/Rel%203.0%20Refactoring%20to%20IBM%20Cloud){:target="_blank"}. The current services will remain available for a period of time to allow the solutions and services which depend them time to migrate across to the new service.

The main steps of the migration to an IBM Cloud Service are:

*  Gather solution team requirements for migration to common IBM Service
*  Identify updates to the configuration and code based on the Consumption Process and IBM Cloud service capabilities
*  Define the new solution and go through the Definition Process (thinking GxP re-approval)
*  Validate the control points migration compliance
*  Continue with the Contribution Process and Consumption Process


### 1.3.8.	Billing / Charge Back for IBM Cloud Service Usage by WH Solutions

IBM Cloud Infrastructure (ex-Soft Layer) is charged at VM / BM level.

IBM Cloud Container Service is charged at the cluster level.

IBM Cloud Services are charged at the Space level.


# 2.	Consumption of WH Common Services

The nomination of WH services as Common Services and their recommendation for consumption in a WH solution application or another service is governed by the [Common Service Definition Process](../../../dev/common-services/definition-process). Once approved, a WH service follows the [Common Service Contribution Process](../../../dev/common-services/contribution-process) and gets published for consumption in one of the following catalogs:
1. [Watson Health Services Catalog](https://watsonpow01.rch.stglabs.ibm.com/services/cognitive_catalog/catalog/){:target="_blank"}
2. [IBM Cloud Catalog](bluemix.net)

The consumption of a WH Service from these catalogs engages different procedures as illustrated in the next Sections.

## 2.1.	Source Distribution

![](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/WH-ServiceSourceConsumption.jpg)


## 2.2.	Platform As A Service

![](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/WH-ServicePaaSConsumption.jpg?raw=true)


Artifacts: The [Watson Health Developer Wiki for Virtual Machine Deployments](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wa82025236eb9_4217_a434_ca40a0820057/page/WHC%20v.Next%20Release.%20API%20Platform%20integration%20with%20Bluemix){:target="_blank"} instructs on how to use the WH API-Platform to enable WH Services APIs for publication to IBM CLoud (Bluemix) catalog from a classic VM based architecture.

The [Watson Health Developer Wiki for Kubernetes Deployments](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wa82025236eb9_4217_a434_ca40a0820057/page/Open%20Service%20Broker){:target="_blank"} details how to use the WH API-Platform to enable WH Services APIs for publication to IBM CLoud (Bluemix) catalog from a cloud native Kubernetes based architecture.


## 2.3.	IBM Cloud Developer Experience

IBM Cloud UX kits allow the implementation of industry standard developer experience on top of PaaS services.


![](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/WH-ServiceSaaSConsumption.jpg)


# 3.	Onboarding WH PaaS Services to IBM Cloud

[Detailed onboarding process to IBM Cloud](https://console.stage1.bluemix.net/docs/developing/get-coding/new_service.html#onboarding-a-new-service-into-ibm-cloud){:target="_blank"}


# 4.	Enabling WH SaaS applications for e-Commerce

[E-commerce routes to market: This is an overview of the e-commerce selling routes we support](https://ibm.box.com/s/iu4udugampb9117oz1cgdymvsc4xhk7f){:target="_blank"}

![](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/WH-ServiceConsumption_MarketPlace.jpg)

E-commerce on-boarding: This is a summary overview of the steps required to on-board, it's angled towards self service purchasing on ibm.com, but these steps are foundational to any of the e-commerce routes to market above.
https://www.ibm.com/blogs/digital/resources/offerings/buy/

Landing pages: General landing page where product information, marketing content, live chat, public pricing + purchase, etc is available, there are several options available. The link below is a template-driven product page, there are more elaborate options too depending on what the WH digital marketing team want to do.
https://www.ibm.com/blogs/digital/resources/offerings/basic/

Approaches for Provisioning

 (1) Consider adopting the new Open Service Broker provisioning engine - that's unified with IBM Cloud - to automate subscription lifecycle management
https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/Wa8a95a65c19c_4421_bcd4_56f9ee9f5efb/page/Provisioning%202.0%20(Next%20Gen%20Provisioning)

(2) Build any division level endpoint with both SaaS and PaaS in mind. With IBM Cloud and SaaS unified under the same provisioning protocol, you can share one endpoint instead of two

(3) Reuse your endpoint, aiming to avoid multiple SaaS services within the same division build an endpoint per offerings which means increased build cost, maintenance and landscape.

# 5. Operational Services Support (OSS) of the WH IBM Cloud and SL Accounts

The Watson Health Playbook, in alignment with the Watson and IBM Cloud Platform Playbook, introduces the following Operational Support System's (OSS) mission to ensure that all WH services adopt the OSS platform to provide a consistent experience for our customers by utilizing a common integrated Service Management toolset. The OSS scope includes defining technology, workflows and tooling for the various Standard Operation Procedures (SoPs) that comprise a Service Management platform.

The current IBM Cloud SoPs are not qualified for HIPPA nor GxP usage, hence they can be used only by the WH services and solutions not required to support health compliance, this is the WH Tier 1 solutions.

As the IBM Cloud SoPs become qualified for HIPPA and GxP usage, the WH Commercial Operations are preparing to provide their expertise and lessons learned from the production field, particularly in the areas of FDA audit automation and efficient SoP qualification. The IBM Cloud Standard Operation Procedures (SoPs) will be invited for shadowing the WH Commercial Operations on the field in view of an effective alignment of the qualified WH SoPs with those of the IBM Cloud.

The main SoPs are [Case Management](#case-management), [Incident Management](#incident-management), [Problem Management](#problem-management), [Change Management](#change-management) and [Capacity and Quota Management](#capacity-and-quota-management).

## 5.1. Case management
All services are required to use ServiceNow as the case management tool. The Bluemix console will be updated to invoke ServiceNow APIs to get tickets created in the ServiceNow repository. The global support team will work case tickets in ServiceNow and if they need additional assistance, support will initiate a sync to GitHub to engage development/L3. This is a bi-directional sync.

## 5.2 Incident Management
ServiceNow is the platform to be used for Incident Management. ServiceNow will have integrations in place with the Event Management System (Netcool) critical for managing incidents. With the integration between Netcool and ServiceNow, incident records will be automatically created for correlated events in Netcool.
Any actions taken by the TOC/GRE/SRE/Tribes will have to be recorded in the incident record. ServiceNow will also be integrated with PagerDuty so that escalations or notifications can occur from the incident record.

## 5.3 Problem Management
Problem management workflow resides in ServiceNow. Upon closure of an incident, a problem record will be created and assigned to the service / Root Cause Analysis (RCA) owner. The RCA owner will perform the RCA (coordinated by AVM). Problem tasks (action items) are listed as part of the problem record. See the [RCA Policy](https://ibm.box.com/s/lv8h6ks1c58d86g48qelfxxee6pkxzg4){:target="_blank"} and [RCA Process and Guidance](https://ibm.box.com/s/m7y1xrohb6mzlsro7gysqu9dbepc494z){:target="_blank"} for more details. These tasks are sync’d up with GitHub so that developers can take action (without having to get a ServiceNow license).

## 5.4 Change Management
RTC or ServiceNow are the only platforms to be used for Change Management. Change Requests created in either of these tools will be displayed on the Global Change Calendar that is accessed through ServiceNow. ServiceNow gets the RTC Change Calendar information by way of BlueMix Doctor and inherently from ServiceNow. The Change Calendars from both tools are then aggregated to the ServiceNow Global Change Calendar.  See [Change Management Details](developer-guide/operational-support-systems/Change-Management-Details){:target="_blank"} for more information.

## 5.5. Capacity and Quota Management
You manage and monitor the quota of an account by space and by infrastructure. Any resource that is provisioned in a space and is then used by the deployed application consumes a portion of the quota available to the organization.
            o For more information about how to view and manage the quota of an organization in IBM Cloud Public, see [Managing quota](https://console.bluemix.net/docs/account/manageorg.html#managequota){:target="_blank"}.
            o For more information about how to view and manage the quota of an organization in IBM Cloud Dedicated or Bluemix Local, see [Viewing usage and reports](https://console.bluemix.net/docs/hybrid/index.html#oc_resource){:target="_blank"}.

## Service Contract

WH is prioritizing stability and reliability within its Service catalog. To assist Services in
the journey of improving availability, the Reference Architecture Board has been created to provide a roadmap of
increasing maturity for Services to follow.

## EU Cloud

The OSS team is committed to supporting IBM's European Cloud initiatives as discussed in the recent [EU Cloud Announcement](https://www.ibm.com/blogs/cloud-computing/2017/11/ibm-cloud-europe-control-data/){:target="_blank"}.  In this announcement it was outlined that clients will have the ability to review and approve all non-EU access requests to their content if an instance requires support or access from a non-EU based employee.  Details of the EU exception are outlined in the [EU Exception Process Requirements](../../../dev/developer-guide/operational-support-systems/EU-Cloud-Exception-Process-Requirements)

## ELK

ELK is the OSS implementation of ELK (Elasticsearch, Logstash, and Kibana).  In real-time ELK is loaded with all alert data processed through the OSS Netcool instance to ServiceNow.  The instance is open to tribes so they can see both real-time and historical alert data processed by OSS.  The link below is the OSS Git repository where you can learn more about ELK, ask questions or raise an issue.

[The ELK Project](https://github.ibm.com/sosat/elk-help){:target="_blank"}
