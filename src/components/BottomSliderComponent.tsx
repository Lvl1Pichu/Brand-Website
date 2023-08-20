import React from 'react';
import teamworkImage from '../assets/Teamwork.jpg'; // Import the image
import './BottomSliderComponent.css';

const BottomSliderComponent: React.FC = () => {
    return (
      <div className="bottom-slider-container">
        <div className="bottom-slider-image">
          <img src={teamworkImage} alt="Teamwork" />
        </div>
        <div className='bottom-slider-video-container'>
          <video className='bottom-slider-video'
            autoPlay 
            playsInline 
            loop
            muted
            preload="metadata"
          >
            <source src="https://player.vimeo.com/progressive_redirect/playback/832225661/rendition/1080p/file.mp4?loc=external&amp;oauth2_token_id=1505220741&amp;signature=f3d9fe4bf29d7658ed53ee94214c2c5c6ba0cfc06722b8a558a69cbe8f871794" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  };

export default BottomSliderComponent;
