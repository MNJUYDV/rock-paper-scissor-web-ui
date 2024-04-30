import React, { useState, useEffect } from 'react';
import './PlayGame.css';
import '../shared/Buttons.css'

import rockImage from '../../assets/images/rock.png';
import paperImage from '../../assets/images/paper.png';
import scissorsImage from '../../assets/images/scissor.png';

import rockImageInverted from '../../assets/images/rockI.png';
import paperImageInverted from '../../assets/images/paperI.png';
import scissorsImageInverted from '../../assets/images/scissorI.png';

import winSound from '../../assets/sounds/win.mp3';
import loseSound from '../../assets/sounds/lose.mp3';
import tieSound from '../../assets/sounds/tie.mp3';

import { useLocation, useNavigate } from 'react-router-dom';


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

function PlayGame() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setplayer2Score] = useState(0);
  const [playerChoice, setPlayerChoice] = useState('rock');
  const [computerChoice, setComputerChoice] = useState('rock');
  const [gameResult, setGameResult] = useState('Let\'s Begin!');
  const location = useLocation();
  const { playerName, gameId } = location.state;

  const winAudio = new Audio(winSound);
  const loseAudio = new Audio(loseSound);
  const tieAudio = new Audio(tieSound);
  const navigate = useNavigate();


  useEffect(() => {
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
  });

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
      setPlayer1Score(player1Score + 1);
      setGameResult('You Win!');
      winAudio.play();
    } else {
      setplayer2Score(player2Score + 1);
      setGameResult('You Lose!');
      loseAudio.play();
    }
  };

  const callCreateLeaderBoardAPI = () => {
    fetch(`${process.env.REACT_APP_CREATE_LEADERBOARD_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        game_id: gameId,
        player1_score: player1Score,
        player2_score: player2Score,
      }),
    })
      .then(response => {
        if (response.ok) {
          console.log(response.message);
        } else {
          console.error('API Failed to submit LeaderBoard');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const handleEndGame = () => {
    callCreateLeaderBoardAPI();
    navigate(`/`);
  };

  const handleResetGame = () => {
    callCreateLeaderBoardAPI();
    setPlayer1Score(0);
    setplayer2Score(0);
    setGameResult("Let's Begin!");
    setPlayerChoice('rock');
    setComputerChoice('rock');
  };

  return (
    <div className="game">
      {gameResult && <div className="game-result">{gameResult}</div>}
      <div className="options">
        <div className="game-container">
          <div className="choice player">
            <span>{playerName}: {player1Score}</span>
            <img src={playerChoices[playerChoice]} alt="Player choice" />
          </div>
          <div className="choice computer">
            <span>Computer: {player2Score}</span>
            <img src={computerChoices[computerChoice]} alt="Computer choice" />
          </div>
        </div>
        <div className="choice">
        <div className="label">Choose:</div>
          {Object.keys(playerChoices).map((choice) => (
            <button 
              key={choice} 
              className = "button"
              onClick={() => play(choice)}
            >
              {choice.charAt(0).toUpperCase() + choice.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="button-container">
      <button className="button reset-game-button" onClick={handleResetGame}>Reset Game</button>
      <button className="button end-game-button" onClick={handleEndGame}>End Game</button>
    </div>
    </div>
  );
}

export default PlayGame;
