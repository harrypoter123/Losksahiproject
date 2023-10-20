document.addEventListener("DOMContentLoaded", () => {
    const postDetailsContainer = document.getElementById("post-details");
    const postImage = document.getElementById("post-image");
    const postTitle = document.getElementById("post-title");
    const postContent = document.getElementById("post-content");


    // Get the current news article URL and title
    const currentUrl = window.location.href;
    const currentTitle = document.title;

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("post_id");

    if (!postId) {
        postDetailsContainer.innerHTML = "<p>Post ID not provided in URL.</p>";
        return;
    }

    fetch(`https://lokii.onrender.com/api/posts/${postId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((post) => {
            // Populate the card content
            postImage.src = post.jetpack_featured_media_url;
            postImage.alt = post.title.rendered;
            postTitle.textContent = post.title.rendered;
            postContent.innerHTML = post.content.rendered;
        })
        .catch((error) => {
            console.error("Error fetching post details:", error);
            postDetailsContainer.innerHTML = "<p>An error occurred while fetching post details.</p>";
        });
});
