import React, { useRef, useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [count, setCount] = useState(10);
  const timerRef = useRef(null);

  useEffect(() => {
    if (count > 0) {
      timerRef.current = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [count]);

  return (
    <div>
      <h1>Geri Sayım: {count}</h1>
    </div>
  );
};

export default CountdownTimer;
