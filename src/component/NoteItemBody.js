import React from "react";
import PropTypes from "prop-types";
import { showDateFormat } from "../utils/data";

function NoteItemBody({ title, createdAt, body }) {
  return (
    <div className="note-item_body">
      <h3 className="note-item_title">{title}</h3>
      <p className="note-item_create">{showDateFormat(createdAt)}</p>
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
