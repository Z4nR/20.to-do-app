import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
  return notes.length > 0 ? (
    <div className="note_list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
      ))}
    </div>
  ) : (
    <>
      <p className="note-list_empty">You Dont Have Any Notes</p>
      <p className="note-list_empty">Please Input Some Note</p>
    </>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteList;
