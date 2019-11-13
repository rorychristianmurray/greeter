require("dotenv").config();

const express = require("express"); // import library
console.log("message", process.env.MSG);

const server = express(); // create an instance of an express server
// its a function that gives you back an object (a constructor function)

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: process.env.MSG });
  console.log("in slash");
});

server.get("/goodbye", (req, res) => {
  res.status(200).json({ goodbye: "goodbye" });
});

// the port is coming from the environment
const port = process.env.PORT || 3001;
// port will be set by Heroku on deploy
server.listen(port, () => {
  console.log(`\nServer running on ${port} \n`);
});
