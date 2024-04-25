import React, { useState, useEffect } from 'react';
import './App.css';

import rockImage from './images/rock.png';
import paperImage from './images/paper.png';
import scissorsImage from './images/scissor.png';

import rockImageInverted from './images/rockI.png';
import paperImageInverted from './images/paperI.png';
import scissorsImageInverted from './images/scissorI.png';

import winSound from './sounds/win.mp3';
import loseSound from './sounds/lose.mp3';
import tieSound from './sounds/tie.mp3';

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
  const [gameResult, setGameResult] = useState('Start the game');

  const winAudio = new Audio(winSound);
  const loseAudio = new Audio(loseSound);
  const tieAudio = new Audio(tieSound);

  useEffect(() => {
    // Shake rock images when the game starts or resets
    const shakeRockImages = () => {
      const rockImages = document.querySelectorAll('.choice img');
      rockImages.forEach((img) => {
        img.classList.add('shake');
      });
      setTimeout(() => {
        rockImages.forEach((img) => {
          img.classList.remove('shake');
        });
      }, 500); // Duration of the shaking animation
    };

    shakeRockImages();
  }, [playerChoice, computerChoice]);

  const play = (choice) => {
    setPlayerChoice('rock');
    setComputerChoice('rock');
    setTimeout(() => {
      const computerRandomChoice = getRandomChoice();
      setPlayerChoice(choice);
      setComputerChoice(computerRandomChoice);
      determineWinner(choice, computerRandomChoice);
    }, 500);
  };

  const getRandomChoice = () => {
    const choiceNames = Object.keys(playerChoices);
    const randomIndex = Math.floor(Math.random() * choiceNames.length);
    return choiceNames[randomIndex];
  };

  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setGameResult("It's a Tie!");
      tieAudio.play();
      return;
    }

    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setPlayerScore(playerScore + 1);
      setGameResult('You Win!');
      winAudio.play();
    } else {
      setComputerScore(computerScore + 1);
      setGameResult('You Lose!');
      loseAudio.play();
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerChoice('rock');
    setComputerChoice('rock');
    setGameResult('Start the game');  
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className="scoreboard">
        <div className="player-score">Player: {playerScore}</div>
        <div className="computer-score">Computer: {computerScore}</div>
      </div>
      {gameResult && <div className="game-result">{gameResult}</div>}
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
