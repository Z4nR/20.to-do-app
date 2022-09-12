import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../component/NoteList";
import NoteSearch from "../component/search/SearchBar";
import { deleteNote, getAllNotes } from "../utils/data";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteNoteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section>
        <NoteSearch
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <h3>List of Your Note</h3>
        <NoteList notes={notes} onDelete={this.onDeleteNoteHandler} />
      </section>
    );
  }
}

export default HomePageWrapper;
