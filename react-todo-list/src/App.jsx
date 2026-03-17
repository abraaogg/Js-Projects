import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";
import Header from "./components/Header";

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
        <Header/>
        <Filter />
        <List todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        <Form addTodo={addTodo}/>
      </div>
    </>
  );
}

export default App;
