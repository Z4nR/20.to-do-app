import React, { useEffect, useMemo, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import HomePage from "../page/HomePage";
import AddPage from "../page/AddPage";
import DetailPage from "../page/DetailPage";
import NotFound from "../page/NotFound";
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import {
  deleteNote,
  getActiveNotes,
  getUserLogged,
  putAccessToken,
} from "../utils/api";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LocaleProvider } from "../contexts/LocaleContext";
import { DataProvider } from "../contexts/DataContext";

function NoteApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [allNotes, setAllNotes] = useState([]);
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();

  const [locale, setLocaleNote] = useState("id");

  const toggleLocale = () => {
    setLocaleNote((prevLocale) => {
      return prevLocale === "id" ? "en" : "id";
    });
  };

  const localeNoteContext = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  const [themeNote, setThemeNote] = useState(
    localStorage.getItem("themeNote") || "light"
  );

  const toggleTheme = () => {
    setThemeNote((prevTheme) => {
      const changeTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("themeNote", changeTheme);
      return changeTheme;
    });
  };

  const themeNoteContext = useMemo(() => {
    return {
      themeNote,
      toggleTheme,
    };
  }, [themeNote]);

  const dataContext = useMemo(() => {
    return {
      notes: allNotes,
      setNotes: setAllNotes
    }
  }, [allNotes])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeNote);
  }, [themeNote]);

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setFullNote();
      setInitializing(false);
    });
  }, []);

  function setFullNote() {
    getActiveNotes().then(({ data }) => {
      setAllNotes(data);
    });
  }

  async function onDelete(id) {
    await deleteNote(id);
    setFullNote();
  }

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();
    setAuthedUser(data);
    navigate("/");
  }

  function onLogout() {
    setAuthedUser(null);
    navigate("/");
    putAccessToken("");
  }

  if (initializing) {
    return null;
  }

  return (
    <DataProvider value={dataContext}>
      <LocaleProvider value={localeNoteContext}>
        <ThemeProvider value={themeNoteContext}>
          <div className="note-app">
            <header className="note-app_header">
              <h1>{locale === "id" ? "Catatanku" : "My Note"}</h1>
              <Navigation logout={onLogout} name={authedUser.name} />
            </header>
            <main>
              <Routes>
                {authedUser ? <>
                  <Route path="*" element={<NotFound />} />
                  <Route path="/" element={<HomePage />} />
                  <Route path="/add" element={<AddPage />} />
                  <Route
                    path="/note/:id"
                    element={<DetailPage onDelete={onDelete} />}
                />
                </> : <>
                    <Route
                      path="/*"
                      element={<LoginPage loginSuccess={onLoginSuccess} />}
                    />
                    <Route path="/register" element={<RegisterPage />} />
                </>}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    </DataProvider>
  );
}

export default NoteApp;
