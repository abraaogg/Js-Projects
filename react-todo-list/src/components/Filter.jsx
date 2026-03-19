function Filter({ onChangeFilter, category }) {
  return (

    <div>
      <p>Filter:</p>
      <select className="filter" value={category} onChange={(e) => onChangeFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Chores">Chores</option>
      </select>
    </div>
  );
}

export default Filter;
