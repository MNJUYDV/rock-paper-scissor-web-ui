import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import '../shared/Buttons.css';
import Header from '../shared/Header'; 

function HomePage() {
  return (
    <div>
      <div className="home-page">
        <Header /> {/* Include the Header component */}
        <div className='button-container home-page-button-container'>
          <Link to="/play-game" className='button'>Play Now</Link>
          <Link to="/leaderboard" className='button'>LeaderBoard</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
