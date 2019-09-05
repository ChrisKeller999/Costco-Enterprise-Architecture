---
title: Dependencies
breadcrumb: Dependencies
---

# *THIS IS GITHUB/ZENHUB CENTRIC - NEEDS REWRITE FOR AHA->JIRA->CONFLUENCE->GITHUB

Sometimes a story can't be completed until some other piece of work is done.  Most Squad members assume this could be something technical, but many times, it can be virtually any kind of additional background work. To understand how to track dependencies, we're going to separate them into to categories: Internal and External to the **Squad**.

## Dependencies inside the Squad

Let's look at a Story that requires a user interface to be created, it will probably take **more than one Sprint**, and require **multiple people**.  Work that takes more than a Sprint? That really sounds more like an Epic. In this case, we create the User Story, convert it to a **Zenhub Epic**, and add the additional work as **child issues**. Assign these issues to the **Squad Members** that will be completing the work. It's important to identify and track all of the dependencies so that the team doesn't develop a false sense of confidence about how much work they have to do to complete a user story or epic.

## Dependencies outside the Squad

A **Squad** should be able to **complete a mission** from **thought to production**. While every **Product Team** should ensure that each and every **Squad** is **enabled for success**, reality is **messy**. The truth is that we've all had work that depended on something being done **outside of our Squad**. To help us deal with that, we worked with the teams that develop both **ZenHub** and **Aha** and had them add the ability to mark work as **dependent** on other work.

> **ProTip:**
> You can only call out dependencies for work that you're actually tracking. To ensure you're not missing anything, you should err on the side of caution and leverage both Aha and ZenHub to track **all** of your dependencies.

## ZenHub Dependencies

- Open an **Issue**
- Click the "**+ add dependency**" button
- Use typeahead to find the issue and then select it
- Your issue is now marked blocked by another issue
<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/zh/zenhub-dependencies.gif">

> **ProTip:**
> Dependencies can by added for any Issue in your [**Product Issue Tracker**](../../../dev/planning-and-tracking-work/getting-organized#product-issue-trackers) **and/or** for any connected repository for those smaller projects that use the [**Board of Boards**](../../../dev/planning-and-tracking-work/getting-organized#board-of-boards-less-common) approach.

Don't get too hung up on the use of the word **blocked**. If you stop and think about it, any work that can't be started until something else is completed **is actually blocked**.

> **ProTip:**
> - Use a red **blocked** label in GitHub to mark issues blocked by something that isn't in GitHub
> - Make sure the issue has a link to the thing that's blocking it

### Coming soon (1H 2018)

- ZenHub will be adding the ability to mark an issue as "dependent" in addition to "blocked"
- ZenHub will be adding the ability to mark an issue as blocked by **anything**. This could be a GitHub Issue in some random repo, or you'll be able to add a URL so you can mark a GitHub Issue blocked on a Change Request URL. You won't be able to get live status from anything but GitHub, but it will help you keep track of your dependencies, and the dependency will show up on the card in the board view.
- ZenHub will add a **Dependency Report** that will show you a graph of our dependencies...

## Aha Dependencies

Recognizing that the items in our Roadmap can be _highly dependent_ on other items in Aha, we worked with the team at Aha to add the ability to mark an Epic as dependent on another.<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/aha/aha-dependency-arrows.png" width="200" height="170" align="right">
- Open an **Epic**
- Select **Actions** > "**Link to another record**"
- Find the Aha Epic that your Epic is dependent on (hint: use the Epic ID, e.g. GTD-14)
- Click **Create link**
- Your **Epic** is now dependent on that other **Epic**
- To see your dependencies on a calendar/gantt view, go to the "**Release Targets**" view.
- You'll see arrows connecting one target to another. It's easy to spot problems in this view (e.g. one Epic completing _after_ the start of a dependent Epic)

> **ProTip:**
> To visualize a dependency across products, you'll need to add the **Release Target** from the _other Product_ to your view. You can only add dependencies on Epics you have access to. Work with your Aha Admin to ensure you have read acce


### Aha Dependency Reporting

Aha has added a Dependency viewer report for us.
- Select the Epic
- Scroll down to the Visualize link

<img src="https://support.aha.io/hc/en-us/article_attachments/210401003/Aha-dependency-map-visualize.png"><br>

- Click the target icon to center on that Epic, and the arrow icons on a dependency to see the depenencies for your dependencies

<img src="https://www.aha.io/assets/aha-interactive-dependency-map.8ef7b8dac0912b128ec2abf312ad6f1f.gif">

> **ProTip:**
> Remember, you have to click the little "target icon" to expand and see the extended Dependencies, you'll only see the a level or two by default...
