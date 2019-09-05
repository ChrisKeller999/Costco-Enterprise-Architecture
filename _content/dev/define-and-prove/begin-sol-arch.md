---
title: Begin Solution Architecture
sidebar: dev-dap-arch
breadcrumb: Begin Solution Architecture
---

## How do I get started?
Continuing from the [initial high-level architecture](../initial-hl-architecture/), increasing the level of detail, iterating on the Architectural Overview and Use Cases defined in [Cognitive Architect](../../../tools/ca/), as well as beginning a component and operational model are important next steps in detailing out the Solution Architecture.

- _Note: [Cognitive Architect](../../../tools/ca/) contains a way to capture Functional and Non-Functional Requirements. You can use CA to initially capture your requirements there, especially any Non-Functional requirements pertaining to the technical Architecture. However, once the [high-level Epics have been decomposed and approved in Aha!](../../planning-and-tracking-work/ongoing-delivery), be sure to work with Offering Management to align any technical requirements with high-level Hills and Epics, since they will be what defines the scope of the offering. Additionally, once the corresponding requirements have been [created in Jira](../../../tools/jira/jira_decomposing_hl_requirements), the requirements you have documented in Cognitive Architect will need to be used to guide decomposition of the high-level Epics into [System Level requirements](../../../tools/jira/jira_decomposing_hl_to_sl) and [Detailed Level requirements](../../../tools/jira/jira_decomposing_sl_to_dl) (also in Jira)._

The [DEVELOP phase of Team Solution Design](http://method.ibm.com/rmchtml_teamsd/index.htm#process.tech.teamsd.base-ibm_int/deliveryprocesses/develop_and_agree_to_client_solution_54C3D910.html?proc=_r0U7sb1HEdyrVscmNb_pGw&path=_r0U7sb1HEdyrVscmNb_pGw,_VuARsI8lEd2tn4QxorRg1Q,_f4FaYekLEd-IPpFA2ds-HA){:target="_blank"} contains guidance on the creation of the High Level Component Model, Operational Models.

While the Architect is the primary role that finishes the above, the Development Lead will generally take a larger role at this point and start filling in any technical details with the Architect, elaborating on Use Cases, Operational and Component models to better define the needs of the offering.

In addition, the Development Lead will also start detailing out any behavioral and static diagrams such as Collaboration, Activity, and Class diagrams. Cognitive Architect has the ability to do Collaboration diagrams, which are useful for Component interactions, however you will likely need to use a different tool such as Rational Software Architect, or Visio to do Activity, Class or other detailed UML diagrams.

Iterating on the [System Architecture template](https://lsgrcoe-csfe-1.ibmcloud.com/OTCS/cs.exe?func=ll&objaction=overview&objid=10344960){:target="_blank"} which was started in the [initial high-level architecture task](../initial-hl-architecture/), the above diagrams should be incorporated into a more detailed and complete version of the document in progress.

### Step by step
1. Working in [Cognitive Architect](http://ibm.biz/cogarch-app){:target="_blank"}, continue elaborating on the high-level architecture to provide more detail **(_VIDEO_)**
    1. Capture any technical requirements in Cognitive Architect that could be useful down the road during the detailed requirement grooming and decomposition tasks in [Build and Deliver](../../build-and-deliver/index/).
    2. Create Component and Operational Models.
2. Begin working with the Development Lead on the technical static and behavioral diagrams (e.g. Class, Object Interaction, Activity...)
3. Update the Sytem Architecture document with the detail above and keep iterating until all sections are accounted for in the template.
4. Create a new version of the document and [upload it to Confluence](../../../tools/confluence/). **(_VIDEO_)**
