import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './SliderComponent.css';
import TuningKeyboard from '../assets/Tuningforkkeyboard.png';

const SliderComponent: React.FC = () => {
  return (
    <div className="slider-container">
      <div className="slider-left" style={{ backgroundImage: `url(${TuningKeyboard})` }}>
        {/* Content for the image section */}
      </div>
      <div className="slider-right">
        <h2>COMMUNITY</h2>
        <ul>
          <h6>Latest discussions</h6>
          {['I want Resonant to win Champs', 'Photos of my resonant tote', 'BOASTER WHEN WILL YOU ACE!', 'Lower Bracket Kings', 'Road to worlds', 'Is there any hope to get to finals?', 'When is your next game?'].map((item, index) => (
            <li key={index}>
              {item}
              <span className="like-counter">
                <FontAwesomeIcon icon={faHeart} />
                <span className="like-number">{Math.floor(Math.random() * 100)}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SliderComponent;
