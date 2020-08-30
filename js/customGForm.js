// original code from http://googleformrestyler.apixml.net/
(function (XHR) {
  var open = XHR.prototype.open;
  XHR.prototype.open = function (method, url, async, user, pass) {
    this._url = url;
    if (url.indexOf('gstatic.com') !== -1 ||
      url.indexOf('docs.google.com') !== -1) {
      url = 'https://cors-anywhere.herokuapp.com/' + url;
    }
    open.call(this, method, url, async, user, pass);
  };
})(XMLHttpRequest);

(function () {
  var script = document.currentScript ||
    /*Polyfill*/
    Array.prototype.slice.call(document.getElementsByTagName('script')).pop();
  var url = script.getAttribute('form');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function () {
    document.write(xhr.response);
  };
  xhr.send();
})();
