import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { getActiveNotes, getNote } from "../utils/api";
import { showFormattedDate } from "../utils/time-format";
import DataContext from "../contexts/DataContext";

function DetailPage({ onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setNotes } = useContext(DataContext);
  const [note, setNoteDetail] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  async function onDetailDelete() {
    onDelete(id);
    const { data } = await getActiveNotes();
    setNotes(data);
    navigate("/");
  }

  useEffect(() => {
    getNote(id).then((data) => {
      setNoteDetail(data.data);
      setIsloading(false);
    });
  }, [id]);

  return !isLoading ? (
    <>
      {note ? (
        <>
          <section>
            <div className="note-body_detail">
              <div className="note-detail_header">
                <h4 className="note-create_detail">
                  Create at: {showFormattedDate(note.createdAt)}
                </h4>
                <button className="note-detail_delete" onClick={onDetailDelete}>
                  <h4>Delete</h4>
                </button>
              </div>
              <p className="note-desc_detail">{note.body}</p>
            </div>
          </section>
        </>
      ) : (
        <p>Note Not Found</p>
      )}
    </>
  ) : (
    <>
      <p>loading..</p>
    </>
  );
}

DetailPage.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DetailPage;
