import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Division Woodworks</h3>
                    <p>Crafting excellence in every piece since [Year].</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>123 Carpentry Lane, Woodville, WD 12345</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@divisionwoodworks.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Division Woodworks. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;