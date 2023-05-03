const Note = require("../../db/models/note");

module.exports = {
  // zapisywanie notatki
  async saveNote(req, res) {
    const title = req.body.title;
    const body = req.body.body;

    try {
      const note = new Note({
        title,
        body,
      });

      await note.save();

      res.status(201).json(note);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  // pobieranie wszystkich notatek
  async getAllNotes(req, res) {
    try {
      const doc = await Note.find({});
      res.status(200).json(doc);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  // pobieranie notatki
  async getNote(req, res) {
    const id = req.params.id;

    try {
      const note = await Note.findOne({ _id: id });
      res.status(200).json(note);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  // aktualizowanie notatki
  async updateNote(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const body = req.body.body;

    try {
      const note = await Note.findOne({ _id: id });
      note.title = title;
      note.body = body;
      await note.save();
      res.status(201).json(note);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  // usuwanie notatki
  async deleteNote(req, res) {
    try {
      const id = req.params.id;
      await Note.deleteOne({ _id: id });
      res.sendStatus(204);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
