import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Router/Navbar";
import Home from "./Router/Home";
import Project from "./Router/Project";
import Post from "./Router/Post";
import About from "./Router/About";
import Dark from "./Router/Dark";
import Footer from "./Router/Footer";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={
        darkMode
          ? "bg-black text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <BrowserRouter>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} />}
          />

          <Route
            path="/Project"
            element={<Project darkMode={darkMode} />}
          />

          <Route
            path="/Post"
            element={<Post darkMode={darkMode} />}
          />

          <Route
            path="/About"
            element={<About darkMode={darkMode} />}
          />

          <Route
            path="/Dark"
            element={<Dark />}
          />
        </Routes>

        <Footer darkMode={darkMode} />
      </BrowserRouter>
    </div>
  );
}

export default App;