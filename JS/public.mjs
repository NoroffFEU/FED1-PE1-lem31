import { API_FETCH_POSTS_URL } from "./GlobalConst.mjs";

async function fetchClickedPost() {
  const id = window.location.search.slice(1);

  const response = await fetch(`${API_FETCH_POSTS_URL}/${id}`);
  const blogPost = await response.json();
  createPostHtml(blogPost.data);
}

//FUNCTION TO CREATE HTML FOR CLICKED POST
async function createPostHtml(clickedPost) {
  const title = document.querySelector(".h1-public-blog-post");
  if (title) {
    title.innerHTML = clickedPost.title;
  }

  const image = document.querySelector(".Public-Blog-Post-Img");
  if (image) {
    image.src = clickedPost.media ? clickedPost.media.url : "";
  }

  const body = document.querySelector(".public-post-body");
  if (body) {
    const paragraphs = clickedPost.body.split("\n");
    body.innerHTML = paragraphs.map((p) => `<p>${p}</p>`).join("");
  }

  const author = document.querySelector(".Author");
  if (author) {
    author.innerHTML = "Author:" + clickedPost.author.name;
  }

  const publishedDate = document.querySelector(".Published-date");
  if (publishedDate) {
    publishedDate.innerHTML = "Published:" + clickedPost.created;
  }
}

fetchClickedPost();
