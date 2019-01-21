// Based on Heydon Pickering's Inclusive Components
// https://inclusive-components.design/collapsible-sections/

(function () {
  // Get all the headings
  const headings = document.getElementsByClassName('js-trigger-content-toggle')

  Array.prototype.forEach.call(headings, heading => {
    // Give each heading a toggle button child
    // with the SVG plus/minus icon
    heading.innerHTML = `
      <button class="u-button-reset" aria-expanded="false">
        ${heading.textContent}
        <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
          <rect class="vert" height="8" width="2" y="1" x="4"/>
          <rect height="2" width="8" y="4" x="1"/>
        </svg>
      </button>
    `

    // Function to create a node list 
    // of the content between this heading and the next
    // Also stops at any element with the ignore class
    const getContent = (elem) => {
      let elems = []
      while (elem.nextElementSibling && elem.nextElementSibling.classList.contains('js-trigger-content-toggle') === false && elem.nextElementSibling.classList.contains('js-content-toggle-ignore') === false) {
        elems.push(elem.nextElementSibling)
        elem = elem.nextElementSibling
      }

      // Delete the old versions of the content nodes
      elems.forEach((node) => {
        node.parentNode.removeChild(node)
      })

      return elems
    }

    // Assign the contents to be expanded/collapsed (array)
    let contents = getContent(heading)

    // Create a wrapper element for `contents` and hide it
    let contentWrapper = document.createElement('div')
    contentWrapper.classList.add('accordion-content')
    contentWrapper.hidden = true

    // Add each element of `contents` to `contentWrapper`
    contents.forEach(node => {
      contentWrapper.appendChild(node)
    })

    // Add the wrapped content back into the DOM 
    // after the heading and inside `accordionWrapper`
    heading.parentNode.insertBefore(contentWrapper, heading.nextElementSibling)

    // Assign the button
    let btn = heading.querySelector('button')

    btn.onclick = () => {
      // Cast the state as a boolean
      let expanded = btn.getAttribute('aria-expanded') === 'true' || false

      // Switch the state
      btn.setAttribute('aria-expanded', !expanded)
      // Switch the content's visibility
      contentWrapper.hidden = expanded
    }
  })
})()
