function Filter({ onChangeFilter, category }) {
  return (
    
    <div className="filter">
      <p>Filter:</p>
      <select value={category} onChange={(e) => onChangeFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Chores">Chores</option>
      </select>
    </div>
  );
}

export default Filter;
