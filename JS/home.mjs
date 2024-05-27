
import { API_FETCH_POSTS_URL } from './GlobalConst.mjs'
import { API_LOGIN_URL } from './GlobalConst.mjs'
//**CONSTANTS */




/**CONSTANTS FOR CAROUSEL ON BLOG FEED PAGE */
const buttonOne = document.querySelector('#right-arrow');
const slideOne = document.querySelector('#slide-1');
const buttonTwo = document.querySelector('#left-arrow');
const buttonThree = document.querySelector('#right-arrow-2');
const buttonFour = document.querySelector('#left-arrow-2');
const slideTwo = document.querySelector('#slide-2');
const buttonFive = document.querySelector('#right-arrow-3');
const buttonSix = document.querySelector('#left-arrow-3');
const slideThree = document.querySelector('#slide-3');
const image1= document.querySelector('#carousel-image-1');
const image2= document.querySelector('#carousel-image-2');
const image3= document.querySelector('#carousel-image-3');


//CONSTANTS FOR HOME PAGE CAROUSEL AND 12 IMAGE GRID





//**EVENT LISTENERS */




//**EVENT LISTENERS FOR THE CAROUSEL ON HOME PAGE */

buttonOne.addEventListener('click', () => {
  slideOne.style.display = 'none';
  slideTwo.style.display = 'flex';

setTimeout(() => {
  image2.style.borderRadius = '50%';
  image2.style.transition = 'border-radius 0.6s, transform 0.6s';
  image2.style.transform = 'scale(1)';
  if (window.innerWidth < 600) {
    image2.style.transform = 'scale(1.2)';
  } else {
    image2.style.transform = 'scale(1)';
  }
}, 10);
 
});

buttonTwo.addEventListener('click', () => {
  
  slideOne.style.display = 'none';
  slideTwo.style.display = 'none';
  slideThree.style.display = 'flex';
image3.style.borderRadius = '0';

  
});

buttonThree.addEventListener('click', () => {
  
  slideOne.style.display = 'none';
  slideTwo.style.display = 'none';
  slideThree.style.display = 'flex';

  setTimeout(() => {
    image3.style.borderRadius = '50%';
    image3.style.transition = 'border-radius 0.6s, transform 0.6s';
    image3.style.transform = 'scale(1)';
    if (window.innerWidth < 600) {
      image3.style.transform = 'scale(1.2)';
    } else {
      image3.style.transform = 'scale(1)';
    }
  }, 10);
  
});

buttonFour.addEventListener('click', () => {
  
  slideOne.style.display = 'flex';
  slideTwo.style.display = 'none';
  slideThree.style.display = 'none';

image1.style.borderRadius = '0';

  
});


buttonFive.addEventListener('click', () => {
  
  slideOne.style.display = 'flex';
  slideTwo.style.display = 'none';
  slideThree.style.display = 'none';
  setTimeout(() => {
    image1.style.borderRadius = '50%';
    image1.style.transition = 'border-radius 0.6s, transform 0.6s';
    if (window.innerWidth < 600) {
      image1.style.transform = 'scale(1.2)';
    } else {
      image1.style.transform = 'scale(1)';
    }
  }, 10);
  
});

buttonSix.addEventListener('click', () => {
    
    slideOne.style.display = 'none';
    slideTwo.style.display = 'flex';
    slideThree.style.display = 'none';
    image2.style.borderRadius = '0';

    
  });



//**FUNCTIONS */

async function postUserData() {
  const API_URL = API_LOGIN_URL;
  const userData = 
  {
    "email": "LeanneMeyer002@stud.noroff.no",
    "password": "Hello002"
  }
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    const accessToken = data.accessToken;

    localStorage.setItem('accessToken', accessToken);

    if (response.ok) {
     fetchBlogPosts();
    } else {
      console.error('Failed to post user data');
    }
  } catch (error) {
    console.error(error);
  }
}





async function fetchBlogPosts() {
  try {
    const API_URL = API_FETCH_POSTS_URL;
    const accessToken = localStorage.getItem('accessToken');
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    let posts = await response.json();
    let blogPosts = posts.data;
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  

  } catch (error) {
    console.error('Error:', error);
  }



}



let posts = JSON.parse(localStorage.getItem('blogPosts'));
let last12Posts = posts ? posts.slice(-12) : [];


//FUNCTION TO DISPLAY BLOG POSTS IN THE CAROUSEL


function displayCarouselPosts() {
  let posts = JSON.parse(localStorage.getItem('blogPosts'));
  let last12Posts = posts ? posts.slice(-12) : [];

  const carouselImage1 = document.getElementById('carousel-image-1');
  const carouselImage2 = document.getElementById('carousel-image-2');
  const carouselImage3 = document.getElementById('carousel-image-3');

  if (last12Posts.length >= 12) {
    carouselImage1.src = last12Posts[9].media.url;
    carouselImage2.src = last12Posts[10].media.url;
    carouselImage3.src = last12Posts[11].media.url;

    const carouselHeader1 = document.getElementById('carousel-header-1');
    const carouselHeader2 = document.getElementById('carousel-header-2');
    const carouselHeader3 = document.getElementById('carousel-header-3');

    carouselHeader1.innerHTML = last12Posts[9].title;
    carouselHeader2.innerHTML = last12Posts[10].title;
    carouselHeader3.innerHTML = last12Posts[11].title;
  }
}



//FUNCTIONS TO DISPLAY BLOG POSTS IN THE 12 IMAGE GRID



 
function createPostHtml(post) {
  const gridContainer=document.getElementById('grid-container');
  const postContainer = document.createElement('div');
  const gridImage = document.createElement('img');
  const textBackground = document.createElement('div');
  const postHeader = document.createElement('h4');

  gridContainer.appendChild(postContainer);
  postContainer.appendChild(gridImage);
  postContainer.appendChild(textBackground);
  postContainer.appendChild(postHeader);
 

  postContainer.classList.add('blog-post-container');
  textBackground.classList.add('text-background-grid');
  postHeader.classList.add('grid-header');



  gridImage.src = post.media.url;
  postHeader.innerHTML = post.title;

  postHeader.addEventListener('click', () => {
    localStorage.setItem('clickedBlogPost', JSON.stringify(post));
    window.location.href = './post/index.html';
  });

  gridImage.addEventListener('click', () => {
    localStorage.setItem('clickedBlogPost', JSON.stringify(post));
    window.location.href = './post/index.html';
  });

  return postContainer;
}



function displayGridPosts() {
last12Posts.forEach(post => {
  createPostHtml(post)
});}


function filterPosts(option) {
  const filteredPosts = posts.filter(post => post.tags.includes(option));
  const gridContainer = document.getElementById('grid-container');
  
  gridContainer.innerHTML = '';
  filteredPosts.forEach(post => {
    createPostHtml(post);
  });
}

const selectElement = document.getElementById('continent');
selectElement.addEventListener('change', (event) => {
  const selectedOption = event.target.value;
  filterPosts(selectedOption);

  if (selectedOption === 'All' ) {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
    last12Posts.forEach(post => {
      createPostHtml(post);
    });
  } 

});



  
  function searchPosts(event) {
    if (event.key === 'Enter') {
      const searchInput = document.getElementById('Search-input-two');
      const searchText = searchInput.value.toLowerCase();
      const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchText));
      const gridContainer = document.getElementById('grid-container');
   
      
      gridContainer.innerHTML = '';
      filteredPosts.forEach(post => {
        createPostHtml(post);
      });
    }
  }

  const searchInput = document.getElementById('Search-input-two');
 
    searchInput.addEventListener('keydown', searchPosts);


  //**CALL FUNCTIONS */

  displayCarouselPosts();
  displayGridPosts();
  postUserData();