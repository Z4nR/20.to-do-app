import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../component/input/NoteInput";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { addNote } from "../utils/api";

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate("/");
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section>
            <h3>{locale === "id" ? "Tambah Catatan" : "Add Note"}</h3>
            <NoteInput addNote={onAddNoteHandler} />
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default AddPage;
