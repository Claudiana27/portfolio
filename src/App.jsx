import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Portfolio from "./containers/portfolio";
import About from "./containers/About";
import Projets from "./containers/Projets";
import Contact from "./containers/Contact";
import "./App.css";
import "./index.css"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("fr");

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} lang={lang} setLang={setLang} />
      <Portfolio darkMode={darkMode} lang={lang} />
      <About darkMode={darkMode} lang={lang} />
      <Projets darkMode={darkMode} lang={lang} />
      <Contact darkMode={darkMode} lang={lang} />
    </div>
  );
}

export default App;
