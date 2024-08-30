import React from 'react';
import "./Gallery.css";

// Sample data - replace with your actual project data
const projects = [
  { id: 1, image: "https://i.imgur.com/rjRqsMG.png", title: "Custom Kitchen Cabinets", description: "Handcrafted maple cabinets with a modern finish." },
  { id: 2, image: "https://i.imgur.com/djCOvoH.png", title: "Elegant Dining Table", description: "Solid oak dining table with intricate inlay work." },
  { id: 3, image: "https://i.imgur.com/GvXHgSL.png", title: "Built-in Bookshelf", description: "Floor-to-ceiling bookshelf with adjustable shelving." },
  { id: 4, image: "https://i.imgur.com/xdqXJOW.png", title: "Rustic Coffee Table", description: "Reclaimed wood coffee table with steel accents." },
  { id: 5, image: "https://i.imgur.com/9bpO9yS.png", title: "Modern Office Desk", description: "Sleek walnut desk with hidden cable management." },
  { id: 6, image: "https://i.imgur.com/rosf9zE.png", title: "Craftsman Style Door", description: "Custom entry door with stained glass inserts." },
  // Add more projects as needed
];

function Gallery() {
  return (
    <div>
      {/* Banner Section */}
      <div className="gallery-banner">
        <h1 className="banner-text">Our Work</h1>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-container">
        {projects.map((project) => (
          <div key={project.id} className="gallery-item">
            <img src={project.image} alt={project.title} className="gallery-image" />
            <div className="gallery-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;