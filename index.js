const express = require("express"); // importing express
require("dotenv").config();
const cors = require("cors");
const app = express(); // create an express application
const port = process.env.PORT || 5000; // definte a port
require("./db");

app.use(express.json());

const { notesRouter } = require("./api/v1/index");

app.use(cors());

// root (/)
app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.use("/notes", notesRouter);

app.listen(port, () => {
  // run the app on the port
  console.log(`Example app listening at http://localhost:${port}`);
});
