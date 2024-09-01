import React from 'react';
import appLogo from '../assets/images/AppImage.jpg';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <a href="/" target="_self">
          <img src={appLogo} className="logo app-logo" alt="TickTask Application" />
        </a>
      </div>
      <h1>TickTask</h1>
    </header>
  );
};

export default Header;
