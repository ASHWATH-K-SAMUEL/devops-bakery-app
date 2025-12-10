const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;

const menu = JSON.parse(fs.readFileSync('data/menu.json', 'utf8'));

app.get('/api/menu', (req, res) => {
  console.log("Menu requested");
  res.json(menu);
});
// Add this route for root "/"
app.get('/', (req, res) => {
  res.send('Bakery API is running!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.get('/metrics', (req, res) => {
  res.send(
`# HELP bakery_menu_items_total Total menu items
# TYPE bakery_menu_items_total gauge
bakery_menu_items_total ${menu.length}`
  );
});

app.listen(port, () => {
  console.log(`Bakery API service running on port ${port}`);
});

