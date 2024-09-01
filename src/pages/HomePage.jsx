import React from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../assets/images/AppImage.jpg';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="welcome-section">
        <h1>Welcome to TickTask</h1>
        <p>Your Personal Task Manager</p>
        <Link to="/tasks" className="task-page-link">
          Go to Task Page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
