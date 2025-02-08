import "./ListingCard.css";

interface Listing {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
}

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="card">
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
  );
}
