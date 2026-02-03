import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Inputs from "./day2/Inputs & Controlled State/Inputs";
import List from "./day3/List/List";
import DynamicList from "./day4/DynamicList";
import UserData from "./day5/UserData";
import UserList from "./day6/UserList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* 
      <Inputs/>
      <List/>
      <DynamicList/>
      <UserData/> */}
      <UserList/>
    </div>
  );
}

export default App;
