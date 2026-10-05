document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.menu-button');
  var nav = document.querySelector('.main-nav');
  if (button && nav) {
    button.addEventListener('click', function () {
      var expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
