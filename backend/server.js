// backend/server.js
const express = require('express');
const app = express();
const port = 3001; // Choose a port number

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
