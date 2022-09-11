import React from "react";
import PropTypes from "prop-types";
import DeleteNoteBtn from "./DeleteButton";

function NoteBtn({ id, onDelete }) {
  return (
    <div className="note-btn_box">
      <div className="delete_box">
        <DeleteNoteBtn id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

NoteBtn.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteBtn;
