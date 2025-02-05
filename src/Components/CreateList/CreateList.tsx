import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateList.css';

export function CreateList() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the form data to a server.

    // Navigate back to home after submitting
    navigate('/');
  };

  return (
    <div className="create-list">
      <h2>Create a New Listing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Price</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <div>
          <label>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
