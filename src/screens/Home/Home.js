import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="home-banner">
        <h1 className="home-banner-text">Welcome To Our Page!</h1>
      </div>

      {/* Content Section */}
      <div className="about-section">
        <div className="content-container">
          <div className="left-content">
            <h1 className="business-name">Division Woodworks</h1>
            <h2 className="subtitle">
              ARCHITECTURAL WOODWORK & LUXURY MILLWORK
            </h2>
            <p className="description">
              Is a family owned and operated custom-woodwork corporation located
              in Miami, Florida. For many generations superior craftsmanship has
              been a tradition in the Martinez Family, our family. Today,
              Roberto & Robeisy Martinez (3rd and 4th Generations carpenters)
              proudly offer some of the finest handcrafted woodwork. For several
              years Division Woodworks has provided its services to a wide
              variety of Luxury Residences, Hotels & Condominiums, Restaurants,
              Stores, and many more customers throughout South Florida and the
              Caribbean.
            </p>
          </div>
          <div className="right-content">
            <div className="contact-details">
              <h3 className="contact-title">PHONE</h3>
              <p className="contact-info">305 888 9836</p>
            </div>
            <div className="location-details">
              <h3 className="contact-title">LOCATION</h3>
              <p className="contact-info">4500 NW 37TH AVE, MIAMI FL 33142</p>
            </div>
            <button className="contact-button">GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
