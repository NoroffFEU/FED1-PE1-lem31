
import { API_LOGIN_URL } from "./GlobalConst.mjs";

const loginForm = document.getElementById('login-form'); 

/* EVENT LISTENERS */

loginForm.addEventListener('submit', loginFormSubmit);

/* FUNCTIONS */
async function loginFormSubmit(event) {
  event.preventDefault();
  const API_URL = API_LOGIN_URL;
  const loginFormData= new FormData(loginForm);
  const formDataObject = Object.fromEntries(loginFormData);
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObject),
    });

    const userData = await response.json(loginForm);
     
    const info = userData.data;


   sessionStorage.setItem('accessToken', info.accessToken);
   sessionStorage.setItem('userInfo', JSON.stringify(userData.data));
    console.log('User Logged in', info.accessToken, userData.data);

    if (response.status === 200) {
      window.location.href = '../post/edit.html';
      alert('You have successfully logged in!');
    } else {
      alert('Invalid username or password');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}






console.log (sessionStorage.getItem('accessToken'));

console.log (sessionStorage.getItem('userInfo'));


