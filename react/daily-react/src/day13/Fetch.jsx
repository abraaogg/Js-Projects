import React, { useState, useEffect } from "react";
function Fetch() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);
  return (
    <div>
      <input type="text" value={search} onChange={(e) => e.target.value} />
    </div>
  );
}

export default Fetch;
