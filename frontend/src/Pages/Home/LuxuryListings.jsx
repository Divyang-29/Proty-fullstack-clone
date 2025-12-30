import "./LuxuryListings.css";
import { useNavigate } from "react-router-dom";

const listings = [
  {
    id: 1,
    title: "Elegant studio flat",
    address: "102 Ingraham St, Brooklyn, NY 11237",
    beds: 3,
    baths: 3,
    sqft: "4,043",
    price: "$8,600",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: 2,
    title: "Elegant studio flat",
    address: "102 Ingraham St, Brooklyn, NY 11237",
    beds: 3,
    baths: 3,
    sqft: "4,043",
    price: "$8,600",
    image: "https://images.unsplash.com/photo-1560448075-bb485b067938",
  },
  {
    id: 3,
    title: "Elegant studio flat",
    address: "102 Ingraham St, Brooklyn, NY 11237",
    beds: 3,
    baths: 3,
    sqft: "4,043",
    price: "$8,600",
    image: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8",
  },
  {
    id: 4,
    title: "Elegant studio flat",
    address: "102 Ingraham St, Brooklyn, NY 11237",
    beds: 3,
    baths: 3,
    sqft: "4,043",
    price: "$8,600",
    image: "https://themesflat.co/html/proty/images/section/box-house-4.jpg",
  },
  {
    id: 5,
    title: "Elegant studio flat",
    address: "102 Ingraham St, Brooklyn, NY 11237",
    beds: 3,
    baths: 3,
    sqft: "4,043",
    price: "$8,600",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 6,
    title: "Elegant studio flat",
    address: "102 Ingraham St, Brooklyn, NY 11237",
    beds: 3,
    baths: 3,
    sqft: "4,043",
    price: "$8,600",
    image: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
  },
];

export default function LuxuryListings() {
  const navigate = useNavigate();
  return (
    <section className="luxury-section">
      <h2>Today’s Luxury Listings</h2>
      <p>
        Thousands of luxury home enthusiasts just like you visit our website.
      </p>

      <div className="listing-grid">
        {listings.map((item) => (
          <div className="listing-card" key={item.id}>
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
              <div className="badges">
                <span className="badge featured">Featured</span>
                <span className="badge sale">For Sale</span>
              </div>
            </div>

            <div className="listing-content">
              <h4>{item.title}</h4>
              <p className="address">
                <i className="fa-solid fa-location-dot"></i>
                {item.address}
              </p>

              <div className="features">
                <span>{item.beds} Beds</span>
                <span>{item.baths} Baths</span>
                <span>{item.sqft} Sqft</span>
              </div>

              <div className="card-footer">
                <span className="price">{item.price}</span>
                <span className="compare">
                  <i className="fa-solid fa-code-compare"></i> Compare
                </span>
                <button
                  className="details-btn"
                  onClick={() => navigate(`/property/${item.id}`)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
