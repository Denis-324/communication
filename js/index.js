const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
   iconMenu.addEventListener('click', function () {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });

}

$(document).ready(function () {
   $(".menu__list ").click(function (event) {
      $(".menu__list,.menu__body,.menu__icon").toggleClass("_active");
   });
});


$(document).ready(function () {
   $('.slider').slick({
      arrows: false,
      dots: true,
      Infinite: true,
   });
});
 function b() {
    let btn = $('.footer__call');
    
    btn.on('click', (e) =>{
      e.preventDefault();
      $('html').animate({scrollTop: 0}, 1000);
   })
 }
b();


