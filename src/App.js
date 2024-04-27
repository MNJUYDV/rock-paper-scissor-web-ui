// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerNameInput from './components/PlayerNameInput/PlayerNameInput';
import PlayGame from './components/PlayGame/PlayGame';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import HomePage from './components/Home/HomePage';

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
