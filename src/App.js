import './App.css';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Title from './Title';
import NavBar from './NavBar';
import Login from './Login';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('doggy');

  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {!isLoggedIn ? (
          <Routes>
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <>
            <Title />
            <nav>
              <ul>
                <li>
                  <NavLink to="/" className="linkbutton">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="linkbutton">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="linkbutton">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/"  element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact"  element={<Contact username={username} />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
