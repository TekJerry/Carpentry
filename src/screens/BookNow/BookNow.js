import React from 'react';
import './BookNow.css';

function BookNow() {
    return (
        <div className='booknow-page'>
            {/* Banner Section */}
            <div className="booknow-banner">
                <h1 className="banner-text">Book a Service</h1>
            </div>

            {/* Booking Form Section */}
            <div className="form-container">
                <form className="booking-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="service">Select Service:</label>
                        <select id="service" name="service" required>
                            <option value="carpentry">Carpentry</option>
                            <option value="plumbing">Plumbing</option>
                            <option value="electrical">Electrical</option>
                            <option value="ac-repair">A/C Repair</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Preferred Date:</label>
                        <input type="date" id="date" name="date" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Additional Notes:</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default BookNow;