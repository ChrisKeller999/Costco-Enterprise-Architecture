---
title: Aha! FAQs
template: _markdown.html
breadcrumb: FAQ
sidebar: tools
---

## Introduction
The document provides context and definitions required for migration to Aha.

**NOTE:** Do not upload attachments in Aha!
Upload attachments in our enterprise box account and link to Aha artifacts.

## Access
How do I request access to Aha?
[Request access to Aha Watson Health](https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W7aedad6003f2_46dd_914b_1a3b5195108e/page/2%20-%20Request%20access%20to%20Aha%20Watson%20Health){:target="_blank"}

## Roles and Permissions
**Product Owner** (paid seat)
A Product Owner is typically a product, project, marketing, or engineering manager who actively manages strategy, releases, ideas, features, and product launches.

**Contributor** (paid seat)
A Contributor has the same capabilities as a Product Owner but cannot manage users or change most product configuration settings.

**Reviewer** (unlimited and not paid for)
A Reviewer is a user who can see data about products they have been given permission to view. They can also comment on, create and complete to-dos. It is a perfect way to increase visibility across your organization by engaging management, engineering, marketing and other key stakeholders.

**Viewer** (unlimited and not paid for)
A Viewer is a user who can see data about products they have been given permission to view. They can also answer to-dos.

**Who will be granted Paid seats in Aha**?
1.	Offering Managers with a legitimate business need.
2.	Senior leaders in Development
3.	Release Managers assisting in the prioritization and sprint planning activities.

## Strategy
Where do I document my Offering strategy?
Your product overview captures your overall product vision, your business model, your personas and your competitors.
- Vision: Your vision provides a high level view of the opportunity, how you are going to pursue it and the challenges you will need to overcome. It captures the essence of what you want to achieve and it is critical information your team must understand to develop and maintain a product, component or service.  http://support.aha.io/hc/en-us/articles/206533465-Define-your-vision

- Business Model (Lean Canvas): Your business model represents the foundation of your product. The business model builder in Aha allows you to clearly articulate, develop, innovate, and pivot your business model — on a single page.  http://support.aha.io/hc/en-us/articles/205738519-Build-a-business-model

- Personas: Personas represent those very real people who need your product. They allow your entire team to empathize with your customers pain points and better understand their needs. We've added a persona field to Hills and Epics.  It is important to set these fields as they are using in persona based road maps.

- Competitors: Defining your competitors in Aha! allows you to better prioritize your own product roadmap based on competitive movement. You can easily share this competitive information with team by adding it to a Notebook. This is not a replacement for the CPO office.  Competitive summaries that are relevant for strategy and planning should be selectively included.  

## Organization and Structure

Watson Health Organization
The organization and structure of the business unit is represented in the flow of the entities.  It is important to gain consensus at levels of the Team hierarchy to promote visibility into the scope of work. Decomposing the effort from the top down promotes traceability from commitment to development deliverable.  Watson Health represents the top most level of our hierarchy.  Offering strategy will be loaded into Aha at different points of the hierarchy.  Please pay close attention to where the information is to be loaded so we can provide consistent reports to key stakeholders.

#### Segments
Segments are used to break Watson Health down into large functional units. We have identified the following Segments:
- Payer
- Provider
- Life Sciences
- Oncology & Genomics
- Government Health & Human Services
- Consumer
- Watson Platform for Health
- VBC Foundation

More Segments will be added as adoption spreads across more business units in IBM.

#### Tribes
A Tribe is used to further break down the segment into teams that have clear and distinct ownership over parts of the business and delivery of our Strategic Priority.


#### Component/Services
Components/Services represent functional units that are used to either create the foundation of the platform or sold directly to customers for consumption.  Some of our Services are also key system components as they are the building blocks used to create the Watson Health experience.  Components/Services are not 1 to 1 mapping of Squads.  Multiple squads are often used to deliver a system component or service.

## Entities and Objects
**What is an Watson Health Entity?**
An Entity is an Object about which information is stored.  Entities will have multiple instances and have relationships to other Entities.  To provide consistent organization of data, it is important to understand how entities are stored and managed across our tools.  The following diagram describes the Entity and identifies the systems that are used to store the information about the instances.

<img src="https://pages.github.ibm.com/watson-health-playbook/assets/images/aha/entities.png" width="750px" align=center>

### Strategic Priority
Strategic Priority are used to communicate investment to the SVP and CEO level.  Strategic Priority should be achievable within a given half and expressed in terms of the benefit to the IBM Business.  Strategic Priority must have measurable success criteria.  Success criteria could be defined and measured in terms of “users added”, “market share added”, “improvement in MQ/Wave”, “revenue growth” etc.  Strategic Priority must be linked to supporting strategy and business model documentation.

Segment - Segments are aligned to major cloud units.  Segment Commitments should link to an IBM Cloud Strategic Priority and further refine the course grained EC at the IBM Cloud level as it pertains to the segment.

### Hills
Hills are used to express value to the customers/persona along with a measurable outcome.  You should define and refine hills into what could be reasonably achieved in a quarter.  A hill must contain an articulate description and related information pertaining to the business value.  In some cases a hill will be selected for the ICP program.  In  that case there are several fields that must be maintained on a monthly basis:  Most Likely Date, Pessimistic Date, Optimistic Date.  They values are used for PERT analysis.
https://www.ibm.com/design/thinking/keys/hills/

### Epics
Epics represent the further decomposition of hills.  They too express value and measurable outcome but are scoped to a feature in the context of a broader experience. 

**What if an Epic is related to multiple Hills or a Hill is related to multiple Strategic Priority?**
There are circumstances where an epic might be used to move multiple hills forward.  That is an ideal situation as we are gaining advantages across initiatives with a single investment.  In this case, the OM should identify a primary hill and set that accordingly.  Other hills can be linked using “Universal Dependencies” http://blog.aha.io/universal-dependencies/?utm_source=heading&utm_medium=product_3&utm_campaign=newsletter

**What is a Universal Dependency**
Universal Dependencies can be created to link any of our Entities using a variety of descriptors.  To create a UD, you will leverage the “action” button on the Entity

**What is the life cycle of an Epic?**
- New - Developing concept based on market data or customer feedback/Idea  (Only in Aha)
- Defining – Creating an articulate Epic with all necessary data and Aha Epic Attributes set. This includes who the Epic is Assigned To, the Value Statement, the Announcement Tier, the Description and more.
- Ready for Design - Problem statement is complete.  Validated with sponsor users and market data.
- In Design - Part of the current Design Sprint
- Ready for Development - Design is complete.  Ready to be prioritized and included in a Development sprint
- In Development - Part of the current development sprint
- Dev Complete - Development and testing is complete.  In staging, not yet deployed to production instances.
- Shipped - Deployed to all production instances.  Public/Dedicated/Local where appropriate.  (GitHub = Closed)
- Will not do - An epic that we don’t intend to implement due to priority change or duplication.  (GitHub = Closed)


## Milestones
We are aligned with development Milestones.  Aha! team will create Product milestones periodically.

It is the responsibility of the OM with commitment from Development to ensure that Epics are properly placed in the correct Milestone.  Anything that is not in a Milestone should be placed in the Parking Lot/Backlog.

Milestone naming convention should adhere to the format YYYY-MM
This will ensures we can sort by Milestone name chronologically.

**What is an Idea and how do they relate to Epics?**   
Ideas represent Internal and External product feedback.  Offering managers should follow the Triage process to ensure the feedback is relevant and actionable.  Ideas are linked to Epics.  Ideas are not sync’ed with GitHub.  When an Epic is “Shipped” the Idea lifecycle will be complete and will need to be updated in the Aha system to inform customers and field representatives that we’ve addressed their request.
