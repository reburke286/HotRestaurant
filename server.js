// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "main.html"));
});

app.get("/api/tables", function(req, res) {
  res.send("I'm the list of tables!");
});

app.get("/api/reservation", function(req, res) {
  res.send("I'm the reservation page!");
});

// app.get("/api/tables", function(req, res) {
//   res.sendFile(path.join(__dirname, "tables.html"));
// });

// app.get("/api/reservation", function(req, res) {
//   res.sendFile(path.join(__dirname, "reservation.html"));
// });

app.get("/api/json/reservation", function(req, res) {
  res.json(reservation);
});

app.get("/api/json/waitlist", function(req, res) {
  res.send(waitlist);
});

//DATA ARRAY
//=============================================================
const reservation = {
  name: "",
  phone: "",
  email: "",
  id: ""
};

const waitlist = {
  name: "",
  phone: "",
  email: "",
  id: ""
};

// Create New Reservation - takes in JSON input
app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newRes = req.body;
  // Determine if reservation gets a table or is on waitlist
  //   if (reservation.length < 5) {
  //     reservation.push(newRes);
  //   } else {
  //     waitlist.push(newRes);
  //   }
  reservation.push(newRes);

  res.json(newRes);
});

//==============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
