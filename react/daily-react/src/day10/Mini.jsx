import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Mini() {
  // Initialize state directly from localStorage
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("list");
    return saved ? JSON.parse(saved) : [];
  });

  // Add new item
  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      text: inputText,
    };
    setList([...list, newItem]);
    setInputText("");
  };

  // Delete item
  const deleteItem = (idToRemove) => {
    setList(list.filter((item) => item.id !== idToRemove));
  };

  // Save to localStorage whenever list changes
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button disabled={inputText.trim() === ""} onClick={handleAdd}>
        Save
      </button>

      <ul>
        {list.map((item) => (
          <li className="list-row" key={item.id}>
            <span className="list-text">{item.text}</span>
            <FontAwesomeIcon
              icon={faTrash}
              className="delete-icon"
              onClick={() => deleteItem(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mini;
