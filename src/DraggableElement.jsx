import React, { useRef } from 'react';

const DraggableElement = () => {
  const dragItem = useRef();
  const container = useRef();

  const handleMouseDown = (e) => {
    dragItem.current = e.target;
    container.current.addEventListener('mousemove', handleMouseMove);
    container.current.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const rect = container.current.getBoundingClientRect();
    dragItem.current.style.left = `${
      e.clientX - rect.left - dragItem.current.offsetWidth / 2
    }px`;
    dragItem.current.style.top = `${
      e.clientY - rect.top - dragItem.current.offsetHeight / 2
    }px`;
  };

  const handleMouseUp = () => {
    container.current.removeEventListener('mousemove', handleMouseMove);
    container.current.removeEventListener('mouseup', handleMouseUp);
    dragItem.current = null;
  };

  return (
    <div
      ref={container}
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
        border: '1px solid black',
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'lightblue',
          position: 'absolute',
          cursor: 'pointer',
        }}
      >
        Sürükle Beni
      </div>
    </div>
  );
};

export default DraggableElement;
