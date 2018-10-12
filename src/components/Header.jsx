import React from 'react';
import './Header.css';

const Header = (props) => (
  <div className={`Header-container ${props.type === 'juiz' ? 'black' : '' }`}>
    <h1 className="Header-title">Painel do {props.type}</h1>
    <button onClick={props.changePage}>Ir para {props.type === 'juiz' ? 'assessor' : 'juiz'}</button>
  </div>
);

export default Header;