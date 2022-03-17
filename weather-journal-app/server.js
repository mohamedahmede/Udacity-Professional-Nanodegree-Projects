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

// GET route that returns to the projectData object
//htwryha ll user
app.get('/all', sendData);

function sendData (req, res) {
  res.send(projectData);
console.log(projectData);

};

//POST route to add incoming data to projectData object
// POST route
app.post('/add', userInput);

function userInput(req,res){
  //requesting the body(all data) after the client POSTed hkhod el user katbo
   let newEntry =  {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content
  }
  projectData = {...projectData, ...newEntry};
  console.log("yesss" + projectData);
  res.send(projectData);

  //saving the data needed in the projectData object
};




// Setup Server
const port = 3000;
app.listen(port, function() {
  console.log("Server is up and running on port " + port)
})
