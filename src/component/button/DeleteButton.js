import React from "react";
import PropTypes from "prop-types";

function DeleteNoteBtn({ id, onDelete }) {
  return (
    <button className="note_item_delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

DeleteNoteBtn.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteNoteBtn;
