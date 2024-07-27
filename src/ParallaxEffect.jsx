import React, { useRef, useEffect } from 'react';

const ParallaxEffect = () => {
  const parallaxRef = useRef(null);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    parallaxRef.current.style.backgroundPositionY = `${offset * 0.7}px`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={parallaxRef}
      style={{
        height: '500px',
        background:
          'url(https://www.w3schools.com/w3images/parallax1.jpg) no-repeat center center fixed',
        backgroundSize: 'cover',
      }}
    ></div>
  );
};

export default ParallaxEffect;
