import React from 'react';
import './Header.css';

const Header = (props) => (
  <div className="Header-container">
    <h1 className="Header-title">Painel do {props.title}</h1>
  </div>
);

export default Header;