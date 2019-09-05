# watson-health-playbook.github.ibm.com
This repository is for The Watson Health Playbook, a GitHub Pages-based site that contains everything you need to know to run a Software Development Project
https://pages.github.ibm.com/watson-health-playbook/

It is based on the excellent [Watson Playbook](https://pages.github.ibm.com/the-playbook), which was in turn based on [Docs Starter](https://pages.github.ibm.com/jason-lengstorf/docs-starter/) by Jason Lengstorf.

# Contributing

Please refer to the [Style Guide](#style-guide) for things like referencing external sites or other pages in the playbook, and so on.

We love help! There are two kinds of changes you can contribute; tweaks, and major changes.

**Tweaks**

We've added a link to the top of every Playbook page that allows you quickly submit tweaks to that page.
- Scroll to the top of the page
- Click the link at the top of the page that says "Propose a Change"
- Once the page loads in GitHub's web UI, click the pencil icon to edit the page
- Make your tweaks
- Scroll to the bottom and add a comment, click the "create new branch" radio button, and then the "Propose File Changes button".
- You'll be brought to the "Create a Pull Request" page - click the "Create Pull Request" button.
- Someone from the Playbook Squad will review your tweak and either merge it, or get back to you about it

![edit page](https://pages.github.ibm.com/watson-health-playbook/resources/images/contributing/edit-playbook-page-in-github-web-ui.gif)

**Major Changes**

Follow [GitHub Flow](https://pages.github.ibm.com/watson/developer-guide/delivering-code/) to fork+branch+commit+pull the-playbook/the-playbook.github.ibm.com in your personal account. When creating your branch in your fork make sure to branch from `master`.

Pages are in the _content directory

To view your changes in a locally running site:

Pre-reqs
- [Github desktop](https://desktop.github.com/)
- [Atom](https://atom.io/)
    - Add useful Atom Packages:
        - GO TO: File->Settings
        - On the left bar, select "Install"
        - In the "Search packages" search for each of the following packages, and install them:
            - language-markdown
            - markdown-scroll-sync
            - markdown-writer
            - tool-bar
            - tool-bar-markdown-writer
    - Configure spell checking in Atom:
        - GO TO: File->Settings
        - On the left bar, select "Packages"
        - In the "Filter packages by name" type: "spell"
        - Select "Settings" on the "spell-check" package
        - Under the "Grammars" text field, go to the end of the line and add this: ", text.md"
            - Everything on this line should be comma separated, so be sure to include the comma right after the existing entry in the list.

- Check for Ruby installation — `ruby -v`
- [if not installed, then install Ruby](https://rubyinstaller.org/)
    - Click on the "DOWNLOAD" button.
    - Choose **Ruby Version 2.5.X WITH Dev Kit** since there likely will be incompatibilities between 2.6 and jekyll
    - **IMPORTANT:** on **Windows**, turn off your firewall temporarily so that gem can resolve to get these packages. 
    - **IMPORTANT:** on **Windows**, open a command window as **Administrator**.
    - **IMPORTANT:** on a **Mac**, Ruby is likely already installed, so you likely can just try to install the following in a command window.
    - Install Ruby Gem Jekyll — `sudo gem install jekyll` (note: on Windows, you don't need sudo)
    - Install Ruby Gem Bundle — `sudo gem install bundle` (note: on Windows, you don't need sudo)

Click the Clone button above and then Open in Github desktop

_**Change to the directory where you cloned the project**_

- type `bundle install`
    - If you get an error, try updating the bundle gem by running `bundle update --bundler`
- type `bundle exec jekyll serve`
- Page is served here http://127.0.0.1:4000/

- If you get any errors, follow the prompts to install any missing dependencies
- If images do not show up, you likely will need to open up the LIVE playbook to log in using w3id credentials and get a token. This will enable you to access the images. All images are in a separate repository on the live GitHub site.

**DO NOT USE THE MARKDOWN EDITOR TYPORA - IT IS NOT APPROVED BY IBM SECURITY**

**Note:**
- Search is set up to _only search Production_ - don't expect to see your changes show up in the search index while testing locally

AND

- Search index needs to be manually updated by running the generate-search-index.py script in the scripts directory (run it _in_ the scripts directory please)

# Style Guide

The following should always be followed when editing pages in order to keep the consistency of the playbook:

## Links

### External Links
On any given page, links should always open a new browser. In markdown, you can add the

<pre><code>{:target="_blank"}</code></pre>

tag to the end of a link. For example:

<pre><code>
[MethodWeb](https://w3-01.ibm.com/services/methodweb/MethodWebUMF/index#/home){:target="_blank"}
</code></pre>

### Local Links
On any given page, a link to a page that exists locally to the playbook should use relative links, and also should NOT open in a new browser window.

You will need to examine where you are in the folder structure in order to correctly link to the page. For example:

<pre>
<code>[PDP](../../../dev/define-and-prove/create-proj-dev-plan/)
</code></pre>

### Linking to headings in the same page
Do not use absolute or relative links when linking to a heading in the same page. Instead just link to the local heading in the following manner:

<pre><code>
[Style Guide](#style-guide)
</code></pre>

If there are spaces in the heading, replace them with a dash "-", and reduce everything in the heading to lowercase.

### Context Bar links
The context bar is controlled by YAML files under the **"/_data/sidebar_links/"** folder.

Each page in the Playbook can designate a specific **".yml"** file to configure links that are relevant to that page.

Which **".yml"** file is specified by the **"sidebar:"** variable in the front matter of the page.

For example:

<pre><code>
---
title: Market Opportunity and Approach
sidebar: dev-moa
breadcrumb: Market Opportunity (Dev)
---
</code></pre>

This specifies that a **dev-moa.yml** file should exist in the _data/sidebar_links/ folder, and Jekyll will attempt to find a corresponding dev-moa.yml file in that location.

#### Context Bar YAML file

In the example above, the dev-moa.yml file looks like this:

<pre><code>
dev-guild:
  title: Development Guild
  icon: compass
  external:
  - name: Watson Cognitive Catalog
    url: https://watsonpow01.rch.stglabs.ibm.com/services/cognitive_catalog/catalog/
  - name: IBM Tech blog
    url: https://www.ibm.com/w3-techblog/
  pages:
  - /dev/developer-guide/coding-standards-basics/
  - /dev/planning-and-tracking-work/ongoing-delivery/
  - /dev/common-services/non-functional-reqs/
  - /dev/continuous-delivery/index/
  - /dev/developer-guide/legal-guidance/
  - /dev/cloud-trans-guild/cloud-transformation/
next-phase:
  title: Next Phase
  icon: compass
  pages:
  - /dev/define-and-prove/index/
see-also:
  title: See also...
  icon: info
  external:
  - name: How will data live in the IBM Cloud
    url: https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/Wa0a1d43ca7a0_4fff_87ff_04006c762969/page/Data%20Governance%20Team%20Member
tools:
  title: Tools
  icon: wrench
  pages:
  - /tools/aha/
  - /dev/planning-and-tracking-work/getting-organized/#create-your-organizational-structure-in-aha
  - /tools/jira/
  - /tools/github/
  - /tools/cognitive-architect/
resources:
  title: WH Resources
  icon: info
  external:
  - name: Community
    url: https://w3-connections.ibm.com/communities/service/html/communityoverview?communityUuid=902efee5-3b0e-4cc3-890f-5b4ba4192f58
  - name: Blog
    url: https://w3-connections.ibm.com/blogs/902efee5-3b0e-4cc3-890f-5b4ba4192f58?lang=en_us
  - name: Brand
    url: https://watsonbrandtool.mybluemix.net/
  - name: WH Design Pattern & Asset Library
    url: https://pages.github.ibm.com/Watson-Health/design-system/index.html
  - name: WH Compliance Training wiki
    url: https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W6a642739bb36_44d9_90cd_f2ec86efebbe/page/Training%20%26%20Document%20Control
  pages:
  - /support/wh-glossary/
  - /support/onboarding/
  - /tools/index/
  - /compliance/regulatory-considerations/
about:
  title: About The WH Playbook
  icon: info
  pages:
  - /about/index/
  - /about/nav/
  - /about/faq/
</code></pre>

You can name each section whatever you want, however it must be a unique name within the file. The key variables are broken out like so:

- **title:** the name of the section on the context bar.
- **pages:** a local link to a LOCAL page in the Playbook.
- **external:** consists of a **name:** and a **url:** variable. The **name:** is the display name of the link, and the **url:** is the external link.
- **icon:** this is a pre-defined icon, these have specific names and are defined in the template.

For more information on these sidebar YAML files, you can go to the [Jekyll navigation tutorial](https://jekyllrb.com/tutorials/navigation/)

## Folders

**_DO NOT:_**
- Rename folders, as there could be be integrations with tooling that would break if the folder names change!
- Move folders, for the same reason above.
- Delete folders, for the same reason above.
- Create new folders for only a single file. Remember, adding a new folder increases the length of the URL to the file.
- Create new folders OUTSIDE of the **_content** root folder

The ONLY time you can do any of the above, is if you fully understand the impact to the tooling (Aha! and Jira) integrations that you could be impacting when you make this change. Changing the wrong file means you also have to change the link in the tools to match!

**_DO:_**
- Create new folders, but you must follow the folder structure rules:
    - Only create new folders under an existing sub-domain such as "dev," "compliance," "om," or "design." If a new root level folder is needed, work with the site admin to create the appropriate directory structure.
    - Keep the folder names lowercase
    - Replace spaces in a folder name with dashes "-" between words: e.g. **"folder-name"**
    - Keep the folder names very short if possible (remember folders created under **_content** are IN THE URL PATH)

## Files

**_DO NOT:_**
- Rename files, for the same reasons as [Folders](#folders)
- Move files, for the same reasons as [Folders](#folders)
- Delete files, for the same reasons as [Folders](#folders)
- Create new files OUTSIDE of the **_content** root folder.
- Create new files in the ROOT of the **_content** folder.

**_DO:_**
- Create new files, but you must only create them in the domain folder that you are responsible for (such as "dev," "compliance," "om," or "design.")
- Keep file names lowercase
- Replace spaces in a file name with dashes "-" between words: e.g. **"file-name"**
- Keep file names very short (remember folders created under **_content** are IN THE URL PATH)
- In a situation where you are creating multiple files in a new sub-folder, create an index.md and index.html. The index.html should point to the index.md. This will mean that you will have a default index page in the sub-folder. The content of the index.html would look like the following:

Examples:

The index.md file is in the "dev" directory, and you want to force the loading of the default index.md file like so:

```html
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=../dev/index">
  </head>
  <body></body>
</html>
```
- use the index.md file in a sub-folder to provide links to the other files in the sub-folder. Usually this would be a larger topic that you want to break up into smaller files.

## Top-level index Pages

There are two levels of decomposition of content in the Playbook. The first level is controlled by the main **"index.md"** file localed in the ROOT of the **"_content"** folder. The second level is in the root of the sub-directory that represents the "domain" folders, such as "dev, compliance, design, om...", and each of these also contain an **"index.md"** that is structured the same as the top-level **"index.md"** file.

The buttons in each of these pages, are controlled by a set of includes located in the **"/_includes"** folder.

For example, to display 3 buttons across with icons, you would create a section like this in your page:

<pre><code>
{% include banners-3-col-with-images.html
    b1_title="Why"
    b1_subtitle="The Watson Health Mission"
    b1_img="https://pages.github.ibm.com/watson-health-playbook/resources/images/homepage/standup.png"
    b1_img_size="76px"
    b1_button="Learn More"
    b1_link="/foundation/why/index/"

    b2_title="Who"
    b2_subtitle="Players, Roles, Responsibilities"
    b2_img="https://pages.github.ibm.com/watson-health-playbook/resources/images/homepage/who-we-are.svg"
    b2_img_size="26px"
    b2_button="Learn More"
    b2_link="/foundation/who/index/"

    b3_title="What"
    b3_subtitle="Key Practices, OM Model, Portfolio Management"
    b3_img="https://pages.github.ibm.com/watson-health-playbook/resources/images/homepage/tribe.png"
    b3_img_size="56px"
    b3_button="Learn More"
    b3_link="/foundation/what/index/"
%}
</code></pre>

The **"banners-3-col-with-images.html"** is key to specifying the configuration for the buttons in the page.

If there are only two buttons to show on a line, then use the **"banners-2-col-with-images.html"** and configure it similar to the following:

<pre><code>
{% include banners-2-col-with-images.html
    b1_title="WHD Pattern & Asset Library"
    b1_img="https://pages.github.ibm.com/watson-health-playbook/resources/images/homepage/design-guide-black.png"
    b1_button="Learn More"
    b1_external="true"
    b1_full_link="https://pages.github.ibm.com/Watson-Health/design-system/index.html"

    b2_title="Design Resources"
    b2_img="https://pages.github.ibm.com/watson-health-playbook/resources/images/homepage/design-guide-black.png"
    b2_button="Learn More"
    b2_link="/design/guide/"
%}
</code></pre>

And if there is only a single button on a line, then use **"banners-1-col-with-images.html"** and configure it similar to the following:

<pre><code>
{% include banners-1-col-left-with-images.html
    b1_title="Sense & Respond"
    b1_img="https://pages.github.ibm.com/watson-health-playbook/resources/images/homepage/hills_24.svg"
    b1_button="Learn More"
    b1_link="/design/sense-and-respond/"
%}
</code></pre>

### Button images

For each of the above buttons, it is highly recommended that if you create your own buttons, that you create them all the same size. If there is a discrepancy between the button sizes, then the button bar will not look consistent. One way to fix that, is to add the **"bN_img_size=Xpx"** setting to the button, for example:

<pre><code>
{% include banners-3-col-with-images.html
    b1_title="Why"
    b1_subtitle="The Watson Health Mission"
    b1_img="https://pages.github.ibm.com/watson-health-playbook/resources/images/homepage/standup.png"
    b1_img_size="76px"
    b1_button="Learn More"
    b1_link="/foundation/why/index/"

    ...
%}
</code></pre>

In the above example, the line **b1_img_size-"76px"** will scale the image in **b1_img=...** to have a width of 76 pixels. This is a good tool that can be used to "tweak" a button image to make it look the same as all the other images.

## Breadcrumbs

Breadcrumbs are automatically generated based on the URL location of the page. However, the final name of the breadcrumb is designated in the front matter of the page, for example:

<pre><code>
---
title: Market Opportunity and Approach
sidebar: dev-moa
breadcrumb: Market Opportunity (Dev)
---
</code></pre>

You can see the variable **"breadcrumb:"** which contains a more readable and perhaps more descriptive name for the page to use in the breadcrumb. Therefore, when the page is viewed, the breadcrumb would look like so:

<pre><code>
Top / Dev / Market Opportunity / Market Opportunity (Dev)
</code></pre>

Be sure that every page you create contains the breadcrumb variable for consistency.
