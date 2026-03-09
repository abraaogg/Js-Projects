import React from "react";
import TodoItem from "./TodoItem";

function List({ todos, deleteTodo, toggleTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </div>
      ))}
    </div>
  );
}

export default List;
