import React, { useState } from "react";

function Modal() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)}>Open</button>

      <div
        className={`overlay ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
      >
        <div className="modalBox" onClick={(e) => e.stopPropagation()}>
          <p>Modal</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
