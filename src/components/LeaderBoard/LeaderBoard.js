import React, { useState, useEffect } from 'react';
import './LeaderBoard.css';
import '../shared/Buttons.css';
import '../shared/Headers.css';
import { useNavigate } from 'react-router-dom';
import Header from '../shared/Header'; 

function LeaderBoard() {
  const [leaderboard, setLeaderBoard] = useState({});
  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetch player details from the backend API
    fetch(`${process.env.REACT_APP_FETCH_LEADERBOARD_URL}`)
      .then(response => response.json())
      .then(data => setLeaderBoard(data.leaderboard_stats))
      .catch(error => console.error('Error fetching player details:', error));
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="leaderboard">
      <Header /> {/* Include the Header component */}
      <h1 className="h1">Players Statistics</h1>
      <ul>
        {Object.entries(leaderboard).map(([playerId, stats]) => (
          <li key={playerId}>
            {stats.player_name} - Wins: {stats.wins}, Losses: {stats.losses}, Ties: {stats.ties}
          </li>
        ))}
      </ul>
      <button className="button back-button" onClick={handleGoBack}>Back</button> {/* Add the back button */}
    </div>
  );
}

export default LeaderBoard;
