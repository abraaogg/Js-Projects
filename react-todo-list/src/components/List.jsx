import React from "react";
import TodoItem from "./TodoItem";
import { FiFile } from "react-icons/fi";

function List({ todos, deleteTodo, toggleTodo }) {
  return (
    <div>
      {todos.length === 0 && (
        <div className="emptyState">
          <FiFile className="emptyIcon" />
          <h3>No tasks yet</h3>
          <p>Start by adding a new task below</p>
        </div>
      )}
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        </div>
      ))}
    </div>
  );
}

export default List;
