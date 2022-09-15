import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../component/NoteList";
import NoteSearch from "../component/search/SearchBar";
import { deleteNote, getActiveNotes } from "../utils/api";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  async function onDeleteNoteHandler(id) {
    await deleteNote(id);

    const { data } = await getActiveNotes();
    setNotes(data);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filterNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section>
      <NoteSearch keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <h3>List of Your Note</h3>
      <NoteList notes={filterNotes} onDelete={onDeleteNoteHandler} />
    </section>
  );
}

export default HomePage;
