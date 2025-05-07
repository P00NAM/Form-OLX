import React, { useState } from 'react';

const OLXForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    price: '',
    images: [],
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, images: files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Ad Posted Successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow rounded space-y-6">
      <h2 className="text-2xl font-bold">Post Your Ad</h2>

      {/* Category */}
      <div>
        <label className="block font-semibold mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Cars">Cars</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      {/* Title */}
      <div>
        <label className="block font-semibold mb-1">Ad Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block font-semibold mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write something about your product"
          className="w-full p-2 border rounded"
          rows={4}
          required
        ></textarea>
      </div>

      {/* Price */}
      <div>
        <label className="block font-semibold mb-1">Price (₹)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Set a price"
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Upload Photos */}
      <div>
        <label className="block font-semibold mb-1">Upload Photos</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
        <div className="flex gap-3 mt-3 flex-wrap">
          {formData.images.map((img, i) => (
            <img
              key={i}
              src={URL.createObjectURL(img)}
              alt="preview"
              className="w-20 h-20 object-cover rounded border"
            />
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block font-semibold mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="City or Area"
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Submit Ad
        </button>
      </div>
    </form>
  );
};

export default OLXForm;
