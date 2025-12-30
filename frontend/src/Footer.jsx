import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP BAR */}
      <div className="footer-top">
        <div className="footer-brand">
          <img
            src="https://themesflat.co/html/proty/images/logo/logo-2@2x.png"
            alt="Proty"
          />
        </div>

        <div className="footer-contact">
          <div className="contact-item">
            <span className="icon">📞</span>
            <div>
              <small>Call us</small>
              <p>(603) 555-0123</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon">✉️</span>
            <div>
              <small>Need live help</small>
              <p>proty-support@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="footer-grid">
        <div>
          <h4>About us</h4>
          <ul>
            <li>Contact</li>
            <li>Why choose us?</li>
            <li>Customer reviews</li>
            <li>Our team</li>
            <li>Careers with realty</li>
            <li>Work with us</li>
          </ul>
        </div>

        <div>
          <h4>Popular house</h4>
          <ul>
            <li>#Penthouses</li>
            <li>#Villa</li>
            <li>#Smart home</li>
            <li>#Apartments</li>
            <li>#Office</li>
            <li>#Bungalow</li>
          </ul>
        </div>

        <div>
          <h4>Quick links</h4>
          <ul>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Our services</li>
            <li>Contact support</li>
            <li>Pricing plans</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="newsletter">
          <h4>Newsletter</h4>
          <p>Sign up to receive the latest articles</p>

          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>

          <label className="checkbox">
            <input type="checkbox" />
            <span>I have read and agree to the terms & conditions</span>
          </label>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          Copyright © 2024 <strong>PROTY - REAL ESTATE</strong>. Designed &
          Developed by Themesflat
        </p>

        <div className="socials">
          <span>Follow us</span>
          <div className="icons">
            <i>f</i>
            <i>X</i>
            <i>in</i>
            <i>◎</i>
          </div>
        </div>
      </div>
    </footer>
  );
}
