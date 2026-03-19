import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Study React", completed: false, category: "Personal" },
    { id: 2, text: "Build Todo App", completed: false, category: "Work" },
  ]);

  function addTodo(text, category) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      category: category,
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
  const [filter, setFilter] = useState("All");
  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    return todo.category === filter;
  });

  return (
    <>
      <div className="app">
        <Header />
        <Filter onChangeFilter={setFilter} />
        <div className="content">
          <List
            todos={filteredTodos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        </div>
        <Form addTodo={addTodo} />
      </div>
    </>
  );
}

export default App;
