import { useState } from "react";
import { CreateList } from "../CreateList/CreateList";
import { ListingCard } from "../CreateList/ListingCard";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const initialListings = [
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
  const [listings, setListings] = useState(initialListings);
  const [showCreateList, setShowCreateList] = useState(false);

  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addListing = (newListing: any) => {
    setListings([...listings, newListing]);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar onCreateListClick={() => setShowCreateList(!showCreateList)} />

      <div className="container">

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search listings..."
            className="input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Create Listing Form (Visible when button is clicked) */}
        {showCreateList && <CreateList onAddListing={addListing} />}

        {/* Listings Grid */}
        <div className="listing-grid">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </>
  );
}
