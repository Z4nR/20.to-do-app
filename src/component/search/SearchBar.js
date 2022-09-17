import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../../contexts/LocaleContext";

function NoteSearch({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <input
            className="search-bar"
            type="text"
            placeholder={
              locale === "id" ? "Cari berdasarkan judul" : "Search by title"
            }
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}
          />
        );
      }}
    </LocaleConsumer>
  );
}

NoteSearch.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default NoteSearch;
