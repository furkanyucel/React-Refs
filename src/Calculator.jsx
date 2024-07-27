import React, { useRef, useState } from 'react';

const Calculator = () => {
  const inputRef = useRef(null);
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    try {
      setResult(eval(inputRef.current.value));
    } catch (error) {
      setResult('Hata');
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Hesaplama girin" />
      <button onClick={handleCalculate}>Hesapla</button>
      <p>Sonuç: {result}</p>
    </div>
  );
};

export default Calculator;
