import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function Header({ handleToggleDarkMode, darkMode }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="toggle"
      >
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>
    </div>
  );
}

export default Header;
