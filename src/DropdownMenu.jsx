import React, { useRef, useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <button onClick={toggleDropdown}>Menüyü Aç</button>
      {isOpen && (
        <ul
          style={{
            border: '1px solid black',
            padding: '10px',
            listStyle: 'none',
          }}
        >
          <li>Seçenek 1</li>
          <li>Seçenek 2</li>
          <li>Seçenek 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
