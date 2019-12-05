const express = require("express");
const path = require("path");

var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Create a few array variables that will hold the data
const resList = [
    {
        Name: '?',
        PhoneNumber: '?',
        Email: '?',
        id: '?'
    }
]

const waitingList = [  
    {
        Name: '?',
        PhoneNumber: '?',
        Email: '?',
        id: '?'
    }
]

// * Create a set of routes for getting and posting table data
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
//   });
  
//   app.get("/api/viewtable", function(req, res) {
//     res.sendFile(path.join(__dirname, "view.html"));
//   });
  
  // Displays all characters
  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "res.html"));
  });
  app.get("/api/resList", function(req, res) {
    return res.json(resList);
  });

  // Create New Reservations - takes in JSON input
app.post("/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    resList.push(newReservation);
  
    res.json(newReservation);
  });
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });