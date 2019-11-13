const express = require("express"); // import library

const server = express(); // create an instance of an express server
// its a function that gives you back an object (a constructor function)

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ hello: "hello" });
  console.log("in slash");
});

const port = 3001;
server.listen(port, () => {
  console.log(`\nServer running on ${port} \n`);
});
