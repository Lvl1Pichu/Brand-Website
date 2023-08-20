import React from 'react';
import './ProductCards.css';
import ToteBag from '../assets/ToteBag.png';
import TuningForkKeyboard from '../assets/Tuningforkkeyboard.png';
import MousePadFork from '../assets/MousePadFork.png';

const images = [ToteBag, TuningForkKeyboard, MousePadFork, ToteBag]; // Reusing ToteBag image

const ProductCards: React.FC = () => {
  return (
    <div className="product-cards-container">
      {images.map((image, index) => (
        <div className="product-card" key={index}>
          <img src={image} alt={`Product ${index + 1}`} />
          <div className="buy-circle">
            <p>Buy</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
