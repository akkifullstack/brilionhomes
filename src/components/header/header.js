import React from 'react';
import logo from '../../assets/logo_xs.png';
import '../header/header.scss'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} />
        </div>
    )
}


export default Header;