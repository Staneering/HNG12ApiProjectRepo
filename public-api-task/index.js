const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to handle CORS
app.use(cors());

// Endpoint to handle GET requests
app.get('/', (req, res) => {
  const response = {
    email: "stacymacbrains@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Staneering/HNG12ApiProjectRepo.git"
  };

  res.status(200).json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
