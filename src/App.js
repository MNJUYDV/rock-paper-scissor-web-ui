import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerNameInput from './PlayerNameInput';
import PlayGame from './PlayGame';
import ViewStatistics from './ViewStatistics';

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
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        <button><a href="/play-game">Play Game</a></button>
      </div>
      <div>
        <button><a href="/view-statistics">View Statistics</a></button>
      </div>
    </div>
  );
}

export default App;
