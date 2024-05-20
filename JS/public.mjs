const blogPost = JSON.parse(localStorage.getItem('All-Blog-Posts'));


const image = document.querySelector('.Public-Blog-Post-Img');

// image.src = blogPost.media.url;

//FUNCTIONS

//FUNCTION FOR FETCHING CLICKED POST


async function fetchClickedPost() {
  const clickedPost = JSON.parse(localStorage.getItem('clickedBlogPost'));
  createPostHtml(clickedPost);
  const postId = clickedPost.id;

  history.pushState(JSON, "", `?postId=${postId}`);
}

//FUNCTION TO CREATE HTML FOR CLICKED POST
function createPostHtml(clickedPost) {
  const title = document.querySelector('.h1-public-blog-post');
  title.innerHTML = clickedPost.title;
  const image = document.querySelector('.Public-Blog-Post-Img');
  image.src = clickedPost.media.url;
  const body = document.querySelector('.Public-Blog-Post-Body');
  body.innerHTML = clickedPost.body;
  console.log(clickedPost.body);
  const author = document.querySelector('.Author');
  console.log(clickedPost.author.name);
  author.innerHTML = clickedPost.author;
  const publishedDate = document.querySelector('.Published-date');
  publishedDate.innerHTML = clickedPost.created;
}

fetchClickedPost();
