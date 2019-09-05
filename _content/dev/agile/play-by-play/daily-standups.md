---
title: 15 Minute Daily Standups
breadcrumb: Standups
---
**Every morning**, spend 15 minutes with your [**Squad**](../ibm-squad-thinking/) to align and break bottlenecks.

> **Who: Every Squad**
> **When: Every Morning**
> Get started with this  **[(4 minute video)](http://agileacademy.w3ibm.mybluemix.net/standalone/daily_standup_meeting/){:target="_blank"}** from the IBM Agile Academy about how to run your Daily Standup

- Look at the Stories (Issues) that are in the "In Progress" and/or "To Do" states and answer the questions:
    - What was done yesterday
    - What will you do today
    - What blockers you have
- It's often helpful to work off your Kanban Board and use the columns in reverse order, e.g:
>"Yesterday I closed #42, today I'll be reviewing #27 then start working on #33. I'm blocked by #22 as it's still in the backlog"
- If you can't get through every "In Progress" Story in 15 minutes, check the following:
  - Is your group is too big?
  - Have you taken on too much at once?
  - Are people straying from the yesterday / today / blockers format?
- Alternately, you can try running your Standups in Slack:
  - This is a _great_ way to align a non-colocated large team, especially one split across multiple time zones (though you should really work on transforming into a Squad...)
  - You don't necessarily need to dedicate 15 minutes for Slack-based Standups
  - [Distributed Standup with Slack](#running-standups-in-slack)

If you need more details on a subject, use the "parking lot" approach and get the right group together after. [Link](https://w3-connections.ibm.com/blogs/widp/entry/how_to_lead_a_daily_standup?lang=en){:target="_blank"}

### 60 Second Kanban Board Updates [(4 minute video)](http://agileacademy.w3ibm.mybluemix.net/standalone/walls_of_work/){:target="_blank"}
Squad members should spend about 60 seconds updating the Kanban Board Updating the board includes:
* Making sure that each Issue is in the correct column (e.g. New -> Backlog -> In Progress -> Review -> Complete)
* Making sure that each member is working on the Issue with the highest priority, and that issue is the closest to the top of the pipeline

> **Signs of Success**
> * Your Squad Members spend more time Designing, Coding, and Deploying, than they do sitting in Meetings (measure this).
> * Blocking issues are brought to the surface daily.
> * Temporary Pair Programming increases as Squad Members help each other through blocking issues.

## Running Standups in Slack...

Is your team too big? Are there members of the team who are not all in one room or timezone?

We know that nothing beats a 15 minute daily standup for aligning a [**Squad**](../ibm-squad-thinking/), yet teams still struggle because they are too big, too distributed, or a mix of both.

Here's a great trick to running your daily standup using Slack reminders.

Paste the following into your Squad's Slack channel:

```
/remind #<your-channel-name-here> ```@here - Standup Time!
Please use this format:
#standup
Y: What you did yesterday
T: What you're doing today
B: List the blockers/impediments you have```
in this channel at 9:45AM every day
```

Moving forward, Slackbot will call you into your Squad channel and ask for an update.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/agileplaybook/agile-slack.png" alt="agile slack">

To make this work, the squad needs to commit to post and then read everyone's status every single day.
