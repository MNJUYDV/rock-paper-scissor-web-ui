import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlayerNameInput.css'
import '../../shared/Buttons.css'
 

function PlayerNameInput() {
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  const handleStartGame = () => {
    if (playerName.trim() === '') {
      alert('Please enter your player name.');
      return;
    }

    fetch('http://127.0.0.1:5000/api/v1/start-game', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        player_name: playerName
      }),
    })
      .then(response => {
        if (response.ok) {
          // Success
          console.log('Game Started successfully');
        } else {
          // Handle errors
          console.error('Failed to start Game');
        }
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });

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
