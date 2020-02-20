// Pull in required dependencies, express, mongoose, bodyParser
// Initialize using express()
// Apply the middleware function for bodyparser so we can use it

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const plaid = require("./routes/api/plaid");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
// Pull in our MongoURI from our keys.js file and connect to our MongoDB database
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
  app.use(passport.initialize());

  // Passport conifg
  require("./config/passport")(passport);

  // Routes
  app.use("/api/users", users);
  app.use("/api/plaid", plaid);

  // Set the port for our server to run on and have our app listen on this port
const port = process.env.PORT || 5001; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));