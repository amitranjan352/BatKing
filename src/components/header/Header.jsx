import React from 'react';
import './Header.css'; // Import CSS for styling
//import { ReactComponent as BetKingLogo } from './betking-logo.svg'; // Import BetKing logo SVG
import { BetKingLogo } from './BetKingLogo'
import { FaSignInAlt, FaUser, FaCrown } from 'react-icons/fa'; // Import icons for sign in and sign up

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                {/* <BetKingLogo className="logo" /> */}
                {/* <BetKingLogo /> */}
                <FaCrown className="icon" color='gold' size={40} />
                <span className="brand-name">BetKing</span>
            </div>
            <div className="icons-container">
                <FaUser className="icon" color='gold' size={35} />
            </div>
        </div>
    );
};

export default Header;
