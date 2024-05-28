






//FUNCTIONS
async function fetchClickedPost() {
  const clickedPost = JSON.parse(localStorage.getItem('clickedBlogPost'));
  
  if (clickedPost) {
    const postId = clickedPost.id;
    const url = new URL(window.location.href);
    url.searchParams.set('postId', `${postId}`);
    history.pushState({}, "", url.href);
    await createPostHtml(clickedPost);
  }
}

//FUNCTION TO CREATE HTML FOR CLICKED POST
async function createPostHtml(clickedPost) {
  const title = document.querySelector('.h1-public-blog-post');
  if (title) {
    title.innerHTML = clickedPost.title;
  }
 
  const image = document.querySelector('.Public-Blog-Post-Img');
  if (image) {
    image.src = clickedPost.media ? clickedPost.media.url : '';
  }
  
  const body = document.querySelector('.public-post-body');
  if (body) {
    body.textContent = clickedPost.body;
  }

  const author = document.querySelector('.Author');
  if (author) {
    author.innerHTML = "Author:" + clickedPost.author.name;
  }
  
  const publishedDate = document.querySelector('.Published-date');
  if (publishedDate) {
    publishedDate.innerHTML = "Published:" + clickedPost.created;
  }
}






fetchClickedPost();