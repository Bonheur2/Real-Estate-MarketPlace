import { useState } from "react";
import "./Home.css";

const listings = [
  {
    id: 1,
    title: "Luxury Apartment",
    description: "Spacious apartment in the city center.",
    price: 1500,
    location: "New York, NY",
    image: "/apartment1.jpg",
  },
  {
    id: 2,
    title: "Cozy Cottage",
    description: "A small but comfortable cottage in the countryside.",
    price: 900,
    location: "Austin, TX",
    image: "/cottage.jpg",
  },
  {
    id: 3,
    title: "Modern Loft",
    description: "A stylish loft with all modern amenities.",
    price: 2000,
    location: "San Francisco, CA",
    image: "/loft.jpg",
  },
  {
    id: 4,
    title: "Beachfront Villa",
    description: "A stunning villa with a view of the ocean.",
    price: 5000,
    location: "Miami, FL",
    image: "/villa.jpg",
  },
];

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search listings..."
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Listings Grid */}
      <div className="listing-grid">
        {filteredListings.map((listing) => (
          <div className="card" key={listing.id}>
            <div className="card-header">
              <h2 className="card-title">{listing.title}</h2>
            </div>
            <div className="card-content">
              <p className="description">{listing.description}</p>
              <p className="price">Price: ${listing.price}</p>
              <p className="location">Location: {listing.location}</p>
              <div className="image-container">
                <img src={listing.image} alt={listing.title} className="image" />
              </div>
              <button className="inquire-button">Inquire</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
