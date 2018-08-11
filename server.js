//Required Dependencies
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });  

// var express = require("express");
// var bodyParser = require("body-parser");


// var app = express();

// var PORT = process.env.PORT || 8080;

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });
