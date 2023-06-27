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


const link = document.querySelector('.item__link');

link.addEventListener('click', () => {
  link.classList.toggle('item__link--active');
 
});


