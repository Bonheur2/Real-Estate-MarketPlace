import "./About.css";

export function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to our platform! We connect buyers and sellers with the best listings available.</p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>To make property searching simple, fast, and effective for everyone.</p>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Verified Listings</li>
          <li>Easy-to-use Platform</li>
          <li>Fast & Secure Transactions</li>
        </ul>
      </div>
    </div>
  );
}
