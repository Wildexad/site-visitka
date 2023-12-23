const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'lol')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'lol', 'main.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'lol', 'about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'lol', 'contact.html'));
  });
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'lol', '404.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
