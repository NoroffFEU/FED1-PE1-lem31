import { API_FETCH_POSTS_URL} from "./GlobalConst.mjs";
import { API_PUT_POST_URL } from "./GlobalConst.mjs";


const logoutLink= document.getElementById('logout-link-edit');



const API_PUT_POST = API_PUT_POST_URL;

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

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    displayBlogPosts(blogPosts);
  

  } catch (error) {
    console.error('Error:', error);
  }
}

//FUNCTION CALLS
fetchBlogPosts();

function displayBlogPosts(blogPosts) {
  const blogPostsWrapper = document.querySelector('.blog-posts-wrapper');

  blogPosts.forEach((post, index) => {
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
    editButton.classList.add('edit-page-edit-btn');
    deleteButton.classList.add('edit-page-delete-btn');

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

    editButton.addEventListener('click', () => {
      displayForm(post);
    });
  });
}


//Function for displaying the edit form
function displayForm(post) {
  const editFormWrapper = document.querySelector('.popup-form-wrapper');
  const editForm = document.createElement('form');
  const editHeaderContainer = document.createElement('div');
  const editHeader = document.createElement('h3');
  const postImage = document.createElement('img');
  const postImageContainer = document.createElement('div');
  const mediaLabel = document.createElement('label');
  const mediaInput = document.createElement('input');
  const postTitleLabel = document.createElement('label');
  const postTitleInput = document.createElement('input');
  const bodyLabel = document.createElement('label');
  const bodyInput = document.createElement('textarea');
  const tagsLabel = document.createElement('label');
  const tagsInput = document.createElement('input');
  const buttonsWrapper = document.createElement('div');
  const saveButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  editFormWrapper.classList.add('popup-form-wrapper');
  editForm.classList.add('popup-form');
  editHeaderContainer.classList.add('h3-edit-box');
  editHeader.classList.add('h3-edit');
  mediaLabel.classList.add('edit-label');
  mediaInput.classList.add('edit-input');
  mediaInput.id = 'edit-media';
  postTitleLabel.classList.add('edit-label');
  postTitleInput.classList.add('edit-input');
  postTitleInput.id = 'edit-title';
  bodyLabel.classList.add('edit-label');
  bodyInput.classList.add('edit-input');
  bodyInput.id = 'edit-body';  
  tagsLabel.classList.add('edit-label');
  tagsInput.classList.add('edit-input');
  tagsInput.id = 'edit-tags';
  buttonsWrapper.classList.add('button-wrapper-edit');
  saveButton.classList.add('save-btn');
  cancelButton.classList.add('cancel-btn');
  postImageContainer.classList.add('post-image-container');
  postImage.classList.add('post-image');

  mediaLabel.setAttribute('for', 'media');
  mediaInput.setAttribute('type', 'text');
  postTitleLabel.setAttribute('for', 'title');
  postTitleInput.setAttribute('type', 'text');
  bodyLabel.setAttribute('for', 'body');
  bodyInput.setAttribute('type', 'text');
  tagsLabel.setAttribute('for', 'tags');
  tagsInput.setAttribute('type', 'text');
  editForm.action = `/blog/posts/Leanne002/${post.id}`;
  editForm.method = 'PUT';

  
  postImage.src = post.media.url;
  postTitleInput.value = post.title;
  mediaLabel.textContent = 'Media';
  mediaInput.value = post.media.url;
  postTitleLabel.textContent = 'Title';
  bodyLabel.textContent = 'Body';
  tagsLabel.textContent = 'Tags';
  tagsInput.value = post.tags;
  bodyInput.value = post.body;
  saveButton.textContent = 'Save';
  cancelButton.textContent = 'Cancel';

  editFormWrapper.appendChild(editForm);
  editForm.appendChild(editHeaderContainer);
  editForm.appendChild(postImageContainer);
  postImageContainer.appendChild(postImage);
  editForm.appendChild(mediaLabel);
  editForm.appendChild(mediaInput);
  editForm.appendChild(postTitleLabel);
  editForm.appendChild(postTitleInput);
  editForm.appendChild(bodyLabel);
  editForm.appendChild(bodyInput);
  editForm.appendChild(tagsLabel);
  editForm.appendChild(tagsInput);
  editForm.appendChild(buttonsWrapper);
  buttonsWrapper.appendChild(saveButton);
  buttonsWrapper.appendChild(cancelButton);
  editHeaderContainer.appendChild(editHeader);

  editFormWrapper.style.display = 'flex';
  editFormWrapper.style.flexDirection = 'column';
  editFormWrapper.style.alignItems = 'center';

  cancelButton.addEventListener('click', closeEditForm);

  editForm.addEventListener('submit', editFormSubmit);

  console.log(post.id);
 localStorage.setItem('id', post.id);
}

//Function for submitting the edit form
async function editFormSubmit(event) {
  event.preventDefault();



 const id= localStorage.getItem('id');

  const API_URL = `${API_PUT_POST}/${id}`;

  try {
    const blogPostObject = {
      title: document.getElementById('edit-title').value,
      body: document.getElementById('edit-body').value,
      tags: document.getElementById('edit-tags') ? document.getElementById('edit-tags').value.split(',').map(tag => tag.trim()) : [],
      media: document.getElementById('edit-media').value,
    };

    const accessToken = localStorage.getItem('accessToken');

    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(blogPostObject),
    });

    if (response.status === 200) {
      const userData = await response.json();
      console.log(userData);
      alert('You have successfully saved this post!');
    } else {
      alert('Something went wrong, please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong, please try again.');
  }
}

//Function for closing the edit form
function closeEditForm() {
  const editForm = document.querySelector('.popup-form-wrapper');
  editForm.style.display = 'none';
}

