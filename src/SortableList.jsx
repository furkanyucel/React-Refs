import React, { useRef, useState } from 'react';

const SortableList = () => {
  const [items, setItems] = useState(['Öğe 1', 'Öğe 2', 'Öğe 3', 'Öğe 4']);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (position) => {
    dragItem.current = position;
  };

  const handleDragEnter = (position) => {
    dragOverItem.current = position;
    const newList = [...items];
    const draggedItemContent = newList[dragItem.current];
    newList.splice(dragItem.current, 1);
    newList.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setItems(newList);
  };

  const handleDragEnd = () => {
    dragItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragEnd={handleDragEnd}
          style={{
            padding: '8px',
            margin: '4px',
            border: '1px solid gray',
            cursor: 'move',
            backgroundColor: '#222',
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default SortableList;
