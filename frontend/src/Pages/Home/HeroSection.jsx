import { useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const [openFilter, setOpenFilter] = useState(false);
  const [province, setProvince] = useState("");
  const [rooms, setRooms] = useState("");

  // 🔹 BASIC FILTER STATES
  const [type, setType] = useState("sale");

  // Price: default max should allow data
  const [price, setPrice] = useState(15000);

  // 🔴 IMPORTANT FIX: size default MUST NOT be 0
  // null = user has not touched size filter
  const [size, setSize] = useState(null);

  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");

  // 🔹 AMENITIES
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  // 🔹 HANDLE AMENITIES CHECK
  const handleAmenityChange = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  // 🔹 SEARCH HANDLER (FRONTEND ➜ BACKEND)
  const handleSearch = async () => {
    const params = new URLSearchParams();

    // REQUIRED FILTERS
    params.append("type", type);
    params.append("minPrice", 100);
    params.append("maxPrice", price);

    // 🔴 ONLY SEND SIZE IF USER CHANGED IT
    if (size !== null && size > 0) {
      params.append("minSize", 0);
      params.append("maxSize", size);
    }

    if (beds) params.append("beds", beds);
    if (baths) params.append("baths", baths);

    if (selectedAmenities.length > 0) {
      params.append("amenities", selectedAmenities.join(","));
    }

    try {
      const res = await fetch(
        `http://localhost:8080/api/properties/search?${params.toString()}`
      );
      const data = await res.json();

      console.log("Filtered properties:", data);

      // 🔜 NEXT STEP: send this data to listing page
    } catch (error) {
      console.error("Search failed", error);
    }
  };

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
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="sale">For sale</option>
            <option value="rent">For rent</option>
          </select>

          <input placeholder="Place, neighborhood, school or agent..." />

          <button
            className="filter-btn"
            onClick={() => setOpenFilter(!openFilter)}
          >
            ☰
          </button>

          <button className="search-btn" onClick={handleSearch}>
            Search 🔍
          </button>
        </div>

        {/* FILTER DROPDOWN */}
        {openFilter && (
          <div className="filter-panel">
            {/* PRICE & SIZE */}
            <div className="filter-row">
              <div>
                <p>
                  Price range from <b>$100</b> to{" "}
                  <b>${price.toLocaleString()}</b>
                </p>
                <input
                  type="range"
                  min="100"
                  max="500000"
                  step="100"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>

              <div>
                <p>
                  Size range from <b>0</b> to{" "}
                  <b>{size === null ? "Any" : size}</b>
                </p>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={size ?? 0}
                  onChange={(e) => setSize(Number(e.target.value))}
                />
              </div>
            </div>

            {/* DROPDOWNS */}
            <div className="filter-grid">
              <select
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              >
                <option value="">Province / States</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
                <option value="Florida">Florida</option>
                <option value="Texas">Texas</option>
              </select>

              <select value={rooms} onChange={(e) => setRooms(e.target.value)}>
                <option value="">Rooms</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>

              <select value={baths} onChange={(e) => setBaths(e.target.value)}>
                <option value="">Bath: Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <select value={beds} onChange={(e) => setBeds(e.target.value)}>
                <option value="">Beds: Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            {/* AMENITIES */}
            <div className="amenities">
              <h4>Amenities:</h4>
              <div className="amenities-grid">
                {[
                  "Bed linens",
                  "Carbon alarm",
                  "Check-in lockbox",
                  "Coffee maker",
                  "Dishwasher",
                  "Fireplace",
                  "Extra pillows",
                  "First aid kit",
                  "Hangers",
                  "Iron",
                  "Microwave",
                  "Refrigerator",
                  "Security cameras",
                  "Smoke alarm",
                ].map((item) => (
                  <label key={item}>
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(item)}
                      onChange={() => handleAmenityChange(item)}
                    />
                    {item}
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
