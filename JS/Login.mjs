
import { API_LOGIN_URL } from "./GlobalConst.mjs";

const loginForm = document.getElementById('login-form'); 

/* EVENT LISTENERS */

loginForm.addEventListener('submit', loginFormSubmit);

/* FUNCTIONS */

async function loginFormSubmit(event) {
  event.preventDefault();
  const API_URL = API_LOGIN_URL;
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(loginForm))),
    });

    const data = await response.json();
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('user', JSON.stringify(data.user));
    console.log('User Logged in', data, data.user);

    if (response.status === 200) {
      // window.location.href = '/post/edit.html';
      alert('You have successfully logged in!');
    } else {
      alert('Invalid username or password');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}


console.log (localStorage.getItem('accessToken'));



