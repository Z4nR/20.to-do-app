import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { getActiveNotes, getNote } from "../utils/api";
import { showFormattedDateEN, showFormattedDateID } from "../utils/time-format";
import { LocaleConsumer } from "../contexts/LocaleContext";
import DataContext from "../contexts/DataContext";
import EmptyDetail from "../component/empty/EmptyDetail";
import Loading from "../component/loading/Loading";

function DetailPage({ onDelete }) {
  const { id } = useParams();
  const { setNotes } = useContext(DataContext);
  const [note, setNoteDetail] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function onDetailDelete() {
    onDelete(id);
    const { data } = await getActiveNotes();
    setNotes(data);
    navigate("/");
  }

  useEffect(() => {
    getNote(id).then((data) => {
      setNoteDetail(data.data);
      setLoading(false);
    });
  }, [id]);

  return !isLoading ? (
    <>
      {note ? (
        <LocaleConsumer>
          {({ locale }) => {
            return (
              <section>
                <div className="note-body_detail">
                  <div className="note-detail_header">
                    <h4 className="note-create_detail">
                      {locale === "id" ? "Dibuat : " : "Created at : "}
                      {locale === "id"
                        ? showFormattedDateID(note.createdAt)
                        : showFormattedDateEN(note.createdAt)}
                    </h4>
                    <button
                      className="note-detail_delete"
                      onClick={(event) => {
                        event.preventDefault();
                        onDetailDelete();
                      }}
                    >
                      <h4>{locale === "id" ? "Hapus" : "Delete"}</h4>
                    </button>
                  </div>
                  <p className="note-desc_detail">{note.body}</p>
                </div>
              </section>
            );
          }}
        </LocaleConsumer>
      ) : (
        <EmptyDetail />
      )}
    </>
  ) : (
    <Loading />
  );
}

DetailPage.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DetailPage;
