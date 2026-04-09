import React, { useState } from "react";
import "../../css/habitTracker.css";
import HabitItem from "./HabitItem";

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
      prev.map((habit) =>
        habit.id === id ? { ...habit, done: !habit.done } : habit,
      ),
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
          placeholder="Add a habit..."
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
        <HabitItem
          key={habit.id}
          habit={habit}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
        />
      ))}
    </div>
  );
}

export default HabitTracker;
