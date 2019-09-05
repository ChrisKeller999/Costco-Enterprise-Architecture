---
title: Legal Guidance
breadcrumb: Legal
sidebar: dev
---
## Introduction

There is a wealth of information on [w3 Legal](https://w3-03.ibm.com/ibm/documents/corpdocweb.nsf/ContentDocsByTitle/Legal/){:target="_blank"} to help you with everything you could need. This page is meant to cover a few things that our Squad members deal with on a regular basis.

## Open Source

- [Participating in Open Source Projects](https://w3.ibm.com/developer/opensource/){:target="_blank"}

## Copyright Statements in Source Code

The following rules have been approved by Jeff Labaw for Watson to meet IBM copyright requirements under the [C-S 0-6045-002 standard](https://w3-03.ibm.com/standards/esisstds.nsf/0/E5FD60876972962585256999004E8A0C?OpenDocument){:target="_blank"}. Copyright years should be modified as appropriate, guidance is available in the standard.

Every  source code file that is not distributed outside of IBM must contain the following copyright statement as a comment at the top of the file:

```java
/* ***************************************************************** */
/*                                                                   */
/* IBM Confidential                                                  */
/* OCO Source Materials                                              */
/*                                                                   */
/* (C) Copyright IBM Corp. YYYY, YYYY                                */
/*                                                                   */
/* The source code for this program is not published or otherwise    */
/* divested of its trade secrets, irrespective of what has been      */
/* deposited with the U.S. Copyright Office.                         */
/*                                                                   */
/* ***************************************************************** */
```

Every Java source file that contains a public static void main(String[]) method (i.e. a launch-able Java program) must contain the following copyright statement as a package-visible static final variable:

```java
static final String IBM_COPYRIGHT =
"\n\nLicensed Materials - Property of IBM\n" +
"(C) Copyright IBM Corp. YYYY, YYYY. All Rights Reserved.\n" +
"US Government Users Restricted Rights - Use, duplication or " +
"disclosure restricted by GSA ADP Schedule Contract with IBM Corp.\n\n";
```

[Need details for non-java files to be covered here]

Every Java JAR file must contain a copyright file (located at META-INF/COPYRIGHT) that contains the following text:

```java
 Licensed Materials - Property of IBM

 (C) Copyright IBM Corp. YYYY, YYYY. All Rights Reserved.

 US Government Users Restricted Rights - Use, duplication or
 disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
```

[Unclear if other archives need similar]

Every source file that is distributed outside of IBM must contain the following copyright statement as close to the top of the file as practically possible (modify comment delimiter as appropriate):

```java
# *****************************************************************
#
# Licensed Materials - Property of IBM
#
# (C) Copyright IBM Corp. YYYY, YYYY. All Rights Reserved.
#
# US Government Users Restricted Rights - Use, duplication or
# disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
#
# *****************************************************************
```

For cloud offerings a good rule of thumb is if the file is part of anything that makes it into a production deployment it will likely end up being distributed outside of IBM at some point so just treat it that way now. Examples of source files that fall into this category:
- Shell or command scripts (.sh, .cmd, etc.)
- Text-based resource files (.html, .css, etc.)
- Text-based configuration files (web.xml, .properties, etc.)
- Interpreted language files (JavaScript, Python, PHP, etc.)
