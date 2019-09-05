---
title: Agile Estimates & Reports
breadcrumb: Agile Estimates
---

# *THIS IS GITHUB/ZENHUB CENTRIC - NEEDS REWRITE FOR AHA->JIRA->CONFLUENCE->GITHUB

## Overview

**Agile Estimation** and **Reporting** using **Story Points, Burndown, Velocity, and Burnup** are the keys to **understanding** what a team can **accomplish**. These practices let you understand a team's **capacity** which helps them become **predictable** and have a **balanced budget**. Work in an organization asking for Person Week/Month sizings for long term forecasting? We've got [guidance](#person-months) for you as well...

## Story Points

> **Who: Squad Members**
> **When: Sprint Planning**

All too often, teams skip estimating how much effort and risk is involved in the things they have to do. This results in teams being asked to do more than they can handle. To help everyone understand what is achievable, we create size estimates. Watson Health teams map the Point values (typically using the Fibonacci sequence) in **ZenHub** to T-Shirt sizing:

| Point Values  | T-Shirt Sizing |
| ------------------- | -------------- |
| 1                   | XX-Small       |
| 2                   | X-Small        |
| 3                   | Small          |
| 5                   | Medium         |
| 8                   | Large          |
| 13                  | X-Large        |
| 21                  | XX-Large       |

When estimating stories, remember to work out of the backlog. It will take a few Sprints to understand exactly how much can be fit in a Sprint safely.

<a name="planning-poker"></a>

### Planning Poker

> **Who: Squad Members**
> **When: Sprint Planning**
> Get started with this  **[4 minute video](http://agileacademy.w3ibm.mybluemix.net/standalone/planning_poker/){:target="_blank"}** from the IBM Agile Academy about how to run a Planning Poker Meeting

Planning poker is a consensus-based, gamified technique for estimating, mostly used to estimate effort or relative size of development goals in software development. Members of the group make estimates by playing numbered cards face-down to the table, instead of speaking them aloud. The cards are revealed, and the estimates are then discussed. By hiding the figures in this way, the group can avoid the cognitive bias of anchoring, where the first number spoken aloud sets a precedent for subsequent estimates.

- It's up to your Squad to determine what your sizings mean
- You can't compare point values from one team to another team
- As a group, set an estimate for every Issue opened.
- Leverage your small group to help understand how much effort an Issue really is.


[Plan on having the meeting at the end of each sprint.](agile-calendars/) Working out of the team backlog, the team lead reads the Story title and short description.  This should give the team the background they need to understand how big it feels.

The team will vote together, so make sure you use a SIMPLE mechanism to capture the vote. You can use emoji reactions to vote in Slack!

```“How many Story points?” “XX-Small” :sp-1: “X-Small” :sp-2: “Small” :sp-3: “Medium” :sp-5: “Large” :sp-8: “X-Large” :sp-13: “XX-Large” :sp-21:```

If the team votes with consensus, move on to the next.  If consensus is not reached on the first vote, ask the outliers why they voted as they did and call for another vote.  Repeat a few times until you reach consensus.  If you can’t get close within three votes, move on and come back at the end (or call an “After Meeting”).

To ensure that discussion is structured; the Moderator or the Offering Manager may at any point turn over the egg timer and when it runs out all discussion must cease and another round of poker is played.

<a name="table"></a><a name="baseline"></a>

### Establishing a baseline

After a few Sprints, you'll have some great examples of completed work and the point values you assigned. Build a table on your wiki and use that as a reference to make your estimation go even faster.

| Point Values  | Issue |
| ------------------- | -------------- |
| 1                   | [[5479](#table)] As a Social Coder, I would like to have a description of the project so that I can be productive as quick as possible       |
| 2                   | [[5977](#table)] As a CTO, I want to see real-world examples of emerging technology success so that I can better envision how it can help me.        |
| 3                   | [[3433](#table)] When importing intents or entities, a line with commas but no data does not return an error in the store          |
| 5                   | [[8876](#table)] As a Watson Developer, I want the UI Kit to be consumable via a managed repository so that I can be sure which version my application uses         |
| 8                   | [[77876](#table)] As an academic user with an expired Trial account, I need to transition to a new account type so that I can continue Bluemixing          |
| 13                  | [[5633](#table)] As a CISO, I need to understand IBM's GDPR is so that I can make informed decisions about how I can help my organization adopt.        |
| 21                  | [[334](#table)] As a service owner, I must have a documented and tested DR solution so I can ensure I can recover from catastrophic failures       |

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/zh/zenhub-add-estimate.gif" alt="" width="200px" align="right" class="post-thumb" onclick='this.src=this.src'/>
Remember, Story Points map points to **effort**, XS/S/M/L/XL-style, **not hours**.
- To apply Story Points to an Issue, open the Issue, click the "Estimate" dropdown in the right sidebar and click one of the values.


## Forecasting

Teams are asked for a high-level plan for multiple sprints that reflect expectation about what scope will be implemented, this forecast is referred to as a **Release Plan**.  One of the benefits of the relative nature of story point estimation is that it can be applied to **Epics** that are months into the future the same way they are applied to **Stories** with the only difference being the effort needed.  When estimating Epics teams extend the point value sequence, with the greater the point value indicating the lack of clarity of the scope.

| Extended Point Values  | T-Shirt Sizing |
| ------------------- | -------------- |
| 30                  | Small          |
| 50                  | Medium         |
| 80                   | Large          |
| 130                  | X-Large        |
| 210                  | XX-Large       |

## Capacity Planning (Intro)

All too often, we fail to consider our **capacity** when we plan. We'd love to talk about it now, but we have a chicken and egg problem here. We can't talk about capacity planning without talking about the reports you use to figure out what your capacity actually is. So, read through this next section about reporting and then we'll talk about capacity planning...

<a name="agile-reporting"></a>

## Agile Reporting

### Burndown

**Burndown** reports show **completion of work over time** (from 100% to 0% remaining). ZenHub adds Burndown reports to GitHub. All you have to do is **add Story Points** to your Issues, **assign your Issues to Milestones**, and ZenHub will **automatically generate** Burndown charts for you.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/zh/burndown-chart.png">

> **ProTips:**
> - The diagonal line is your **ideal**, if you're below the line, you're **ahead of schedule**, above the line, you're **behind**.
> - Notice that plateau? That's a weekend. We **expect** work to **pause** on the weekends.


### Filtered Burndown Charts

On a big project? Use the **Label** dropdown to create custom Burndown charts **for your Squad** that you can **bookmark**.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/zh/zenhub-filter-burndown.gif">

**Things to note...**
- Every filter option you pick is added to the URL, that makes every custom view  **bookmarkable and shareable**
- Add links to filtered burndown charts **to your wiki**
- Create a **burndown chart for defects** by filtering on your defect label
- The **Burn Pipeline** dropdown allows you to add additional pipelines (columns) to the burndown chart. If you have an automated build, but manual deployment process, this can let you see how much **faster** you could be done if you adopted **Continuous Delivery** Practices

### Velocity

After a **few Sprints**, add up the number of **completed Story Points** and divide by the number of Sprints. The average number of Story Points completed is called your **Velocity**. Use your average number of Story Points to determine how many Points to put in each Sprint moving forward. Understanding (and using) your **Velocity** is key to getting your Squad to **predictability**.

**ZenHub** generates **Velocity** charts **automatically**. You'll find them under the **Reports** tab.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/zh/zenhub-velocity-chart.png">

**Things to note...**
- By default, ZenHub looks at **10 Sprints**; the **3** most recent **open** Sprints, and the **7** most recent **closed** Sprints.
- Your average velocity is the purple line
- You can **remove a Sprint** from the **Velocity** chart by unchecking it in the table below the chart (you might want to do this for Sprints that happen around major holidays)
- You can filter the **Velocity** chart **just like the burndown chart** by picking one or more Labels from the Label drop-down.

> **ProTip:** Look at the chart above. The average **Velocity** for this project is a little over **30 Story Points** per Sprint and yet they've added **193 Story Points** to the Sprint. The **Velocity** chart is a **great way** to spot **overcommiting**. Overcommitting is a **big problem** that negatively impacts **morale**, causes **lost revenue**, and prevents teams from becoming **predictable**.

<a name="burnup"></a><a name="release-reports"></a>

### Release Reports (aka Burnup)

Release Reports show completion of work over time (from 0% to 100% complete). ZenHub adds **Release Reports** to GitHub (which are also commonly called **Burnup** charts). All you have to do is add Story Points to your Issues, assign your Issues to a **Release**, and ZenHub will automatically generate Burndown charts for you.
<img src="https://dxssrr2j0sq4w.cloudfront.net/3.2.0/img/product/release-reports.jpg">

- First, go to the **Reports** tab and click on **Release Reports**
- Create a new **Release Report**, enter the start and end date, and fill in the description
<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/zh/zenhub-create-release.gif">

- Go to your Board
- Filter your board to see the issues you want to add to a **Release Report**
- Use **multi-select** to add the issues your **Release Report**
> **ProTip:** ZenHub allows you to select up to **fifty** Issues at a time. It's often best to filter by Sprint + Squad + another label to work through adding all of your issues.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/zh/zenhub-add-to-release.gif">


> **ProTip:** Do **not** build a release **during the release**. Build your releases **before** the start date of the release. There is a **scope creep** algorithm baked into **Release Reports** that will skew the **predicted end date** dramatically. You'll still be able to use the burn up chart, but the predicted end date will be off if you build a release report while the release is already underway...

<a name="capacity-planning"></a><a name="balanced-budget"></a>

## Capacity Planning

All too often, we fail to consider our **capacity** when we plan **and** track our work. To ensure you have a **balanced budget**, where your Squads are primed for success on their missions, you **must** do your **capacity planning** based on **real world data**. **Aha** provides a **capacity** indicator for the Quarter, and an "**out of scope**" indicator based on points. **ZenHub** provides real world execution-based data in your **Velocity reports**. Here's how you use all of this to help you better understand and plan for the capacity your Squads have.

Before you begin:
- Most teams have _invisible work_, work that isn't being tracked along with the work you've planned
  - This can be Technical Foundation, Dedicated Deployments, etc
  - Nine times out of ten, invisible work is the reason our planned goals aren't met
  - Retrospectives are used to bring invisible work to the surface
- If you don't track all of your work, you cannot understand your capacity
  - When in doubt, track it (this means opening an Issue, assigning a *quick* estimate, adding it to a milestone, and assigning it to a person)

Once you have a handle on **all of the work** you're actually doing, you can start **capacity planning** using features in **Aha** and **ZenHub**.

> **Chicken and Egg Problem**
>
> Again, we have a **chicken and egg** problem. You can't plan your capacity for a **Quarter** until you have at least a **rough idea** about what you can accomplish within a **Quarter**. When in doubt, be *conservative* in your estimates.

### ZenHub

- Bring up your Velocity report for the _whole team_
- Add up a Quarter's worth of points
- Deduct 25%
- Use that number of points as your **Quarterly Capacity**

### Aha

- Ensure that capacity tracking by **Points** is enabled for your Product (found under Settings for your Product)
- Add your **Quarterly Capacity** in **Points** to each of your Quarterly Release Targets

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/aha/aha-add-capacity.gif">
<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/aha/aha-capacity-limit.png" align="right" width="121" height="221">
- Hold a [Planning Poker](#planning-poker) session and add a **Forecasting Estimate** to each Epic
- You can then see whether or not you are under/over budget for your capacity.
  - The bar at the top is the total number of points in the Release Target
  - If it is all blue, you are under capacity, anything in **red** is over capacity
  - Aha will **automatically draw a red line** in your column to show you what work cannot be contained within the Quarter
  - Aha will automatically recalculate the capacity limit line if you reprioritize by dragging and dropping cards


## People, not robots...

Remember, **we are people, not robots**. Stop and consider the **human impact** of overcommitting. If we are to continue this pace **indefinitely**, we need to ensure our **Squad Members** do not burn out. Taking your capacity in mind when planning is key to ensuring a **productive organization**.

<a name="person-months"></a>

## Person Month Estimates

We get it. From time to time, teams will be asked for Person Month sizings for things like allocating headcount or long term forecasting. Thankfully, you can quickly and easily translate your group-based estimates in Points to Person Months. Even better, by using real-world data, based on work you've completed, your estimates will be **meaningful** rather than just a guess. Better still, you don't have to worry about overhead because your points are about what you've actually delivered! Overhead, keeping the lights on, fixing bugs, it's **already covered** in your Velocity. **Awesome.**

> **ProTip**
> It's **vital** that you have been practicing group-based estimation for a few Sprints otherwise you won't be able to provide **meaningful** data. Please read through this _entire_ page before moving forward.

- First you'll need to know how many Weeks per Sprint (e.g. 2 Weeks per Sprint)
- Next you'll need to know how many people you have (e.g. 90 People)
- Finally, you'll need to know your Product Team's Velocity. (e.g. 528 Points)
  - Use ZenHub Reports to determine your Product Team Velocity (your average over the last 3 or more Sprints)
  - Since you're dealing with very high-level planning, and since Velocity varies from Squad to Squad, it's best to do this at the **Product** level. If you know _which Squad_ will implement your long term work, this also works at the **Squad** level.
- Divide your Product Team Velocity by the number of weeks per Sprint, then multiple by four
  - This converts from Points per Sprint to Points per Month
- Divide the number of Points per Month by the number of People
  - This tells you how many Points equals one Person Month

So, with these example numbers, 1 Person Month to deliver 11.75 Points.

You can then calculate the Person Month equivalents per Point value (.08PM to deliver 1 Point, .17PM to deliver 2 Points, .25PM to deliver 3 Points, etc.). [Here's a handy Spreadsheet that you can use.](https://ibm.box.com/s/suxnji0ametxzl6zyrxq7q427rxzk16a){:target="_blank"}

Once you have approximate Person Month numbers for each point value you use, add them to your [table of completed work.](#table)

Wait a second, that's _far too simplistic_, right? Shouldn't we really come up with a complex formula that does a better job of dealing with the variations seen from Squad to Squad and...

Yes yes, we went down that path first. We did the math, worked various formulas through a number of Squads and Product Teams, compared different multipliers to address all kinds of variables until one of us noticed that all of the super complex things we tried were within 5% of this _much_ simpler solution.

So, yeah, we were overthinking it.

Keep it simple. This very easy solution is close enough for these kinds of exercises.

So, go about your business. Keep estimating as a group using Points and use this to answer the Person Month questions when they come up...

> **ProTip**
> Only ever use Person Months for **very** high level planning, do not use it for your day to day execution. It will be wrong since Velocity varies from Sprint to Sprint.
