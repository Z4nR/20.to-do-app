import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils/data";
import NoteDetailDelete from "./NoteDelete";

function NoteDetail({ id, createdAt, body, onDelete }) {
  return (
    <div className="note-body_detail">
      <div className="note-detail_header">
        <h4 className="note-create_detail">
          Create at: {showFormattedDate(createdAt)}
        </h4>
        <NoteDetailDelete id={id} onDelete={onDelete} />
      </div>
      <p className="note-desc_detail">{body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
