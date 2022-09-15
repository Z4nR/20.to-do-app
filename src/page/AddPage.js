import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../component/input/NoteInput";
import { addNote } from "../utils/api";

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
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
