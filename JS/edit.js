


//EVENT LISTENERS
document.getElementById('logout-btn').addEventListener('click', logout);



// FUNCTIONS
function logout() {

  const accessToken = localStorage.getItem('accessToken');

  localStorage.removeItem('accessToken');

  window.location.href = '/account/login.html';

  if(accessToken === null) {
    alert('You have successfully logged out!');
  }
  else {
    alert('An error has occurred. Please try again.');
  }
}