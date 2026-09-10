import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div class="background-layer">
        <div class="sky-blob"></div>
        <div class="coral-blob"></div>
        <div class="sun-blob"></div>
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
