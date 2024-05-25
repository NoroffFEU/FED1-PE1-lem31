//**CONSTANTS */

//**Constants for Nav and Hamburger menu icon */

const navHamburger = document.querySelector('.Hamburger-menu');
const nav = document.querySelector('.navigation');


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

// Event Listener for Search Bar Desktop 

window.addEventListener('resize', (displaySearchBarDesktop) );


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

  if (window.innerWidth > 800) {
    nav.style.display = 'flex';
  }
else{
  nav.style.display = 'none';
};
}


//**Function to display search bar on mobile screen */

// Function to display search bar on mobile screen
function showSearchBar() {
  if (window.innerWidth <= 800) {
    if (searchBar.style.display === 'none') {
      searchBar.style.display = 'flex';
    } else {
      searchBar.style.display = 'none';
    }
  }
}

// Function to display Search Bar at Desktop screen size 

function displaySearchBarDesktop() {

    if (window.innerWidth > 800) {
      searchBar.style.display = 'flex';
    } else {
      searchBar.style.display = 'none';}}

//**ALL FUNCTIONS */

displaySearchBarDesktop();


