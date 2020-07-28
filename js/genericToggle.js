(function () {
  const btns = document.querySelectorAll('.js-generic-toggle')

  Array.prototype.forEach.call(btns, btn => {
    let targetId = btn.getAttribute('aria-controls');
    let target = document.getElementById(targetId);

    if (!target) {
      btn.disabled = true
    } else {
      btn.setAttribute('aria-expanded', false);
      target.hidden = true

      let btnText = btn.innerText
      let btnTextAlt

      const toggleText = btnText.startsWith('View' || 'Show')

      if (toggleText) {
        let btnTextArray = btnText.split(' ')
        let btnTextFirst = btnTextArray[0]
        let btnTextFirstAlt = 'Hide'
        btnTextAlt = btnText.replace(btnTextFirst, btnTextFirstAlt);
      }

      btn.onclick = () => {
        let expanded = btn.getAttribute('aria-expanded') === 'true' || false

        btn.setAttribute('aria-expanded', !expanded)
        if (toggleText) {
          btn.innerText = expanded ? btnText : btnTextAlt
        }
        target.hidden = expanded
        target.classList.add('is-animating')
        setTimeout(() => {
          target.classList.remove('is-animating')
        }, 300);
      }
    }
  })
})()
