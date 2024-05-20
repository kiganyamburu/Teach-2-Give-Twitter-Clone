document.addEventListener("DOMContentLoaded", () => {
  loadTweets();
});

function loadTweets() {
  // Placeholder tweets data
  const tweets = [
    { username: "user1", content: "This is the first tweet." },
    { username: "user2", content: "This is the second tweet." },
    { username: "user3", content: "This is the third tweet." },
  ];

  const tweetsContainer = document.getElementById("tweets");
  tweets.forEach((tweet) => {
    const tweetElement = document.createElement("div");
    tweetElement.className = "tweet";
    tweetElement.innerHTML = `<strong>@${tweet.username}</strong><p>${tweet.content}</p>`;
    tweetsContainer.appendChild(tweetElement);
  });
}
