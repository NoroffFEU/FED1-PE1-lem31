const blogPost = JSON.parse(localStorage.getItem('selectedPost'));


const image = document.querySelector('.Public-Blog-Post-Img');

image.src = blogPost.media.url;

