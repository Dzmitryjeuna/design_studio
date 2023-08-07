const menuBtn = document.querySelector('.burger');
const menu = document.querySelector('.nav__items');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
 
});

const btn = document.querySelector('.burger');
const nav = document.querySelector('.nav__items');

btn.addEventListener('click', () => {
  nav.classList.toggle('menu-open')
});


const links = document.querySelectorAll('.item__link');

links.forEach((link) => {
  link.addEventListener('click', () => {

  links.forEach((otherLink) => {
    if (otherLink !== link) {
      otherLink.classList.remove('item__link--active');
    }
  });

    link.classList.toggle('item__link--active');
  });
});  


$(function () {
  $('.work__items').slick({
    slidesToShow: 1,
    mobileFirst: true,
    arrows: false,
    dots: false,
    infinite: false,
    // centerMode: true,
    variableWidth: true,
    responsive: [
      {
          breakpoint: 600,
          settings: "unslick",
      }
  ]
  });
});

