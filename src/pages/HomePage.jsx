import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../styles/HomePage.css';
import appLogo from '../assets/images/AppImage2.jpg';

const HomePage = () => {
  useEffect(() => {
    document.body.classList.add('homepage');
    document.body.style.backgroundImage = `url(${appLogo})`;

    return () => {
      document.body.classList.remove('homepage');
      document.body.style.backgroundImage = '';
    };
  }, []);

  return (
    <div className="home-page">
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
