import React, { useRef, useState } from 'react';

const SliderControl = () => {
  const sliderRef = useRef(null);
  const [value, setValue] = useState(50);

  const handleChange = () => {
    setValue(sliderRef.current.value);
  };

  return (
    <div>
      <input
        type="range"
        ref={sliderRef}
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
      />
      <p>Slider Değeri: {value}</p>
    </div>
  );
};

export default SliderControl;
