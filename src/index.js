const express = require("express");

const app = express();

// Gets JSON data from route
app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

// Initializes application
app.listen(3333);
