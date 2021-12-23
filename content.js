let prev;

// inject script into page
const script = document.createElement("script");
script.textContent = `(${<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>})()`;
script.textContent = `(${<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>})()`;

new MutationObserver(function () {
  const url = window.location.href;
  if (url !== prev) {
    prev = url;
    init();
  }
}).observe(document, { childList: true, subtree: true });

const init = () => {
  // get element with multiple classes: "yt-simple-endpoint style-scope ytd-toggle-button-renderer"
  const buttons = document.querySelectorAll(
    ".yt-simple-endpoint.style-scope.ytd-toggle-button-renderer"
  );
  const dislikeButton = buttons && buttons[1];
  if (dislikeButton) {
    // set inner text of span element within dislikeButton to a random number
    dislikeButton?.lastElementChild?.innerText = Math.floor(Math.random() * 100);
  }
};
