---
title: Squad Backlog Grooming
---

# *THIS IS GITHUB/ZENHUB CENTRIC - NEEDS REWRITE FOR AHA->JIRA->CONFLUENCE->GITHUB

An Epic that's been assigned to the **Squad** must be broken down into [**User Stories**](../ongoing-delivery/hills-epics-stories-usecases#stories), **estimated**, and **prioritized**.

> **Who: Every Squad**
> **When: Every Afternoon**

## Running the Session

During the session, the Squad will:
* Review new Epics assigned them from their Leadership Teams
* Refines the Epics into Stories and/or additional Epics
* Adds detail to the Stories
* Estimates the Stories in points

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/agileplaybook/backlog-refinement-squad.svg" alt="backlog refinement squad">


## Estimate effort with Points

All too often, teams skip estimating how much effort and risk is involved in the things they have to do. This results in teams being asked to do (or teams taking on) more than they can handle. To help everyone understand what is achievable, we create **Story Point** estimates.

**Story Points** are used to express the effort required by the squad to deliver a fully implemented item from the backlog(Epic, Story,Issue). Story Points are a relative estimate, meaning a story that is assigned a 2 should be twice the effort of a story assigned 1 and two-thirds the effort of a story estimated at 3.

There are several ways to get started with **Story Points**, a team can work together and determine what the smallest story that they would track and establish that as a 1. For squads accustomed to using T-Shirt sizing Watson teams can map the Point values (typically using the Fibonacci sequence) in [ZenHub](/tools/zenhub) to T-Shirt sizing:

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

## Forecasting

Teams are asked for a high-level plan for multiple sprints that reflect expectation about what scope will be implemented, this forecast is referred to as a **Release Plan**.  One of the benefits of the relative nature of story point estimation is that it can be applied to **Epics** that are months into the future the same way they are applied to **Stories** with the only difference being the effort needed.  When estimating Epics teams can extend the point value  sequence, with the greater the point value indicating the lack of clarity of the scope.

| Extended Point Values  |
| ------------------- |
| 30                  |
| 50                  |
| 80                  |
| 130                 |
| 210                 |


## Planning Poker

### How to run a Planning Poker Meeting [(4 minute video)](http://agileacademy.w3ibm.mybluemix.net/standalone/planning_poker/){:target="_blank"}

Planning poker is a consensus-based, gamified technique for estimating, mostly used to estimate effort or relative size of development goals in software development. Members of the group make estimates by playing numbered cards face-down to the table, instead of speaking them aloud. The cards are revealed, and the estimates are then discussed. By hiding the figures in this way, the group can avoid the cognitive bias of anchoring, where the first number spoken aloud sets a precedent for subsequent estimates.

- It's up to your Squad to determine what your sizings mean
- You can't compare point values from one team to another team
- As a group, set an estimate for every Issue opened.
- Leverage your small group to help understand how much effort an Issue really is.


[Plan on having the meeting at the end of each sprint.](agile-calendars/) Working out of the team backlog, the team lead reads the Story title and short description.  This should give the team the background they need to understand how big it feels.

The team will vote together, so make sure you use a SIMPLE mechanism to capture the vote. You can even do this in Slack by pasting in the following and using the reactions to vote on each one.

```
“How many Story points?” “XX-Small” :sp-1: “X-Small” :sp-2: “Small” :sp-3: “Medium” :sp-5: “Large” :sp-8: “X-Large” :sp-13: “XX-Large” :sp-21:
```

If the team votes with consensus, move on to the next.  If consensus is not reached on the first vote, ask the outliers why they voted as they did and call for another vote.  Repeat a few times until you reach consensus.  If you can’t get close within three votes, move on and come back at the end (or call an “After Meeting”).

To ensure that discussion is structured; the Moderator or the Offering Manager may at any point turn over the egg timer and when it runs out all discussion must cease and another round of poker is played.


## Keep a table of completed work

After a few Sprints, you'll have some great examples of completed work and the point values you assigned. Build a table on your wiki and use that as a reference to make your estimation go even faster.

| Point Values  | Issue |
| ------------------- | -------------- |
| 1                   | [[5479](agile/ongoing-delivery/squads-estimate-story-points#table)] As a Social Coder, I would like to have a description of the project so that I can be productive as quick as possible       |
| 2                   | [[5977](agile/ongoing-delivery/squads-estimate-story-points#table)] As a CTO, I want to see real-world examples of emerging technology success so that I can better envision how it can help me.        |
| 3                   | [[3433](agile/ongoing-delivery/squads-estimate-story-points#table)] When importing intents or entities, a line with commas but no data does not return an error in the store          |
| 5                   | [[8876](agile/ongoing-delivery/squads-estimate-story-points#table)] As a Watson Developer, I want the UI Kit to be consumable via a managed repository so that I can be sure which version my application uses         |
| 8                   | [[77876](agile/ongoing-delivery/squads-estimate-story-points#table)] As an academic user with an expired Trial account, I need to transition to a new account type so that I can continue Bluemixing          |
| 13                  | [[5633](agile/ongoing-delivery/squads-estimate-story-points#table)] As a CISO, I need to understand IBM's GDPR is so that I can make informed decisions about how I can help my organization adopt.        |
| 21                  | [[334](agile/ongoing-delivery/squads-estimate-story-points#table)] As a service owner, I must have a documented and tested DR solution so I can ensure I can recover from catastrophic failures       |


> **Signs of Success**
> * Squads that plan continuously, spend less time Planning overall, and there is less guesswork
> * Squads that plan consistently become predictable. Predictable Squads are valued higher in the organization
