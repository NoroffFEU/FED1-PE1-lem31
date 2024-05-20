import { API_FETCH_POSTS_URL } from "./GlobalConst.mjs";



/* CONSTANTS */
const createPostForm = document.getElementById('create-post-form'); 
const logoutLink= document.getElementById('logout-link');

/* EVENT LISTENERS */
createPostForm.addEventListener('submit', createFormSubmit);

logoutLink.addEventListener('click', logout);

/* FUNCTIONS */
async function createFormSubmit(event) {
  event.preventDefault();
  const API_URL = API_FETCH_POSTS_URL;
  

  try {
    const formData = new FormData(createPostForm);
   const blogPostObject= {
    title: formData.get('title'),
  body: formData.get('body'),
  media: {
    url: formData.get('media')
  }
   }
    
    const accessToken = sessionStorage.getItem('accessToken');

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


function logout() {

 
  const accessToken = sessionStorage.getItem('accessToken');


 
  if(accessToken === null) {
    alert('You are already logged out!');
    return;
    
  } else if(accessToken !== null) {
    sessionStorage.removeItem('accessToken');
    window.location.href = '../account/login.html';
   alert('You have successfully logged out!');
   
  }

  else {
    alert('An error has occurred. Please try again.');
  }

  console.log('User logged out', accessToken);

}



//Function Calls





