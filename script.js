let posts = [
  {
    imgURL: "images/deepan.png",
    caption: "Handsome Dude",
    likes: 1000000000000000000000000
  }
];



function renderFeed() {
  const feed = document.getElementById('feed');
  feed.innerHTML = '';
  posts.forEach((post, i) => {
    feed.innerHTML += `
      <div class="post">
        <img src="${post.imgURL}" alt="Post">
        <p>${post.caption}</p>
        <button onclick="likePost(${i})">❤️ ${post.likes}</button>
      </div>
    `;
  });
}
function likePost(index) {
  posts[index].likes++;
  renderFeed();
}
