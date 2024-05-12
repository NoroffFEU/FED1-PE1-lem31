import { regUser } from "./API/regUser.mjs";



/* Constants */

const registerForm= document.getElementById('reg-form');

const regForm= event.target;

const regFormInputs= new FormData(regForm);

const userProfile= Object.fromEntries(regFormInputs.entries());

const a = regForm.getAttribute('action');

const m= regForm.getAttribute('method');


/*EVENT LISTENERS*/

registerForm.addEventListener('submit', registerUser(event));

/*FUNCTIONS*/

function registerUser(event){
  e.preventDefault()
}


regUser(userProfile, a, m);