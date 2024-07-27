import React, { useRef } from 'react';

const FormValidation = () => {
  const inputRef = useRef(null);
  const errorRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value === '') {
      errorRef.current.textContent = 'Bu alan boş bırakılamaz';
    } else {
      errorRef.current.textContent = '';
      alert('Form başarıyla gönderildi');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={inputRef} placeholder="Adınızı girin" />
        <span ref={errorRef} style={{ color: 'red', marginLeft: '10px' }}></span>
      </div>
      <button type="submit">Gönder</button>
    </form>
  );
};

export default FormValidation;