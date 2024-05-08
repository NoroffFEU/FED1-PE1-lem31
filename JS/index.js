
/**CONST AND EVENT LISTENERS FOR CAROUSEL ON BLOG FEED PAGE */
const buttonOne = document.querySelector('#right-arrow');
const slideOne = document.querySelector('#slide-1');
const buttonTwo = document.querySelector('#left-arrow');
const buttonThree = document.querySelector('#right-arrow-2');
const buttonFour = document.querySelector('#left-arrow-2');
const slideTwo = document.querySelector('#slide-2');
const buttonFive = document.querySelector('#right-arrow-3');
const buttonSix = document.querySelector('#left-arrow-3');
const slideThree = document.querySelector('#slide-3');

buttonOne.addEventListener('click', () => {
 
  slideOne.style.display = 'none';
  slideTwo.style.display = 'flex';
});

buttonTwo.addEventListener('click', () => {
  
  slideOne.style.display = 'none';
  slideTwo.style.display = 'none';
  slideThree.style.display = 'flex';
  
});

buttonThree.addEventListener('click', () => {
  
  slideOne.style.display = 'none';
  slideTwo.style.display = 'none';
  slideThree.style.display = 'flex';
  
});

buttonFour.addEventListener('click', () => {
  
  slideOne.style.display = 'flex';
  slideTwo.style.display = 'none';
  slideThree.style.display = 'none';
  
});


buttonFive.addEventListener('click', () => {
  
  slideOne.style.display = 'flex';
  slideTwo.style.display = 'none';
  slideThree.style.display = 'none';
  
});

// Import required elements
const navHamburger = document.querySelector('.Hamburger-menu');
const nav = document.querySelector('.navigation');

navHamburger.addEventListener('click', () => {
  if (nav.style.display === 'none' || nav.style.display === '') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
});
 
window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
});


displayNavDropdown();