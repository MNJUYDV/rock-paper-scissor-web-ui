import React, { useState } from 'react';
import './App.css';

import rockImage from './images/rock.png';
import paperImage from './images/paper.png';
import scissorsImage from './images/scissor.png';

import rockImageInverted from './images/rockI.png';
import paperImageInverted from './images/paperI.png';
import scissorsImageInverted from './images/scissorI.png';

const playerChoices = {
  rock: rockImage,
  paper: paperImage,
  scissors: scissorsImage,
};

const computerChoices = {
  rock: rockImageInverted,
  paper: paperImageInverted,
  scissors: scissorsImageInverted,
};

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState('rock');
  const [computerChoice, setComputerChoice] = useState('rock');
  const [activeButton, setActiveButton] = useState(null);

  const play = (choice) => {
    const computerRandomChoice = getRandomChoice();
    setPlayerChoice(choice);
    setActiveButton(choice);
    setComputerChoice(computerRandomChoice);
    determineWinner(choice, computerRandomChoice);
  };

  const getRandomChoice = () => {
    const choiceNames = Object.keys(playerChoices);
    const randomIndex = Math.floor(Math.random() * choiceNames.length);
    return choiceNames[randomIndex];
  };

  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return;
    }

    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setPlayerScore(playerScore + 1);
    } else {
      setComputerScore(computerScore + 1);
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerChoice('rock');
    setComputerChoice('rock');
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className="scoreboard">
        <div className="player-score">Player: {playerScore}</div>
        <div className="computer-score">Computer: {computerScore}</div>
      </div>
      <div className="options">
        <div className="make-selection">Make Your Selection</div>
        <div className="game-container">
          <div className="choice player">
            <span>PLAYER</span>
            <img src={playerChoices[playerChoice]} alt="Player choice" />
          </div>
          <div className="choice computer">
            <span>COMPUTER</span>
            <img src={computerChoices[computerChoice]} alt="Computer choice" />
          </div>
        </div>
        <div className="buttons">
          {Object.keys(playerChoices).map((choice) => (
            <button 
              key={choice} 
              onClick={() => play(choice)}
              className={choice === activeButton ? "active" : ""}
            >
              {choice.charAt(0).toUpperCase() + choice.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <button className="reset-button" onClick={resetGame}>Reset Game</button>
    </div>
  );
  
}

export default App;