import React, { useState, useRef, useEffect } from "react";
import "../css/dropdown.css";

function Dropdown() {
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
          <p
            onClick={() => {
              setSelected("Option1");
              setOpen(false);
            }}
          >
            option 1
          </p>
          <p
            onClick={() => {
              setSelected("Option2");
              setOpen(false);
            }}
          >
            option 2
          </p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
