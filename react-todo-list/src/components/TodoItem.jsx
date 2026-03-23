import { FaTrash } from "react-icons/fa";

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className="todoItem">
      <div>
        <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </p>

        <span className={`category ${todo.category}`}>{todo.category}</span>
      </div>

      <div>
        <input
          type="checkbox"
          className="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <button onClick={() => deleteTodo(todo.id)}>
          <FaTrash className="delete" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
