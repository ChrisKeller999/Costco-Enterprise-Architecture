---
title: EU Cloud Exception Process
sidebar: dev
---

# EU Cloud – Base Requirement
* EU Cloud requires that for operational / deployment purposes, access to EU client owned data and systems that host or process that data must be restricted to EU employees only.

* If non-EU employees need access to EU client owned data or systems hosting / processing this data a service must implement & utilize the ‘EU Exception process’.
See Definition of customer owned data in the [EU Cloud Reference Material](https://ibm.box.com/s/kr2qmibq28tsw3e4gfj36t57uvf2kdlx){:target="_blank"}

* This requirement for EU Cloud and the exception process, spans all potential access points to EU customer owned data – i.e. Incidents, Changes, Tooling, etc.

* The EU Cloud requirement is defined as the set of in-scope services hosted in Frankfurt, Germany (Public & Dedicated)

* The use of EU Cloud Exception process must be transparent and demonstrable to clients that it is utilised only on an exceptional basis and does not become BAU operating practice. The baseline requirement for the upper limit of it’s use (e.g. used in x% of total operational activity), is presently being agreed with EU Offering Mgt.

* Utilisation of the Exception process is a mandatory requirement for EU Cloud, unless a service does not identify a case for non-EU based support.


# EU Exception Process Details
## Security & Access Management
* For EU Cloud & it’s exception process, adopting security & access standards are required to facilitate the requirement for centralized EU based access approval.
* USAM is agreed as the single entry point for EU Exception process management.
* The Exception process is dependent on each service having enabled the security configuration to differentiate the access rights needed for EU Cloud (where it has access to customer data); providing differentiation/fencing between EU and non-EU groups.
* The USAM group owner for a service, has to be EU based for those groups that relate to access against EU Cloud in Frankfurt.
* Prerequisites required to be followed by service teams and additional guidance on setting up USAM groups can be viewed in the [EU Cloud guidance for Tribes](https://ibm.box.com/s/wcih5d9nufxwenpzifb2lzwas8xhuiwx){:target="_blank"}

## EU Exception Process
* Ownership is held by W&CP Operations, aligned to existing process ownership for Incident & Change.
* The process is enabled by centralised EU approvers (currently under establishment in Dublin), providing 24 x 7 coverage and utilising USAM to temporarily approve EU Cloud access for non-EU engineers when justified.
* The EU Exception process will facilitate the additional step for explicit client approval, that is a requirement for EU Cloud dedicated scope.
* Automation will be in place to orchestrate approvals depending on the EU Cloud scope - public versus dedicated.
High-level steps involved in getting a non-EU user access to EU Cloud:

**EU Public:**
* Identified non-EU user will raise a request in the USAM system against the service specific EU_EMERG group. Appropriate justification is provided in this USAM request
(id: <incident_id>
url: <URL_to_the_activity_record_or_PD_record>
type: <incident/change>
text: <justification_on_why_access_is_needed>
severity: <blocking/non-blocking>)
* Doctor tool picks this request automatically and routes the request to an EU exception approver
* EU exception approver reviews and acts on the request (approve/reject)
* Once privileged access is approved in USAM, Active Directory automation is triggered to record changes in LDAP, after which the non-EU user credentials will work to access the specific assets tied to the EU_EMERG USAM group.

**EU Dedicated:**
* Identified non-EU user will raise a request in the USAM system against the service specific EU_EMERG group. Appropriate justification is provided in this USAM request
(id: <incident_id>
url: <URL_to_the_activity_record_or_PD_record>
type: <incident/change>
text: <justification_on_why_access_is_needed>
severity: <blocking/non-blocking>)
* Doctor tool picks this request automatically and routes the request to an EU exception approver
* EU exception approver reviews and acts on the request (approve/reject)
* If EU exception approver approves, Doctor then routes the request to client via the IBM Cloud console seeking their approval, depending on the EU access policy selected for their account
* Client approves or rejects the request. If approved, approval is recorded for audit purposes and Active Directory automation is triggered. If rejected, the rejection is recorded for audit purposes and the USAM request is rejected as well.

* Detailed demo of how the EU Exception process works has been recorded and available in the [EU Cloud repository](https://ibm.box.com/s/6uy0ce3ko3iqn9jvw78khp8e2qs0c1dt){:target="_blank"}
* Additional reference material is also available - [EU Cloud incident management flow](https://ibm.box.com/s/m14dd0nf9ms2vqtmmkv3nz980y3ypaub{:target="_blank"}) and [EU Cloud change management flow](https://ibm.box.com/s/i1ezgokilcr5hcvrpu2tm2l30sniuzvm){:target="_blank"}
