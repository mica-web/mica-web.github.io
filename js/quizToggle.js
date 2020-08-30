(function () {
  const btns = document.querySelectorAll('.js-quiz-toggle')

  Array.prototype.forEach.call(btns, btn => {
    const targetId = btn.getAttribute('aria-controls');
    const target = document.getElementById(targetId);


    if (!target) {
      btn.hidden = true
    } else {
      let ls = localStorage.getItem(targetId);
      if (!ls) {
        localStorage.setItem(targetId, true);
        ls = localStorage.getItem(targetId);
      }

      if (ls === 'false') {
        btn.setAttribute('aria-expanded', false)
        target.hidden = true
      } else {
        btn.setAttribute('aria-expanded', true)
      }

      btn.onclick = () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true' || false

        btn.setAttribute('aria-expanded', !expanded)
        localStorage.setItem(targetId, !expanded)
        target.hidden = expanded
      }
    }
  })
})()
