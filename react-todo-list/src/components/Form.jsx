import React, { useState } from "react";

function Form({ addTodo }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  return (
    <div>
      <h3>Add a new Todo</h3>
      {open ? (
        <div>
          <input value={text} onChange={(e) => setText(e.target.value)} />

          <button
            onClick={() => {
              addTodo(text);
              setText("")
              setOpen(false);
            }}
          >
            Add
          </button>
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
