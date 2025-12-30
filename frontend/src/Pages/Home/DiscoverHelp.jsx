import { useState } from "react";
import "./DiscoverHelp.css";

const data = {
  Buying: [
    {
      title: "Find out how much you can afford",
      desc: "We’ll help you estimate your budget range. Save to your buyer profile to help in your search.",
      icon: "fa-magnifying-glass",
    },
    {
      title: "Understand your monthly costs",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin ipsum eu massa.",
      icon: "fa-dollar-sign",
    },
    {
      title: "Get help with your down payment",
      desc: "In fermentum dignissim mauris et blandit. Fusce efficitur libero sit amet.",
      icon: "fa-arrow-trend-up",
    },
  ],
};

export default function DiscoverHelp() {
  const [activeTab, setActiveTab] = useState("Buying");

  return (
    <section className="discover-section">
      <h2>Discover how we can help</h2>
      <p className="subtitle">
        Thousands of luxury home enthusiasts just like you visit our website.
      </p>

      {/* Tabs */}
      <div className="tabs">
        {["Buying", "Rating", "Selling"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="help-grid">
        {data.Buying.map((item, i) => (
          <div className="help-card" key={i}>
            <div className="help-icon">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>

            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <button className="learn-btn">Learn More</button>
          </div>
        ))}
      </div>

      <p className="footer-text">
        Looking to spotlight a unique property with expert marketing?{" "}
        <span>Let’s chat</span>
      </p>
    </section>
  );
}
