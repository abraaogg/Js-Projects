import "./App.css";
import Modal from "./components/MOdal";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <>
      <h1>UI playground</h1>
     {/*  <Modal /> */}
     <Dropdown options ={["Option 1", "Option 2"]}/>
    </>
  );
}

export default App;
