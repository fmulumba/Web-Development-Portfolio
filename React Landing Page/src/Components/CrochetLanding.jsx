import React from 'react';
import './CrochetLanding.css';

const CrochetLanding = () => {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-wrapper">
          <div className="logo-section">
            <img 
              src="/FMCoutureLogo.JPG"
              alt="Crochet Logo" 
              className="logo"
            />
            <span className="business-name">FM Couture</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-menu">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Shop</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Contact</a>
            <a href="#" className="nav-link">Cart</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button>☰</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-wrapper">
          {/* Main Image/Logo */}
          <div className="hero-image">
            <img
              src="/CoverPhoto1.jpg"
              alt="Crochet Showcase"
              />
          </div>

          {/* Business Info */}
          <div className="hero-content">
            <h1>Your 1 Stop Shop For Crochet Wearables </h1>
            <p>
              Welcome to FM Couture, where each piece is carefully crafted 
              with attention to detail and love. We specialize in creating beautiful, body inclusive 
              handmade crochet items that are comfortable and timeless.
            </p>
            <div className="button-group">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrochetLanding;