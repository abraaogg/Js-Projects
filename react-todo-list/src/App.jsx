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
    { id: 1, text: "Study React" },
    { id: 2, text: "Build Todo App" },
  ]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos([...todos, newTodo]);
  }
  return (
    <>
      <div className="app">
        <h1>Your Todo's</h1>
        <Search />
        <Filter />
        <List todos={todos} />
        <Form addTodo={addTodo}/>
      </div>
    </>
  );
}

export default App;
