---
title: Branching (DRAFT 3)
breadcrumb: Branching
sidebar: dev
---

Teams in Watson follow [GitHub Flow](https://guides.github.com/introduction/flow/){:target="_blank"} when delivering code. Fork & Clone > Branch > Commit > Pull Request. Pull Requests are reviewed [**and merged**](merging) by another Squad Member so we can ensure we comply with [**separation of duties**](https://en.wikipedia.org/wiki/Separation_of_duties){:target="_blank"} rules.

This page will focus on organizational Best Practices around the second part of the flow: **Branching** and [GitHub Releases](https://help.github.com/articles/creating-releases/){:target="_blank"}

## Overall Strategy

Now that we need to deal with different deployment targets, we must be very clear about how we manage branching. As Product / Service Teams target IBM Cloud Public as their default, we need a strategy for how to deal with IBM Cloud Private (for those Product / Service Teams that deliver there). We collected data about how others deal with similar challenges. We're taking a page out of GitHub's own Playbook for our strategy.

- IBM Cloud Public is the default deployment and updated weekly (at a minimum)
- IBM Cloud Private deployable images are made available Quarterly (at a minimum)
- Emergencies are deployed to all targets in lock step - full deploys, no patching
- [GitHub Releases](https://help.github.com/articles/creating-releases/){:target="_blank"} are used when we release so we can always get back to a point in time (to deal with Security Updates). [Semantic Versioning](https://semver.org){:target="_blank"} should be used for all GitHub Releases


This strategy follows the "spirit" of the "(Almost) Single Source with Dual Packaging" declaration from the [Watson on ICP Manifesto](https://ibm.ent.box.com/s/eocled9gh4jl927hitkoorj57b62i49u){:target="_blank"}.

> **Note:** All diagrams should be _scaled_ to match the release cadence of your Product. They depict a Weekly Release Train for Public and a Quarterly Release Train for Private.

## Required Branches

### IBM Cloud Public

#### Master

- The 'As Is'. For all of our teams, `master` should be what's currently deployed in IBM Cloud Public.
- All Tests Must Pass. Your `master` branch must be deployable at all times
- For those teams using a Weekly Release Train model, `master` is updated from `develop` every Wednesday
or
- For those teams practicing Continuous Delivery, `master` is updated from `develop` continuosly

#### Develop

- If `master` is the 'As Is', `develop` is the 'To Be', `develop` is what will be deployed next to IBM Cloud Public
- All Tests Must Pass. Your `develop` branch must be deployable at all times
- For those teams using a Weekly Release Train model, push `develop` to `master` on Wednesdays. **Never deploy on Fridays**.
- For those teams practicing Continuous Delivery, push `develop` to `master` when all tests have passed.

#### Weekly Release Train Model

![Branching - Update master from develop every Wednesday](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/branching/develop-to-master-weekly.png)

#### Fork & Branch

- Squad Members fork off `develop` and create short-lived branches and follow [GitHub Flow](https://guides.github.com/introduction/flow/){:target="_blank"}

![Branching - Squad Members follow GitHub Flow - image from github.com](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/branching/github-flow.png)

> **ProTip:** Short term means short term. According to some of the [best industry books](https://www.safaribooksonline.com/library/view/continuous-delivery-reliable/9780321670250/){:target="_blank"} (and some of our [favorite colleagues right here at IBM](http://w3.blueprint.sby.ibm.com/b_dir/blueprint.nsf/url/AB291383?OpenDocument){:target="_blank"}), those that **excel** at this are committing many times a day, having each (tiny) commit reviewed quickly, and opening a PR with all of the commits every day...

#### Aspirational Goals for branching

If we were to directly copy how GitHub works, then we wouldn't even have a `develop` branch. All changes would go in `master` and `master` would be deployed on every change. We recognize this is _aspirational_ for many product teams today, this is how they work at GitHub, and it's what **all teams** should be aspiring to achieve...

### IBM Cloud Private

For those Products / Services / Solutions that are delivering deployable content to IBM Cloud Private, we will follow the industry standard pattern that GitHub uses for updating GitHub Enterprise from the GitHub Public codebase.

> **At least once a quarter**, IBM Cloud Private will be updated with the latest codebase that's already deployed in IBM Cloud Public. [GitHub Releases](https://help.github.com/articles/creating-releases/){:target="_blank"} will be used to tag each update so that teams can get back to that point if needed (for security updates).

#### Quarterly Release Train Model

#### icp-master

- On the last Tuesday (of the last full week) of the Quarter, `icp-staging` is pushed to `icp-master`
- For all of our teams, `icp-master` should equal the latest release for IBM Cloud Private
- All Tests Must Pass. Your `icp-master` branches should be deployable at all times
- Create a GitHub release for `icp-master` (note: your CI/CD automation may do this for you)

#### icp-staging

- On Wednesdays, `icp-staging` is updated from `master`
    - **Two full weeks** before the end of the Quarter, updates to `icp-staging` are switched off
- All Tests Must Pass. Your `icp-staging` branch should be deployable at all times
- All Teams should merge `icp-staging` to `icp-master` on a quarterly basis (at a minimum)
    - For those Products releasing on a quarterly basis, Releases are expected at the end of the Quarter

![Branching - Update icp-staging from master every Wednesday and update icp-master every quarter](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/branching/public-to-private-quarterly.png)

### Security Vulnerabilities (IBM Cloud Public)

- For those teams following the Weekly Wednesday Release Train model, most security vulnerabilities can be patched during the Release Trains
- Code Blue Vulnerabilities must be merged in this order:
    - `master` then `develop`
    - This allows us to fix the emergency in IBM Cloud Public immediately and ensure that it will be included in the next Weekly Wednesday Release Train

- For those teams practicing Continuous Delivery, just commit the security update to `develop` and then it will flow into `master` and into Production


### Security Vulnerabilities (IBM Cloud Private)

#### Security Updates for the Quarterly Pattern

- Most customers will expect **monthly** updates where security vulnerabilities can be patched. New features are not allowed during monthly security updates
    - Set your `icp-master` branch to the last GitHub Release Tag.
    - Monthly security updates must be merged into `icp-master` after automated validation
    - Create a GitHub release for `icp-master` (note: your CI/CD automation may do this for you)
- `icp-staging` will be fed from `master` every week, so security updates delivered to `master` will automatically flow in.

> **Note:** Code Blue Vulnerabilities follow the exact same pattern that's used for monthly security updates.

Yes, this means that security vulnerabilties must be committed to multiple branches. To deal with this, all Teams should use pull requests and have a small group of committers for `icp-master`

### Small Group of Committers

- Each Team must restrict who can merge commits to `icp-staging` and `icp-master`
- This ensures that we don't accidentally deploy new features into IBM Cloud Private mid-quarter (for those Teams releasing Quarterly)
- `icp-staging` is almost exclusively used as a "shakedown" branch. Human beings should not be committing changes to `icp-staging`

#### Aspirational Goals for ICP Releasing

At least one of our Service Teams already out on IBM Cloud Private is updating Monthly and they aspire to move to bi-weekly. We recognize that this is aspiration for many of our Product Teams (and customer wishes). Please understand that you may have flexibility with your release cadence. Work with your Offering Manager to understand what boundaries you have...

## N-3

What does N-3 even mean in this new world?

The answer is, unfortunately, _it depends_.

For **most** Product Teams, we're asserting that this means that we allow customers to upgrade to the latest release from N-3 releases back (instead of having to upgrade to each release as it comes out).

We are not commiting to providing security updates for older Releases. If you want security updates, you must upgrade.

The current thinking is to to use git tags (or GitHub Releases) to mark each release to IBM Cloud Private (Quarterly and any periodic updates for security updates).

Where does _it depends_ come into play? We don't yet know. Based on our collective experience, we've all been in situations where a customer was promised something special.

To keep things as simple as possible, the preference is to minimize branches and solve for the main use cases, rather than the edge cases.

This use case will likely be the most contentious one. We welcome your comments and ideas...

## IBM Cloud Dedicated

- Dedicated Deployments should be updated in lock step with IBM Cloud Public.
- Dedicated Deployments are deployed from `master`

## Watson CI/CD

To ease the burden on Product Teams, unattended automated deployments are an absolute requirement. Get started with [Conan the Deployer here](ci-cd).
