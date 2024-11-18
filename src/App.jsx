import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [view, setView] = useState('landing'); // Manage views: 'landing', 'products', 'about'
  const [showProductList, setShowProductList] = useState(false);

  const handleNavigation = (targetView) => {
    if (targetView === 'products') {
      setShowProductList(true); // Trigger the slide-up transition
      setTimeout(() => {
        setView('products'); // After transition, set the view to 'products'
      }, 500); // Match this timeout with the CSS transition duration
    } else if (targetView === 'landing') {
      setShowProductList(false); // Slide back down
      setTimeout(() => {
        setView('landing');
      }, 500);
    } else {
      setView(targetView);
    }
  };

  const handleGetStartedClick = () => {
    handleNavigation('products');
  };

  return (
    <div className="app-container">
      {/* Landing Page */}
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button
              className="get-started-button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>

      {/* Product List */}
      <div
        className={`product-list-container ${showProductList ? 'visible' : ''
          }`}
      >
        {view === 'products' && (
          <ProductList onNavigate={handleNavigation} />
        )}
      </div>

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
