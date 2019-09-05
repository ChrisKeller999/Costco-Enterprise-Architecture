---
title: Process Acceleration
---

# *THIS IS GITHUB/ZENHUB CENTRIC - NEEDS REWRITE FOR AHA->JIRA->CONFLUENCE->GITHUB

While we always strive to start with the **minimum viable process** possible, sometimes we get it wrong. It doesn't matter where you are in your project's timeline, there's *never* a bad time to look at improving your processes (no matter what the process is). To help you, we're bringing techniques used in **Lean Manfuacturing** and adapting them to Software Development.

> **Keeping it simple**
> We freely admit that we're simplifying a number of things here to help teams get going with these practices. Don't sweat the small stuff, you can get [deeper and more complex](https://www.safaribooksonline.com/search/?query=value%20stream%20mapping){:target="_blank"} when you're comfortable with each of these practices...

## Value Stream Mapping

Value Stream Maps are created by documenting an as-is process and then designing a to-be process. You then use the to-be process as a goal to guide continuous improvement efforts.

While Value Stream Mapping can be applied to *any process*, we're going to focus on three slices of time. Lead Time, Cycle Time, and Process Time. We're going to use the decades-old Lean Manufacturing derived definitions here. We're also going to tailor our language to GitHub terms (because that's where we all work).

## Lead Time, Cycle Time, Process Time


### Lead Time

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/agile/play-by-play/value-stream-mapping/lead-time.png" height="50%" width="50%"><br>
- Lead Time is the time between the work being defined and the work being live in Production
- In GitHub, this is the elapsed time between New Issue and Closed (Assuming Closed == Production)
- Lead Time is what the Customer experiences

### Cycle Time

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/agile/play-by-play/value-stream-mapping/cycle-time.png" height="50%" width="50%"><br>
- Cycle Time is the time between the work starting and being live in Production
- Cycle Time is what the Product Team Experiences

### Process Time

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/agile/play-by-play/value-stream-mapping/process-time.png" height="50%" width="50%"><br>
- Process Time is the time between the work starting and being ready to deploy
- Process Time is what the Squad Member experiences (when there's a handoff to deploy)

If our highest priority is to satisfy our customers through the early and continutous delivery of valuable software, then we must focus on shrinking the amount of time it takes new work to be delivered. Now it's time to measure and improve...

## Measure and Improve

- As a Team, design some experiments to shrink the amount of time work stays in each state.
- As a Team, measure and review your Lead Time regularly
- As a Team, define an **Emergency** Lead Time Goal and a **Typical** Lead Time Goal.

### As Is

As a Team, review the end to end process you want to improve. Create a bar chart that tracks the amount of time work spends in each state of your process.

![As-Is Value Stream Map](https://pages.github.ibm.com/watson-health-playbook/resources/images/agile/play-by-play/value-stream-mapping/as-is-lead-time.png)

### To Be

As a Team, set some goals you want to achieve with your current process.  Create a bar chart that tracks the amount of time work spends in each *future state* of your process.
![To-Be Value Stream Map](https://pages.github.ibm.com/watson-health-playbook/resources/images/agile/play-by-play/value-stream-mapping/to-be-lead-time.png)

The first time you do this, you'll likely focus on shrinking the amount of time work stays in each phase. As you mature, you can work on actually changing the process through automation and improvement and thereby improving the value stream.

Remember, **Experiment, Measure, Repeat**.

> **Examples**
> As a **Squad Member**, I can turn around an **emergency fix** and push it into production **before the end of the day**
> As a **Product Team**, we can deliver a **New Idea** into production **the same Sprint we complete the work**

Remember, the only way to meet **customer needs** is to ensure that **Lead Time** is the concern of **everyone…**

## Mining ZenHub for Data

If you noticed that the Lead / Cycle / Process Time charts looked like they were pulled from columns in a ZenHub board, you were right. We have scripts that can pull the data out of ZenHub and then get you to the point where you can easily create these charts in Excel.

There's an GitHub Enterprise organization devoted to GitHub User Scripts, grab the [Issue Scripts](https://github.ibm.com/github-user-scripts/issue-scripts){:target="_blank"} from there.


> **Signs of Success**
> - Work moves from Thought to Production faster than it once did
> - You see improvements in Lead / Cycle / Process Time after you measure again the next quarter
> - Squad Members are involved in Deployment
> - Product Teams regularly measure and report on Lead / Cycle / Process Time
