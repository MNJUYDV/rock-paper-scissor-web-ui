// LeaderBoard.js

import React, { useState, useEffect } from 'react';
import './LeaderBoard.css'
import '../../components/Shared.css'
import { useNavigate } from 'react-router-dom';

function LeaderBoard() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate(); // Change variable name to navigate

  useEffect(() => {
    // Fetch player details from the backend API
    fetch('http://127.0.0.1:5000/players')
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error('Error fetching player details:', error));
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div class = 'leaderboard'>
      <h1>Player Statistics</h1>
      <ul>
        {players.map(player => (
          <li key={player.player_name}>
            {player.player_name} - Wins: {player.wins}, Losses: {player.losses}, Ties: {player.ties}
          </li>
        ))}
      </ul>
      <button className = "back-button" onClick={handleGoBack}>Back</button> {/* Add the back button */}

    </div>
  );
}

export default LeaderBoard;
