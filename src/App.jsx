import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [view, setView] = useState('landing'); // Manage views: 'landing', 'products', 'about'

  const handleNavigation = (targetView) => {
    setView(targetView); // Change the view based on the target
  };

  return (
    <div className="app-container">
      {/* Landing Page */}
      {view === 'landing' && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button
                className="get-started-button"
                onClick={() => handleNavigation('products')}
              >
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      )}

      {/* Product List */}
      {view === 'products' && (
        <div className="product-list-container visible">
          <ProductList onNavigate={handleNavigation} />
        </div>
      )}

      {/* About Us Page */}
      {view === 'about' && (
        <div className="about-us-page">
          <AboutUs />
          <button
            className="back-to-products"
            onClick={() => handleNavigation('products')}
          >
            Back to Products
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
