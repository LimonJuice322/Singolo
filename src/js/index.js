'use strict'

import '../less/styles.less';
import '../../index.html';
import '../img/phone-vertical-mobile.png';
import '../img/phone-vertical-desktop.png';
import '../img/phone-horizontal-mobile.png';
import '../img/phone-horizontal-desktop.png';
import '../img/phone-green.png';
import '../img/services-item-1.svg';
import '../img/services-item-2.svg';
import '../img/services-item-3.svg';
import '../img/services-item-4.svg';
import '../img/services-item-5.svg';
import '../img/services-item-6.svg';
import '../img/portfolio-1-mobile.png';
import '../img/portfolio-1-tablet.png';
import '../img/portfolio-2-mobile.png';
import '../img/portfolio-2-tablet.png';
import '../img/portfolio-3-mobile.png';
import '../img/portfolio-3-tablet.png';
import '../img/portfolio-4-mobile.png';
import '../img/portfolio-4-tablet.png';
import '../img/portfolio-5-mobile.png';
import '../img/portfolio-5-tablet.png';
import '../img/portfolio-6-mobile.png';
import '../img/portfolio-6-tablet.png';
import '../img/portfolio-7-mobile.png';
import '../img/portfolio-7-tablet.png';
import '../img/portfolio-8-mobile.png';
import '../img/portfolio-8-tablet.png';
import '../img/portfolio-9-tablet.png';
import '../img/portfolio-10-tablet.png';
import '../img/portfolio-11-tablet.png';
import '../img/portfolio-12-tablet.png';
import '../img/photo-1-mobile.jpg';
import '../img/photo-1-tablet.jpg';
import '../img/photo-1-desktop.jpg';
import '../img/photo-2-mobile.jpg';
import '../img/photo-2-tablet.jpg';
import '../img/photo-2-desktop.jpg';
import '../img/photo-3-mobile.jpg';
import '../img/photo-3-tablet.jpg';
import '../img/photo-3-desktop.jpg';

const btn_menu = document.querySelector('.nav-menu__toggle');

btn_menu.addEventListener('click', function() {
  const menu = document.querySelector('.nav-menu__list');
  const nav_menu = document.querySelector('.nav-menu');

  menu.classList.toggle('nav-menu__list--hidden');
  btn_menu.classList.toggle('nav-menu__toggle--open');
  nav_menu.classList.toggle('nav-menu--open');
})

const slider = document.querySelector('.slider');
const btn_previous = slider.querySelector('.slider__btn--previous');
const btn_next = slider.querySelector('.slider__btn--next');

btn_previous.addEventListener('click', function() {
  const slide_1 = slider.querySelector('.slider__slide--red');
  const slide_2 = slider.querySelector('.slider__slide--blue');

  slide_1.classList.toggle('slider__slide--show');
  slide_2.classList.toggle('slider__slide--show');
})

btn_next.addEventListener('click', function() {
  const slide_1 = slider.querySelector('.slider__slide--red');
  const slide_2 = slider.querySelector('.slider__slide--blue');

  slide_1.classList.toggle('slider__slide--show');
  slide_2.classList.toggle('slider__slide--show');
})
