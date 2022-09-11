import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "../page/HomePage";
import AddPage from "../page/AddPage";

function NoteApp() {
  return (
    <div className="note-app">
      <header className="note-app_header">
        <h1>Personal Note List</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default NoteApp;
