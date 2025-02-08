import "./Navbar.css";

interface NavbarProps {
  onCreateListClick: () => void;
}

export default function Navbar({ onCreateListClick }: NavbarProps) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">Real Estate Marketplace</h1>
        <nav>
          <button className="button" onClick={onCreateListClick}>
            Create Listing
          </button>
        </nav>
      </div>
    </header>
  );
}
