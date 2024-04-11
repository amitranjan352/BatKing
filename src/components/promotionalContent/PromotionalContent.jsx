// PromotionalContent.jsx
import React from 'react';
//import StartGameButton from './StartGameButton'; // Assuming you already have this component
import './PromotionalContent.css'; // Import CSS for styling
import StartGameButton from '../../ui-kit/startGame/StartGameButton';

const PromotionalContent = () => {
    return (
        <div className="promotional-content">
            <div className="content-text">
                <h2>Play and Earn Money!</h2>
                <p>Join the fun and excitement of our game and start making money today.</p>
            </div>
            <img src="https://via.placeholder.com/500x300" alt="Game Preview" className="game-preview" />
            <StartGameButton />
        </div>
    );
};

export default PromotionalContent;
