import React, { useState } from 'react';
import './Game.css'
import CircleButton from '../../ui-kit/CircleButton'
import { Navigate, useNavigate } from 'react-router-dom';
import Timer from '../../ui-kit/timer/Timer';
const Game = props => {
    const [selectedColor, setSelectedColor] = useState('');
    const navigate = useNavigate();
    const handler = () => {
        navigate('/');
    }
    const clickHandler = (val) => {
        setSelectedColor(val);
    }

    return (
        <div>
            <div style={{ padding: '20px' }}>
                <Timer content="Choose the color" />
            </div>
            <div className='buttons'>
                <CircleButton color="red" onClick={() => clickHandler('red')}>
                    Click
                </CircleButton>
                <CircleButton color="blue" onClick={() => clickHandler('blue')}>
                    Click
                </CircleButton>
                <CircleButton color="green" onClick={() => clickHandler('green')}>
                    Click
                </CircleButton>

            </div>
            {selectedColor && <div className='result'>
                <h4>You choosed : {selectedColor} color</h4>
                <h3>Please wait....</h3>
            </div>}
            <div style={{ textAlign: 'center', position: 'relative', top: '411px' }}>
                <button className='exit-game-button' onClick={handler}>Exit the Game</button>
            </div>

        </div >
    )
}



export default Game
