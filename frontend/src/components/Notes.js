import React from "react";
import "./Notes.css";
import Note from "./Note/Note";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.notes = [
      {
        id: "32143",
        title: "Wykąpać psa",
        body: "pamiętaj aby wykąpać psa specjalnym szamponem",
      },
      {
        id: "3213141",
        title: "Zrobić zakupy",
        body: "kupić mleko, masło, likier",
      },
    ];
  }
  render() {
    return (
      <>
        <p>Moje notatki:</p>
        {this.notes.map((note) => (
          <Note id={note.id} title={note.title} body={note.body} />
        ))}
      </>
    );
  }
}

export default Notes;
