// ViewStatistics.js

import React, { useState, useEffect } from 'react';

function ViewStatistics() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch player details from the backend API
    fetch('http://127.0.0.1:5000/players')
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error('Error fetching player details:', error));
  }, []);

  return (
    <div>
      <h2>Player Statistics</h2>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name} - Wins: {player.wins}, Losses: {player.losses}, Ties: {player.ties}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewStatistics;
