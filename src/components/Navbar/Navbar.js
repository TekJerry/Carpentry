import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/BookNow">Book Now</Link></li>
                <li className="navbar-logo"><img src="logo.png" alt="Logo" /></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar