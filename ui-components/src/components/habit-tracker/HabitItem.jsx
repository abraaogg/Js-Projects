import React from "react";
import { FaTrash } from "react-icons/fa";

function HabitItem({ habit, toggleHabit, deleteHabit }) {
  return (
    <p
      className={`habit ${habit.done ? "done" : ""} ${!habit.visible ? "hidden" : ""}`}
      onClick={() => toggleHabit(habit.id)}
    >
      {habit.name}
      <button
        className="deleteButton"
        onClick={(e) => {
          e.stopPropagation();
          deleteHabit(habit.id);
        }}
      >
        <FaTrash />
      </button>
    </p>
  );
}

export default HabitItem;
