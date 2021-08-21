const express = require("express"); // importing express
var notesRouter = express.Router();
const NoteModel = require("../../db/models/note.model");

/**
 * Get all notes
 */
notesRouter.get("/", (request, response) => {
  NoteModel.find({}, (err, notes) => {
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
  const newNote = new NoteModel(request.body);
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
  const noteId = request.params.id;
  NoteModel.findById(noteId, (err, note) => {
    if (err) {
      return console.log(err);
    }
    if (!note) {
      return response.status(404).json({
        message: "note not found",
      });
    }
    response.json({
      reply: "note by id success",
      note,
    });
  });
});

/**
 * Delete a note by id
 */
notesRouter.delete("/:id", (request, response) => {
  const noteId = request.params.id;
  NoteModel.findByIdAndRemove(noteId, (err, deletedNote) => {
    if (err) {
      return console.log(err);
    }
    if (!deletedNote) {
      return response.status(404).json({
        message: "note not found for deletion",
      });
    }
    response.json({
      reply: "delete note by id success",
    });
  });
});

/**
 * Update note by Id
 */
notesRouter.put("/:id", (request, response) => {
  const noteId = request.params.id;
  const updatedBody = request.body;
  NoteModel.findByIdAndUpdate(
    noteId,
    updatedBody,
    {
      new: true,
    },
    (err, updatedNote) => {
      if (err) {
        return console.log(err);
      }
      if (!updatedNote) {
        return response.status(404).json({
          message: "note not found for updating",
        });
      }
      response.json({
        reply: "updated note by id success",
        note: updatedNote,
      });
    }
  );
});

module.exports = {
  notesRouter,
};
