import "./OpenHouses.css";

const listings = [
  {
    title: "Elegant studio flat",
    location: "Los Angeles, California 91604",
    beds: 4,
    baths: 2,
    sqft: 1150,
    garage: 2,
    price: "$8,600",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    title: "Elegant studio flat",
    location: "Los Angeles, California 91604",
    beds: 4,
    baths: 2,
    sqft: 1150,
    garage: 2,
    price: "$8,600",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Elegant studio flat",
    location: "Los Angeles, California 91604",
    beds: 4,
    baths: 2,
    sqft: 1150,
    garage: 2,
    price: "$8,600",
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
  },
  {
    title: "Elegant studio flat",
    location: "Los Angeles, California 91604",
    beds: 4,
    baths: 2,
    sqft: 1150,
    garage: 2,
    price: "$8,600",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227",
  },
];

export default function OpenHouses() {
  return (
    <section className="open-houses">
      <h2>Open Houses Listings</h2>
      <p className="open-subtitle">
        Thousands of luxury home enthusiasts just like you visit our website.
      </p>

      <div className="open-grid">
        {listings.map((item, index) => (
          <div className="open-card" key={index}>
            {/* IMAGE */}
            <div className="open-image">
              <span className="tag">For Sale</span>
              <img src={item.image} alt={item.title} />
            </div>

            {/* CONTENT */}
            <div className="open-content">
              <h4>{item.title}</h4>
              <p className="location">📍 {item.location}</p>

              <div className="features">
                <span>🛏 {item.beds} Beds</span>
                <span>🛁 {item.baths} Baths</span>
                <span>📐 {item.sqft} Sqft</span>
                <span>🚗 {item.garage} Garage</span>
              </div>

              <div className="open-footer">
                <span className="price">{item.price}</span>
                <button className="details-btn">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
