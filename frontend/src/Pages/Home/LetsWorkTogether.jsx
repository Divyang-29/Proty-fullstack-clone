import "./LetsWorkTogether.css";

const logos = [
  "https://dummyimage.com/160x60/2c2f36/ffffff&text=Real+Estate",
  "https://dummyimage.com/160x60/2c2f36/ffffff&text=Real+Estate",
  "https://dummyimage.com/160x60/2c2f36/ffffff&text=Your+Tagline",
  "https://dummyimage.com/160x60/2c2f36/ffffff&text=Alpha+House",
  "https://dummyimage.com/160x60/2c2f36/ffffff&text=Imperial",
  "https://dummyimage.com/160x60/2c2f36/ffffff&text=Real+Estate",
];

export default function LetsWorkTogether() {
  return (
    <section className="work-section">
      {/* TOP DARK AREA */}
      <div className="work-top">
        <h2>Let’s Work Together</h2>
        <p>
          Thousands of luxury home enthusiasts just like you visit our website.
        </p>

        <div className="logo-row">
          {logos.map((logo, i) => (
            <div className="logo-box" key={i}>
              <img src={logo} alt="partner logo" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA CARD */}
      <div className="cta-wrapper">
        <div className="cta-card">
          <div className="cta-content">
            <h3>
              Are You Selling Or <br />
              Renting Your Property?
            </h3>
            <p>
              Thousands of luxury home enthusiasts just like you visit our
              website.
            </p>

            <button>Request your free appraisal</button>
          </div>

          <div className="cta-image">
            <img
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
              alt="Agent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
