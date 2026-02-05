import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Inputs from "./day2/Inputs & Controlled State/Inputs";
import List from "./day3/List/List";
import DynamicList from "./day4/DynamicList";
import UserData from "./day5/UserData";
import UserList from "./day6/UserList";
import UserList2 from "./day7/UserList2";
import Inputs1 from "./day8/Inputs1";
import List1 from "./day8/List1";
import ShoppingList from "./day8/ShoppingList";

function App() {
  return (
    <div>
      {/* 
      <Inputs/>
      <List/>
      <DynamicList/>
      <UserData/> 
      <UserList/>
      <UserList2/>
      */}
      <ShoppingList />
    </div>
  );
}

export default App;
