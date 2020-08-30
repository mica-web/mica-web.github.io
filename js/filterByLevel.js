var filterByLevel = {
  btns: document.querySelectorAll('.js-filter-toggle'),
  items: document.querySelectorAll('[data-level]'),
  init: function () {
    // only show intro items by default
    filterByLevel.items.forEach(item => {
      let levels = item.dataset.level;
      if (!levels.includes('i')) {
        item.setAttribute('hidden', true);
      }
    })
    // set intro button to active
    const intro_trigger = document.querySelector('[data-controls=i]');
    intro_trigger.classList.add('is-active');
    // set event listener
    filterByLevel.btns.forEach(btn => {
      btn.onclick = filterByLevel.toggle;
    })
  },
  toggle: function (objEvent) {
    let target = objEvent.target.dataset.controls;
    if (target === 'reset') {
      filterByLevel.reset();
    } else {
      filterByLevel.filter(target);
    }
  },
  filter: function (target) {
    filterByLevel.btns.forEach(btn => {
      let controls = btn.dataset.controls;
      if (controls === target) {
        btn.classList.add('is-active');;
      } else if (btn.classList.contains('is-active')) {
        btn.classList.remove('is-active');
      }
    })
    filterByLevel.items.forEach(item => {
      let levels = item.dataset.level;
      if (levels.includes(target)) {
        item.removeAttribute('hidden');
      } else {
        item.setAttribute('hidden', true);
      }
    })
  },
  reset: function (objEvent) {
    filterByLevel.btns.forEach(btn => {
      let target = btn.dataset.controls;
      if (target === 'reset') {
        btn.classList.add('is-active');
        filterByLevel.items.forEach(item => {
          item.removeAttribute('hidden')
        })
      } else if (btn.classList.contains('is-active')) {
        btn.classList.remove('is-active');
      }
    })
  },
}

filterByLevel.init();
