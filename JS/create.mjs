import { CREATE_POST_API_URL } from "./GlobalConst.mjs";

/* CONSTANTS */
const createPostForm = document.getElementById('create-post-form'); 

/* EVENT LISTENERS */
createPostForm.addEventListener('submit', createFormSubmit);

/* FUNCTIONS */
async function createFormSubmit(event) {
  event.preventDefault();
  const API_URL = CREATE_POST_API_URL;

  const accessToken = localStorage.getItem('accessToken');
  
  try {
    const formData = new FormData(createPostForm);
   
    
  

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(formData)
 
    });

    const userData = await response.json();

    console.log(userData);

    if (response.status === 201) {
      alert('You have successfully created a post!');
    } else {
      alert('Something went wrong, please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
