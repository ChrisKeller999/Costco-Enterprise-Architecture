---
title: Continuous Planning
breadcrumb: Continuous Planning
---

We here in **Watson** have progressed to the point where most **Squads** can state, with a high degree of accuracy, what they can commit to in their **next Sprint**. Some can even state what they can commit to in the **Sprint after that**. The **challenge** we currently face is that the business depends on us being able to **forecast further out** than a few weeks. With the bulk of revenue coming from client-specific commitments being made a Quarter or more out, we need the organization to use our **Sprint-based** expertise to **guide** our **long term forecasting**.

## Our Goal
> All Product Teams follow a **Continuous Planning** process that yields a **rolling Roadmap** where we can forecast out at **least two quarters beyond the current quarter**.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/agileplaybook/agile-roadmap.svg">


## Fundamental Tenets
- **No Assumptions** - The only work that can be placed on a Product Roadmap is work that the **Product Leadership Team** has **groomed** (**Described, Sized, Prioritized**) ([link](product-grooming))
- There are **three** timeframes each **Product Team** focuses on for planning. The next **Year**, the next **Quarter**, and the next **Sprint**.
    - **The Next Year** - This is the **Planning Roadmap**. This shows the **future state** that we are aiming for a **single product** and also shows the quarter when we are planning **product integrations**.
    - **The Next Quarter** - The **3 month** period that begins after the current **Quarter**. This means that roadmap commitments should be rolling across months.
    - **The Next Sprint** - **Squads** are responsible for planning, with certainty, what they can commit to delivering for this **Sprint**, **and** the next **Sprint**.
- **Group-based Estimates** - Work must be estimated by a **group**, not by an individual. Estimates can be wrong, **we expect them to be wrong**, AGILITY & COMMUNICATION is key.
- **Total Agreement** - Every **stakeholder** agrees to dates everywhere that dates are needed, and items with dates become our **highest priorities**
- **Trade off Decisions** - When it is clear that a **Squad** (or Product) cannot achieve a commitment, the **Product Leadership Team** owns the trade off decisions and works with their **Tribe** and **Segment Leaders** to ensure that we deliver the **right things in the right order**.

## Steps

- **All work starts in Aha**:  This includes new work (new features, new deployments) AND continuing investment on EXISTING capabilities ("keeping the lights on" operational support / bug fixes, security updates, technology shifts).
- The **Product Leadership Team** meets daily to analyze new work and make sure they are on the same page wrt scope. This includes rough order of magnitude sizing based on real world data.
- The **Product Leadership Team** prioritizes and commits to plans based on estimates provided by **Squads** and available resources
- The **Offering Manager** owns the Roadmap and sends Aha Epics to GitHub **the Quarter before they will be implemented**. All other work stays in the Aha "Parking Lot"
- The **Squads** that will do the work, will size the work - estimation must leverage prior sprint velocity and should improve over time.  **Squads** have to size work **within a week** of it being assigned by the **Product Leadership Team**. If **Squads** are not sizing within a week, the **Product Leadership Team** will work with the **Squads** to help them **achieve success**.
- If work is required from other teams, the **Offering Manager** is responsible for **interlocking** with their counterparts from those teams. If there is a prioritization conflict, the **Offering Manager** works with the **Tribe** and **Segment Leadership** teams to resolve the conflict.
- **Release Managers** track each **Squad**'s progress on their **commitments**. When **committed** work needs to change - e.g. new work coming in, original estimation was faulty, CIEs took time etc, the **Release Manager and Offering Manager** are responsible for communicating with stakeholders and re-prioritizing with them as necessary.

This is a **continuous** process that leverages feedback loops as described in the "[Agile Calendars](agile-calendars)" page of the **Playbook**.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/agileplaybook/aha-github-flow.png">


## Things to watch out for

- **Comprehensiveness of Aha** - We should make sure that Aha Roadmaps are comprehensive accounts of where the Product Teams will need to spend their effort. E.g. today, it seems most of our roadmaps do not include amount of effort Squad Members spend on day-to-day operational support (deployments, SRE, CIE management, bug fixes, L3 support) or new automation they need to build to make such tasks cheaper to execute. Specifically, make sure you include "SMARTS" principles that we have successfully used to improve operational stability -  Scale testing, Monitoring, Alerting, Recovery (SRE Playbooks), Testing, Security.
- **ASSUMING an interlock** - "We gave them this date target 6 months ago"  does NOT an interlock make. Unless owners of work items have committed to a date target, there is no interlock, plan or roadmap.
- **Squad hesitation of accurate estimation** - We can never be 100% accurate in estimating effort, but having some estimate is better than nothing and leveraging agile group-based-estimation + our past sprint velocity, we should be "ok". Talk to agile coaches for help.

## Asks for the Leadership

- Donna asks for Roadmaps/ Backlogs  that have epics in which Design and Development agree on the Acceptance criteria.    Design and development determine when the Roadmap/Backlog is Well Defined.
- Aameek tells his report that if they do not have a well defined backlog then they should make that known to him and Donna
- Aameek demands from his staff that Releases ups are are accurate (Contains all Known epics and stories, and estimated.   Burn-ups are to be reviewed with Aameek every 2 weeks
- Leadership Team education
    - Understand how to use burn-downs, burn ups, roadmaps to drive behavior
    - Identify what leaders need to do and actions to take to support transformation
    - Q1 2018 Leadership training workshop 1.5 - 2 days



[*] Need macro analysis with current+2q  horizon so that we can identify unsustainable trends - e.g. if a new deployment requires 2 Sprints worth of effort and we are doing 10 new deployments two quarters later, we need to invest in automation this quarter to reduce the effort to multiple deployments per Sprint.


> **Signs of Success**
> * Your Product Team has a clear vision for where you're going.
> * Your Squads are aligned in their work and have fewer bottlenecks.
> * All work is visible, so your planning becomes more accurate.
> * You deliver what you say you're going to. Your stakeholders are satisfied.
