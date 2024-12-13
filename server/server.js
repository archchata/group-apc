const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const controller = require('./controller')
const cors = require('cors');


// Enable CORS for all requests
app.use(cors());

// parses JSON from incoming request
app.use(express.json());

// handle post requests to /api
app.get('/api', controller.getImages, (req,res)=>{
  return res.status(200).json(res.locals.imageUrls);
})
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
