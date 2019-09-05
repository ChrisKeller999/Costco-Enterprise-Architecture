---
title: Change Management
sidebar: dev
---

Change Management, according to ITIL definition, is the process of requesting, analyzing, approving, developing, implementing and reviewing a planned or unplanned change within the IT Infrastructure. The process begins with the creation of a Change Request and ends with the satisfactory implementation of the change and the communication of the results of that change to all interested parties.

The intended scope of the Change Management Process is to cover ALL of the IBM Cloud Platform (One Cloud) computing systems and platforms. Primary functional components covered in the Change Management process include Hardware, Software, Database, Application and System Configurations, to name a few. The notion being that ALL platform changes are recorded in the IBM Change Tool.

RTC or ServiceNow are the only platforms to be used for Change Management. Change Requests created in either of these tools will be displayed on the Global Change Calendar that is accessed through ServiceNow. ServiceNow gets the RTC Change Calendar information by way of BlueMix Doctor and inherently from ServiceNow. The Change Calendars from both tools are then aggregated to the ServiceNow Global Change Calendar.

## Methods

In ServiceNow, there are two methods by which to create a Change Request - Manually through the ServiceNow Portal or automatically through the Tokenized Access API. For clients wanting to experiment with the API, users may request a token to one of three environments - Dev, Test and Production. Before any user can request a Production token, it is a requirements that they have already requested a Dev or Test token.

To use the API, the service team must be enabled to use the Automated Changes. Initially, all services have this enabled on their service because it is the intent of Change Management to move to a Notification Model of conducting changes and away from the Change Review Board (CRB) Model.

## Requirements

To assure the proper visibility and transparency of changes being proposed to the IBM Cloud Platform, there is required information and deployment readiness criteria in place to assure the changes are executed efficiently and effectively. To meet the requirements, all Change Management records are to be compliant with this Change Management Policy.

All Change Requests contain required information to be input into the system using either an exposed API to the change tool or through a manual entry form on the tool portal. Below are listed some required inputs to create a change request:

* Created by – Requestor (auto-fill)
* Assigned to – Implementer
* Priority – 1 Critical, 2 High, 3 Moderate, 4 Low, 5 Planning
* Change Type – Standard or Emergency
* Configuration Item – Service to be changed
* Environment – Location(s)
* Explanation of Impact During Change Implementation*
* Purpose/Goal
* Description/Plan
* Planned Start Date/Time, Planned End Date/Time
* Production Readiness Y/N
* EU Managed Y/N

All Change Requests, prior to approval, must meet the following Production Readiness criteria:

* All test cases executed (Testing summary & results)
* Pretested and validated Rollout/Back out Plans with steps to be taken
* Peer Reviewer Teams/Names
* Post-deployment verification plans and results
* Up to date Operational Guides/Runbooks are created/updated (as needed)
* Application Monitoring tested, sending info to Kafka bus, and included in deployment
* Resilience/Destructive Testing Plan and results

If the request fails to meet the production readiness requirements, has the automation box unchecked, is considered an Emergency request, will cause disruption of service, or will be executed against an EU Managed environment, the request is considered an exception and will be required to go through the CRB.

_In the event a planned change will be disruptive, the request must be reviewed by the Change Review Board to assure proper oversight of planning, scheduling and communication to impacted users or customers._

## Change Review Board (CRB)

_Change Review Board Chair_

The Change Review Board is currently staffed with the following [members](https://w3-connections.ibm.com/wikis/home?lang=en#!/wiki/Wfba9e56cc40c_4bb2_8805_e05bdeb2105f/page/Change%20Requests%20for%20Deployment%20Zones?section=Determining%20required%20Review%20Me){:target="_blank"}. For EU Managed change requests, this staff will include a member of the EU for approvals. Attendance/representation is required.

_Meeting Times_

For staging and production environments, the CR review boards take place 3 times a week, at 11:00 ET on Mondays, Wednesdays and Fridays.

**Note that the meeting might get rescheduled to later during the day (due to conflicts) and your window start should NOT be immediately following the CR review board meeting.**

## Change Management Optional

* ServiceNow usage for Change Management is currently optional.
