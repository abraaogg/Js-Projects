import React, { useState } from "react";
import "./UserList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function UserList() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <h1>List</h1>
     <div>
  <input
    type="text"
    value={item}
    onChange={(e) => setItem(e.target.value)}
  />
  <button
    disabled={item.trim() === ""}
    onClick={() => {
      const trimmedItem = item.trim();
      setList([...list, trimmedItem]);
      setItem("");
    }}
  >
    Save
  </button>

  {list.length === 0 && <p>No items yet</p>}

  <ul>
    {list.map((item, index) => (
      <li key={index} className="list-row">
        <span className="list-text">{item}</span>
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-icon"
          onClick={() => setList(list.filter((_, i) => i !== index))}
        />
      </li>
    ))}
  </ul>
</div>

    </div>
  );
}

export default UserList;
