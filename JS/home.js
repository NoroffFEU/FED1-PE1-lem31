

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



const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
const last12Posts = blogPosts.slice(-12);



//CONSTANT FOR IMAGE ROTATION CAROUSEL







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

//FUNCTION TO DISPLAY BLOG POSTS IN THE CAROUSEL

function displayCarouselPosts() {



const carouselImage1= document.getElementById('carousel-image-1');

const carouselImage2= document.getElementById('carousel-image-2');

const carouselImage3= document.getElementById('carousel-image-3');

carouselImage1.src = last12Posts[9].media.url;
carouselImage2.src = last12Posts[10].media.url;
carouselImage3.src = last12Posts[11].media.url;

const carouselHeader1= document.getElementById('carousel-header-1');
const carouselHeader2= document.getElementById('carousel-header-2');
const carouselHeader3= document.getElementById('carousel-header-3');



carouselHeader1.innerHTML = last12Posts[9].title;
carouselHeader2.innerHTML = last12Posts[10].title;
carouselHeader3.innerHTML = last12Posts[11].title;


function handleHeaderClick(index) {
  localStorage.setItem('clickedBlogPost', JSON.stringify(last12Posts[index]));
  window.location.href = './post/index.html';
}

carouselHeader1.addEventListener('click', () => handleHeaderClick(9));
carouselHeader2.addEventListener('click', () => handleHeaderClick(10));
carouselHeader3.addEventListener('click', () => handleHeaderClick(11));

carouselImage1.addEventListener('click', () => handleHeaderClick(9));
carouselImage2.addEventListener('click', () => handleHeaderClick(10));
carouselImage3.addEventListener('click', () => handleHeaderClick(11));


}

//FUNCTION TO DISPLAY BLOG POSTS IN THE 12 IMAGE GRID



 
function createPostHtml(post) {
  const gridContainer=document.getElementById('grid-container');
  const postContainer = document.createElement('div');
  const gridImage = document.createElement('img');
  const textBackground = document.createElement('div');
  const postHeader = document.createElement('h4');

  gridContainer.appendChild(postContainer);

  postContainer.appendChild(gridImage);
  postContainer.appendChild(textBackground);
  textBackground.appendChild(postHeader);

  postContainer.classList.add('blog-post-container');
  textBackground.classList.add('text-background-grid');
  postHeader.classList.add('post-header');

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




function filterPosts(option) {
  const filteredPosts = blogPosts.filter(post => post.tags.includes(option));
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

  if (selectedOption === 'All') {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
    last12Posts.forEach(post => {
      createPostHtml(post);
    });
  } 

});



last12Posts.forEach(post => { createPostHtml(post) });





//**CALL FUNCTIONS */







//**CALL FUNCTIONS */

displayCarouselPosts();
// displayGridPosts();
