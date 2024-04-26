// PlayerNameInput.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PlayerNameInput() {
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate(); // Change variable name to navigate

  const handleStartGame = () => {
    // Here you can add validation for the player name if needed
    if (playerName.trim() === '') {
      alert('Please enter your player name.');
      return;
    }

    // Redirect to the play game page
    navigate(`/play-game/play?playerName=${encodeURIComponent(playerName)}`);
  };

  return (
    <div>
      <h2>Enter Your Player Name</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button onClick={handleStartGame}>Start Game</button>
    </div>
    
  );
}

export default PlayerNameInput;
