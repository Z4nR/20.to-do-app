import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { getNote } from "../utils/api";
import { showFormattedDate } from "../utils/data";

function DetailPage({ onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNoteDetail] = useState(null);

  getNote(id).then((data) => {
    setNoteDetail(data.data);
  });

  function onDetailDelete() {
    onDelete(id);
    navigate("/");
  }

  if (!note) {
    return <p className="note-detail_empty">Note not found!!</p>;
  }

  return (
    <section>
      <div className="note-body_detail">
        <div className="note-detail_header">
          <h4 className="note-create_detail">
            Create at: {showFormattedDate(note.createdAt)}
          </h4>
          <button
            className="note-detail_delete"
            onClick={() => {
              onDetailDelete(id);
              navigate("/");
            }}
          >
            <h4>Delete</h4>
          </button>
        </div>
        <p className="note-desc_detail">{note.body}</p>
      </div>
    </section>
  );
}

DetailPage.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DetailPage;
