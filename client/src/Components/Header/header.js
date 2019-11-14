import React from 'react'
import './header.css';
import Logo from '../../resources/MYtineraryLogo.png';

const Header = () => {
    return (
        <div>
            <img src={Logo} alt="logo" className="img-fluid"/>
        </div>
    );
}

export default Header;