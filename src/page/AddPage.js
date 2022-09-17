import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../component/input/NoteInput";
import DataContext from "../contexts/DataContext";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { addNote, getActiveNotes } from "../utils/api";

function AddPage() {
  const {setNotes} = useContext(DataContext)
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    const { data } = await getActiveNotes();
    setNotes(data)
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
