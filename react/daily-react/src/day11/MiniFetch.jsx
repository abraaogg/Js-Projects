import React, { useState, useEffect } from "react";

function MiniFetch() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // fetch here
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search users..."
      />
      <ul>
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default MiniFetch;
