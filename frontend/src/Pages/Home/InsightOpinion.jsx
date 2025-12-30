import "./InsightOpinion.css";

const blogs = [
  {
    category: "Real estate",
    date: "26 August, 2024",
    title: "Building gains into housing stocks and how to trade the...",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    category: "News",
    date: "26 August, 2024",
    title: "Building gains into housing stocks and how to trade the...",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    category: "Real estate",
    date: "26 August, 2024",
    title: "Building gains into housing stocks and how to trade the...",
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
  },
];

export default function InsightOpinion() {
  return (
    <section className="insight-section">
      <h2>Insight & Opinion</h2>
      <p className="insight-subtitle">
        Thousands of luxury home enthusiasts just like you visit our website.
      </p>

      <div className="insight-grid">
        {blogs.map((item, index) => (
          <div className="insight-card" key={index}>
            {/* IMAGE */}
            <div className="insight-image">
              <span className="badge">{item.category}</span>
              <img src={item.image} alt={item.title} />
            </div>

            {/* CONTENT */}
            <div className="insight-content">
              <div className="date">
                ⏱ {item.date}
              </div>

              <h4>{item.title}</h4>

              <button className="read-more">
                Read More <span>➜</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
