// 'use strict'

// document.addEventListener('DOMContentLoaded', () => {


//     //hamburger
//     const burger = document.querySelector('.hamburger'),
//         right = document.querySelector('.navigation__right'),
//         itemRight = document.querySelectorAll('.navigation__link');

//     burger.addEventListener('click', () => {
//         burger.classList.toggle('hamburger_active');
//         right.classList.toggle('navigation__right_active');
//     });

//     itemRight.forEach(item => {
//         item.addEventListener('click', () => {
//             burger.classList.toggle('hamburger_active');
//             right.classList.toggle('navigation__right_active')
//         });
//     });

//     // pageup
//     const btn = document.querySelector('.pageup');

//     window.addEventListener('scroll', showBtn);

//     function showBtn() {
//         const scrollNumber = window.pageYOffset;

//         if (scrollNumber > 720) {
//             btn.classList.add('pageup__show');
//         } else {
//             btn.classList.remove('pageup__show');
//         }
//     }

//     btn.addEventListener('click', scrollTop);

//     function scrollTop() {
//         window.scrollTo({
//             top: 0,
//             left: 0,
//             behavior: "smooth",
//         });
//     }

// });