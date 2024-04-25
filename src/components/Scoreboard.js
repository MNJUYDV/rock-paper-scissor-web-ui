// components/Scoreboard.js
import React from 'react';

function Scoreboard({ playerScore, computerScore }) {
  return (
    <div className="scoreboard">
      <div className="score">Player: {playerScore}</div>
      <div className="score">Computer: {computerScore}</div>
    </div>
  );
}

export default Scoreboard;
