import React from 'react';
import teamworkImage from "../assets/Teamwork.jpg"; // Import the image
import "./ReverseSliderComponent.css"

const ReverseSliderComponent: React.FC = () => {
  return (
    <div style={{ display: 'flex', width: '100%', paddingTop: "1em" }}>
      <div style={{ flex: '30%', backgroundImage: `url(${teamworkImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: "544px", borderRadius: "3%" }}>
        {/* Content for the 30% width div */}
      </div>
      <div style={{ flex: '70%', backgroundColor: 'green', height: "544px", marginLeft: "15px", borderRadius: "3%", position: 'relative', overflow: 'hidden' }}>
        <div className="video-container">
          <video className="video-element" autoPlay muted playsInline loop preload="metadata">
            <source src="https://player.vimeo.com/progressive_redirect/playback/832225661/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1505220741&signature=f3d9fe4bf29d7658ed53ee94214c2c5c6ba0cfc06722b8a558a69cbe8f871794" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default ReverseSliderComponent;
