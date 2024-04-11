import React from 'react';
import './Game.css'
import CircleButton from '../../ui-kit/CircleButton'
import { Navigate, useNavigate } from 'react-router-dom';
import Timer from '../../ui-kit/timer/Timer';
const Game = props => {
    const navigate = useNavigate();
    const handler = () => {
        navigate('/');
    }
    return (
        <div>
            <div style={{ padding: '20px' }}>
                <Timer content="Game will start in..." />
            </div>
            <div className='buttons'>
                <CircleButton color="red" onClick={() => console.log('Clicked')}>
                    Click
                </CircleButton>
                <CircleButton color="blue" onClick={() => console.log('Clicked')}>
                    Click
                </CircleButton>
                <CircleButton color="green" onClick={() => console.log('Clicked')}>
                    Click
                </CircleButton>

            </div>
            <div style={{ textAlign: 'center', position: 'relative', top: '411px' }}>
                <button className='exit-game-button' onClick={handler}>Exit the Game</button>
            </div>

        </div>
    )
}



export default Game
