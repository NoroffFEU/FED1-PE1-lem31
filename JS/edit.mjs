
const logoutLink= document.getElementById('logout-link-edit');

//EVENT LISTENERS

//Event listener for the logout button
logoutLink.addEventListener('click', logout);



// FUNCTIONS


//Function for logging out
export function logout() {

  const accessToken = localStorage.getItem('accessToken');


 
  if(accessToken === null) {
    alert('You are already logged out!');
    return;
    
  } else if(accessToken !== null) {
    localStorage.removeItem('accessToken');
    window.location.href = '/account/login.html';
   alert('You have successfully logged out!');
   
  }

  else {
    alert('An error has occurred. Please try again.');
  }

  console.log('User logged out', accessToken);

}



 

//FUNCTION CALLS

