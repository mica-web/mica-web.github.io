---
title: Activity
course: gd-220
quiz: false
issues: true
---

{% assign week = '10' %}

{::options auto_id_prefix='w{{week}}-' /}

{% capture wp %}
/gd-220/{{week}}/
{% endcapture %}

# Week {{week}} {{ page.title }}: Create a simple web form

{: .callout }
**Purpose:** Learn how to create form elements in HTML.

## Tasks
1. Return to your Project 1 Glitch project and remix that project.
1. Add a `footer` element below your poem.
1. Add a simple newsletter signup form inside the `footer` element.

Your form should include the following HTML elements:
- `form`
- `label`
- at least one `input` (for the email address)
- `button`

Do not focus on styling the form yet; as with other activities, we have to live with the look of the default HTML while we're making sure the HTML is valid and correct before jumping into CSS.

Additionally, your form will not work -- that is, it will not submit information -- and that is okay and to be expected at this point.

## Resources
Follow along with this MDN tutorial to learn the basics of the `form` element and other HTML form elements:
1. [Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form){% include estimate.html time=11 %}
1. [How to structure a web form](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form){% include estimate.html time=14 %}
1. [Basic native form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls){% include estimate.html time=14 %}
1. [The HTML5 input types](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types){% include estimate.html time=12 %}
1. [Other form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/Other_form_controls){% include estimate.html time=12 %}

HTMLReference.io also has a page full of [examples of form elements](https://htmlreference.io/forms/).

