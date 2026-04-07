import "./App.css";
import Modal from "./components/MOdal";
import Dropdown from "./components/Dropdown";
import HabitTracker from "./components/habit-tracker/HabitTracker";

function App() {
  return (
    <>
      <h1 className="pageTitle">UI playground</h1>
      {/*  <Modal /> 
          <Dropdown options ={["Option 1", "Option 2"]}/>
     */}
     <HabitTracker/>
    </>
  );
}

export default App;
