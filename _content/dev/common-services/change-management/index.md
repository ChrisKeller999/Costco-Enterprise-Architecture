---
title: WH Common Services Change Management
sidebar: dev
breadcrumb: WH CS Change Management
---

Change Management Problem Statement
-----------------------------------

As we move towards a model of sharing/re-using services across Watson Health offerings, we need to enable rapid development of updates and deployment of changes to the services while ensuring that the quality, security, and safety of the offering applications that consume these services not adversely effected.

Process Flow
------------

### Assumptions

-   Services are tracked and registered in the [IBM Cloud Catalog](https://console.bluemix.net/){:target="_blank"} and [BSS capabilities](https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/Wa0a1d43ca7a0_4fff_87ff_04006c762969/page/Onboard%20a%20PaaS%20Service%20to%20IBM%20Cloud%20Catalog){:target="_blank"}.

-   The [Common Services Process](../../../../dev/common-services/index/) and the Watson Health Development process were followed previously (e.g. this is an assumption that common core documentation exists for the service already). This also means that during a Change Request should leverage existing documentation and show what needs to change in that documentation, for example, an Architecture Overview document should show the differences between current state, and future state.

-   Regulated Consumers are responsible for validating and verifying against a specific Common Service Version.

-   Offering Management will always initiate a Change Request for a common service. This includes all changes that would result in a new version of the common service (changes to user features, performance, defects, technical debt additions)

-   Consumers will be notified of all types of changes (any new version) automatically through the use of the [IBM Cloud Catalog](https://console.bluemix.net/){:target="_blank"} and [BSS functionality](https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/Wa0a1d43ca7a0_4fff_87ff_04006c762969/page/Onboard%20a%20PaaS%20Service%20to%20IBM%20Cloud%20Catalog){:target="_blank"}.

-   IBM Cloud services will also allow for the calling of a specific version of a service.

-   All Common Services follow the same development and change management process (e.g. the Watson Health Development process)

-   Service Consumers must register to use the service through the [IBM Cloud BSS capability](https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/Wa0a1d43ca7a0_4fff_87ff_04006c762969/page/Onboard%20a%20PaaS%20Service%20to%20IBM%20Cloud%20Catalog){:target="_blank"}.

-   Services that are going through the Watson Health Development process for the first time will be "[Dark Launched](https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/Wa0a1d43ca7a0_4fff_87ff_04006c762969/page/Dark%20Launching%20a%20service){:target="_blank"}," in order to provide early access to for testing and getting feedback on a new service.

### What does it mean to "Dark Launch" a common service?

[Dark Launching](https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/Wa0a1d43ca7a0_4fff_87ff_04006c762969/page/Dark%20Launching%20a%20service){:target="_blank"} a common service is a means of making a service available in the IBM Cloud for a small number of white-listed consumers. Generally this is done for testing purposes, or to allow Regulated Consumers to decide if the version being released is
something they can use. Additionally, [Dark Launching](https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/Wa0a1d43ca7a0_4fff_87ff_04006c762969/page/Dark%20Launching%20a%20service){:target="_blank"} provides a gated approach to get quality feedback from select consumers in order to ensure that something catastrophic will not occur before the new version of the service is made generally available.

### Change Management Process Flow

![Common Services Change Management Flow](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/CM_Flow.jpg)

#### Flow Assertions

1.  Given that all assumptions above are true
    -   When a Common Services Change Request is opened
    -   Then a simple Change Request review is performed
    -   And all documentation related to architectural changes are confirmed
    -   And clear documentation on change is clear
2.  Given that the Change Request is valid
    -   When the Architectural Risk is evaluated
    -   And the Risk that the change would have to cross-market services is determined to be acceptable
    -   Then the Change Request will be approved
    -   But otherwise, too high of a risk will force it to be rejected.
3.  Given that the Change Request is accepted
    -   When the Change Request is understood
    -   And the Change Request is well documented
    -   And a Deployment / Version plan is created for the change
    -   Then all Consumers of the Change will be notified of the change
    -   And all Consumers will be given details of what the future change will be.
4.  Given that the Change in question has NOT been implemented
    -   When development resources are available
    -   Then the Change will begin the Watson Health Development Process in order to implement the change
5.  Given that the Change has been implemented
    -   When the change has been assessed as ready for testing
    -   Then the Change will be "Dark Launched" (See previous section) for a predetermined period of time
    -   And select service consumers and formal testers will evaluate the change.
6.  Given that the Change has been tested
    -   When the quality of the change is acceptable
    -   Then the change will be deployed as a LIVE version.
    -   But otherwise, it will be rejected
    -   And a new Change Request with modified requirements will need to be created.

### Regulated and Non-Regulated Release Schedules

It is important to realize that for regulated consumers of a service that require that a particular version of a service be validated and verified, short release schedules may not be possible. Additionally, more releases of a service may need to be running simultaneously to accommodate such V&V processes. This is illustrated in the diagram below:

![Regulated Release Version Instances](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/dl-reg.jpg)

This is not the case for non-regulated services, which can support shorter release schedules, and therefore do not need to keep more than one live instance running the most recent version:

![Non-Regulated Release Version Instances](https://pages.github.ibm.com/watson-health-playbook/resources/images/common-services/dl-non-reg.jpg)

### Examples to consider:

1.  Service data output is modified:

    1.  The Watson for Oncology application provides treatment recommendations to oncologists based on cancer patient attributes, recommendations from Memorial Sloan Kettering, and publicly available clinical literature. Suppose in a future state, WFO is running on the IBM cloud and consuming 2 common services: 1) Data De-ID as-a-service and 2) FHIR data ingestion service.
        1.  A code change is made in the FHIR data ingestion service to change the format of the output of the "patient date of birth" attribute from dd/mm/yyyy to mm-dd-yyyy.
        2.  The De-ID service calls to the FHIR service to retrieve patient date of birth in order to convert "date of birth" (PHI) into "age" (non PHI), but the De-ID service was not aware of the change in the FHIR service format so cannot properly convert the attribute.
        3.  Potential outcomes in the WFO application:
            1.  Severity 1 example (quality): De-ID service sends an error to the WFO application that the patient's information cannot be retrieved from the electronic medical record. The oncologist must manually enter the patient's information, resulting in wasted time and a poor NPS score for WFO.
            2.  Severity 2 example (security): The De-ID service cannot convert the new "date of birth" format, therefore sends the raw data directly to the WFO application. The WFO application now displays/stores PHI which it was not enabled for and a privacy violation occurs.
            3.  Severity 3 example(safety): The De-ID service is not equipped to error handle the date of birth attribute that it does not recognize, therefore it sends the persisting patient age attribute from the last patient. The oncologist receives treatment recommendations in WFO for the incorrect patient age bracket and a misdiagnoses occurs.
2.  Service processing algorithms are modified (no API change)
    1.  The Watson for Clinical Trial Matching application provides recommendations for clinical trials that cancer patients may be eligible for/benefit from based on cancer patient attributes, publicly available clinical literature, and clinicaltrials.gov databases. Suppose in a future state, CTM is running on the IBM cloud and obtains clinical literature from 1) the Medical Insights common service which uses 2) the NLP common service.
        1.  A code change is made in the NLP service to improve the accuracy. The inputs/outputs of the NLP service are unchanged, but the internal processing algorithms are modified and show improved accuracy at the same speed when testing the standalone service.
        2.  The Medical Insights service calls to the NLP service to identify words in a corpus of literature to extract the most relevant articles that provide evidence for the clinical trial match.
        3.  Potential outcomes in the CTM application:
            1.  Severity 1 example (quality): The Medical Insights service was not aware of the change to the NLP service to which it calls to and has not increased it's performance speeds accordingly. The Medical Insights service takes 5 times as long to identify literature due to the larger set of structured data to process from the NLP service. The physician using the CTM application experiences a 20 minute delay in retrieving a clinical trail match for their patient, resulting in a poor NPS score for CTM.

#### Considerations:

1.  Regulated offerings must prove that all design changes (to code, infrastructure, services) have been successfully tested in a production-equivalent environment before releasing to production.
2.  WH must be able to re-create a snapshot of a regulated offering (including versions of underlying services and infrastructure) in the case that an adverse patient safety event is reported and needs to be re-created for investigation.

#### Questions to answer:

1.  Will all common services be deployed via APIs that are called to by applications or will any common services be consumed by applications by pulling in the code into their own applications?
    -   What are the advantages/disadvantages to each model?

Potential solutions to consider (assuming a model is enforced that common services must be deployed via APIs (contracts) rather than shared code bases):
1.  Default standard process- all consumers will automatically get the newest version of services- services will have automated API tests. If a new attribute is added to the API in a new version of the service, backwards compatibility is maintained and communication of additional features is published through release notes.
    1.  Con: Does not address concerns for regulated offerings

2.  Potential additional process for regulated offerings- services could keep publishing the same older version without invisibly upgrading teams without warning- it would be up to the offering team to specify which production version they will test against and use

    1.  A regulated offering would want to be tied to a version of the service.

    2.  Service would need to provide a deprecation schedule- Version 2 will be deprecated 12 months from today (or however long would need it to be maintained for adverse event re-creation and investigation).

    3.  Con: Slows down innovation

3.  Potential policies to enforce:

    1.  API updates must maintain backwards compatibility (good API hygiene)

    2.  Enforce strict testing requirements on the services testing to their APIs, rather than testing all offerings/other services.

    3.  Anytime services are updated, the API is updated to contain a new version identifier.
