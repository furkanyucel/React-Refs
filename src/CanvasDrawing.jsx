import React, { useRef, useEffect } from 'react';

const CanvasDrawing = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Basit bir kare çizelim
    context.fillStyle = 'blue';
    context.fillRect(50, 50, 100, 100);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      style={{ border: '1px solid black' }}
    />
  );
};

export default CanvasDrawing;
