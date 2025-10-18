import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Portfolio from "./containers/portfolio";
import About from "./containers/About";
import Projets from "./containers/Projets";
import Contact from "./containers/Contact";
import Test from "./tets";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./index.css"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
  <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Portfolio darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projets darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;
