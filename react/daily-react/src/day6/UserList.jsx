import React, { useState } from "react";
import "./UserList.css";

function UserList() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <h1>List</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={() => {
          setList([...list, item]);
          setItem("");
        }}
      >
        Save
      </button>

      <ul>
        <div className="list-row">
          {list.map((item, index) => (
            <div key={index} className="list-item">
              <li>{item}</li>
              <button
                className="delete-btn"
                onClick={() => setList(list.filter((_, i) => i !== index))}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default UserList;
