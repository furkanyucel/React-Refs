import React, { useRef, useState } from 'react';

const DynamicInputs = () => {
  const [inputs, setInputs] = useState([]);
  const inputRefs = useRef([]);

  const addInput = () => {
    setInputs((prev) => [...prev, `input-${prev.length}`]);
  };

  const getValues = () => {
    const values = inputRefs.current.map((input) => input.value);
    alert(JSON.stringify(values));
  };

  return (
    <div>
      <button onClick={addInput}>Input Ekle</button>
      {inputs.map((input, index) => (
        <input
          key={input}
          ref={(el) => (inputRefs.current[index] = el)}
          placeholder={`Input ${index + 1}`}
          style={{ display: 'block', margin: '5px 0' }}
        />
      ))}
      <button onClick={getValues}>Değerleri Göster</button>
    </div>
  );
};

export default DynamicInputs;
