---
title: Release Planning
breadcrumb: Release planning
sidebar: dev
---
Our **Release Plans** focus on **near term** dates to **help** the **whole team** drive towards **taking the Hills** in the **Roadmap**. **Release Plans** should be a **few months or shorter**, **never** longer than a Quarter...

> **ProTip:** **Remember**, we're taking **Hills**, not **Mountains**.

## Before you begin

> Our **highest** priority is to **satisfy our users** through the **early** and **continuous delivery** of valuable software.

Before you start planning, take a step back and reflect on your values and vision, as a team. Take the [**IBM Agile Principles**](https://agile-ibm.mybluemix.net/principles){:target="_blank"} to heart.

- Begin with **clarity** about the **outcome**, and let it **guide** every step along the way.

- **Listen, iterate, learn**, and **course correct** rather than waiting until it’s **perfect**.

- Build **small teams** with the **right skills** to encourage **self-direction** and **innovation**.

## Who's involved?

**Release Planning** is _primarily_ owned by the **Release Manager** and the **Product Leadership Team**, but _the whole team_ is involved in the process. Without our **Squad Members** keeping GitHub **accurate**, our **Release Plans** wouldn't provide any value.

## Conducting your Release Planning meeting

> **Who: Release Manager**, **Squad Leaders**, and the **Product Leadership Team**<br>
> **When:** **Two** Sessions held a Sprint or two **before** the start of the Release

By holding your Release Planning Meeting several sprints ahead, it will **naturally** feed the roadmap, your backlog grooming cycles, and will keep your **Squads unblocked**. The **Product Leadership Team** leads by being a few Sprints ahead of their **Squads**, **clearing the brush**, and **continuously** looking forward so the path ahead **remains clear**.

* Reserve a few hours for your Release Plannning Meeting, no more than three.
* Gather your leadership team together, in person if possible, via [**Webex**] if not.
* Come prepared - **Squad Leaders** should know the **latest and greatest** on their **Squads**; **velocity**, current **blockers**, **health of backlog**, etc.
* **Release Managers** and **Offering Managers** should know the health of the **Roadmap**, any strategic themes that are changing or new, customer feedback. **Design** should bring feedback from **Sponsor Users**, and ensure **Personas** are up to date.
* The **Release Manager** facilitates the session to prioritize and size the upcoming release.
* Pick the **three** (and only three) **Hills** that you will focus on for the release.
* Break your **Hills** down into **Epics**. See [Planning and Tracking work for Ongoing Delivery](ongoing-delivery)

> **ProTip:** You will need **two** sessions. After your initial session, ensure there's a **week** or so to **validate** any assumptions with **Squads** or **Execs**, and come back to confirm. this could take a **Sprint** or two which is why it's important to start a sprint or two **ahead** of the Release starting timeframe.


## Ensuring your Release Plan is complete

As you're pulling together your development and feature related work to add to your release, make sure you don't forget to include stories for other elements that ensure the release is effective for your users. Examples are:

1. **Offering Deliverables Catalog** - Besides the Offering Management artifacts and the code, there are a series of companion deliverables that as a Release Manager you will need to make sure are addressed as needed. The [IBM Offering Deliverables Catalog] (https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/Wb1d543660cb8_44bc_b34a_efb359fb4b18/page/13.%20IBM%20Offering%20Deliverables%20Catalog) provides a single, consolidated repository of all the deliverables that _may_ apply to your delivery.
  - The Project Teams uses the Catalog to determine which work activities apply to their current project and make plans accordingly
  - Catalog needs to be regularly reviewed all the way up to Launch Readiness
  - Copy of the Catalog for the offering needs to be saved with the rest of the project documentation as it will need to be made available in case of an Audit.
  - **Best Practice**: always check for the latest version of the catalog before creating local copy for your offering

  - **Accessibility** (included in the Offering Deliverables Catalog) - You'll want to make sure that you're creating accessible features from the start. It should be included in the design of your product, not a separate task. From time to time, we do get assessed on how accessible our solutions are so you'll want to always include it in your requirements so it doesn't become a firedrill for the team. For more information of including accessibility in design, see the [OM Academy resources](http://calmedia.atlanta.ibm.com/om_academy/om_resources.php){:target="_blank"} (bottom left corner) and for the latest announcements on changes in accessibility (including updated checklists), see the [Accessibility forum](https://w3-connections.ibm.com/forums/html/topic?id=678e615c-a95d-48a1-9988-c96705c9be1f&ps=25){:target="_blank"}.

  - **Globalization & Languages** (included in the Offering Deliverables Catalog) - Did you include language testing on the new feature? Or are you targeting new countries or languages as part of your strategic roadmap? Ensure you've included stories for those items in the appropriate release.

2. **Go To Market (GTM)** - Will you need to create a new demo video, blog post, talk or presentation to help users understand the value in the release? Will you be showcasing it at a big confrence or event? Think about all the channels you’ll want to know about the release and how you’ll communicate with them. Will there be changes in exisitng pricing or packaging to go along with the new feature? Think about what it takes for users to adopt the new functionality and all the steps your team needs to make to ensure a smooth customer journey.


## Starting your release

### Ready, set, *SPRINT!*

We want our [**Squad members**](../agile/ibm-squad-thinking#squads) to have **big blocks of time** to get things done. To accomplish this, we always start with the **minimum viable process** possible.

Head on over to the [**Play by Play**](../agile/play-by-play/) pages to see how to Sprint effectively...

### Release Management Meeting (OPTIONAL)

> **Who: Release Manager**, **Squad Leaders**, **Product Leadership Team** <br>
> **When: Weekly** - Optional as content can be covered in a **Whole Team Standup**

Unless otherwised covered during a **Whole Team Standup**, products may also hold a **Release Management Meeting**. The **Release Manager** will run this with the **Tribe/Product/Squad Leaders** (ensuring **all** disciplines are represented). The objective of the meeting is to review progress of the current release, any changes in scope, dependencies and risks for all milestones identified on the **Release Plan**.

#### Assumptions

- A Release Plan has been created and that and everyone understands the scope of the release and associated milestones.
- All Squad leads are aligned on the content

#### During the Release Management Meeting

- Review the **Roadmap** that aligns with the **Release Plan**
- Review the **Release Report** (burn-up chart) for relevant milestones
- Filter the **Release Report** by Squads to determine if they're On Track, At Risk, or Blocked
- Review **dependencies**, risk, changes to plan (scope, time, resource)
- Assign and review action items

**Many** Products in Watson cover these items during their weekly **Whole Team Standup** (aka Scrum of Scrums)...

<a name="agile-reporting"></a>

## Measuring progress

> **Who: Release Manager** and **Squad Leaders**
> **When: Every Day at the 15 Minute Daily Standup**

### Burndown

**Burndown** reports show **completion of work over time** (from 100% to 0% remaining).

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/zh/burndown-chart.png">

> **ProTips:**
> - The diagonal line is your **ideal**, if you're below the line, you're **ahead of schedule**, above the line, you're **behind**.
> - Notice that plateau? That's a weekend. We **expect** work to **pause** on the weekends.


### Velocity

After a **few Sprints**, add up the number of **completed Story Points** and divide by the number of Sprints. The average number of Story Points completed is called your **Velocity**. Use your average number of Story Points to determine how many Points to put in each Sprint moving forward. Understanding (and using) your **Velocity** is key to getting your Squad to **predictability**.

> **ProTip:** Look at the chart above. The average **Velocity** for this project is a little over **30 Story Points** per Sprint and yet they've added **193 Story Points** to the Sprint. The **Velocity** chart is a **great way** to spot **overcommiting**. Overcommitting is a **big problem** that negatively impacts **morale**, causes **lost revenue**, and prevents teams from becoming **predictable**.


### Burnup (aka Release Reports)

Burnup reports show completion of work over time (from 0% to 100% complete).


> **ProTip:** Do **not** build a release **during the release**. Build your releases **before** the start date of the release. There is a **scope creep** algorithm baked into **Release Reports** that will skew the **predicted end date** dramatically. You'll still be able to use the burn up chart, but the predicted end date will be off if you build a release report while the release is already underway...

<a name="keeping-github-accurate"></a>

## Keeping Tools Accurate

> **Who: Release Manager** and **Squad Leaders**
> **When: Every Day**

The information we get out of Jira and GitHub is only as good as how we **organize** it. Without a watchful eye, Jira and GitHub can easily becomes a misleading source of information. Having **accurate** information in Jira or GitHub is the key to **becoming predictable**. Stripping everything else aside, there are **three things** that can **dramatically** improve the **accuracy** of the information in GitHub.

### Ensure Issues are in the correct State

- During the **Daily Standup**, each Squad runs their Daily Standup from their **Jira Board**. Use the Daily Standup as an **opportunity** to keep every issue in the **correct State**. Notice that a Squad Member said that they closed #42 but it's still in the **In Progress** column? Drag it to the **Closed** column right then and there.

### Apply an Estimate to EVERY Issue

- To understand your Squad's **velocity**, ensure that **each and every Issue has an estimate** so that it is shown in your [Burndown, Burn up and Velocity Reports](../agile/play-by-play/estimates-and-reports). Notice that a Squad didn't estimate some of their Issues? **Assign 1 point to any unestimated issues**. That will provide a **better estimate** than none at all.

### Assign EVERY Issue to the Milestone that it was closed during

- **Every day**, review your closed issues, filter by *Issues with no milestones* and assign any issues to the current Milestone. This helps *prevent* work from slipping through the cracks and helps you get closer to *predictability*

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/github/github-assign-milestones-to-closed-issues.gif">

> **ProTip:** Remember, there are really only two kinds of work, work you track and work you don't. Our tools make it quick and easy to help you keep all of your work _visible_.

## Release!

> _“**Agile at scale** requires **trust at scale**”_
> [@HenrikKniberg](https://twitter.com/HenrikKniberg){:target="_blank"} ([Spotify](https://labs.spotify.com/2014/03/27/spotify-engineering-culture-part-1/){:target="_blank"})

To **truly** scale release operations, you **must** provide your **Squads** with the authority to **push changes into production**.

This is how **cloud companies operate**. This is how **Amazon** works, this is how **Netflix** works.

There are **no tickets opened**, **no votes by review boards**, they have granted their Squads with the authority to release their work **when they see fit**.

This authority comes with a **great deal of responsibility** in the form of PagerDuty, as Amazon says, **you build it, you run it**.

> **ProTip:** To dig deeper, read the book [**Lean Enterprise**](https://www.safaribooksonline.com/library/view/lean-enterprise/9781491946527/){:target="_blank"} by Jez Humble, Joanne Molesky and Barry O'Reilly. [Here's a link](https://www.safaribooksonline.com/library/view/lean-enterprise/9781491946527/part03ch05.html#chapter_3_5){:target="_blank"} to the section on how other companies work.

## Celebrate

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/agileplaybook/celebrate.jpg">

> Agile processes promote sustainable development.
> The sponsors, developers, and users should be able
> to maintain a constant pace indefinitely.

We're people, not robots.

We forget that sometimes.

The [Last day of the Sprint Ceremonies](../agile/play-by-play/agile-calendars) are a good place to start. Playbacks can be a wonderful opportunity to showcase what you've done.

We need more than that though.

From time to time, it's vital take a break and celebrate your accomplishments. Enjoy the company of your team.

**Share a meal**
Nothing bonds a Squad like sharing a meal. Have lunch together, go out for drinks, or grab an ice cream on a hot day.

Get together with other Squads at your site and plan a potluck.

**Team day out**
Live near an amusement park? Take a day and go together. Outdoor concert series happen each and every summer in all of our cities. Mini golf and ice cream down the street? Go together for a few hours.

**Clubs**
Each and every site has an amazing array of fun activities.
