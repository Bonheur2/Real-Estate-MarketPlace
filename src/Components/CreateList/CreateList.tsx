import { useState } from "react";
import "./CreateList.css";

interface CreateListProps {
  onAddListing: (newListing: any) => void;
}

export function CreateList({ onAddListing }: CreateListProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newListing = {
      id: Date.now(),
      title,
      description,
      price: Number(price),
      location,
      image,
    };

    onAddListing(newListing);
    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
    setImage("");
  };

  return (
    <div className="create-list-container">
      <h2>Create a New Listing</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
}
