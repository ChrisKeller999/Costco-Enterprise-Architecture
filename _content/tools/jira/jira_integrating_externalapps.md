---
title: Creating an OAuth Token for Integrating External Applications with Jira
sidebar: tools
breadcrumb: Creating OAuth Token for Integrating External Applications
---

# DRAFT

## Before You Begin
Watson Health (WH) development teams that want to link their applications with
the WH Jira Solution are required to configure authentication using the OAuth
standard to leverage the Jira REST Plugin Service for the WH Jira Solution. The
Jira REST Plugin Service is used to regulate external application calls to the
WH Jira Solution environment.

A common scenario for using this approach is when a WH Development
Team wants to link an external application to the WH Jira Solution
environment to automatically update Jira issue comments related to activities
performed in the context of other development tools, whether they are commercial
off-the-shelf (COTS) or home-grown tools.

**Jira OAuth References:**
- OAuth authentication with Jira Server:  [https://developer.atlassian.com/server/jira/platform/oauth/](https://developer.atlassian.com/server/jira/platform/oauth/){:target="_blank"}
-  OAuth authentication with Jira Cloud:  [https://developer.atlassian.com/cloud/jira/platform/jira-rest-api-oauth-authentication/](https://developer.atlassian.com/cloud/jira/platform/jira-rest-api-oauth-authentication/){:target="_blank"}


## Procedure

1. Download and build the Java OAuthJavaTutorialClient using the instructions
for a Jira server located [here.](https://bitbucket.org/atlassianlabs/atlassian-oauth-examples/src/master/java/){:target="_blank"}

1. Create a public/private key pair by following the "Step 1: Configuring Java" instructions [here.](https://developer.atlassian.com/server/jira/platform/jira-rest-api-example-oauth-authentication-6291692/){:target="_blank"}

1. Setup the application link in Jira using the public key and consumer key generated in the previous step.

    a) You will need to work with a WH Jira Administrator on this step.

    > **Tip:**  Contact a WH Jira Administrator by using the [#wh-jira-support Slack channel](https://ibm-watsonhealth.slack.com/messages/GFXBBCYTY/){:target="_blank"}.

    b)  You only need to create the Incoming Link. The Outgoing Link can be left as-is, unless you need Jira to make changes to your application.

1. Setup the config.properties file with the following properties:
    - *jira_home* = Base URL of your Jira instance; for example: [https://vbc-jira.watson-health.ibm.com](https://vbc-jira.watson-health.ibm.com){:target="_blank"}
    - *consumer_key* = The key that was set for the incoming link; this is "OauthKey" in the example.
    - *private_key* = The private key generated in step 2, without line breaks.

    > **Tip:** If you get an error about "PKIX Path Building Failed", you might need to import the Jira certificate into your JVM. Follow the command line directions at this link for help
1. Run the ClientMain.java class with the `requestToken` argument.

1. Go to the URL returned in the previous step to approve access. Note the verification code.

1.  Run the ClientMain.java class with the arguments `accessToken <verification_code>` where `<verification_code>` is the code granted in the previous step.

## Result
Your config.properties file is updated with an access token secret and the OAuth Access Token, and it includes the parameters needed to make authenticated calls.
