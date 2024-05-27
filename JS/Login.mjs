
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


   localStorage.setItem('accessToken', info.accessToken);
   localStorage.setItem('userInfo', JSON.stringify(userData.data));
   

    if (response.status === 200) {
      window.location.href = '../post/edit.html';
    } else {
      alert('Invalid username or password');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}







