import { useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const [openFilter, setOpenFilter] = useState(false);

  // 🔹 PRICE STATE
  const [price, setPrice] = useState(100);
  const [size, setSize] = useState(0);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Search Luxury Homes</h1>
        <p>
          Thousands of luxury home enthusiasts just like you visit our website.
        </p>

        {/* SEARCH BAR */}
        <div className="hero-search">
          <select>
            <option>For sale</option>
            <option>For rent</option>
          </select>

          <input placeholder="Place, neighborhood, school or agent..." />

          <button
            className="filter-btn"
            onClick={() => setOpenFilter(!openFilter)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6H20M7 12H17M10 18H14"
                stroke="#FF8C2B"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button className="search-btn">Search 🔍</button>
        </div>

        {/* FILTER DROPDOWN */}
        {openFilter && (
          <div className="filter-panel">
            {/* PRICE & SIZE */}
            <div className="filter-row">
              <div>
                <p>
                  Price range from <b>$100</b> to <b>${price.toLocaleString()}</b>
                </p>
                <input
                  type="range"
                  min="100"
                  max="500000"
                  step="100"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div>
                <p>
                  Size range from <b>0</b> to <b>{size}</b>
                </p>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>
            </div>

            {/* DROPDOWNS */}
            <div className="filter-grid">
              <select><option>Province / States</option></select>
              <select><option>Rooms</option></select>
              <select><option>Bath: Any</option></select>
              <select><option>Beds: Any</option></select>
            </div>

            {/* AMENITIES */}
            <div className="amenities">
              <h4>Amenities:</h4>
              <div className="amenities-grid">
                {[
                  "Bed linens","Carbon alarm","Check-in lockbox","Coffee maker",
                  "Dishwasher","Fireplace","Extra pillows","First aid kit",
                  "Hangers","Iron","Microwave","Refrigerator",
                  "Security cameras","Smoke alarm",
                ].map((item) => (
                  <label key={item}>
                    <input type="checkbox" /> {item}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
