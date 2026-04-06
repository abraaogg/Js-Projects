import React, { useState } from "react";
import "../../css/habitTracker.css";

function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [input, setInput] = useState("");

  function addHabits(newHabit) {
    setHabits((prev) => [
      ...prev,
      { id: Date.now(), name: newHabit, done: false },
    ]);
    setInput("");
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
  return (
    <div className="container">
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addHabits(input)}>Add</button>
      </div>
      {habits.map((habit) => (
        <p
          className={habit.done ? "habit done" : "habit"}
          key={habit.id}
          onClick={() => toggleHabit(habit.id)}
        >
          {habit.name}
        </p>
      ))}
    </div>
  );
}

export default HabitTracker;
