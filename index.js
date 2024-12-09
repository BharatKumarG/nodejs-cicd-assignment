// index.js

const express = require('express');
const app = express();

// Define a route that sends a message
app.get('/', (req, res) => {
  res.send('Hello Bharat Kumar');
});

// Start the server
app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
