$(document).ready(function () {
  let hBtn  = document.querySelector('#h__btn');
  let nav   = document.querySelector('#top-nav');
  let close = document.querySelector('#top-nav');
  let lock  = document.querySelector('body');

  hBtn.addEventListener('click', function () {
    nav.classList.add('active');
    lock.classList.add('lock-scroll');
  });
  
  close.addEventListener('click', function () {
    nav.classList.remove('active');
    lock.classList.remove('lock-scroll');
  });
});