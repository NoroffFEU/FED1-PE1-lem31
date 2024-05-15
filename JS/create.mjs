import { CREATE_POST_API_URL } from "./GlobalConst.mjs";
import { logout } from "./edit.mjs";

/* CONSTANTS */
const createPostForm = document.getElementById('create-post-form'); 

/* EVENT LISTENERS */
createPostForm.addEventListener('submit', createFormSubmit);

document.getElementById('logout-btn').addEventListener('click', logout);

/* FUNCTIONS */
async function createFormSubmit(event) {
  event.preventDefault();
  const API_URL = CREATE_POST_API_URL;
  

  try {
    const formData = new FormData(createPostForm);
   const blogPostObject= {
    title: formData.get('title'),
  body: formData.get('body'),
  media: {
    url: formData.get('media')
  }
   }
    
    const accessToken = localStorage.getItem('accessToken');

    console.log(accessToken);

    const response = await fetch(API_URL, {
     
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(blogPostObject),

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



//Function Calls
logout();




