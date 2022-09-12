import React from "react";
import PropTypes from "prop-types";

function NoteSearch({ keyword, keywordChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Filter by Name"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

NoteSearch.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default NoteSearch;
