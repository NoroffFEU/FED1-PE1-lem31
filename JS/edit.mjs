import { CREATE_POST_API_URL } from "./GlobalConst.mjs";

const logoutLink= document.getElementById('logout-link-edit');

//EVENT LISTENERS

//Event listener for the logout button
logoutLink.addEventListener('click', logout);



// FUNCTIONS


//Function for logging out
export function logout() {

  const accessToken = localStorage.getItem('accessToken');


 
  if(accessToken === null) {
    alert('You are already logged out!');
    return;
    
  } else if(accessToken !== null) {
    localStorage.removeItem('accessToken');
    window.location.href = '/account/login.html';
   alert('You have successfully logged out!');
   
  }

  else {
    alert('An error has occurred. Please try again.');
  }

  console.log('User logged out', accessToken);

}
//Function for Fetching Blog posts
async function fetchBlogPosts() {
  const API_URL = CREATE_POST_API_URL;
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const blogPosts = await response.json();
  console.log(blogPosts);

  displayBlogPosts();
}

//Function for displaying the blog posts
function displayBlogPosts() {
  const blogPostsWrapper = document.getElementsByClassName('blog-posts-wrapper');

  blogPosts.forEach(post => {
    const blogPostBox = document.createElement("div");
    const image = document.createElement("img");
    const headerContainer = document.createElement("div");
    const header = document.createElement("h2");
    const buttonWrapper = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    blogPostBox.classList.add('blog-post');
    headerContainer.classList.add('header-container');
    header.classList.add('h2-Edit-Page');
    buttonWrapper.classList.add('btn-wrapper');
    editButton.classList.add('edit-page-btn');
    deleteButton.classList.add('edit-page-btn');

    image.src = post.image;
    header.textContent = post.title;
    editButton.textContent = 'Edit';
    deleteButton.textContent = 'Delete';

    blogPostBox.appendChild(image, headerContainer, buttonWrapper);
    headerContainer.appendChild(header);
    buttonWrapper.appendChild(editButton, deleteButton);
    blogPostsWrapper.appendChild(blogPostBox);
  });
}

//FUNCTION CALLS
fetchBlogPosts();
