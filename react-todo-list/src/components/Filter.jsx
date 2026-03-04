import React from 'react'

function Filter() {
  return (
    <div>
        <p>Filter:</p>
        <select>
            <option value="Personal">Select type</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Chores">Chores</option>
        </select>
    </div>
  )
}

export default Filter