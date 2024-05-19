const blogPost = JSON.parse(localStorage.getItem('blogPostImage'));


const image = document.querySelector('.Public-Blog-Post-Img');

image.src = blogPost;

