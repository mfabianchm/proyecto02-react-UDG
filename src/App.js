import "./App.css";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Form from "./components/Form";
import Productos from "./components/Productos";
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("resize", () =>
      setViewportWidth(window.innerWidth)
    );
  }, []);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  return (
    <div className="App">
      {viewportWidth > 570 ? <Navbar /> : <NavbarMobile />}
      <Hero />
      <Nosotros />
      <Servicios />
      <Productos />
      <Form />
    </div>
  );
}

export default App;
