import React, { useRef } from 'react';

const ShowInputValue = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    alert(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Bir şeyler yazın" />
      <button onClick={handleClick}>Değeri Göster</button>
    </div>
  );
};

export default ShowInputValue;