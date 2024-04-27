import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerNameInput from '../PlayerNameInput/PlayerNameInput';
import PlayGame from '../PlayGame/PlayGame';
import ViewStatistics from '../LeaderBoard/LeaderBoard';
import './HomePage.css';
import '../../components/Shared.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Route for Player Name Input */}
        <Route path="/play-game" element={<PlayerNameInput />} />

        {/* Route for Play Game */}
        <Route path="/play-game/play" element={<PlayGame />} />

        {/* Route for View Statistics */}
        <Route path="/view-statistics" element={<ViewStatistics />} />
      </Routes>
    </Router>
  );
}

// Home Page Component
function HomePage() {
  return (
    <div className="home-page">
      <div className='button-container'>
        <button className='button'><a href="/play-game">Play Now</a></button>
        <button className='button'><a href="/view-statistics">LeaderBoard</a></button>
      </div>
    </div>
  );
}

export default App;
