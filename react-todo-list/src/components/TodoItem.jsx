import React from "react";

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div>
      <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </p>
      <button onClick={() => toggleTodo(todo.id)}>Check</button>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  );
}

export default TodoItem;
