import React from 'react';
import "./Services.css";

function Services() {
    return (
    <div>
    {/* Banner Section */}
    <div className="services-banner">
      <h1 className="banner-text">Our Premium Services</h1>
    </div>

    {/* Premium Quality Header */}
    <div className="services-header">
      <h2>Premium Quality</h2>
    </div>

    {/* Services Columns */}
    <div className="services-container">
      <div className="service-column">
        <img src="luxury.jpg" alt="Luxury Residences" className="service-image" />
        <h3>Luxury Residences</h3>
        <p>
          At Division Woodworks, we pay extraordinary attention to every detail to ensure and deliver the highest level of quality in our projects and surpass your expectations when giving your living space a new look or building your dream home.
        </p>
        <h4>Our work includes:</h4>
        <ul>
          <li>Kitchen and bathroom cabinetry</li>
          <li>Built-ins</li>
          <li>Interior doors</li>
          <li>Decorative beams and columns</li>
          <li>Closets</li>
          <li>Wall paneling</li>
          <li>Handcrafted furniture</li>
        </ul>
        <button className="contact-button">Contact Us</button>
      </div>

      <div className="service-column">
        <img src="commercial.jpg" alt="Commercial" className="service-image" />
        <h3>Commercial</h3>
        <p>
          We pride ourselves on being a preferred millwork contractor among local builders, designers, and architects for the commitment and professionalism we put in our work.
        </p>
        <h4>Our staff specializes in:</h4>
        <ul>
          <li>Lobbies and reception desks</li>
          <li>Wall and ceiling panels</li>
          <li>Round, oval, and square columns</li>
          <li>Corian manufacturing</li>
          <li>Elevator cabin panels</li>
        </ul>
        <button className="contact-button">Contact Us</button>
      </div>

      <div className="service-column">
        <img src="hospitality.jpg" alt="Hospitality" className="service-image" />
        <h3>Hospitality</h3>
        <p>
          At Division Woodworks, we understand the needs of hospitality properties. Our dedicated staff works hard to meet the high standards and requirements that come with these types of projects.
        </p>
        <h4>We offer:</h4>
        <ul>
          <li>Bars</li>
          <li>Reception desks</li>
          <li>Wainscot paneling</li>
          <li>Wall and ceiling panels</li>
          <li>Corean manufacturing</li>
        </ul>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  </div>
  )
}

export default Services;