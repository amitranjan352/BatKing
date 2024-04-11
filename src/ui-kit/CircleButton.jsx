import React from 'react';
import PropTypes from 'prop-types';

const CircleButton = ({ color, onClick, children }) => {
    const buttonStyle = {
        backgroundColor: color,
        borderRadius: '50%',
        width: '75px',
        height: '75px',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 'bold',
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
};

CircleButton.propTypes = {
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default CircleButton;
