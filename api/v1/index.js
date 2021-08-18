const express = require("express"); // importing express
var notesRouter = express.Router();
const Note = require("../../db/models/note.model");

/**
 * Get all notes
 */
notesRouter.get("/", (request, response) => {
  Note.find({}, (err, notes) => {
    if (err) {
      return console.error(err);
    }
    response.json({
      notes,
    });
  });
});

/**
 * Add a new note
 */
notesRouter.post("/", (request, response) => {
  const newNote = new Note(request.body);
  newNote.save().then((savedNote) => {
    response.json({
      note: savedNote,
      success: true,
    });
  });
});

/**
 * Get a note by id
 */
notesRouter.get("/:id", (request, response) => {
  response.json({
    reply: "note by id success",
  });
});

/**
 * Delete a note by id
 */
notesRouter.delete("/:id", (request, response) => {
  response.json({
    reply: "note deleted",
  });
});

module.exports = {
  notesRouter,
};
