---
title: Source Code Security
sidebar: dev
---

## Introduction

An important aspect of security in Watson is ensuring we maintain the integrity of our source code by preventing malicious modification of that code that could expose our customer's or IBM's data or destabilize an offering preventing it from being used by our customers as intended. Additionally it is important that we limit the distribution of especially valuable source code to only those who with a need-to-know.

The mandatory requirements and recommended practices for managing source documented here are the entirety of the requirements and recommendations for Watson offerings (as documented in the scope section below). They are the official Watson interpretation and implementation of the requirements and recommendations from the IBM Source Code Asset Protection Team team as documented in the [Source Code Asset Protections community](https://w3-connections.ibm.com/communities/service/html/communitystart?communityUuid=554bd341-dda2-4e5e-abf5-a2bc634be130){:target="_blank"}, the [SCM & Build Server Self-Assessment](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W759933699b91_4fda_b46f_069b0b69b67e/page/SCM%20and%20Build%20Server%20Self-Assessment){:target="_blank"} and the [SmartProtect tool](https://smartprotect.raleigh.ibm.com/Web/){:target="_blank"}. Where external information is referenced that is in conflict with the information here the information on this page takes precedence.

## Scope

### The requirements and recommendations here apply to the following:

- IBM proprietary source code[<sup>1</sup>](#ibm-proprietary-source-code) that is used to create any of the following IBM offerings or associated materials that is maintained in a versioned SCM repository such as github.ibm.com, RTC, SVN, etc.
    - Any version of a service that is or will be part of the "Watson Developer Cloud" or any supporting tooling associated with that service (private experimental, public experimental and beta services are in scope).
    - Any version of a Watson Offering that is or will be hostsfed in the [IBM Cloud Marketplace](https://www.ibm.com/marketplace/cloud/us/en-us){:target="_blank"}.
    - Any offering that is or will be available through Passport Advantage.
    - Any demo or other supporting application specifically associated with one or more of the offerings above that is hosted in an IBM-managed SCM repository.

### The following are not in scope:

- Artifacts that are not maintained in an SCM repository.
- Artifacts that are maintained in non-IBM SCM repositories such as github.com.
- Source code that is not IBM proprietary.
- Source code for custom solutions for specific customers.
    - Important! This code may be subject to source code security requirements, they are just not managed under the requirements and recommendations on this page.
- Non-application marketing or sales artifacts that are not part of a production offering.

## Mandatory Requirements

### Source Code Repositories

1. Manage in-scope source code only in github.ibm.com. The only exception to this is legacy code that is managed in one of the following that will not be migrated to github.ibm.com:
    - [Watson's RTC server](https://nsjazz.raleigh.ibm.com:8050/ccm/auth/authrequired){:target="_blank"}[<sup>2</sup>](developer-guide/source-code-security/#watson-rtc){:target="_blank"}
    - [Git/Gerrit in the Watson Pittsburgh Lab](https://openblue.bigdatalab.ibm.com){:target="_blank"}[<sup>3</sup>](developer-guide/source-code-security/#watson-git-gerrit){:target="_blank"}

### SmartProtect

1. Track all in-scope source code with records in the [SmartProtect system](https://smartprotect.raleigh.ibm.com/Web/){:target="_blank"}.
1. For new offerings create the SmartProtect record and submit it for approval after the MMT has approved the offering (end of [Step 3: Operationalize the offering](agile/new-offering-definition/){:target="_blank"}).
1. Maintain at least one SmartProtect record for each distinct offering. A single offering can be split into multiple records if there are distinct teams managing separate codebases that contribute to the offering.
1. Use a separate SmartProtect record for shared components used by multiple offerings that are managed in a separate codebase from any one offering.
1. Update the SmartProtect record and submit it for re-approval at least once annually.

Note: Currently [Daniel Cox](http://w3.ibm.com/newbp/profile.html?uid=2D7394897){:target="_blank"} creates and manages all SmartProtect records for Watson. Please work with him to ensure your offering is properly tracked and managed in SmartProtect.

### Build Systems

1. Implement [SmartBuild monitoring](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Source%20Code%20Monitoring/page/Overview){:target="_blank"} on all non-transient Watson-controlled build servers that access or store in-scope source code.
    - Transient virtualized build systems that are created and destroyed with each build do not require monitoring.
    - Implementing monitoring of the central Travis build server (currently at http://travis.innovate.ibm.com/){:target="_blank"} is the responsibility of the Whitewater team.
    - SmartBuild monitoring includes two elements - Guardium agents and OS level logging - implement both.
    - Implementation isn't complete until the build system is registered in the SmartBuild system and the `OS logging` checkbox on the `Protection` tab is checked and the status is shown as protected:

    <img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/security-source-smartbuild.png">
    - When registering in SmartBuild:
        - Make the server admin the person that is directly responsible for the builds.
        - Use the bluegroup [`Watson-SmartBuild`](https://bluepages.ibm.com/tools/groups/protect/groupsgui.wss?task=ViewGroup&gName=Watson-SmartBuild){:target="_blank"}. Ask one of the listed administrators to be added to the group.
    - For implementation assistance ask on the #tron channel.
1. Follow all applicable standard IBM server requirements such as ITCS104 including, but not limited to:
    - Classify the server per ITCS104 requirements as Group 1 or Group 3.
    - Register the server in the [Mixed Address Database (MAD)](https://w3-03.sso.ibm.com/services/security/ipaddress/home.action.wss){:target="_blank"}.
    - Register the server in [ITSAS](https://itsas.raleigh.ibm.com/itsas/){:target="_blank"}.

### Other Systems

1. Do not store in-scope source code in any form on any servers that are not registered in SmartBuild.
    - Don't setup file shares with access to in-scope source code even if those file shares have restrictive access control lists.
    - Don't zip up in-scope source code and put it in Maven or any other library management system.

### Crown Jewel Source Code

Any in-scope source code that has been declared as a "Crown Jewel"[<sup>4</sup>](#crown-jewel){:target="_blank"} asset with the IBM CISO's office has the following additional requirements:
- Place the code in a private repository which contains only "Crown Jewel" code and whose access is limited to those with a need to know.
- Track the inclusion of "Crown Jewel" code in offering by indicating the management of "Jewel Code"[<sup>4</sup>](#crown-jewel) in the appropriate [SmartProtect](https://smartprotect.raleigh.ibm.com/Web/){:target="_blank"} record.
- Follow the access management approval and revalidation requirements documented in the SmartProtect tool.

### Laptops & Workstations

1. In addition to following all applicable standard IBM workstation requirements (ITCS300, mac@ibm etc), including full disk encryption, if a laptop has source code stored on it:
    - Do not leave it powered-on and unattended.
    - (Windows and Linux) Do not leave it in sleep mode as [full disk encryption is susceptible to attack](https://en.wikipedia.org/wiki/Cold_boot_attack){:target="_blank"} - instead use hibernate.
    - (Mac) Enable [Find My Mac](https://support.apple.com/kb/PH22102){:target="_blank"} and keep it enabled.
    - Require a password to access the laptop after power on or when restoring from hibernation (Windows and Linux) or sleep (Mac).
2. Store source code only on laptops that meet all [ITCS300 requirements](http://w3-03.ibm.com/transform/sas/as-web.nsf/contentdocsbytitle/security+and+use+standards+for+ibm+employees){:target="_blank"}. BYOD devices [are allowed](http://w3-03.ibm.com/transform/sas/as-web.nsf/9b24bc9335a10029852569660048c7b7/90af16513aa226048525769000543385?OpenDocument){:target="_blank"} to store source code as long as all ITCS300 requirements are met.

Adapted from: [_Laptop Shutdown & Hibernate Guidelines_](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W591f471daa37_4d0e_b162_c3a4c07e0f9e/page/Laptop%20Shutdown%20%26%20Hibernate%20Guidelines){:target="_blank"}

## Recommended Best Practices

### Justification needed if not implemented (no deviation approval required)

_Build systems and legacy source control repositories_

1. Do not enable root or admin login. Use sudo enabled on individual accounts or enable key-based SSH where the key is given root privileges but the user associated with the key is logged.
1. Disable or remove all daemons/services that are not essential.
1. When security patches cannot be applied to a server (very rare!) implement additional controls to mitigate the risk.
1. Limit operating system access to those with a need to manage the server.
1. Protect any shared credentials carefully, changing them when someone with access to the credentials no longer requires it.
1. Use encrypted channels for all connectivity to the server and where certificates are used do not use self-signed certificates - use IBM certificate authority issued certificates instead.
1. Avoid using shared credentials when a user requires temporary access, instead create an account for that user with a reasonable expiration set.
1. Implement [BigFix](https://w3.ibm.com/help/#/mac/us_imt/en/article/29083){:target="_blank"}.
1. Install and run antivirus

_ Build systems_

1. Use standard, hardened images for build farms.
1. Set unique passwords when standing up a server from a standard base image.

### Recommended where feasible

_Build systems and legacy source control repositories_

1. Place servers behind a restrictive boundary firewall.

_Legacy source control repositories_

1. Delete in-scope source from the server after a build completes.

## History, Approvals and Deviations

### History

| Version | Date | Change | Material |
| --- | --- | --- | --- |
| 1 | 2016.12.16 | Initial version | Yes |
| 2 | 2017.01.01 | Added approval of version 1, minor typos | No |
| 3 | 2017.01.29 | Relaxed requirement for code on IBM-only laptops to allow BYOD (confirmed this is OK with Kevin Mayfield) | No |

### Approvals

These requirements, recommended best practices and other information on this page have been approved by Watson's BISO (Brand Information Security Officer) as indicated below:

| Approved On | Approved Version | Approved By |
| --- | --- | --- |
| 2016.12.19 | 1 | [Ravi Mani](https://github.ibm.com/watson-security-operations/documents/blob/master/secure-engineering/approvals/SOURCE-Source%20Code%20Security%20Policy.eml){:target="_blank"} |

Material changes require the approval of the Watson BISO or delegate.

### Deviations

Deviations from any requirements listed on this page require approval of the Watson BISO (Brand Information Security Officer) or delegate. Deviations from recommended best practices do not require approval.

| Deviation | Requested By | Approved On | Approved By |
| --- | --- | --- | --- |
| None  | ... | ... | ... |


----
<sup><a name="ibm-proprietary-source-code">1</a></sup> IBM Proprietary source code is defined as:

- A program, script, image, configuration file, markup language or other programming artifact created by a developer with a purpose of delivering a product, solution, offering, or technology for IBM business purposes.
- Any IBM owned source code or related artifact commonly placed under configuration control that is used to produce and service IBM commercial products or other customer deliverables, except for open source code.
- All source code that is subject to IBM Standard [C-S 0-6045-002](https://w3-03.ibm.com/standards/esisstds.nsf/0/E5FD60876972962585256999004E8A0C?OpenDocument){:target="_blank"}.

If the source code in question is IBM Confidential, it is more likely than not to be IBM proprietary source code.

Adapted from: [_Source Code Asset Protection Guidelines_](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W591f471daa37_4d0e_b162_c3a4c07e0f9e/page/Source%20Code%20Asset%20Protection%20Guidelines){:target="_blank"}

<sup><a name="watson-rtc">2</a>,<a name="watson-git-gerrit">3</a></sup> Watson's RTC server and the Git/Gerrit server in Waston's Pittsburgh lab have implemented the required [SCMON](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W591f471daa37_4d0e_b162_c3a4c07e0f9e/page/Source%20Code%20Monitoring){:target="_blank"} monitoring and other requirements for source code repositories.

<sup><a name="crown-jewel">4</a></sup> Historically IBM has used the term "Jewel Code" to designate extremely high value source code requiring special treatment. The CIO's office has more recently requested business units to declare "Crown Jewel" data assets with the recommendation that all offering source code be considered a "Crown Jewel" data asset. Watson has specifically chosen to not classify all source code as "Crown Jewel". Instead it uses, but is not limited to, the following guidelines that were previously established for "Jewel Code" to inform any decision to classify "Crown Jewel" source code:
- A targeted subset of source code if lost or stolen that will have a highly significant impact on IBM and customers.
- Typically 1-2% of most critically sensitive source code representing 70% of IBM software value.
- IBM would lose clear competitive advantage or superiority, or our customers‘ data would be at risk should a particular software component fall into the hands of a third party or competitor.

Adapted from: [_Jewel Code Guidelines_](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W591f471daa37_4d0e_b162_c3a4c07e0f9e/page/Jewel%20Code%20Guidelines){:target="_blank"}
