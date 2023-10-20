const express = require('express');
const axios = require('axios');

const app = express();
const port = 5501;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/posts', async (req, res) => {
    try {
        const response = await axios.get('https://lokshahilive.com/wp-json/wp/v2/posts/');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data from the external server.', details: error.message });
    }
});

app.get('/api/posts/:postId', async (req, res) => {
    const { postId } = req.params;

    try {
        const response = await axios.get(`https://lokshahilive.com/wp-json/wp/v2/posts/${postId}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching post details from the external server.', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});
