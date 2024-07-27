import React, { useRef, useState } from 'react';

const FileUpload = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = () => {
    setFileName(fileInputRef.current.files[0]?.name || '');
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button onClick={() => fileInputRef.current.click()}>Dosya Seç</button>
      {fileName && <p>Seçilen Dosya: {fileName}</p>}
    </div>
  );
};

export default FileUpload;
