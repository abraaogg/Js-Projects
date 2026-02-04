import React, { useState } from "react";
import "./UserList2.css";
import Input from "./Input";
import List from "./List";

function UserList() {
  const [list, setList] = useState([]);

  // Add item function
  const addItem = (newItem) => {
    const trimmedItem = newItem.trim();
    if (!trimmedItem) return;
    setList([...list, trimmedItem]);
  };

  // Delete item function
  const deleteItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>List</h1>

      <Input addItem={addItem} />
      {list.length === 0 && <p>No items yet</p>}
      <List items={list} deleteItem={deleteItem} />
    </div>
  );
}

export default UserList;
