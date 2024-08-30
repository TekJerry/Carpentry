import React from 'react';
import "./ContactUs.css";

function Contact() {
    return (
        <div>
            {/* Banner Section */}
            <div className="contact-banner">
                <h1 className="banner-text">Contact Us</h1>
            </div>

            {/* Get in Touch Header */}
            <div className="contact-header">
                <h2>Get in Touch</h2>
            </div>

            {/* Contact Columns */}
            <div className="contact-container">
                <div className="contact-column">
                    <img src="contact-info.jpg" alt="Contact Information" className="contact-image" />
                    <h3>Contact Information</h3>
                    <p>
                        We're here to answer any questions you may have about our carpentry services. Reach out to us and we'll respond as soon as we can.
                    </p>
                    <h4>You can reach us at:</h4>
                    <ul>
                        <li>Phone: (123) 456-7890</li>
                        <li>Email: info@divisionwoodworks.com</li>
                        <li>Address: 123 Carpentry Lane, Woodville, WD 12345</li>
                    </ul>
                    <button className="contact-button">Call Now</button>
                </div>

                <div className="contact-column">
                    <img src="contact-form.jpg" alt="Contact Form" className="contact-image" />
                    <h3>Send us a Message</h3>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="tel" placeholder="Your Phone" />
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit" className="contact-button">Send Message</button>
                    </form>
                </div>

                <div className="contact-column">
                    <img src="business-hours.jpg" alt="Business Hours" className="contact-image" />
                    <h3>Business Hours</h3>
                    <p>
                        Visit our shop or schedule an appointment during our business hours.
                    </p>
                    <h4>We are open:</h4>
                    <ul>
                        <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                        <li>Saturday: 10:00 AM - 4:00 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                    <button className="contact-button">Schedule Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;