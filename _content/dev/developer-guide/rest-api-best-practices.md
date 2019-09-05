---
title: REST API Best Practices Guide
template: _layout.html
sidebar: dev
breadcrumb: REST Best Practices
---

# Introduction
This document contains guidance on the best practices for Watson Health APIs and the source of the standards on which they are based.  The main standard to follow is documented in the [Cloud and Watson System Architecture](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/service_interfaces.html){:target="_blank"}.  This one has the final word. The other documents listed conform to this one.  This document provides specific instruction to help with boiling down the guidelines or where there is ambiguity or differences.


# Standard Sources

It is important that all Watson Health and in particular our Watson Health Cognitive Services have a consistent interaction approach and look and feel the same.  We are all part of the overall IBM API experience and are often going to be used with the cognitive Watson Developer Cloud services.  Therefore there is a hierarchy of sources of service API standards being referenced by Watson Health as best practices.  From top to bottom these are:

   1. [Cloud and Watson System Architecture](https://pages.github.ibm.com/CloudEngineering/system_architecture/guardrails_standards/service_interfaces.html){:target="_blank"}  Primary source for standards.

   2. SmartCloud Exchange's API best practices - Refer to the [API Best Practices document](https://w3-connections.ibm.com/communities/service/html/communityview?communityUuid=2bc0976d-bbeb-4bae-acf2-568c2c525f17#fullpageWidgetId=Wec32a5e50d5a_4af5_afb1_f2ae20fa131b&file=bc6633cc-1d16-40b4-a043-7f64ea42f700){:target="_blank"} found in the [API Best Practices Community](https://w3-connections.ibm.com/communities/service/html/communityoverview?communityUuid=2bc0976d-bbeb-4bae-acf2-568c2c525f17){:target="_blank"} of the SmartCloud Exchange Community.  SmartCloud Exchange is an IBM initiative run by the CTO.

   3. Watson Developer Cloud (WDC) best practices - Refer to the [README.md](https://github.com/watson-developer-cloud/api-guidelines/blob/master/README.md){:target="_blank"} found in the [Watson Developer Cloud Github project](https://github.com/watson-developer-cloud/api-guidelines/){:target="_blank"}.

   4. IBM Cloud development guidelines for APIs - [https://console.stage1.bluemix.net/docs/developing/api/handbook-fundamentals-headers.html#headers](https://console.stage1.bluemix.net/docs/developing/api/handbook-fundamentals-headers.html#headers){:target="_blank"}

   5. Watson and cloud API handbook [https://pages.github.ibm.com/CloudEngineering/api_handbook/](https://pages.github.ibm.com/CloudEngineering/api_handbook/){:target="_blank"}

   6. Watson Health best practices - Refer to the [Best practices and guidelines](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wa82025236eb9_4217_a434_ca40a0820057/page/Complete%20Initial%20Education%20on%20WH%20Services%20Standardization?section=1.%20API%20best%20practices){:target="_blank"} in the Secure Cloud Solution for Healthcare wiki. (contact Anca Sailer for access)

See also this blueprint talk on a workgroup that was developing cloud/Watson wide guidelines on API best practices : [http://w3.blueprint.sby.ibm.com/b_dir/blueprint.nsf/url/AB238985?OpenDocument](http://w3.blueprint.sby.ibm.com/b_dir/blueprint.nsf/url/AB238985?OpenDocument){:target="_blank"}.  The current output of this workgroup is captured in the Watson/cloud API handbook here: [https://pages.github.ibm.com/CloudEngineering/api_handbook/ ](https://pages.github.ibm.com/CloudEngineering/api_handbook/){:target="_blank"}

You'll notice it doesn't capture everything (most things?) that were in the SmartCloud or WDC guidelines so it seems to augment it w/ things like paging, etc and overlaps with other areas.


# Specifics (Items of particular note)
## Data model guidelines

1. Complex data models should start with an XML schema.  From this, the java beans should be created and the object factory should be extended and used as needed.  Refer to service-container-model as an example.


## Liberty guidelines

1. The Liberty shared resources location should not be used.  Instead the /watson/build/resources location should define the resources and manifest-resources.xml should be utilized.  Refer to service-oncology-concept as an example.

2. Customizable service configurations must use the artifact store service for coordinating configurations in a multi-hosted environment.


## Swagger guidelines
### General

1. Expand acronyms the first time they are used in text.
	Example: ...Unified Medical Language System (UMLS)... then use UMLS for future references.

2. APIs are grouped by similar functions.
	Example: Ontology exploration has two groups, Concept expansion and Concept matching.

For reference: [https://watson-api-explorer.mybluemix.net/](https://watson-api-explorer.mybluemix.net/){:target="_blank"}

### Title/Header

1. Title is full service name with the first letter of each word capitalized.  This is displayed at the top of the swagger page and the name in the browser tab.  It's currently in two places in the source code, ServiceConstants.java (swagger) and service-constants.js (tab).
	Example: Concept Matcher Service

2. Use standard Watson Cognitive Healthcare banner on Swagger page.

### Description

1. Primary description section - At a minimum, a section on what value the service can provide to the users.
	Example:
    Advanced Care Insights Service uses healthcare annotators that accelerate natural language processing capabilities to unlock valuable information buried in unstructured data, such as physician notes, discharge summaries, and pathology reports. Healthcare annotators provide natural language processing for domain-specific insight. They identify, normalize, and code medical and social facts in unstructured content, including symptom, disease, procedures, allergies, medications, smoking status, lab results, ejection fraction, and various daily living assistance.

2. Group description section - If the API groups need more descriptions than what can fit into their descriptions, they should be expanded upon here.

3. Cross API description section - If there are specific interactions between APIs that need documentation, this section can talk about the interactions.

4. Individual APIs (query parameters, requests, replies) should only be referenced here as part of the full description, more comprehensive API documentation should be in the API's Implementation Notes, Response or Parameters.

### APIs

1. Each API must have a brief description without ending period unless multiple sentences.
   Example: Concept Expansion : Explore semantic relations of concepts

2. Provide Implementation notes with details for request and response objects.
   Example:
![Implementation Notes](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/rest-api-best-practices/implentation-notes.png "Implementation Notes")

3. Provide a response model (for Status 200) if data is returned.
   Example:
![Response Class](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/rest-api-best-practices/response-class.png "Response Class")

4. Provide Response Message annotations for each error code returned by the API.
   Example:
![Response Messages](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/rest-api-best-practices/response-messages.png "Response Messages")

5. Set defaults for all input parameters so that all the Try it out buttons will work without having to enter anything.  This may not be possible for body content (Current swagger limitation).  In that case, provide an example template of the JSON body in the description field (if practical), so it could be copied from there.
   Example:
![Input Parameter Defaults](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/rest-api-best-practices/input-parameters-defaults.png "Input Parameter Defaults")



### Footer

1. Base URL (context_root/api) and API version (version buildtime) are present and accurate at the bottom of the page.
    Example: [ base url: /services/ontology_exploration/api , api version: 1.0.0 2016-05-17T20:06:15Z ]


## API guidelines

** Represents conflicts between CTO and WDC.

### General

1. ** Major and minor service versions must be used to coordinate updates with callers.

   1. Major version is implemented as part of the API path (e.g. .../V1/...).

   2. Minor version is implemented as a required query parameter passed in on every API (e.g. **?version=2016-04-15**).

     The distinction between what is considered major and minor is somewhat subjective, but the following should be considered:

    1. How long old paths need to be supported.  Major versions may be needed if service content changes, but legacy content still needs to be made available.
    2. How intrusive the change is.  Minor versions may be used for spelling mistakes, return values, etc.
    3. What stage in the life cycle is the service in?  What may be a major change to a Beta/GA level service may be considered minor to experimental based on consumer expectations.

    Example:  An example of minor versioning is as follows.  If a service API's response to a PUT request in build 2016-04-15 was
    Response Code: 200
    and this was corrected in build 2016-04-30 to
    Response Code: 201
    then a client still passing in ?version=2016-04-15 should still receive the 200 response.  Only when the client switches to pass a later date does the response change to 201.


*  ** CTO - Use media-type for major updates.  Page 52 in best practices guide.  Per Stephen Kenna.  No recommendation for minor updates.

*  ** WDC - Use mandatory query parameter for major and minor updates.


1. Make sure to use the HTTP methods (POST/PUT/DELETE/PATCH) correctly.  Page 58 in best practices guide lists extensive information.
![Good Method Usage Example](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/rest-api-best-practices/good-method-usage-example.png "Good Method Usage Example")

2. If it makes sense to chain the service to others, it needs to use the container data model for these end points  Refer to the [Container model documentation](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W3b2cf51b5057_4dfc_bb33_c94b38742353/page/Service%20Container%20Model){:target="_blank"}.

3. Multi-tenancy - What's going to happen if multiple users are using the services and they should not access each other's configurations, artifacts?

   a. Suggestion:: Make it multi-tenant, stateless first - or understand how to run in a multi-tenant

   b. Multi-instance environment.  At some point the environment should allow for dynamic provisioning.


4. Configurations and artifacts - If shared configurations and artifacts are needed, the service should consider using the artifact service.


### Paths

1. The context root must contain the prefix "services/", followed by the service name.

2. The context root (and the IP port) can be changed when the service is deployed so don't assume they will be the same that were configured during development.

3. ** Everything in the path should use snake_case (lower case, underscores between words). including the default context root, resource paths, query parms

    * ** CTO - Use underscores for search engine optimization (SEO).  Per Stephen Kenna.
        Example: oncology_concept

    * ** WDC - Uses hyphens in the context root, underscores (snake_case) in the rest of the url
        Example: oncology-concept

4. Abbreviations should be avoided if possible (see WDC guidelines).  Some well known abbreviations may be ok.  The following have been cleared as ok.

    * config  (used by WDC in some cases already).

5. Resources should be nouns except for resources that represent algorithms (e.g. calculate, translate or convert).

     * Correct - /v1/libraries

     * Incorrect - /v1/**get** (returning libraries)

     * Incorrect - /v1/**get_**libraries

6. The path should be lower case.

     * Correct - /v1/libraries

     * Incorrect - /v1/**L**ibraries

7. Proper singular/plural noun usage must be followed.  Verbs should be avoided.  A good reference is [http://blog.philipphauer.de/restful-api-design-best-practices/](http://blog.philipphauer.de/restful-api-design-best-practices/){:target="_blank"}

     * Correct - /v1/concept**s** (Returning a list of concepts)

     * Incorrect - /v1/concept (Returning a list of concepts)

8. Parameters should avoid starting with the following.  This was taken from [https://www.w3.org/TR/html5/syntax.html#named-character-references](https://www.w3.org/TR/html5/syntax.html#named-character-references){:target="_blank"}

    AElig, AMP, Aacute, Acirc, Agrave, Aring, Atilde, Auml, COPY, Ccedil, ETH, Eacute, Ecirc, Egrave, Euml, GT, Iacute, Icirc, Igrave, Iuml, LT, Ntilde, Oacute, Ocirc, Ograve, Oslash, Otilde, Ouml, QUOT, REG, THORN, Uacute, Ucirc, Ugrave, Uuml, Yacute, aacute, acirc, acute, aelig, agrave, amp, aring, atilde, auml, brvbar, ccedil, cedil, cent, copy, curren, deg, divide, eacute, ecirc, egrave, eth, euml, frac12, frac14, frac34, gt, iacute, icirc, iexcl, igrave, iquest, iuml, laquo, lt, macr, micro, middot, nbsp, not, ntilde, oacute, ocirc, ograve, ordf, ordm, oslash, otilde, ouml, para, plusmn, pound, quot, raquo, reg, sect, shy, sup1, sup2, sup3, szlig, thorn, times, uacute, ucirc, ugrave, uml, uuml, yacute, yen, yuml

    These are HTML named characters that when preceeded by an &, can be converted to their unicode characters within URLs.  In particular this is done by swagger when displaying the curl command associated with an API.

     * Example: &sect can be converted to §
        So
        https: //watsonpow01.rch.stglabs.ibm.com/services/medical_insights/api/v1/corpora/medline/documents/1464840893990/annotations?version=2016-11-22**&sec**tion=abstract&include_text=false

        becomes
        curl -X GET --header "Accept: application/json" "https: //watsonpow01.rch.stglabs.ibm.com/services/medical_insights/api/v1/corpora/medline/documents/1464840893990/annotations?version=2016-11-22**§**ion=abstract&include_text=false"


### Request/Reply payloads

1. Unless API specifically works with another content type (e.g.: accepts an industry standard  format input), json must be the default.  For example of exception an API that takes an image as a post request as input.

2. Request/response structures must use camelCase for keys​.  Per Stephen Kenna, Health domain is standardizing around this as default.
    ​Example:

	    {
			"unstructured": [
	    {
	          "data": {
	            "concepts": [
	              {
	                "type": "com.ibm.watson.hutt.umls.QuantitativeConcept",
	                "begin": 0,
	                "end": 4,
	                "coveredText": "Test",
	                "componentId": "ConceptDetection/UMLS",

3. Camel cases must be strict.  Per Stephen Kenna.
    Example:
    IBM Bluemix should be represented as ibmBluemix (not iBMBluemix).

4. Request/response structures should use English readable values when dealing with defined sets (enums, etc).  Per Stephen Kenna.
    Example:

	    {
		    "unstructured": [
		    {
			    "data": {
				    "cancerType": "Breast Cancer",

5. Error codes should follow standard HTTP return codes.  A good reference is [http://www.restapitutorial.com/httpstatuscodes.html](http://www.restapitutorial.com/httpstatuscodes.html){:target="_blank"}
