import "./ExploreNeighborhoods.css";

const neighborhoods = [
  {
    city: "New York",
    properties: "2,491 Properties",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401",
  },
  {
    city: "New York",
    properties: "2,491 Properties",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  },
  {
    city: "New York",
    properties: "2,491 Properties",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  },
  {
    city: "New York",
    properties: "2,491 Properties",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
  },
  {
    city: "New York",
    properties: "2,491 Properties",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    city: "New York",
    properties: "2,491 Properties",
    image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
  },
  {
    city: "New York",
    properties: "2,491 Properties",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
  },
];

export default function ExploreNeighborhoods() {
  return (
    <section className="neighborhoods">
      <h2>Explore The Neighborhoods</h2>
      <p className="subtitle">
        Find your dream apartment with our listing
      </p>

      <div className="neighborhood-grid">
        {neighborhoods.map((item, index) => (
          <div className="neighborhood-card" key={index}>
            <img src={item.image} alt={item.city} />

            <div className="overlay">
              <h4>{item.city}</h4>
              <span className="pill">
                {item.properties} →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
