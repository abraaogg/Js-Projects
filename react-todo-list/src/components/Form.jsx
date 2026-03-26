import React, { useState } from "react";

function Form({ addTodo }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  function handleAddTodo() {
    if (!text.trim() || !category) {
      setError("Please enter a task and select a category");
      return;
    }
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
          <h3>Add a new task</h3>
          <input
            className={!text && error ? "errorInput" : ""}
            placeholder="Add a task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <select
            className={!category && error ? "errorInput" : ""}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Chores">Chores</option>
          </select>

          {error && <p className="error">{error}</p>}

          <button className="saveButton" onClick={handleAddTodo}>
            Save
          </button>
          <button className="closeButton" onClick={() => setOpen(false)}>
            X
          </button>
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
