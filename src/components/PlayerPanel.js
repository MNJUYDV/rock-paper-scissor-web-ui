import React from 'react';

function PlayerPanel({ onSelection }) {
  return (
    <div className="player-panel">
      <img src={`./RRockInverted.png`} alt="Rock" onClick={() => onSelection('rock')} />
      <img src={`./PPaperInverted.png`} alt="Paper" onClick={() => onSelection('paper')} />
      <img src={`./SScissorInverted.png`} alt="Scissor" onClick={() => onSelection('scissor')} />
    </div>
  );
}

export default PlayerPanel;
