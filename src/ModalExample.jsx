import React, { useRef } from 'react';

const ModalExample = () => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.style.display = 'block';
  };

  const closeModal = () => {
    modalRef.current.style.display = 'none';
  };

  return (
    <div>
      <button onClick={openModal}>Modalı Aç</button>
      <div
        ref={modalRef}
        style={{
          display: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'gray',
            padding: '20px',
            borderRadius: '4px',
          }}
        >
          <h2>Modal Başlığı</h2>
          <p>Bu bir modal penceresidir.</p>
          <button onClick={closeModal}>Kapat</button>
        </div>
      </div>
    </div>
  );
};

export default ModalExample;
