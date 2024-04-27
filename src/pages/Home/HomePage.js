// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import '../../components/Shared.css'

function HomePage() {
  return (
    <div className="home-page">
      <div className='button-container'>
        <Link to="/play-game" className='button'>Play Now</Link>
        <Link to="/view-statistics" className='button'>LeaderBoard</Link>
      </div>
    </div>
  );
}

export default HomePage;
