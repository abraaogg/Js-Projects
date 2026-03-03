import React from "react";

function Search({ search, setearch }) {
  return (
    <div className="search">
      <h2>Pesquisar</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setearch(e.target.value)}
        placeholder="Digite para pesquisar..."
      />
    </div>
  );
}

export default Search;
