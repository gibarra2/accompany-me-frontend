import React from 'react';
import NavBar from './NavBar';
import '../styles/Header.css';

const Header = ({ userData }) => {
  return (
    <header>
      <div className="header-banner">
        <h1>Acompáñame</h1>
      </div>
      <NavBar userData={userData} />
    </header>
  );
};

export default Header;
