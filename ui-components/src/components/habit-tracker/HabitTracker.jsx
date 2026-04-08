import React, { useState } from "react";
import "../../css/habitTracker.css";
import { FaTrash } from "react-icons/fa";

function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [input, setInput] = useState("");

  function addHabits(newHabit) {
    if (!newHabit.trim()) return; // stops if its empty and trim empty space

    const id = Date.now();

    setHabits((prev) => [
      ...prev,
      { id, name: newHabit.trim(), done: false, visible: false },
    ]);

    setInput("");

    setTimeout(() => {
      setHabits((prev) =>
        prev.map((habit) =>
          habit.id === id ? { ...habit, visible: true } : habit,
        ),
      );
    }, 10);
  }

  function toggleHabit(id) {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id === id) {
          return { ...habit, done: !habit.done };
        } else {
          return habit;
        }
      }),
    );
  }

  function deleteHabit(id) {
    // Step 1: trigger fade out
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, visible: false } : habit,
      ),
    );

    // Step 2: remove after animation
    setTimeout(() => {
      setHabits((prev) => prev.filter((habit) => habit.id !== id));
    }, 300); // match CSS duration
  }
  return (
    <div className="container">
      <div className="input-group">
        <input
          type="text"
          maxLength={30}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addHabits(input);
            }
          }}
        />
        <button onClick={() => addHabits(input)}>Add</button>
      </div>
      {habits.map((habit) => (
        <div>
          <p
            className={`habit ${habit.done ? "done" : ""} ${
              habit.visible ? "" : "hidden"
            }`}
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
        </div>
      ))}
    </div>
  );
}

export default HabitTracker;
