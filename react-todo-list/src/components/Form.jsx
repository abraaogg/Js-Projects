import React, { useState } from "react";

function Form({ addTodo }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  function handleAddTodo() {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
    setOpen(false);
  }
  return (
    <div>
      <div className="createTodo">
        {open ? (
          <div className="addButton">
            <input value={text} onChange={(e) => setText(e.target.value)} />

            <button onClick={handleAddTodo}>Add</button>
          </div>
        ) : (
          <button className="add" onClick={() => setOpen(true)}>
            +
          </button>
          // We wrap       () => the function so it only runs when clicked
        )}
        {open && <button onClick={() => setOpen(false)}>Close</button>}
      </div>
    </div>
  );
}

export default Form;
