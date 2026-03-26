import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

function Header({ search, setSearch }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="header">
      <menu className="menu">
        <button>
          <FiMenu className="icon" />
        </button>

        {showSearch ? (
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        ) : (
          <button onClick={() => setShowSearch(true)}>
            <FaSearch className="icon" />
          </button>
        )}
      </menu>

      <h2 className="title">My Tasks</h2>
      <p className="subtitle">Stay organized, stay sharp</p>
    </div>
  );
}

export default Header;
