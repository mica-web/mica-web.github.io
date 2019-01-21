const text = document.getElementById("js-point1"),
  figure = document.getElementById("js-point2"),
  spacer1 = document.getElementById("js-spacer1"),
  spacer2 = document.getElementById("js-spacer2");
var timer,
  delay = 100,
  throttled = false;

function textWrap() {
  if (window.matchMedia("(min-width: 560px)").matches) {
    // smaller than this and we're in a 1col layout and no extra math needed
    let p1 = text.offsetTop,
      p2 = figure.offsetTop,
      colW = text.offsetWidth,
      figW = figure.offsetWidth,
      h = p2 - p1,
      w = figW - colW;

    if (colW < figW) {
      spacer1.setAttribute("style", "height:" + h + "px");
      spacer2.setAttribute("style", "height: calc(100% - " + h + "px); width:" + w + "px");
    } else {
      // the figure fits inside the column, no extra fuss!
      spacer1.removeAttribute("style");
      spacer2.removeAttribute("style");
    }
  }
}

// window.resize event listener
window.addEventListener('resize', function () {
  if (!throttled) {
    textWrap();
    throttled = true;
    setTimeout(function () {
      throttled = false;
    }, delay);
  }
  clearTimeout(timer);
  timer = setTimeout(textWrap, delay);
});

textWrap();
