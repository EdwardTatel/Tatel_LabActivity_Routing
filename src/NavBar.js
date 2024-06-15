import './App.css';
import React from 'react';

function NavBar({ onNavClick }) {
  const handleButtonClick = (content) => {
    onNavClick(content);
  };

  return (
    <ul>
      <li>
        <button onClick={() => handleButtonClick('home')}>Home</button>
      </li>
      <li>
        <button onClick={() => handleButtonClick('about')}>About Us</button>
      </li>
      <li>
        <button onClick={() => handleButtonClick('contact')}>Contact</button>
      </li>
    </ul>
  );
}

export default NavBar;
