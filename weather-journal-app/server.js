// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");
//require body parser package
const bodyParser = require("body-parser");

// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// GET route that returns the projectData object
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};

//POST route to add incoming data to projectData
// POST route
app.post('/add', callBack);

function callBack(req,res){
  res.send('POST received');
};


// Setup Server
const port = 3000;
app.listen(port, function() {
  console.log("Server is up and running on port " + port)
})
