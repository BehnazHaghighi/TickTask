import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p className="read-the-docs">
        Learn more about TickTask in the documentation.
        <Link to="/" className="home-button">
          Go to Home
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
