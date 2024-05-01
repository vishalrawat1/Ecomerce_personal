import React, { useState } from 'react';
import axios from 'axios';

const Additems = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const formData = new FormData(); 
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image);

    axios.post('http://localhost:5000/additems', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Product Name </label>
          <input
            type='text'
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Description </label>
          <textarea
            className='form-control'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Price </label>
          <input
            type='number'
            className='form-control'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='INR'
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Category </label>
          <input
            type='text'
            className='form-control'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Upload Image </label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Additems;
