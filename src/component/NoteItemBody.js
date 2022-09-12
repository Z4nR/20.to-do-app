import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/data";
import { Link } from "react-router-dom";

function NoteItemBody({ id, title, createdAt, body }) {
  return (
    <div className="note-item_body">
      <h3 className="note-item_title">
        <Link to={`/note/${id}`}>{title}</Link>
      </h3>
      <p className="note-item_create">{showFormattedDate(createdAt)}</p>
      <p className="note-item_desc">{body}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
