import React from "react";
import PropTypes from "prop-types";
import NoteBtn from "../button/ButtonBody";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ id, title, createdAt, body, onDelete }) {
  return (
    <div className="note-item">
      <NoteItemBody id={id} title={title} createdAt={createdAt} body={body} />
      <NoteBtn id={id} onDelete={onDelete} />
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
