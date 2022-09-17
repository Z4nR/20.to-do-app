import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import { LocaleConsumer } from "../contexts/LocaleContext";

function NoteList({ notes, onDelete, isLoading }) {
  return isLoading ? (
    <LocaleConsumer>
      {({ locale }) => {
        return <p>{locale === "id" ? "Memuat.." : "Loading.."}</p>;
      }}
    </LocaleConsumer>
  ) : notes.length > 0 ? (
    <div className="note_list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
      ))}
    </div>
  ) : (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <>
            <div>
              <p className="note-list_empty">
                {locale === "id"
                  ? "Anda Tidak Memiliki Catatan"
                  : "You Dont Have Any Notes"}
              </p>
              <p style={{ textAlign: "center" }}>
                {locale === "id"
                  ? "Silahkan buat terlebih dahulu"
                  : "Please Create Some Note"}
              </p>
            </div>
          </>
        );
      }}
    </LocaleConsumer>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteList;
