import React, { useRef } from 'react';

const ChildComponent = React.forwardRef((props, ref) => (
  <input type="text" ref={ref} placeholder="Child Input" />
));

const ParentComponent = () => {
  const childInputRef = useRef(null);

  const focusChildInput = () => {
    childInputRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={childInputRef} />
      <button onClick={focusChildInput}>Çocuğa Odaklan</button>
    </div>
  );
};

export default ParentComponent;
