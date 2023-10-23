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



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("post-button").addEventListener("click", postToFacebook);
});

async function postToFacebook() {
    try {
        // Define your access token and Facebook Page ID.
        const accessToken = 'EAAS5FCpbQAQBO21O5RhiriCE3umWXUsc884Q5HHjqfVuNj1rQ1a9hsZCSqf6oHVn4wkYhBsPXxMu4yyPMMxuFFC12kbyhOdsqAaZCmrdiiZBpIkarNfPkwkWn34FwqUJd2tAuxi699w9LHVc5iJ8sn5zi32u9XujoxZCZBhvb5gNnxzUNP2bHVgBfMLn69CsIdKXJzPZCjcnSavzgZCz1ZBc5ZBZBdCOCeVJMZD';
        const pageId = '135945206274101';

        // Get the current news article URL and title
        const currentUrl = window.location.href;
        const currentTitle = document.title;

        // Define the post data with the dynamically generated URL and title
        const postData = {
            link: 'https://lokii.onrender.com/api/posts/${postId}',
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

