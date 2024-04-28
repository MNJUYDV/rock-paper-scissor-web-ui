import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlayerNameInput.css'
import '../shared/Buttons.css'
import { START_GAME_URL } from '../../config';
import Header from '../shared/Header'; 


function PlayerNameInput() {
  const [playerName, setPlayerName] = useState('');
  const [gameId, setGameId] = useState(null);

  const navigate = useNavigate();

  const handleStartGame = () => {
    if (playerName.trim() === '') {
      alert('Please enter your player name.');
      return;
    }
  
    fetch(START_GAME_URL, {
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
          // Parse the response JSON
          return response.json();
        } else {
          // Handle errors
          console.error('Failed to start Game');
          throw new Error('Failed to start Game');
        }
      })
      .then(data => {
        const gameIdFromResponse = data.data.game_id;
        setGameId(gameId);
        navigate(`/play-game/play?playerName=${encodeURIComponent(playerName)}&gameId=${gameIdFromResponse}`);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  };

  return (
    <div className="player-name-input">
      <Header /> {/* Include the Header component */}
      <h2>Player's Name</h2>
      <input
        type="text"
        className = "text-holder"
        placeholder="Enter your name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button className = "button" onClick={handleStartGame}>Start Game</button>
    </div>
    
  );
}

export default PlayerNameInput;
