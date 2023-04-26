const Note = require("../../db/models/note");

module.exports = {
  saveNote(req, res) {
    const newNote = new Note({
      title: "Zrobić zakupy",
      body: "mleko, wędlina, chleb",
    });

    newNote.save().then(() => {
      console.log("notatka została napisana");
    });

    res.send("Strona główna działa!");
  },
};
