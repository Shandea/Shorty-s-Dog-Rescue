import React,{useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css';
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Adopt from "./pages/adopt/Adopt";
import Donate from "./pages/donate/Donate";
import Admin from './pages/admin/Admin';


function App() {
  
  const [showLogIn, setShowLogIn] = useState(true)
  const [showLogOut, setLogOut] = useState (false)
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div className="App">

      <NavBar
          showLogIn={showLogIn}
          setShowLogIn={setShowLogIn}
          showLogOut={showLogOut}
          setLogOut={setLogOut}
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
       />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/donate" element={<Donate />} />
        {isAdmin ? (
          <Route path="/admin" element={<Admin />} />
        ) : (
          <Route path="/admin" element={<Navigate to="/" />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
