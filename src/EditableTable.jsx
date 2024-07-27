import React, { useRef, useState } from 'react';

const EditableTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
  ]);

  const nameRef = useRef([]);
  const ageRef = useRef([]);

  const handleSave = (index) => {
    const newData = [...data];
    newData[index].name = nameRef.current[index].innerText;
    newData[index].age = ageRef.current[index].innerText;
    setData(newData);
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>İsim</th>
          <th>Yaş</th>
          <th>İşlem</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id}>
            <td
              contentEditable
              ref={(el) => (nameRef.current[index] = el)}
            >
              {row.name}
            </td>
            <td
              contentEditable
              ref={(el) => (ageRef.current[index] = el)}
            >
              {row.age}
            </td>
            <td>
              <button onClick={() => handleSave(index)}>Kaydet</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditableTable;