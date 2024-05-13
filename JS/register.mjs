import { API_REG_URL } from "./GlobalConst.mjs";

/* Constants */
const regForm = document.getElementById('reg-form');

/* EVENT LISTENERS */

regForm.addEventListener('submit', formSubmit);

/* FUNCTIONS */

async function formSubmit(event) {
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

    const data = await response.json();
    console.log('User registered', data);

  
 
  } catch (error) {
    console.error('Error:', error);
  }
}





/* FUNCTION CALLS */







