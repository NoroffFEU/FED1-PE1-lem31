
import { API_LOGIN_URL } from "./GlobalConst.mjs";

const loginForm = document.getElementById('login-form'); 

/* EVENT LISTENERS */

loginForm.addEventListener('submit', loginFormSubmit);

/* FUNCTIONS */

async function loginFormSubmit(event) {
  event.preventDefault();
  const loginFormData = new FormData(loginForm);
  const formDataObject = Object.fromEntries(loginFormData);
  const API_URL = API_LOGIN_URL;
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObject),
    });

    const data = await response.json();
    localStorage.setItem('token', data.accessToken);
    console.log('User Logged in', data);

   
    window.location.href = './index.html';
  } catch (error) {
    console.error('Error:', error);
  }
}

const token = localStorage.getItem('token');

const path = location.pathname;

if(path==='/auth/login'){
  loginFormSubmit();
}else if(path==='/auth/register'){
  formSubmit();
}



 




