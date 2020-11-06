---
title: Project 4
type: project
---

{::options parse_block_html="true" /}

<header>
# {{page.title }}: Collaborative Redesign

## In Brief
Redesign a site based on the findings of your stakeholder's heuristic evaluation and use your current knowledge of HTML and Sass, along with new knowledge of static site generators, to create a responsive site based on your designs.

## Purpose
- Redesign a site in order to solve established usability issues.
- Experience collaboration with a stakeholder.
- Create a responsive design using your current knowledge of HTML and Sass.
- Develop interactive components that work across devices and for all users.
- Recognize the role of partials in creating web pages.
</header>

<section>

{: .text-push--top--md }
## Process

### Research + Planning
1. Have a [project kickoff meeting]({% link gd-431/projects/project04/kickoff.md %}) with your stakeholder
1. Create a priority guide for your homepage using [this template](https://docs.google.com/document/d/1czcdhW7hVtAKG7SbMrCKdGvYT6LQACzP8LibrAm1f0A/copy?usp=sharing){:target="_blank"}
  - Need a refresher on priority guides? See the [week 1 reading]({% link gd-431/01/reading.md %}).
  - Due date: 10/24 by midnight EST ([see in your timezone](https://everytimezone.com/s/6615b472){:target="_blank"})
  - Format: Google Doc
  - File name: **Please** use your first initial and last name (for example: `aweger`)
  - How to submit: Add your file to the **redesign-pg** folder inside our  {% include gd431-drive.md %}
1. Share the priority guide with your stakeholder in your shared Slack channel.

### Design
1. Based on your priority guide, create mobile and desktop comps for your homepage.
  - Due date: 10/29 by 4pm EST ([see in your timezone](https://everytimezone.com/s/7dad7216){:target="_blank"})
  - Format: PDF, PNG or JPG
  - File name: **Please** use your first initial and last name (for example: `aweger`)
  - How to submit: Add your file to the **redesign-comps** folder inside our  {% include gd431-drive.md %}
1. Present your comps to your stakeholder and professor to get initial sign off on the design.

### Develop
1. Follow the [setup instructions]({% link gd-431/projects/project04/setup.md %})
1. Based on your priority guide, write semantic markup for the homepage content and create HTML partials for repeated elements in your design (e.g., header, navigation, footer).
1. Do an initial code review with your professor.
  - This will confirm that your markup is in good shape and your site architecture is solid.
1. After your markup has been signed off on, create mobile-first styles for your homepage based on your comps.
1. Have a design checkin with your stakeholder.
1. Create the additional pages and elements per [requirements](#requirements).
  - You will have an additional stakeholder checkin while this work is in progress.
1. Present your finished product to your colleagues and stakeholder.

## Submission
1. Create a [pull request]({% link _learn/03_workflows/pull-request.md %}) for code review and final submission.
  - Include [PR template questions]({% link gd-431/projects/project04/pr-template.md %}) and your responses.
1. Send me a link to the pull request via Slack DM by midnight EST on 12/18 ([see in your timezone](https://everytimezone.com/s/82b9cccb){:target="_blank"}).


## Requirements
### Overall
- The design should be responsive, working on mobile devices as small as 480px wide and other devices up to 1280px wide.
- You should use Sass, not CSS, for writing your styles.
- Your code should make use of HTML and Sass partials.
- In addition to a homepage, your final site should also include:
  - A minimum of 3 interior pages, including a 404 error page
  - A web form
  - An interactive element: either an accordion or a tabbed panel

### Web form
- This form should have a minimum of three inputs (e.g., contact us, subscription, donation, order form).
- This form should use HTML5 validation.

### Interactive element
- This may use either vanilla JavaScript or jQuery.
- Must be usable with a mouse/trackpad and keyboard.
</section>

<aside>

## Schedule

{::options parse_block_html="false" /}
<dl>
<dt>Oct 15</dt>
<dd>Project introduction</dd>
<dt>Oct 22</dt>
<dd>Project kickoff meeting</dd>
<dt>Oct 23</dt>
<dd>Priority guide due</dd>
<dt>Nov 05</dt>
<!-- Pushed back one week from 10/29 for break/time off -->
<dd>Comps due</dd>
<dd>Design review</dd>
<dt>Nov 12</dt>
<dd>Initial HTML review complete</dd>
<dd>Project setup complete</dd>
<dt>Nov 19</dt>
<dd>Homepage styles complete</dd>
<dd>Design review with stakeholder</dd>
<dt>Dec 03</dt>
<dd>Stakeholder checkin meeting</dd>
<!-- <dt>Dec 10</dt>
<dd>-</dd> -->
<dt>Dec 17</dt>
<dd>Project due date</dd>
<dd>Present final project</dd>
</dl>

## Rubric
[Google Sheet example](https://docs.google.com/spreadsheets/d/e/2PACX-1vSh5-j09DkLj0Pdjwgki14cSTAYWnLl794H4yft27Fg7ijsFyz2XbBa5Od18e_z8V1KXKfzpqj2LhOT/pubhtml?gid=721762819&single=true){:target="_blank"}

</aside>
