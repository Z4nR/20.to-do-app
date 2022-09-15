import React, { useEffect, useMemo, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import HomePage from "../page/HomePage";
import AddPage from "../page/AddPage";
import DetailPage from "../page/DetailPage";
import NotFound from "../page/NotFound";
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import { getActiveNotes, getUserLogged, putAccessToken } from "../utils/api";
import { ThemeProvider } from "../contexts/ThemeContext";

function NoteApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [allNotes, setAllNotes] = useState([]);
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();

  const [themeNote, setThemeNote] = useState("light");
  const themeNoteContext = useMemo(() => {
    return {
      themeNote,
      toggleTheme,
    };
  }, [themeNote]);

  function toggleTheme() {
    setThemeNote((prevState) => {
      return prevState === "light" ? "dark" : "light";
    });
  }

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

  if (authedUser === null) {
    return (
      <ThemeProvider value={themeNoteContext}>
        <div className="note-app">
          <header className="note-app_header">
            <h1>Personal Note List</h1>
          </header>
          <main>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={onLoginSuccess} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={themeNoteContext}>
      <div className="note-app">
        <header className="note-app_header">
          <h1>Personal Note List</h1>
          <Navigation logout={onLogout} name={authedUser.name} />
        </header>
        <main>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage notes={allNotes} />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/note/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

// class NoteApp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       authedUser: null,
//       initializing: true,
//       themeContext: {
//         theme: localStorage.getItem("theme") || "light",
//         toggleTheme: () => {
//           this.setState((prevState) => {
//             const newTheme = prevState.theme === "light" ? "dark" : "light";
//             localStorage.setItem("theme", newTheme);
//             return {
//               theme: newTheme,
//             };
//           });
//         },
//       },
//     };

//     this.onLoginSuccess = this.onLoginSuccess.bind(this);
//     this.onLogout = this.onLogout.bind(this);
//   }

//   componentDidMount() {
//     const getUser = async () => {
//       const { data } = await getUserLogged();
//       this.setState(() => {
//         return {
//           authedUser: data,
//           initializing: false,
//         };
//       });
//     };

//     getUser();

//     document.documentElement.setAttribute(
//       "data-theme",
//       this.state.themeContext.theme
//     );
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.themeContext.theme !== this.state.themeContext.theme) {
//       document.documentElement.setAttribute(
//         "data-theme",
//         this.state.themeContext.theme
//       );
//     }
//   }

//   async onLoginSuccess({ accessToken }) {
//     putAccessToken(accessToken);
//     const { data } = await getUserLogged();

//     this.setState(() => {
//       return {
//         authedUser: data,
//       };
//     });
//   }

//   onLogout() {
//     this.setState(() => {
//       return {
//         authedUser: null,
//       };
//     });
//     putAccessToken("");
//   }

//   render() {
//     if (this.state.initializing) {
//       return null;
//     }

//     if (this.state.authedUser === null) {
//       return (
//         <ThemeProvider value={this.state.themeContext}>
//           <div className="note-app">
//             <header className="note-app_header">
//               <h1>Personal Note List</h1>
//               <Navigation
//                 logout={this.onLogout}
//                 name={this.state.authedUser.name}
//               />
//             </header>
//             <main>
//               <Routes>
//                 <Route
//                   path="/*"
//                   element={<LoginPage loginSuccess={this.onLoginSuccess} />}
//                 />
//                 <Route path="/register" element={<RegisterPage />} />
//               </Routes>
//             </main>
//           </div>
//         </ThemeProvider>
//       );
//     }

//     return (
//       <ThemeProvider value={this.state.themeContext}>
//         <div className="note-app">
//           <header className="note-app_header">
//             <h1>Personal Note List</h1>
//             <Navigation
//               logout={this.onLogout}
//               name={this.state.authedUser.name}
//             />
//           </header>
//           <main>
//             <Routes>
//               <Route path="*" element={<NotFound />} />
//               <Route path="/" element={<HomePage />} />
//               <Route path="/add" element={<AddPage />} />
//               <Route path="/note/:id" element={<DetailPage />} />
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     );
//   }
// }

export default NoteApp;
