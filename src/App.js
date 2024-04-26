// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerNameInput from './PlayerNameInput';
import PlayGame from './PlayGame';
import ViewStatistics from './ViewStatistics';
import './HomePage.css'; // Import CSS file

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
      <h1>Rock Paper Scissors</h1>
      <div className='button-container'>
        <button className='play-game'><a href="/play-game">Play Game</a></button>
        <button className='view-statistics'><a href="/view-statistics">View Statistics</a></button>
      </div>
    </div>
  );
}

export default App;
