---
title: Slack - Best Practices
sidebar: tools
breadcrumb: Slack Best Practices
---
[Overview](../../../tools/slack/)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Best Practices](../../../tools/slack/best-practices)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Integrations](../../../tools/slack/integrations)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Audio & Video Calling](../../../tools/slack/slack-calls)

Slack is at its best when used as an _internally-public_ collaboration tool. As teams continue to adopt modern practices, especially [social coding](https://whitewater.ibm.com/field-guide/practices/social-coding){:target="_blank"}, [DevOps](http://calmedia.atlanta.ibm.com/agile_academy/courses/agile_devops_deployment/index.php?id=4388194968001){:target="_blank"}, and [whole-team collaboration](https://w3-connections.ibm.com/blogs/chill/entry/A_whole_team_approach_to_discovery_and_delivery?lang=en_us){:target="_blank"}, these recommended best practices become essential to supporting the transparency and cross-role collaboration that's needed to successfully deliver modern products in modern ways.


## The Dos and Don'ts of Slack

While Slack provides an informal communication channel that works to break down barriers between teams, it should still be treated as an extension of your physical work space. Everyone is expected to adhere to IBM's [Business Conduct Guidelines](https://w3-03.ibm.com/ibm/documents/corpdocweb.nsf/ContentDocsByTitle/IBM+Business+Conduct+Guidelines){:target="_blank"} while using Slack. Always keep in mind that on the other name of a screen name and avatar is a coworker.

### Do

* 3rd party tools (like Giphy) can aid in decreasing barriers to communication and increasing the sense of community in a team, but we do not curate the content. If one of these tools returns something inappropriate, please delete it.
* Encourage public over private discussion. Slack works best as a public (to IBM) archive of knowledge and communication. Moving discussions in to public forums will allow others to learn.
* Respect timezones and availability.
  * We have coworkers throughout the world in our Slack room, they may not share your timezone.
  * While Slack feels real-time when everyone is on at once, it also functions as an asynchronous communication platform; if someone doesn't respond immediately they may be busy. Don't expect an immediate response at all times
* Set up integrations to push project updates in to Slack. Work with your room's admin to do so.
  * GitHub integrations for issues updates, pull requests, comments, etc…
  * Any other tools you want to integrate with slack (e.g. for testing reports etc...)
* Try to keep the conversation to a single thread so the entire thread can be referenced as a URL in tools such as Github or Aha.

### Don't

* Don't include [IBM Confidential](https://w3-03.ibm.com/ibm/documents/corpdocweb.nsf/ContentDocsByCtryTitle/United+States~Corporate+classification+and+control+of+IBM+information+-+Frequently+Asked+Questions/){:target="_blank"} information in your communication _unless you are in a Whitewater tiered room_
* Don't use `@channel`, `@here`, or `@mention` someone unless the targets of those notifications absolutely positively must drop everything they are doing and take action against your message at that very moment. All do so regardless of timezone.
  * `@channel` will notify _everyone in a channel even if they are not logged in_
  * `@here` will notify _everyone currently logged in and active in a channel_
  * `@mention` will notify _the mentioned individual_
* Don't rely on Slack to store files indefinitely. All files that need a permanent home should be placed in [Box](http://ibm.box.com/){:target="_blank"} or [GitHub](http://github.ibm.com/){:target="_blank"}
* Don't share [Protected Health Information (PHI)](https://en.wikipedia.org/wiki/Protected_health_information){:target="_blank"}, [Personally Identifiable Information (PII)](https://en.wikipedia.org/wiki/Personally_identifiable_information), or [Sensitive Personal Information (SPI)](https://en.wikipedia.org/wiki/Sensitive_personal_information){:target="_blank"} in Slack. If you suspect PHI, PII, or SPI has been shared in Slack, unintentionally or otherwise, please immediately send an email to [Watson Security/Jericho/IBM@IBMUS](mailto:wmssec@us.ibm.com?Subject=Potential%20Security%20Incident%2C%20Watson%20Slack){:target="_blank"} and copy your manager. Indicate that a potential security incident may have occurred in the Watson Slack room. Your manager and the Watson Security Team will work together to help you determine whether an incident has occurred and, if so, what the next steps are required to remedy the incident.
  * **IMPORTANT**: Our primary concern is not to place blame or get anyone in trouble, but to determine the depth of any incidents that may occur and contain them as quickly as possible. If you see something you are unsure of, it is safer to report it to the Watson Security Team than to not do so. They are here to help protect both you and IBM. Please give the Watson Security Team your full cooperation, and please do not take any action to contain or remediate an incident unless doing so under the direction of the Watson Security Team.


### Channels

  Channels are the life-blood of Slack. Thanks to Slack Enterprise Grid, we have new options when creating public Channels. They are:

  **Public:** Public channels are shared within a single Slack Team (nothing changed for Public channels with Slack Enterprise Grid). Any member of the team can find, join, and participate in a Public channel. (e.g. http://ibm-watson.slack.com/messages/watson-cambridge)

  **Shared (Multi-Team):** Slack Enterprise Grid allows us to share Public channels with a specific set of IBM-owned Slack Teams. Ask in your #general channel how to create a Multi-Team Shared Channel.

  **Shared (IBM Global):** Slack Enterprise Grid allows us to share Public channels with every other IBM-owned Slack Team. Anyone in the company can find, join, and participate in the channel. Ask in your #general channel how to create an IBM Global Shared Channel. (e.g. http://ibm-cio.slack.com/messages/slack-at-ibm)





  **Naming Conventions**
  When discussing namespacing, the following pattern should be used, replacing `<word>` with its relevant value: `<namespace>-<channel-name>-<suffix>`. In order to support self-directed teams, open communication channels, and channel discovery, the following best practices are recommended:

  * Use as few acronyms as possible when naming channels
  * Each product should have a **public channel** where all team communication about a project takes place, namespaced in the following way:
    * [Watson Engagement Advisor](https://github.ibm.com/watson-engagement-advisor){:target="_blank"} - `wea`
    * [Watson Explorer](https://github.ibm.com/Watson-Explorer){:target="_blank"} - `wex`
    * [Watson Discovery & Exploration](https://github.ibm.com/watson-discovery-and-exploration){:target="_blank"} - `wda`
    * [Watson Services](https://github.ibm.com/watson-services){:target="_blank"} - `wdc`
    * Multiple parts of [Watson](https://github.ibm.com/Watson){:target="_blank"} - `wts`
    * WCTS - `wcts`
  * Many groups across IBM are adopting the [Spotify Squad](http://blog.crisp.se/2012/11/14/henrikkniberg/scaling-agile-at-spotify){:target="_blank"} model. It is recommended that even with this model that most product specific communication happen in a _product channel_. Rooms based on this model should adhere to the following:
    * Squads
      * Public
      * Prefixed with `<squad>`
    * Tribe
      * Public
      * Prefixed with `<tribe>`
    * Chapter
      * Public
      * Prefixed `<chapter>`
    * Guild
      * Public
      * Prefixed `<guild>`
  * When integrating aspects of [ChatOps](http://blog.crisp.se/2012/11/14/henrikkniberg/scaling-agile-at-spotify){:target="_blank"}, especially integrating Code, DevOps (test, build, and deploy), and Track & Plan notifications in to Slack, should adhere to the following:
    * All notifications must be available to everyone who has access to the product's public channel
    * Notifications should post inside the product's public channel or within a sibling public channel suffixed `int`
  * Channels meant for discussing general topics (such as `development-standards` or `whitewater`) should be **public** and not include acronyms in their name
  * Channels specific to a given site (New York, Austin, Tokyo, etc…) should be **public** and should clearly indicate what site they're associated with (in name or as a suffix to the channel).
