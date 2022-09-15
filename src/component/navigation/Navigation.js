import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiHome, FiPlusCircle, FiLogOut } from "react-icons/fi";
import { BsTranslate } from "react-icons/bs";
import ToggleTheme from "../setting/Theme";

function Navigation({ logout, name }) {
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
          <Link to="/setting">
            <BsTranslate />
          </Link>
        </li>
        <li>
          <ToggleTheme />
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
