const express = require("express"); // importing express
const cors = require("cors");
const app = express(); // create an express application
const port = 5000; // definte a port

app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.get("/notes", (request, response) => {
  // {text, link, tasks, dueDate}
  const notesData = [
    {
      text: "Ahsan's Twitch",
      link: "https://twitch.tv/codewithahsan",
    },
    {
      text: "Get a job",
      link: "https://rozee.pk",
    },
  ];
  response.json({
    notes: notesData,
  });
});

app.listen(port, () => {
  // run the app on the port
  console.log(`Example app listening at http://localhost:${port}`);
});
