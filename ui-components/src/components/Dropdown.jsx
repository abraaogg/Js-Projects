import React, { useState, useRef, useEffect } from "react";
import "../css/dropdown.css";

function Dropdown({ options }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select");
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const filteredOptions = options.filter((option) => {
    return option.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdownBtn" onClick={() => setOpen(!open)}>
        {selected}
      </button>
      {open && (
        <div className="dropdownPanel">
          <input
          className="dropdownInput"
          placeholder="Search"
            value={search}
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          {filteredOptions.length === 0
            ? "No results found"
            : filteredOptions.map((option) => (
                <p
                  className="dropdownOption"
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                    setSearch("");
                  }}
                  key={option}
                >
                  {option}
                </p>
              ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
