document.addEventListener("DOMContentLoaded", () => {
  const usersSelect = document.getElementById("users");
  const postsContainer = document.getElementById("posts");
  const commentsContainer = document.getElementById("comments");

  // Fetch and display users in the select box
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        const option = document.createElement("option");
        option.value = user.id;
        option.textContent = user.username;
        usersSelect.appendChild(option);
      });
      usersSelect.value = 1; // Set default user to user with ID 1
      loadPosts(1); // Load posts for the default user
    });

  usersSelect.addEventListener("change", (event) => {
    const userId = event.target.value;
    loadPosts(userId);
  });

  function loadPosts(userId) {
    postsContainer.innerHTML = "";
    commentsContainer.innerHTML = "";
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((posts) => {
        posts.forEach((post) => {
          const li = document.createElement("li");
          li.textContent = post.title;
          li.dataset.postId = post.id;
          li.addEventListener("click", () => loadComments(post.id));
          postsContainer.appendChild(li);
        });
        if (posts.length > 0) {
          loadComments(posts[0].id); // Load comments for the first post by default
        }
      });
  }

  function loadComments(postId) {
    commentsContainer.innerHTML = "";
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((comments) => {
        comments.forEach((comment) => {
          const li = document.createElement("li");
          li.textContent = comment.body;
          commentsContainer.appendChild(li);
        });
      });
  }
});
