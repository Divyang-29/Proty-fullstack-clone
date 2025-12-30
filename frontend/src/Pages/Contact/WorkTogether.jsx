import "./workTogether.css";

export default function WorkTogether() {
  return (
    <>
      {/* TOP INFO SECTION */}
      <section className="info-section">
        <div className="info-left">
          <h2>
            We provide the most suitable <br />
            and quality real estate.
          </h2>

          <p>
            Estimate your payment with our easy-to-use loan calculator.
            Then get pre-qualified to buy by a local lender.
          </p>

          <ul className="contact-list">
            <li>
              📍 <span>102 Ingraham St, Brooklyn, NY 11237</span>
            </li>
            <li className="phone">
              📞 <span>(603) 555-0123</span>
            </li>
            <li>
              ✉️ <span>themesflat@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="info-right">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Interior"
          />
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners">
        <h3>Let’s Work Together</h3>
        <p>
          Thousands of luxury home enthusiasts just like you visit our website.
        </p>

        <div className="logo-grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <img
              key={i}
              src="https://dummyimage.com/120x50/cccccc/999999&text=LOGO"
              alt="logo"
            />
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="cta-content">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Agent"
          />

          <div>
            <h4>Find a Local Real Estate Agent Today</h4>
            <p>
              If you're looking to buy or sell a home. We'll help you make the
              most money possible.
            </p>
          </div>
        </div>

        <button className="cta-btn">
          Find your location agent 🔍
        </button>
      </section>
    </>
  );
}
