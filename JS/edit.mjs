import { API_FETCH_POSTS_URL} from "./GlobalConst.mjs";


const logoutLink= document.getElementById('logout-link-edit');

const blogPostBox = document.createElement("div");
const image = document.createElement("img");
const headerContainer = document.createElement("div");
const header = document.createElement("h2");
const buttonWrapper = document.createElement("div");
const editButton = document.createElement("button");
const deleteButton = document.createElement("button");
const blogPostsWrapper = document.querySelector('.blog-posts-wrapper');

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
 
  try {
    const API_URL = API_FETCH_POSTS_URL;

    const accessToken = localStorage.getItem('accessToken');

    const response = await fetch(API_URL, {
      headers: {
        method: 'GET',
        Authorization: `Bearer ${accessToken}`,
      },
    
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const posts = await response.json();

    // localStorage.setItem('blogPosts', JSON.stringify(posts));

    console.log(posts);

    const blogPosts = posts.data;

    displayBlogPosts(blogPosts);

  } catch (error) {
    console.error('Error:', error);
  }
}

function displayBlogPosts(blogPosts) {

 
    const blogPostsWrapper = document.querySelector('.blog-posts-wrapper');
  
  
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
      editButton.id = 'edit-btn';
      deleteButton.classList.add('edit-page-btn');
  
      image.src = post.media.url;
      header.textContent = post.title;
      editButton.textContent = 'Edit';
      deleteButton.textContent = 'Delete';
  
  
      blogPostBox.appendChild(image);
      blogPostBox.appendChild(headerContainer);
      blogPostBox.appendChild(header);
      blogPostBox.appendChild(buttonWrapper);
      buttonWrapper.appendChild(editButton);
      buttonWrapper.appendChild(deleteButton);
      blogPostsWrapper.appendChild(blogPostBox);
    });
  }

  editButton.addEventListener('click', displayForm);

  function displayForm() {
    const editForm = document.querySelector('.popup-form-wrapper');
    editForm.style.display = 'flex';
  }





//Function for displaying the blog posts


//FUNCTION CALLS

fetchBlogPosts();

