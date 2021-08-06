const express = require("express"); // importing express
const app = express(); // create an express application
const port = 3000; // definte a port

app.get("/", (request, response) => {
  const friends = [
    {
      name: "Muhammad Ahsan Ayaz",
      designation: "Software Architect",
    },
    {
      name: "Muhammad Ahsan Ayaz",
      designation: "Software Architect",
    },
  ];
  response.json(friends); // JSON = Javascript Object Notation
});

app.get("/learners", (request, response) => {
  response.send("Hello Learners!");
});

app.listen(port, () => {
  // run the app on the port
  console.log(`Example app listening at http://localhost:${port}`);
});
