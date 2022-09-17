import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, isLoading }) {
  return isLoading ? (
    <>
      <p>Loading..</p>
    </>
  ) : notes.length > 0 ? (
    <div className="note_list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
      ))}
    </div>
  ) : (
    <>
      <div>
        <p className="note-list_empty">You Dont Have Any Notes</p>
        <p style={{ textAlign: "center" }}>Please Input Some Note</p>
      </div>
    </>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default NoteList;
