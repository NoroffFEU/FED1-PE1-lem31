
import { API_LOGIN_URL } from "./GlobalConst.mjs";

const loginForm = document.getElementById('login-form'); 

/* EVENT LISTENERS */

loginForm.addEventListener('submit', formSubmit);

/* FUNCTIONS */


async function formSubmit (event) {



    event.preventDefault(); 

    const loginFormData = new FormData(loginForm);
    const username = loginFormData.get('name'); 
    const password = loginFormData.get('password'); 
    const API_URL = API_LOGIN_URL;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.access_token; 

        localStorage.setItem('access_token', token);

        window.location.href = '/index.html'; 
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

 




