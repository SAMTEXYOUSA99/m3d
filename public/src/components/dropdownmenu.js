// src/DropdownMenu.js
import React, { useState } from 'react';
import './dropdownmenu.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      {isOpen && (
        <ul className="menu-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre a Empresa</a></li>
          <li><a href="#help">Contato</a></li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
