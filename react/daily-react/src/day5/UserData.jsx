import React, { useState } from "react";
import "./UserData.css";

function UserData() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function removeItem() {
    setItem(item.filter((items) => item !== ToRemove));
  }

  return (
    <div>
      <h1>User Data</h1>

      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button
        onClick={() => {
          if (item.trim() === "") return;
          setList((prev) => [...prev, item]);
          setItem("");
        }}
      >
        Save
      </button>

      <ul>
        {list.map((value, index) => (
          <div className="list-row" key={index}>
            <li className="list-item">{value}</li>
            <button
              className="delete-btn"
              onClick={() => setList(list.filter((_, i) => i !== index))}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default UserData;
