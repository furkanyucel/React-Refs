import React, { useRef } from 'react';

import "./ChangeDivColor.css"

const ChangeDivColor = () => {
  const divRef = useRef(null);

  const changeColor = () => {
    divRef.current.style.backgroundColor = 'lightblue';
  };

  return (
    <div>
      <div ref={divRef} className="changeColor">
        <h1>Renk Değişecek</h1>
      </div>
      <button onClick={changeColor}>Rengi Değiştir</button>
    </div>
  );
};

export default ChangeDivColor;