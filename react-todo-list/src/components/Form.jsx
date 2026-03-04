import React, { useState } from "react";

function Form() {
  const [open, setOpen] = useState(false);
  return (
    <div>
        <h3>Add a new Todo</h3>
      {open ? (
        <div>
          <input />
          <button>Add</button>
        </div>
      ) : (
        <button onClick={() => setOpen(true)}>+</button>
        // We wrap       () => the function so it only runs when clicked
      )}
      <button onClick={() => setOpen(false)}>Close</button>
    </div>
  );
}

export default Form;
