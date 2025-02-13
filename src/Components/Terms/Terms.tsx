import "./Terms.css";

export function Terms() {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>Welcome to our platform! Please read these terms and conditions carefully before using our services.</p>

      <div className="terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using our services, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using our platform.</p>
      </div>

      <div className="terms-section">
        <h2>2. User Responsibilities</h2>
        <ul>
          <li>You must provide accurate information when creating an account.</li>
          <li>Do not use the platform for any illegal activities.</li>
          <li>Respect other users and follow community guidelines.</li>
        </ul>
      </div>

      <div className="terms-section">
        <h2>3. Privacy Policy</h2>
        <p>Your personal data is handled according to our Privacy Policy. We do not sell or misuse your data.</p>
      </div>

      <div className="terms-section">
        <h2>4. Limitation of Liability</h2>
        <p>We are not responsible for any damages resulting from the use of our platform. Use at your own risk.</p>
      </div>

      <div className="terms-section">
        <h2>5. Changes to Terms</h2>
        <p>We reserve the right to update these terms at any time. Users will be notified of significant changes.</p>
      </div>

      <p className="terms-footer">If you have any questions, please contact us at support@example.com.</p>
    </div>
  );
}
