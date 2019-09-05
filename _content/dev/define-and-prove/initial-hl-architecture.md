---
title: Initial High Level Architecture
sidebar: dev-dap-arch
breadcrumb: High Level Architecture
---

In an Unregulated environment, Architecture should follow the same templates as the Regulated projects, however formal sign off is not required (see: [Step by Step](#step-by-step) section below)

For regulated offerings, please see [Regulatory Considerations](../../../compliance/regulatory-considerations/)

### Method Inputs to System Architecture documents

The following artifacts should be created early in order to gain a better understanding and visualize the requirements scope, API needs, key stakeholders, and components. Many of the following can also be found as part of [MethodWeb](https://w3-01.ibm.com/services/methodweb/MethodWebUMF/index#/home){:target="_blank"} in the following processes:

-   [Application Development 2.0 UMF delivery process](http://method.ibm.com/rmchtml_ad_20/index.htm#core.default.nav_view.extend-ibm_lic/guidances/supportingmaterials/welcome_umf_B16D0AC2.html){:target="_blank"}

-   [Team Solution Design](http://method.ibm.com/rmchtml_teamsd/index.htm#core.default.nav_view.extend-ibm_lic/guidances/supportingmaterials/welcome_umf_B16D0AC2.html){:target="_blank"}

Regardless of whether the project is Regulated or Unregulated, there are a series of architectural diagrams that should be produced as part of Architectural Modeling and included as part of the System Architecture document:

-   **System Context**

    -   The System Context is one of the most important diagrams that can be produced in conjunction with the Architectural Overview. The System Context provides a concise way to describe how the Service will fit with all other applications and system that will interact with it. The System Context, if maintained, can always be used to summarize the interactions that are expected of the Service.

-   **Architectural Overview Diagrams**

    -   The Architectural Overview is a living diagram that provides various component "viewpoints" on what the Service is made up of. Used in conjunction with the System Context, it provides a solid view of what the architecture of the Service is. Usually, an Architectural Overview describes three main viewpoints (however it does not need to be limited to these):

        -   **Logical Component View**

            -   The Logical Component View represents a conceptual decomposition of the architecture. It answers the question, "What are the big capabilities that the Service needs to do in order to meet its requirements and interaction contracts?"

            -   The Logical Component View can also be used to show how information could flow through the system.

-   **Use Cases**

    -   Generally, Use Cases are one of the first things created after the System Context. They are simple stories told from the perspective of an User/Actor (Human or System). Use Cases shouldn't be overly detailed but provide enough information to describe how the system could be used.

    -   Use Cases also can be used as a solid basis for further decomposition of high-level requirements into detailed level requirements which then can be tied to real work breakdown tasks.

    -   Use Cases are also good tools to help further develop the Logical, Physical and Deployment Architectural Viewpoints.

-   **Behavioral Diagrams**

    -   System Sequence Diagrams

        -   Once a solid understanding of Physical Component View exists, System Sequence diagrams can be used to further detail the data flows between the physical components.

    -   Component Interaction Diagrams

        -   At the Logical Level, Component Interaction Diagrams should be used to sketch out the possible logical data interactions. This will be input to System Sequence Diagrams.

    -   Activity Diagrams

        -   Activity Diagrams are extremely useful for understanding processes within a component without specifying how it should be implemented.


## How do I get started?

All of the diagrams above along with capturing key architectural documentation should be done in the [Cognitive Architect](../../../tools/ca/) on-line architecture tool. This will ensure that teams can share architectural diagrams easily as well as provide a way for teams to access the architectural model on-line. The architectural model can be exported as power-point presentation.

Once the [EXPLORE phase of Team Solution Design](http://method.ibm.com/rmchtml_teamsd/index.htm#process.tech.teamsd.base-ibm_int/deliveryprocesses/explore_options_and_approach_FAAACAF1.html?proc=_r0U7sb1HEdyrVscmNb_pGw&path=_r0U7sb1HEdyrVscmNb_pGw,_VuARsI8lEd2tn4QxorRg1Q,_e9hPkekLEd-IPpFA2ds-HA){:target="_blank"} has been sufficiently documented, there should be enough architectural fidelity where further detailed design can begin.

If this Architecture is for a Common Service, please refer to the [WH Common Services Process](../../common-services/index/) for architectural considerations that will affect this architecture.

### Step by step

1. Create a architectural model for the solution in [Cognitive Architect](http://ibm.biz/cogarch-app){:target="_blank"} **(_VIDEO_)**
2. Create a System Context, a set of Architectural Overview diagrams, Use Cases for key scenarios, Logical Component Diagram, and any behavioral diagrams needed. **(_VIDEO_)**
3. Additionally, document any Architectural Decisions that will dramatically affect the architecture (if they are known).
4. Once the high level architecture is completed in Cognitive Architect, download the official [System Architecture template](https://lsgrcoe-csfe-1.ibmcloud.com/OTCS/cs.exe?func=ll&objaction=overview&objid=10344960){:target="_blank"} and copy the completed diagrams and content into the standard template.
    - The standard System Architecture template contains a large number of sections that cover high level as well as detailed level design. Only focus on what is needed for high-level architectural design, as you will return to this template to iteratively update it as you progress through the development process.
5. Once an initial version of the template has been filled out, [upload it to Confluence](../../../tools/confluence/). **(_VIDEO_)**
