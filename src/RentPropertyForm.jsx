// RentPropertyForm.jsx
import React, { useState } from 'react';
import './App.css';
import ImageUploadBox from './UploadImage';

const buttonOptions = {
  Type: ['Flat/Apartments', 'Independent/ Builder Floors', 'House & Villa', 'Farm House'],
  Bhk: ['1 ', '2 ', '3 ','4', '4+'],
  Bathrooms: ['1', '2', '3', '4', '4+'],
  Furnishing: ['Furnished', 'Semi-Furnished', 'Unfurnished'],
  listedBy: ['Owner', 'Dealer','Builder'],
};

export default function RentPropertyForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleOptionClick = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="form-container">
      <h2 className="section-heading" style={{padding:'20px'}}>SELECTED CATEGORY</h2>
      <div style={{ borderBottom: '2px solid gray', width: '100%', marginTop:'10px'}}></div>
      <div className="form-grid" style={{padding:'20px'}}>
        {Object.keys(buttonOptions).map((field) => (
          <div key={field} className="button-group">
            <p className="button-label">{field.replace(/([A-Z])/g, ' $1')}</p>
            <div className="button-options">
              {buttonOptions[field].map((option) => (
                <button
                  type="button"
                  key={option}
                  className={`option-button ${formData[field] === option ? 'selected' : ''}`}
                  onClick={() => handleOptionClick(field, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className='info'>
        <p>Super Area sqft</p>
        <input name="superArea" placeholder="" onChange={handleChange} className="input" />
        <p>Carpet Area sqft</p>
        <input name="carpetArea" placeholder="" onChange={handleChange} className="input" />

        <label className="checkbox">
          <input type="checkbox" name="bachelorAllowed" onChange={handleChange} />
          Bachelor Allowed
        </label>
        <p>Maintenance (Monthly)</p>
        <input name="maintenance" placeholder="" onChange={handleChange} className="input" />
        <p>Total Floors</p>
        <input name="totalFloors" placeholder=" " onChange={handleChange} className="input" />
        <p>Floor No</p>
        <input name="floorNo" placeholder="" onChange={handleChange} className="input" />
        <p>Facing</p>
        <input name="facing" placeholder="" onChange={handleChange} className="input" />
        <p>Project Name</p>
        <input name="projectName" placeholder="" onChange={handleChange} className="input" />
        <p>Ad Title</p>
        <input name="title" placeholder="" onChange={handleChange} className="input" />
        <p>Description</p>
        <textarea name="description" placeholder="" onChange={handleChange} className="input" />
        <p>Price</p>
        <input name="price" placeholder="" onChange={handleChange} className="input" />
      </div>
      </div>
      <div style={{ borderBottom: '2px solid gray', width: '100%', marginTop:'10px'}}></div>


      <div className="photo-upload-section" style={{padding:'20px'}}>
        <h3>Upload Photos (Max 20)</h3>
          {/* {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="photo-block">
              <ImageUploadBox/>
            </div>
          ))} */}
          <ImageUploadBox/>
      </div>

      <div style={{ borderBottom: '2px solid gray', width: '100%', marginTop:'10px'}}></div>


      <div className="location-section" style={{padding:'20px'}}>
        <h3>CONFIRM YOUR LOCATION</h3>
        <p>State*</p>
        <input name="state" placeholder="" onChange={handleChange} className="input-full" />
      </div>

      <div style={{ borderBottom: '2px solid gray', width: '100%', marginTop:'10px'}}></div>

      <div className="review-section" style={{padding:'20px'}}>
        <h3>REVIEW YOUR DETAILS</h3>
        <div className="review-details">
          <img src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png" alt="Gmail" className="avatar" />
          <div style={{display:'flex', flexDirection:'column',width:'100%', margin:'auto auto 5px 10px'}}>
          <p>Name</p>
          <input name="name" placeholder="" onChange={handleChange} className="input-full" />
          </div>
        </div>
        <p>Phone Number*</p>
        <input name="phone" placeholder="" onChange={handleChange} className="input-full" />
      </div>

      <button className="submit-button" style={{marginLeft:'20px', marginRight:'20px', marginBottom:'20px'}}>Submit</button>
    </div>
  );
}
