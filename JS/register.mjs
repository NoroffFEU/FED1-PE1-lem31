import { API_REG_URL } from "./GlobalConst.mjs";

/* Constants */
const regForm = document.getElementById('reg-form');

/* EVENT LISTENERS */

regForm.addEventListener('submit', regFormSubmit);

/* FUNCTIONS */

async function regFormSubmit(event) {
  event.preventDefault();
  const regFormData = new FormData(regForm);
  const formDataObject = Object.fromEntries(regFormData);
  const API_URL = API_REG_URL;
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObject),
    });

    // const data = await response.json();
  

    if (response.status === 201) {
      alert('You have successfully registered an account!');
      window.location.href = 'login.html';
    } else {
      alert('Something went wrong, please try again.');
    }
 
  } catch (error) {
    console.error('Error:', error);
  }
}













