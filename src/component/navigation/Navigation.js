import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiHome, FiPlusCircle, FiLogOut } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";
import ThemeContext from "../../contexts/ThemeContext";

function Navigation({ logout, name }) {
  const { themeNote, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <FiHome />
          </Link>
        </li>
        <li>
          <Link to="/add">
            <FiPlusCircle />
          </Link>
        </li>
        <li>
          <Link to="/translate">
            <BsTranslate />
          </Link>
        </li>
        <li>
          <button onClick={toggleTheme}>
            {themeNote === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </li>
        <li>
          <button onClick={logout}>
            {name}
            <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
