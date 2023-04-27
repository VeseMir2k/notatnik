const Note = require("../../db/models/note");

module.exports = {
  saveNote(req, res) {
    // const newNote = new Note({
    //   title: "Zrobić zakupy",
    //   body: "mleko, wędlina, chleb",
    // });

    // newNote.save().then(() => {
    //   console.log("notatka została napisana");
    // });

    const title = req.body.title;
    const body = req.body.body;

    res.send("Notatka została stworzona. Tytuł: " + title + " Treść: " + body);
  },

  getAllNotes(req, res) {
    //pobieranie notatek
    res.send("Api działa");
  },
  getNote(req, res) {
    //pobieranie notatki
    res.send("Informacje o notatce");
  },
  updateNote(req, res) {
    //edytowanie notatki
    res.send("Edytowanie notatki");
  },
  deleteNote(req, res) {
    const id = req.params.id;
    // notatki
    res.send("Usunięcie notatki. ID: " + id);
  },
};
