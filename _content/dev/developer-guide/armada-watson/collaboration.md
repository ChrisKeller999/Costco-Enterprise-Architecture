---
title: Armada for Watson - Collaboration
breadcrumb: Armada - Collaboration
sidebar: dev
---

<a name="slack"></a>

### Watson Slack

> **Note:** Access to cloud platform slack is no longer required. See the shared channels below....

- [#wdc-kubernetes](https://ibm-watson.slack.com/messages/C1J20B2TB){:target="_blank"} - Watson's channel where teams collaborate and share expertise around Kubernetes and Armada.
- [#armada-watson](https://ibm-watson.slack.com/messages/C531XQDC0){:target="_blank"} - A channel shared between the Watson team slack and the Containers Tribe slack where we can ask questions of the armada team and negotiate new features. Please keep the traffic to a minimum so that the Armada team can reliably know when we really need help.
- [#conductors](https://ibm-watson.slack.com/messages/C54H08JSK){:target="_blank"} - ERMs from Watson should have access to this channel so that they can interact with SREs from the Armada team.

<a name="support"></a>

### Kubernetes Cluster support

## Development and Staging support

The development and staging environments are technically "production" environments for the Armada team. However, unless there is an issue there that's blocking a critical change for Watson going to production, then we should raise issues in slack and/or in GHE.

Issues in GHE can be [created here.](https://github.ibm.com/alchemy-containers/armada/issues/new?title=&body=WATSON:%0A%0A%0A%0A%0A%0A%0A%0A%0A%0AAttention:%20@jschoudt%20@njlevier){:target="_blank"}

## Production Support

Services or applications running on the cluster will be supported by the service teams' SRE staff. NOTE: Some teams don't yet have SRE resources assigned. The dev team is the SRE team for these services.

The Cluster itself is supported by the Armada SRE (aka Conductors) team. The flow agreed to between the Watson and Armada SRE teams is depicted below. The intent is to be passing around tickets or monitoring events that are generated. We use PagerDuty for everything, so there should be no slack notification or emails flying around.

Any issue in production should be handled via PagerDuty. Instructions are in the Watson SRE wiki here:
[Instructions for Paging Out Armada SREs on call (aka Conductors)](https://github.ibm.com/watson-foundation-services/tracker/wiki/How-to-Page-Out-the-Armada-team-for-Kube-issues-in-production){:target="_blank"}

![Containers Flow](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/armada-watson/SREContainersFlow.png)
