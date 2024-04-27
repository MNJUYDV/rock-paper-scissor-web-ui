// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerNameInput from './pages/PlayerNameInput/PlayerNameInput';
import PlayGame from './pages/PlayGame/PlayGame';
import LeaderBoard from './pages/LeaderBoard/LeaderBoard';
import HomePage from './pages/Home/HomePage';

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
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
