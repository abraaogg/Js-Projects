import React, { useState, useEffect } from "react";

function MiniFetchAdvanced() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const result = await response.json();
        setData(result);
      } catch (err) {
      } finally {
        setLoading(false);
      }
      const filteredData = data.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()),
      );
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          {filteredData.length === 0 ? (
            <li>No users found</li>
          ) : (
            filteredData.map((user) => <li key={user.id}>{user.name}</li>)
          )}
        </ul>
      </div>
    );
}

export default MiniFetchAdvanced;
