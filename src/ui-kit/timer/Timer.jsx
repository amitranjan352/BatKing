import React, { useState, useEffect } from 'react';
import './Timer.css'; // Import CSS for styling

const Timer = ({ content }) => {
    const [timer, setTimer] = useState(60); // Initial timer value in seconds

    useEffect(() => {
        const interval = setInterval(() => {

            setTimer(prevTimer =>

                (prevTimer > 0 ? prevTimer - 1 : 0)
            );
        }, 500);
        return () => clearInterval(interval);
    }, []);

    // Format timer to display in mm:ss format
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 30;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        // <div className="timer-container" >

        //     <div className="right-timer">{formatTime(timer)}</div>
        // </div>
        <div className="timer-container">
            <div className="left-content">{content}</div>
            <div className="right-timer">{formatTime(timer)}</div>
        </div>
    );
};

export default Timer;
