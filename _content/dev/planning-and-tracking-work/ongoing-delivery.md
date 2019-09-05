---
title: Planning and Tracking Work for Ongoing Delivery
breadcrumb: Ongoing Delivery
sidebar: dev
---
> Our **highest** priority is to **satisfy our users** through the **early** and **continuous delivery** of valuable software.

## Fundamentals (Concepts)

In order to stay focused on the user, and be as efficient as possible, [**Squads**](../../agile/ibm-squad-thinking/index.html#squads) and their [**Agile Leadership Team**](../../../dev/agile/ibm-squad-thinking/index.html#agile-leadership-team) organize work using Hills, Epics and Stories.

![Hills > Epics > Stories](https://pages.github.ibm.com/watson-health-playbook/resources/images/agileplaybook/hills-epics-stories2.png)

> **[Hill:](#hills)** The big goal. Contains a who, what, and wow factor. Created in **[Aha!](../tools/aha/)**<br>
> **[Epic:](#epics)** A collection of customer value centered on a common theme. Epics may contain additional smaller Epics, if needed. Created in **[Aha!](/tools/aha/)** and sync'd with **[Jira]**.<br>
> **[Story:](#stories)** A chunk of customer, or team, value that can be completed in a single sprint. Created in **[Jira]** as children of Epics.

<a name="hills"></a>

## Define your Hills

> **Who: Offering Manager (with collaboration from Design lead, Technical leads, and other stakeholders as needed)**

Hills turn users' needs into project goals, helping the team align around a common understanding. Hills aren't detailed requirements - they're statements of intended outcome. Address who the outcome will serve, what they will be enabled to do, and the differentiator that will make this outcome worth the users' time.  Hills are integral to IBM Design Thinking.  Without Hills as our starting point, we won't be focused on the user, and will fall back into old habits of developing features instead of experiences.

Define as many hills as needed, however a squad should only focus on delivering on one hill at a time.  Dividing the squad's attention across multiple Hills at once will reduce efficiency and focus.  In Agile, serial work is almost always faster than parallel work.

|                 |               | Insert story content        |  Example   |
| -------------   | ------------- | --------------------------- | ---------- |
| Who             | As a...       | [User Archetype]            | As Mary the business owner |
| What            | I want to...  | [Need]                      | I want to use technology to answer common customer questions |
| Wow             | so that...    | [Measurable business value] | so that we can reduce calls into customer service by 15% in one year |

> As **Mary the business owner**, I want to **use a self-service solution to answer common customer questions**, so that we can **reduce calls into customer service by 15% in one year.**

Notice that in the example above, Mary is not the end-user of our offering.  It's important to remember that Hills can apply to any of the users for our offerings -- the end-user, the developer, the business user, IBM partners, and even IBMers that might have a role in implementing an offering for a client.

Let's not forget about **Technical Foundation**. Technical Foundation is not a Hill, but rather an investment made towards development work in support of cross-cutting quality, serviceability, and consumability requirements.

For more information on Hills, refer to the [IBM Design Thinking guide](https://www.ibm.com/design/thinking/keys/hills/){:target="_blank"}.

## Add your Hills to Aha!

> **Who: Offering Manager**

- Navigate to your Product in Aha!
- Click on Strategy -> Hills
- Click the (+) button next to _Your Product Hills_

![Create Hill](https://pages.github.ibm.com/watson-health-playbook/resources/images/aha/aha-create-hill.gif)

>**ProTip:** Assign Hills to the milestone that lines up with the **desired** date for the Hill. Remember, a **Roadmap** is a **wish list** of things we **want** to do. The further out your Roadmap goes, the less accurate it becomes.

## Product Grooming Sessions

Once you're going, new Ideas, Epics and requests will start coming in. To address these, your Product Leadership Team needs to run regular [Product Grooming Sessions](https://pages.github.ibm.com/the-playbook/agile/play-by-play/product-grooming/){:target="_blank"}.

<a name="epics"></a>

## Decompose the Hills into Epics

> **Who: Collaboratively by the technical leads, OM and Design are reviewers**

Mmm, decompose...sounds pretty gross!  Really it's just Agile's term for breaking big things down into smaller things because big things are hard to work on.  They're ambiguous and risky.  We don't like risk. The smaller you make a piece of work, the easier it is to complete on time and accurately.

Our goal is to decompose work all the way down to stories.  Most of the time, however, it's too big of a mental leap to go from the big goal of Hill all the way down to the dozens (or hundreds) of stories it will take to complete a Hill.  To make the process easier, we simply decompose the Hill into slightly smaller units called epics.  If the hill is the big goal, then the epics are the capabilities, behaviors, or user experiences that allow us to reach the goal.  There is no time limit on an epic, but it's a good idea to keep them relativity compact, a few sprints, or so.  If it looks like it'll take a year to complete an epic, keep decomposing!  You probably have multiple epics masquerading as one.

>Epics follow a similar pattern to Hills, but replace *wow* with *why* to give us a who/what/why pattern.  Epics use the standard story format of "As a [user archetype], I want [desired experience] so that [why the user cares about the experience/capability]."

Unlike Hills, Epics aren't done with just a who/what/why.  A good Epic needs requirements to establish its boundaries (i.e. how we know we've completed the epic).  But we don't want to write our requirements the old fashioned way, "the system shall..."  Instead, we want to describe our requirements in a user-centric manner.  This approach has many labels: use cases, user scenarios, behavior driven development, etc.  Each technique is slightly different based on its origin, but they all aim to accomplish the same thing. Use the format of your choice, just be sure to write your requirements from the perspective of the user, not the system.

Intended Use
- Reflective of a scenario
- Provides value (what) to the user (who)
- Aids in organization & grouping of detailed requirements


## Add Epics to your Hills in Aha!

> **Who: Offering Manager**

- Navigate to your Hill in Aha!
- Click on Details
- Click the (+) button next to _Epics_

![Aha - Create Epic Under Hill](https://pages.github.ibm.com/watson-health-playbook/resources/images/aha/aha-create-epic-under-hill.gif)

>**ProTips:**
> - Always create Epics as children of a Hill, this will make it easier to find.
> - Assign Epics to the milestone that lines up with the **desired** date for the Epic. Remember, a **Roadmap** is a **wish list** of things we **want** to do. The further out your Roadmap goes, the less accurate it becomes.
> - The **Create Epic** dialog has a handy **Create Epic & Add Another** button that makes it fast to create a number of Epics that all roll up to the same Hill.

<a name="acceptance-criteria"></a>

## Add your Acceptance Criteria as Requirements in Aha!

> **Who: Offering Manager**
[Acceptance Criteria](https://www.google.com/search?q=acceptance+criteria){:target="_blank"} is how you know whether or not your work is complete. Well written Acceptance Criteria align Offering Management, Design, and Development and ensure that we build the right things. Always ensure you provide your Squads with detailed information about what the user needs the software to do. It's often helpful to use an established pattern, like the [BDD pattern](https://www.ibm.com/cloud/garage/content/code/practice_behavior_driven_development/){:target="_blank"} to help get your needs understood.

- Open your Epic
- Scroll down and click the (+) button next to **Requirements**
- Enter each Acceptance Criteria item as a separate **Requirement**

## Stories

> **Who: Technical Leads and Squad leads with collaboration with team members, as needed**

Requirements Stories are detailed requirements that focus on the solution One or more scenarios (epics) is needed to achieve the Hill. Stories resided in **[Jira]**.

Intended Use
- Lists what the system will do to provide value (what) to the user (who)
- Includes Acceptance Criteria that is used to verify the planned solution was provided


![image](https://pages.github.ibm.com/watson-health-playbook/resources/images/how-we-work/PBSlide05.png)

## From Aha! to Jira

<< Work in Progress >>

![image](https://pages.github.ibm.com/watson-health-playbook/resources/images/agileplaybook/aha-jira-github-reqflow.jpg)
