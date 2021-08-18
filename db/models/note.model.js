const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  text: String,
  link: String,
});

module.exports = mongoose.model("Note", noteSchema);
