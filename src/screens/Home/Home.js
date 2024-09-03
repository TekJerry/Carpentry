import React, { useState } from "react";
import "./Home.css";

// Sample featured products data - replace with your actual data
const featuredProducts = [
  { id: 1, image: "https://i.imgur.com/rjRqsMG.png", title: "Custom Kitchen Cabinets", description: "Handcrafted maple cabinets with a modern finish." },
  { id: 2, image: "https://i.imgur.com/djCOvoH.png", title: "Elegant Dining Table", description: "Solid oak dining table with intricate inlay work." },
  { id: 3, image: "https://i.imgur.com/GvXHgSL.png", title: "Built-in Bookshelf", description: "Floor-to-ceiling bookshelf with adjustable shelving." },
  { id: 4, image: "https://i.imgur.com/xdqXJOW.png", title: "Rustic Coffee Table", description: "Reclaimed wood coffee table with steel accents." },
  { id: 5, image: "https://i.imgur.com/9bpO9yS.png", title: "Modern Office Desk", description: "Sleek walnut desk with hidden cable management." },
  { id: 6, image: "https://i.imgur.com/rosf9zE.png", title: "Craftsman Style Door", description: "Custom entry door with stained glass inserts." },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1));
  };
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
      <div className="featured-products-section">
        <h2 className="featured-products-title">Featured Products</h2>
        <div className="featured-products-slider">
          <button className="slider-button prev" onClick={prevSlide}>&lt;</button>
          <div className="featured-products-container">
            {featuredProducts.slice(currentSlide * 3, currentSlide * 3 + 3).map((product) => (
              <div key={product.id} className="featured-product-item">
                <img src={product.image} alt={product.title} className="featured-product-image" />
                <div className="featured-product-overlay">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-button next" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
