import React from "react";

function TodoItem({todo}) {
  return (
    <div>
      <p>{todo.text}</p>
      <button>Check</button>
      <button>X</button>
    </div>
  );
}

export default TodoItem;
