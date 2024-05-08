

//**CONSTANTS */

//**Constants for Nav and Hamburger menu icon */

const navHamburger = document.querySelector('.Hamburger-menu');
const nav = document.querySelector('.navigation');



/**CONSTANTS FOR CAROUSEL ON BLOG FEED PAGE */
const buttonOne = document.querySelector('#right-arrow');
const slideOne = document.querySelector('#slide-1');
const buttonTwo = document.querySelector('#left-arrow');
const buttonThree = document.querySelector('#right-arrow-2');
const buttonFour = document.querySelector('#left-arrow-2');
const slideTwo = document.querySelector('#slide-2');
const buttonFive = document.querySelector('#right-arrow-3');
const buttonSix = document.querySelector('#left-arrow-3');
const slideThree = document.querySelector('#slide-3');


/**CONSTANTS FOR SEARCH BAR */

const searchBtn= document.querySelector('.Search-Btn');
const searchBar = document.querySelector('.search-bar');


//**EVENT LISTENERS */

//**Event Listener for Nav Hamburger Icon */

navHamburger.addEventListener('click', (displayNavDropdown) );


//**Event Listener for Nav - Desktop size */

window.addEventListener('resize', (navDesktopDisplay) );

//**Event Listener for Search Button */

searchBtn.addEventListener('click', (showSearchBar) );

//**Event Listener for Search Bar Desktop */

window.addEventListener('resize', (displaySearchBarDesktop) );


//**EVENT LISTENERS FOR THE CAROUSEL ON HOME PAGE */

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



//**FUNCTIONS */

//**Function to display and close dropdown navigation menu */

function displayNavDropdown(){

  if (nav.style.display === 'none') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  };
}

//**Function to display nav as flex when screen is at Desktop size */
 
function navDesktopDisplay() {

  if (window.innerWidth > 700) {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }}


//**Function to display search bar on mobile screen */

function showSearchBar() {
  if (searchBar.style.display === 'none') {
    searchBar.style.display = 'flex';
  } else {
    searchBar.style.display = 'none';
  }
}

//**Function to display Search Bar at Desktop screen size */

function displaySearchBarDesktop() {

    if (window.innerWidth > 700) {
      searchBar.style.display = 'flex';
    } else {
      searchBar.style.display = 'none';}}


//**ALL FUNCTIONS */

navDesktopDisplay()
displayNavDropdown();