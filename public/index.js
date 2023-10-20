document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts");

    fetch("https://lokii.onrender.com/api/posts")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            const posts = data;

            if (posts.length === 0) {
                postsContainer.innerHTML = "<p>No posts found.</p>";
            } else {
                const postList = document.createElement("ul");
                posts.forEach((post) => {
                    const listItem = document.createElement("li");

                    const image = document.createElement("img");
                    image.src = post.jetpack_featured_media_url;
                    image.alt = post.title.rendered;
                    listItem.appendChild(image);

                    const title = document.createElement("h2");
                    title.textContent = post.title.rendered;
                    listItem.appendChild(title);

                    const seeMoreButton = document.createElement("button");
                    seeMoreButton.textContent = "See More";
                    seeMoreButton.classList.add("see-more-button");
                    seeMoreButton.addEventListener("click", () => {
                        window.location.href = `next.html?post_id=${post.id}`;
                    });
                    listItem.appendChild(seeMoreButton);

                    postList.appendChild(listItem);
                });
                postsContainer.appendChild(postList);
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            postsContainer.innerHTML = "<p>An error occurred while fetching data.</p>";
        });
});
