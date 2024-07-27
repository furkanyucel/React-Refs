import React, { useRef, useState } from 'react';

const ScrollPosition = () => {
  const divRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    setScrollTop(divRef.current.scrollTop);
  };

  return (
    <div>
      <div
        ref={divRef}
        onScroll={handleScroll}
        style={{ width: '200px', height: '200px', overflowY: 'scroll', border: '1px solid black' }}
      >
        <div style={{ height: '500px' }}>
          İçerik...
        </div>
      </div>
      <p>Scroll Pozisyonu: {scrollTop}</p>
    </div>
  );
};

export default ScrollPosition;