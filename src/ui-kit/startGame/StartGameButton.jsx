// StartGameButton.jsx
import React from 'react';
import './StartGameButton.css'; // Import CSS for styling
import { Link } from 'react-router-dom';

const StartGameButton = () => {
  return (
    <Link to='/game'>
      <button Link='/game' className="start-game-button" > Start Game</button ></Link>
  );
};

export default StartGameButton;
