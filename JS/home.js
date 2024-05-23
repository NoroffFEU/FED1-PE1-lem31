

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
console.log(last12Posts);


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
    image1.style.transform = 'scale(1)';
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

function displayGridPosts() {


const gridImage1= document.getElementById('grid-image-1');

const gridImage2= document.getElementById('grid-image-2');

const gridImage3= document.getElementById('grid-image-3');

const gridImage4= document.getElementById('grid-image-4');

const gridImage5= document.getElementById('grid-image-5');
const gridImage6= document.getElementById('grid-image-6');
const gridImage7= document.getElementById('grid-image-7');
const gridImage8= document.getElementById('grid-image-8');
const gridImage9= document.getElementById('grid-image-9');
const gridImage10= document.getElementById('grid-image-10');
const gridImage11= document.getElementById('grid-image-11');
const gridImage12= document.getElementById('grid-image-12');

gridImage1.src = last12Posts[0].media.url;
gridImage2.src = last12Posts[1].media.url;
gridImage3.src = last12Posts[2].media.url;
gridImage4.src = last12Posts[3].media.url;
gridImage5.src = last12Posts[4].media.url;
gridImage6.src = last12Posts[5].media.url;
gridImage7.src = last12Posts[6].media.url;
gridImage8.src = last12Posts[7].media.url;
gridImage9.src = last12Posts[8].media.url;
gridImage10.src = last12Posts[9].media.url;
gridImage11.src = last12Posts[10].media.url;
gridImage12.src = last12Posts[11].media.url;

const gridHeader1 = document.getElementById('grid-post-header-1');
const gridHeader2 = document.getElementById('grid-post-header-2');
const gridHeader3 = document.getElementById('grid-post-header-3');
const gridHeader4 = document.getElementById('grid-post-header-4');
const gridHeader5 = document.getElementById('grid-post-header-5');
const gridHeader6 = document.getElementById('grid-post-header-6');
const gridHeader7 = document.getElementById('grid-post-header-7');
const gridHeader8 = document.getElementById('grid-post-header-8');
const gridHeader9 = document.getElementById('grid-post-header-9');
const gridHeader10 = document.getElementById('grid-post-header-10');
const gridHeader11 = document.getElementById('grid-post-header-11');
const gridHeader12 = document.getElementById('grid-post-header-12');



gridHeader1.innerHTML = last12Posts[0].title;
gridHeader2.innerHTML = last12Posts[1].title;
gridHeader3.innerHTML = last12Posts[2].title;
gridHeader4.innerHTML = last12Posts[3].title;
gridHeader5.innerHTML = last12Posts[4].title;
gridHeader6.innerHTML = last12Posts[5].title;
gridHeader7.innerHTML = last12Posts[6].title;
gridHeader8.innerHTML = last12Posts[7].title;
gridHeader9.innerHTML = last12Posts[8].title;
gridHeader10.innerHTML = last12Posts[9].title;
gridHeader11.innerHTML = last12Posts[10].title;
gridHeader12.innerHTML = last12Posts[11].title;


function handleHeaderClick(index) {
  localStorage.setItem('clickedBlogPost', JSON.stringify(last12Posts[index]));
  window.location.href = './post/index.html';
}

gridHeader1.addEventListener('click', () => handleHeaderClick(0));
gridHeader2.addEventListener('click', () => handleHeaderClick(1));
gridHeader3.addEventListener('click', () => handleHeaderClick(2));
gridHeader4.addEventListener('click', () => handleHeaderClick(3));
gridHeader5.addEventListener('click', () => handleHeaderClick(4));
gridHeader6.addEventListener('click', () => handleHeaderClick(5));
gridHeader7.addEventListener('click', () => handleHeaderClick(6));
gridHeader8.addEventListener('click', () => handleHeaderClick(7));
gridHeader9.addEventListener('click', () => handleHeaderClick(8));
gridHeader10.addEventListener('click', () => handleHeaderClick(9));
gridHeader11.addEventListener('click', () => handleHeaderClick(10));
gridHeader12.addEventListener('click', () => handleHeaderClick(11));

gridImage1.addEventListener('click', () => handleHeaderClick(0));
gridImage2.addEventListener('click', () => handleHeaderClick(1));
gridImage3.addEventListener('click', () => handleHeaderClick(2));
gridImage4.addEventListener('click', () => handleHeaderClick(3));
gridImage5.addEventListener('click', () => handleHeaderClick(4));
gridImage6.addEventListener('click', () => handleHeaderClick(5));
gridImage7.addEventListener('click', () => handleHeaderClick(6));
gridImage8.addEventListener('click', () => handleHeaderClick(7));
gridImage9.addEventListener('click', () => handleHeaderClick(8));
gridImage10.addEventListener('click', () => handleHeaderClick(9));
gridImage11.addEventListener('click', () => handleHeaderClick(10));
gridImage12.addEventListener('click', () => handleHeaderClick(11));

}



//FUNCTION TO DISPLAY INDIVIDUAL BLOG POSTS ON PUBLIC PAGE




// EVENT LISTENER FOR BLOG POST HEADER





//FUNCTION TO DISPLAY INDIVIDUAL BLOG POSTS ON PUBLIC PAGE





//**CALL FUNCTIONS */

displayCarouselPosts();
displayGridPosts();
