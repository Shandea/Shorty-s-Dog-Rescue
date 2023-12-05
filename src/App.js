import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Adopt from "./pages/adopt/Adopt";
import Donate from "./pages/donate/Donate";
import Admin from "./pages/admin/Admin"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </div>
  );
}

export default App;
