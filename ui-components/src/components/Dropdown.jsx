import React, { useState, useRef, useEffect } from "react";
import "../css/dropdown.css";

function Dropdown({options}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select");
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClick(event) {
      if (!dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div ref={dropdownRef}>
      <button onClick={() => setOpen(!open)}>{selected}</button>
      {open && (
        <div>
          {options.map((option) => (
            <p
              onClick={() => {
                setSelected(option);
                setOpen(false);
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
