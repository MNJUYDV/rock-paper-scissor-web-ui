// components/ComputerPanel.js
import React from 'react';

function ComputerPanel({ selection }) {
  return (
    <div className="computer-panel">
      {selection && <img src={`./${selection}.png`} alt={selection} />}
    </div>
  );
}

export default ComputerPanel;
