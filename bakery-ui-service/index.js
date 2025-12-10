const express = require('express');
const axios = require('axios');
const os = require('os');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const API_URL = process.env.API_URL || 'http://localhost:3001/api/menu';
const BAKERY_NAME = process.env.BAKERY_NAME || 'Sweet Bakery';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.render('index', {
      bakeryName: BAKERY_NAME,
      menu: response.data,
      hostname: os.hostname()
    });
  } catch (err) {
    res.send("Error connecting to API");
  }
});

app.get('/menu', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.render('menu', { menu: response.data });
  } catch (err) {
    res.send("Error connecting to API");
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(port, () => {
  console.log(`Bakery UI service running on port ${port}`);
});

