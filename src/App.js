import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <Form />
    </div>
  );
}

export default App;
