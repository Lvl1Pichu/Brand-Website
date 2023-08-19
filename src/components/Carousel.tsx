import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type CarouselProps = {
  images: string[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const previousSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIdx === 0;
    const index = shouldResetIndex ? lastIndex : currentIdx - 1;

    setCurrentIdx(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIdx === lastIndex;
    const index = shouldResetIndex ? 0 : currentIdx + 1;

    setCurrentIdx(index);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden', marginTop: "2em" }}>

      <FaArrowLeft
        style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
        onClick={previousSlide}
      />
      {images.map((image, idx) => (
        <div
          key={idx}
          style={{
            transform: `translateX(-${currentIdx * 100}%)`,
            transition: 'transform 0.5s ease-out',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

        </div>
      ))}
      <FaArrowRight
        style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
        onClick={nextSlide}
      />
    </div>
  );
};

export default Carousel;
