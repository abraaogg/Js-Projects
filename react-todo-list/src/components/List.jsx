import React from "react";
import TodoItem from "./TodoItem";

function List({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
        <TodoItem todo={todo}/>
        </div>
      ))}
    </div>
  );
}

export default List;
