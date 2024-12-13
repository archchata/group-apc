const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 3000;


// Enable CORS for requests from all origins
app.use(cors());

// parses JSON from incoming request
app.use(express.json());

// handle post requests to /api

// Global error handling middleware
// How can we trigger this to run?
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
