import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../component/input/NoteInput";
import { addNote } from "../utils/data";

function AddPage() {
  const navigate = useNavigate();
  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }

  return (
    <section>
      <h3>Add Note</h3>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
