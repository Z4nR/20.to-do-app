import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function NoteDetailDelete({ id, onDelete }) {
  const navigate = useNavigate();
  return (
    <h4
      className="note-detail_delete"
      onClick={() => {
        onDelete(id);
        navigate("/");
      }}
    >
      Delete
    </h4>
  );
}

NoteDetailDelete.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetailDelete;
