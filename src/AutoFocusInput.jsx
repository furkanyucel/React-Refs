import React, { useRef, useEffect } from 'react';

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Odaklanılmış input" />
    </div>
  );
};

export default AutoFocusInput;