import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <Link to="/" className="app-header-link">
                <h1>TickTask</h1>
            </Link>
        </header>
    );
};

export default Header;
