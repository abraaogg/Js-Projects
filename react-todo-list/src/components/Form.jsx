import React, { useState } from "react";

function Form({ addTodo }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  function handleAddTodo() {
    if (!text.trim() || !category) return;
    addTodo(text, category);
    setText("");
    setCategory("");
    setOpen(false);
  }
  return (
    <div className="createTodo">
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      {open ? (
        <div className="addButton">
          <input
            placeholder="Add a task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Chores">Chores</option>
          </select>

          <button onClick={handleAddTodo}>Add</button>
          <button onClick={() => setOpen(false)}>X</button>
        </div>
      ) : (
        <button className="add" onClick={() => setOpen(true)}>
          +
        </button>
      )}
    </div>
  );
}

export default Form;
