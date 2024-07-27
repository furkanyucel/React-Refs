import React, { useRef, useState } from 'react';

const Tooltip = () => {
  const tooltipRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const showTooltip = () => {
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        Tooltip Göster
      </button>
      {visible && (
        <div
          ref={tooltipRef}
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'black',
            color: 'white',
            padding: '5px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
          }}
        >
          Bu bir tooltip!
        </div>
      )}
    </div>
  );
};

export default Tooltip;
