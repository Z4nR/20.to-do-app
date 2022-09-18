import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  showFormattedDateEN,
  showFormattedDateID,
} from "../../utils/time-format";
import { LocaleConsumer } from "../../contexts/LocaleContext";

function NoteItemBody({ id, title, createdAt, body }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="note-item_body">
            <h3 className="note-item_title">
              <Link to={`/note/${id}`}>{title}</Link>
            </h3>
            <p className="note-item_create">
              {locale === "id"
                ? showFormattedDateID(createdAt)
                : showFormattedDateEN(createdAt)}
            </p>
            <p className="note-item_desc">{body}</p>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

NoteItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
