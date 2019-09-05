---
title: PagerDuty Access
breadcrumb: PagerDuty Access
sidebar: dev
---

## Overview

PagerDuty is an incident management platform that provides reliable incident alerting via **Slack**, email, push, SMS, and phone, as well as automatic escalations, on-call scheduling, and other functionality to help teams detect and fix infrastructure problems quickly.

## Requesting a PagerDuty Account

If you are part of a team that is on an On-Call rotation supporting your service(s) or if you need to create, or otherwise modify PagerDuty alerts you will need to request a PagerDuty account through USAM. The steps you must take are listed below with screen shots to help guide you.

* Go to the [Request System Access Page](https://usam.svl.ibm.com:9443/AM/idman/AddSystemAccess){:target="_blank"}
* Search for system "USAM-PIM1-BMX"
* Click the checkbox and Submit the form

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/pager-duty/request-access.png" width=500>

* Specify your W3id as user id in the "Access using ID:" box
* Enter a Business justification for your access request
**Note:** When you see Bluemix (capital "B"), keep scrolling. 🙄
<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/pager-duty/not-this-one.png" width=250>

* Select the "bluemix" (lower case "b") group and expand it
* Click on "bluemix-pager-duty…" to expand it.
* Select the PagerDuty Privilege/Group access level based on the requirements of your job. Use the descriptions provided.

<img src="https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/pager-duty/select-access-type.png">

**Note:** "Admin" access is only granted to managers, so that narrows your choices.
* Enter a business justification based on your access needs. For example:
    1. For SRE, Dev Ops: "As a <your role> for Watson, I need access to receive and respond to alerts, as well as create, delete, configure and modify PagerDuty Services, Policies, and Schedules for all of the Watson services I am responsible for.
    2. All Others: "As a <your role>, I need access to be able to receive and respond (acknowledge, snooze and resolve) alerts for the Watson services that I am responsible for supporting.
* LICENSE POOL - in the business Justification field, specify the license pool you will be using for your license.
    - **Note**: Each Department or Tribe, now has a PagerDuty "License Pool" assigned to it.
        - If you report under Aameek Singh your License Pool is: "Watson Services Development".
        - All others - Ask your Manager - To provide you with the License Pool information that you will need to specify in the Business Justification section.
        - If you are unable to determine the License Pool information. - Contact the PagerDuty License Administrator:
            Seamus Christie
            Business Operations
            Watson & Cloud Platform
            Phone: +353-1-815-2325
            Mobile: +353-86 1742299
            e-mail: seamus_christie@ie.ibm.com

* Click "submit"

Once your PagerDuty account has been created you will receive a "Welcome to PagerDuty…" email with a link to confirm your account and login on the PagerDuty web portal.

## PagerDuty Account Basic Setup

Once you have logged in to PagerDuty, navigate to your profile and configure your email and phone numbers and any combination of methods you would like PagerDuty to use to notify you.

The choices are:

- Voice - PagerDuty will call you and Read/Speak the alert information to - You can respond via the phone key pad
- Text Message - PagerDuty sends you a text message for each alert - you can reply back to respond
- Email - PagerDuty will send you an email for each alert - There is no respond option with email.
- PagerDuty App - You can install the PagerDuty app to your Apple or Android smart phone from the Apple App Store or Android Play store.

The PagerDuty App provides the best user experience and broadest level of functionality apart from the PagerDuty Web portal. The app will self-register with the PagerDuty service when you start it and login to it with your PagerDuty credentials. It must be allowed to run in the background on your phone to listen for push notifications.
