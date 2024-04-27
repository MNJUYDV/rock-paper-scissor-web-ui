import React, { useState, useEffect } from 'react';
import './LeaderBoard.css';
import '../../shared/Buttons.css';
import '../../shared/Headers.css';
import { useNavigate } from 'react-router-dom';

function LeaderBoard() {
  const [leaderboard, setLeaderBoard] = useState([]);
  const navigate = useNavigate(); // Change variable name to navigate

  useEffect(() => {
    // Fetch player details from the backend API
    fetch('http://127.0.0.1:5000/leaderboard')
      .then(response => response.json())
      .then(data => setLeaderBoard(data.leaderboard_stats))
      .catch(error => console.error('Error fetching player details:', error));
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="leaderboard">
      <h1 className="h1">Player Statistics</h1>
      <ul>
        {leaderboard.map((entry, index) => (
          <li key={index}>
            {entry.player_name} - Wins: {entry.wins}, Losses: {entry.losses}, Ties: {entry.ties}
          </li>
        ))}
      </ul>
      <button className="button back-button" onClick={handleGoBack}>Back</button> {/* Add the back button */}
    </div>
  );
}

export default LeaderBoard;
