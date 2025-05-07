import React, { useRef, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import './App.css';

const TOTAL_SLOTS = 20;

export default function UploadImage() {
  const [images, setImages] = useState(Array(TOTAL_SLOTS).fill(null));
  const fileInputRef = useRef();

  const handleImageClick = (index) => {
    fileInputRef.current.dataset.index = index;
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const index = fileInputRef.current.dataset.index;
    const file = e.target.files[0];

    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
    }
  };

  return (
    <>
      <div className="grid-container">
        {images.map((img, index) => (
          <div
            className={`upload-tile ${index === 0 ? 'primary' : ''}`}
            key={index}
            onClick={() => handleImageClick(index)}
          >
            {img ? (
              <img src={img} alt="preview" />
            ) : (
              <>
                <FaCamera size={24} color={index === 0 ? '#000' : '#999'} />
                {index === 0 && <p>Add Photo</p>}
              </>
            )}
          </div>
        ))}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept="image/*"
      />
    </>
  );
}
