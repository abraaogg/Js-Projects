import { useState } from "react";
import "./InputId.css";
import ListId from "./ListId";

function InputId() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  function handleAdd() {
    if (inputValue.trim() === "") return;
    setList([...list, { id: Date.now(), name: inputValue }]);
    setInputValue("");
  }

  function deleteItem(idToRemove) {
    setList(list.filter((item) => item.id !== idToRemove));
  }

  return (
    <div>
      <h1>List with Id</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type here..."
      />

      <button
        disabled={inputValue.trim() === ""}
        className="add-btn"
        onClick={handleAdd}
      >
        Add Item
      </button>
      <ListId list={list} deleteItem={deleteItem} />
    </div>
  );
}

export default InputId;
