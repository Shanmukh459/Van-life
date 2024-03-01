import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About"
import Home from "./pages/Home"
import Vans from "./pages/Vans"

import "./server"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link className="home-btn" to="/">#VanLife</Link>
        <Link className="vans-btn" to="/vans">Vans</Link>
        <Link className="about-btn" to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);