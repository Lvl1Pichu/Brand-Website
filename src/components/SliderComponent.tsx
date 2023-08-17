import React from 'react';
import teamworkImage from "../assets/Teamwork.jpg"; // Import the image

const SliderComponent: React.FC = () => {
  return (
    <div style={{ display: 'flex', width: '100%', paddingTop: "6em" }}>
      <div style={{ flex: '70%', backgroundImage: `url(${teamworkImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: "544px", borderRadius: "3%" }}>
        {/* Content for the 70% width div */}
      </div>
      <div style={{ flex: '30%', backgroundColor: 'green', height: "544px", marginLeft: "15px", borderRadius: "3%" }}>
        {/* Content for the 30% width div */}
      </div>
    </div>
  );
};

export default SliderComponent;
