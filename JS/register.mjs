import { regUser } from "./API/regUser.mjs";

/* Constants */
const regForm = document.getElementById('reg-form');





/* EVENT LISTENERS */
regForm.addEventListener('submit', registerUser);

/* FUNCTIONS */
function registerUser(e) {
  e.preventDefault();

  const regForm = e.target;
  const regFormInputs = new FormData(regForm);
  const userProfile = Object.fromEntries(regFormInputs.entries());

  regUser(userProfile);
}


