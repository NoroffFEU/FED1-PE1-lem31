






//FUNCTIONS

//FUNCTION FOR FETCHING CLICKED POST


async function fetchClickedPost() {
  const clickedPost = JSON.parse(localStorage.getItem('clickedBlogPost'));
  createPostHtml(clickedPost);
  const postId = clickedPost.id;


  const url = new URL(window.location.href);
  history.pushState({}, "", `${postId}`);
  url.searchParams.set('postId', `${postId}`); 
  //Looked to this website for help inserting the post ID into the URL : https://developer.mozilla.org/en-US/docs/Web/API/History/pushState


}

//FUNCTION TO CREATE HTML FOR CLICKED POST
function createPostHtml(clickedPost) {
  const title = document.querySelector('.h1-public-blog-post');
  title.innerHTML = clickedPost.title;
 
  const image = document.querySelector('.Public-Blog-Post-Img');
  image.src = clickedPost.media.url;
  const body = document.querySelector('.public-post-body');
  body.textContent = clickedPost.body;

  const author = document.querySelector('.Author');

  author.innerHTML = "Author:" + clickedPost.author.name;
  const publishedDate = document.querySelector('.Published-date');
  publishedDate.innerHTML = "Published:" + clickedPost.created;
}

fetchClickedPost();
