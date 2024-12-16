const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to set CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://pfannenstielhof-weingut.webflow.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Route for serving assets with API key validation
app.get('/assets/index-Bqfa1y6w.js', (req, res) => {
    const apiKey = req.query.key;

    if (apiKey !== '175d1305650611f9de24be81202d9ce4de37b592a67b6d7f38d71a1a6797e8da') {
        return res.status(401).send('Unauthorized');
    }

    res.sendFile(path.join(__dirname, 'assets/index-Bqfa1y6w.js'));
});

// Proxy route for fetching assets from Vercel
app.get('/proxy/index-Bqfa1y6w.js', async (req, res) => {
    try {
        const response = await axios.get('https://black-blue-logo-bottle-97eh7cr8s-jawads-projects-ab4a144f.vercel.app/assets/index-Bqfa1y6w.js', {
            headers: {
                Authorization: `Bearer ${process.env.VERCEL_API_KEY}`, // Use .env for API key
            },
        });
        res.setHeader('Content-Type', response.headers['content-type']);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Proxy Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
