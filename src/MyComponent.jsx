import { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(null);

  function handleClick() {
    myRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={handleClick}>Odakla</button>
    </div>
  );
}

export default MyComponent;
