import React, { useRef, useState } from 'react';

const AutocompleteInput = () => {
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  const handleChange = () => {
    const value = inputRef.current.value.toLowerCase();
    const newSuggestions = [
      'apple',
      'banana',
      'orange',
      'grape',
      'pear',
      'ananas',
    ].filter((item) => item.startsWith(value));
    setSuggestions(newSuggestions);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        placeholder="Bir meyve yazın"
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutocompleteInput;
