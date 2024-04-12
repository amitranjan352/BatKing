import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CircleButton.css'

const CircleButton = ({ color, onClick, children }) => {
    const [isSelected, setIsSelected] = useState(false);
    const buttonStyle = {
        backgroundColor: color,
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 'bold',
        opacity: isSelected ? '0.5' : '1', // Reduce opacity if selected
        pointerEvents: isSelected ? 'none' : 'auto', // Disable pointer events if selected
    };

    const handleSelection = () => {
        setIsSelected(true);
        onClick();
    }



    return (
        <button style={buttonStyle} onClick={handleSelection} disabled={isSelected}>
            {children}
        </button >
    );
}



CircleButton.propTypes = {
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default CircleButton;
