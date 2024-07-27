import React, { useRef } from 'react';

const ScrollToItem = () => {
  const itemRef = useRef(null);

  const scrollToItem = () => {
    itemRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={scrollToItem}>5. Öğeye Git</button>
      <ul style={{ height: '200px', overflowY: 'scroll', border: '1px solid black' }}>
        {[...Array(20).keys()].map((i) => (
          <li
            key={i}
            ref={i === 4 ? itemRef : null}
            style={{ padding: '10px', borderBottom: '1px solid gray' }}
          >
            {i + 1}. Öğe
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollToItem;