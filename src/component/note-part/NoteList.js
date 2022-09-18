import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import Loading from "../loading/Loading";
import EmptyList from "../empty/EmptyList";

function NoteList({ notes, onDelete, isLoading }) {
  return isLoading ? (
    <Loading />
  ) : notes.length > 0 ? (
    <div className="note_list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
      ))}
    </div>
  ) : (
    <EmptyList />
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default NoteList;
