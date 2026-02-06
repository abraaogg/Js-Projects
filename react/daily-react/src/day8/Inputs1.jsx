import { useState } from "react";
import "./Inputs1.css"

function Inputs1({ addItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  function handleAdd() {
    if (name.trim() === "" || category.trim() === "") {
      return;
    }

    addItem({ name, category });
    setName("");
    setCategory("");
  }

  return (
    <div>
      <h1>Name + Category</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
      />

      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />

      <button
        className="add-btn"
        disabled={name.trim() === "" || category.trim() === ""}
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}

export default Inputs1;
