import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../component/NoteList";
import NoteSearch from "../component/search/SearchBar";
import DataContext from "../contexts/DataContext";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { deleteNote, getActiveNotes } from "../utils/api";

function HomePage() {
  const { notes, setNotes } = useContext(DataContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  const populateNotes = useCallback(async () => {
    const { data } = await getActiveNotes();
    setNotes(data);
    setLoading(false);
  }, [setNotes, setLoading]);

  async function onDeleteNoteHandler(id) {
    await deleteNote(id);

    populateNotes();
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filterNotes = useMemo(
    () =>
      notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
      }),
    [notes, keyword]
  );

  useEffect(() => {
    populateNotes();
  }, [populateNotes]);

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section>
            <NoteSearch
              keyword={keyword}
              keywordChange={onKeywordChangeHandler}
            />
            <h3>{locale === "id" ? "Daftar Catatanku" : "List of My Note"}</h3>
            <NoteList
              notes={filterNotes}
              isLoading={isLoading}
              onDelete={onDeleteNoteHandler}
            />
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default HomePage;
