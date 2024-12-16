const express = require('express');
const axios = require('axios');
const app = express();

app.get('/proxy-script', async (req, res) => {
  try {
    const response = await axios.get('https://black-blue-logo-bottle-97eh7cr8s-jawads-projects-ab4a144f.vercel.app/assets/index-Bqfa1y6w.js');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(response.data);
  } catch (err) {
    res.status(500).send('Error fetching the file');
  }
});

app.listen(3000, () => console.log('Proxy running on port 3000'));
