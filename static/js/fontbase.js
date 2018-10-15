(function() {
  var fontSize = document.documentElement.clientWidth / 37.5;

  fontSize = fontSize > 18 ? 18 : fontSize;

  document.documentElement.style.fontSize = fontSize + 'px';
})();
