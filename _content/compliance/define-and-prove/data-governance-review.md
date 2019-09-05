---
title: Data Governance Review
sidebar: compliance-dap
breadcrumb: Data Governance Review
---

## What needs to be done?
For Watson Health to have an enterprise listing of all data sources (assets) and data fields (dictionary) being ingested into offerings. Asset Inventory: to capture information about the sources of data used in an offering for a client (description, type, purpose, subject, PI/SPI, frequency, location, owner, provider, etc.). Obtain corresponding Data Dictionary for each source or data elements. Load into Watson Health’s Enterprise IGC (Information Governance Catalog) to facilitate regulatory reporting, researcher or data scientist the ability to search for data, Governance based on contractual usage rights.

## How do I get started?
Initially OM with Arch/DEV with Data Governance team and then must maintain manually with assistance from Com Ops or enable automated maintenance process.

### Step by step
1. Gather list of data sources either manually or using an automated tool; aligns with ICTQ and GDPR Triage data flow map (from point of data sourcing/ingestion thru target), update in [Asset Inventory template](https://ibm.ent.box.com/file/318476212419){:target="_blank"}
2. Include a data dictionary (see [data dictionary template](https://ibm.ent.box.com/file/318476212419){:target="_blank"}) for each source containing the data elements and associated information (name, definition, format, personal information/type, etc.)
3. Review Asset Inventory Template & Determine Asset Inventory approach – by client or multi-tenant
4. Organize and compile AI and DD information, load information into IGC, then review and sign-off
5. Put together schedule for changes (set schedule dependent on product updates)
