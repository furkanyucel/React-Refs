import React, { useRef } from 'react';

const ZoomEffect = () => {
  const imageRef = useRef(null);

  const handleMouseOver = () => {
    imageRef.current.style.transform = 'scale(1.2)';
  };

  const handleMouseOut = () => {
    imageRef.current.style.transform = 'scale(1)';
  };

  return (
    <div>
      <img
        ref={imageRef}
        src="https://www.w3schools.com/w3images/lights.jpg"
        alt="Zoom"
        width="300"
        style={{ transition: 'transform 0.2s' }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
};

export default ZoomEffect;
