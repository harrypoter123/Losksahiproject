// script.js
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("post-button").addEventListener("click", postToFacebook);
});

async function postToFacebook() {
    try {
        // Define your access token and Facebook Page ID.
        const accessToken = 'EAAS5FCpbQAQBOycdSJ8gAAtcBJiBunU5HOuZBSYX7iZA5Yp9ZBRyYPCZCFyh0K6ZC4ZCCwAVaZCc04yv1NKoyJDdeIfjZAvjvA7mWiO25RXbwqeeoMTmzkCFdbuVEup2PAFUVYR0zq6FV1XLL5dHZCDh2d8SrFR9WE2rpCx4g2P4d80bAZADSYXfI6aPZBZATZCStMEwycZAvhW8SzUBsZBvg48p9KkYcAI2EPEE3qn';
        const pageId = '135945206274101';

        // Define the post data.
        const postData = {
            link: 'https://www.lokshahi.com/news/lokshahi-politics/ashish-shelar-on-uddhav-thackeray-5',
            message: 'Check out this news article: https://www.lokshahi.com/news/lokshahi-politics/ashish-shelar-on-uddhav-thackeray-5',
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

