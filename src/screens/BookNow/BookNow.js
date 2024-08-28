import React from 'react';
import './BookNow.css';

function BookNow() {
    return (
        <div className='main-book'>
        <div className="container">
            <h1>Book a Service</h1>
            <form className="booking-form">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="service">Select Service:</label>
                <select id="service" name="service" required>
                    <option value="carpentry">Carpentry</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical</option>
                    <option value="ac-repair">A/C Repair</option>
                </select>

                <label htmlFor="date">Preferred Date:</label>
                <input type="date" id="date" name="date" required />

                <label htmlFor="message">Additional Notes:</label>
                <textarea id="message" name="message" rows="4"></textarea>

                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    );
}

export default BookNow;