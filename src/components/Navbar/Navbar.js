import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li className="navbar-logo"><img src="https://i.imgur.com/IU6CoF3.png" alt="Logo" /></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar