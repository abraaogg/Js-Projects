import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Study React", completed: false },
    { id: 2, text: "Build Todo App", completed: false },
  ]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    );
  }

  function handleAddTodo() {
    addTodo(text);
    setText("");
    setOpen(false);
  }
  return (
    <>
      <div className="app">
        <h1>Your Todo's</h1>
        <Search />
        <Filter />
        <List todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        <Form addTodo={addTodo}/>
      </div>
    </>
  );
}

export default App;
