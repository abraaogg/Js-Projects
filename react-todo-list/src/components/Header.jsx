import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="header">
      <menu className="menu">
        <button>
          <FiMenu className="icon" />
        </button>

        {showSearch ? (
          <input type="text" placeholder="Search here..." onChange={(e) => setSearch(e.target.value)} />
        ) : (
          <button onClick={() => setShowSearch(true)}>
            <FaSearch className="icon" />
          </button>
        )}
      </menu>

      <h1>
        Today:{" "}
        {new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
        })}
      </h1>
    </div>
  );
}

export default Header;
