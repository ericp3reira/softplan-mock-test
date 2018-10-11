import React from 'react';
import './Header.css';

const Header = (props) => (
  <div className={`Header-container ${props.type === 'juiz' ? 'black' : null }`}>
    <h1 className="Header-title">Painel do {props.type}</h1>
  </div>
);

export default Header;