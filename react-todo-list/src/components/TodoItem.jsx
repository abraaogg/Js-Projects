import React from "react";

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </p>

      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  );
}

export default TodoItem;
