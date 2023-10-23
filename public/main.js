// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("post-button").addEventListener("click", postToFacebook);
// });

// async function postToFacebook() {
//     try {
//         // Define your access token and Facebook Page ID.
//         const accessToken = 'EAAS5FCpbQAQBO21O5RhiriCE3umWXUsc884Q5HHjqfVuNj1rQ1a9hsZCSqf6oHVn4wkYhBsPXxMu4yyPMMxuFFC12kbyhOdsqAaZCmrdiiZBpIkarNfPkwkWn34FwqUJd2tAuxi699w9LHVc5iJ8sn5zi32u9XujoxZCZBhvb5gNnxzUNP2bHVgBfMLn69CsIdKXJzPZCjcnSavzgZCz1ZBc5ZBZBdCOCeVJMZD';
//         const pageId = '135945206274101';

//         // Define the post data.
//         const postData = {
//             link: 'https://www.lokshahi.com/news/lokshahi-politics/ashish-shelar-on-uddhav-thackeray-5',
//             message: 'Check out this news article: https://www.lokshahi.com/news/lokshahi-politics/ashish-shelar-on-uddhav-thackeray-5',
//         };

//         // Make a POST request to post on your Facebook page using the Graph API.
//         const response = await fetch(`https://graph.facebook.com/v18.0/${pageId}/feed`, {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`,
//             },
//             body: new URLSearchParams(postData),
//         });

//         const data = await response.json();
//         if (data.id) {
//             alert('Successfully posted to Facebook!');
//         } else {
//             alert('Failed to post to Facebook. Please check your access token and permissions.');
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// const accessToken = 'EAAS5FCpbQAQBO9rnJR5F9lt4hSnUZBQdUZC39RhV4CNArZBLTtyBLmASVmW3gdF9xYqHBmKyVwQLAQt1PZCHDZBjnn8ZAngI95RoNAPZBQvj98yBqlhwkAEr4aSziQ6elvnvYpeapXxZC7IhDvn4S3R04avyhThJjgPuUD1y8FCqylHpYt5lfQm3MYOkDdouBQ0qpawj87Yu2unBuvZBjHHx3fZBya4b7lrlqR';
// const pageId = '135945206274101';

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("post-button").addEventListener("click", postToFacebook);
// });

// async function postToFacebook() {
//     try {
//         // Define your access token and Facebook Page ID.
//         const accessToken = 'EAAS5FCpbQAQBO9rnJR5F9lt4hSnUZBQdUZC39RhV4CNArZBLTtyBLmASVmW3gdF9xYqHBmKyVwQLAQt1PZCHDZBjnn8ZAngI95RoNAPZBQvj98yBqlhwkAEr4aSziQ6elvnvYpeapXxZC7IhDvn4S3R04avyhThJjgPuUD1y8FCqylHpYt5lfQm3MYOkDdouBQ0qpawj87Yu2unBuvZBjHHx3fZBya4b7lrlqR';
//         const pageId = '135945206274101';

//         // Get the current news article URL and title
//         const currentUrl = window.location.href;
//         const currentTitle = document.title;

//         // Define the post data with the dynamically generated URL and title
//         const postData = {
//             link: 'https://lokii.onrender.com/api/posts/${postId}',
//             message: `Check out this news article: ${currentUrl}`,
//         };

//         // Make a POST request to post on your Facebook page using the Graph API.
//         const response = await fetch(`https://graph.facebook.com/v18.0/${pageId}/feed`, {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`,
//             },
//             body: new URLSearchParams(postData),
//         });

//         const data = await response.json();
//         if (data.id) {
//             alert('Successfully posted to Facebook!');
//         } else {
//             alert('Failed to post to Facebook. Please check your access token and permissions.');
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

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

    // Store postId in a variable accessible to postToFacebook
    const selectedPostId = postId;

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

            // Attach an event listener to the "post" button
            document.getElementById("post-button").addEventListener("click", () => {
                postToFacebook(selectedPostId, currentUrl);
            });
        })
        .catch((error) => {
            console.error("Error fetching post details:", error);
            postDetailsContainer.innerHTML = "<p>An error occurred while fetching post details.</p>";
        });
});

async function postToFacebook(postId, currentUrl) {
    try {
        // Define your access token and Facebook Page ID.
        const accessToken = 'EAAS5FCpbQAQBO9rnJR5F9lt4hSnUZBQdUZC39RhV4CNArZBLTtyBLmASVmW3gdF9xYqHBmKyVwQLAQt1PZCHDZBjnn8ZAngI95RoNAPZBQvj98yBqlhwkAEr4aSziQ6elvnvYpeapXxZC7IhDvn4S3R04avyhThJjgPuUD1y8FCqylHpYt5lfQm3MYOkDdouBQ0qpawj87Yu2unBuvZBjHHx3fZBya4b7lrlqR';
        const pageId = '135945206274101';

        // Define the post data with the dynamically generated URL and title
        const postData = {
            link: `https://lokii.onrender.com/api/posts/${postId}`,
            message: `Check out this news article: ${currentUrl}`,
        };

        // Make a POST request to post on your Facebook page using the Graph API.
        const response = await fetch(`https://graph.facebook.com/v18.0/${pageId}/feed`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            body: new URLSearchParams(postData),
        });

        const data = await response.json();
        if (data.id) {
            alert('Successfully posted to Facebook!');
        } else {
            alert('Failed to post to Facebook. Please check your access token and permissions.');
        }
    } catch (error) {
        console.error(error);
    }
}
