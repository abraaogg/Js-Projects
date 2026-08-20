import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Author from "./components/Author";
import Included from "./components/Included";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

import "./App.css";
function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Author />
        <Included />
        <Pricing />
        <Faq />
      </main>

      <Footer />
    </>
  );
}

export default App;