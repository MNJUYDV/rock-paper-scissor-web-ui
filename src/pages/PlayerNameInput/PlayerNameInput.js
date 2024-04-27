import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlayerNameInput.css'
import '../../components/Shared.css'
 

function PlayerNameInput() {
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  const handleStartGame = () => {
    if (playerName.trim() === '') {
      alert('Please enter your player name.');
      return;
    }

    navigate(`/play-game/play?playerName=${encodeURIComponent(playerName)}`);
  };

  return (
    <div class = "player-name-input">
      <h2>Player's Name</h2>
      <input
        type="text"
        class = "text-holder"
        placeholder="Enter your name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button class = "button" onClick={handleStartGame}>Start Game</button>
    </div>
    
  );
}

export default PlayerNameInput;
